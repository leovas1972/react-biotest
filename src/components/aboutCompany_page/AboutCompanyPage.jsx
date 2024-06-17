import {Link} from 'react-router-dom'
import { useTranslation } from 'react-i18next';
import './style.css';
import img1 from './../../img/aboutCompany/Risynok1.jpg'
import img3 from './../../img/aboutCompany/Risynok3.jpg'
import img2 from './../../img/aboutCompany/Risynok2.jpg'

const AboutCompanyPage = () => {

    const { t } = useTranslation();
    return (<main className='main' style={{ minHeight: 'calc(100vh - 134px - 124px)' }}>
        <div className='container'>
            <h1 className="title-1">{t('aboutcompany-page.title-one')}</h1>
            <div className='about-company'>
                <div>
                    <p><strong>{t('aboutcompany-page.p-strong')}</strong>{t('aboutcompany-page.p-1')}</p>
                    <p>{t('aboutcompany-page.p-2')}</p>
                    <p>{t('aboutcompany-page.p-3')}</p>
                    <p>{t('aboutcompany-page.p-a1')}<Link to='our_partners'>{t('aboutcompany-page.p-a2')}</Link>{' '}{t('aboutcompany-page.p-a3')}<Link to='!#'>{t('aboutcompany-page.p-a4')}</Link></p>
                </div>
                <img src={img1} alt='table'/>
            </div>
            <h3>{t('aboutcompany-page.h3-1')}</h3>
            <div className='about-company'>
                <div>
                    <p>{t('aboutcompany-page.p-4')}</p>
                </div>
                <img src={img3} alt='bsgk'/>
            </div>
            <h3>{t('aboutcompany-page.h3-2')}</h3>
            <div className='about-company'>
                <div>
                    <p>{t('aboutcompany-page.p-5')}</p>
                </div>
                <img src={img2} alt='girl'/>
            </div>
            <h1 className='title-1'>{t('aboutcompany-page.title-two')}</h1>
            <div style={{textAlign:'center', backgroundColor:'green'}}>Shema</div>
            <h3>{t('aboutcompany-page.h3-3')}</h3>
            <ul>
                <li>{t('aboutcompany-page.li-1')}</li>
                <li>{t('aboutcompany-page.li-2')}</li>
            </ul>
            <h3>{t('aboutcompany-page.h3-4')}</h3>
            <ul>
                <li>{t('aboutcompany-page.li-3')}</li>
                <li>{t('aboutcompany-page.li-4')}</li>
            </ul>
            <h3>{t('aboutcompany-page.h3-5')}</h3>
            <ul>
                <li>{t('aboutcompany-page.li-5')}</li>
                <li>{t('aboutcompany-page.li-6')}</li>
            </ul>
            <h3>{t('aboutcompany-page.h3-6')}</h3>
            <ul>
                <li>{t('aboutcompany-page.li-7')}</li>
            </ul>
            <h3>{t('aboutcompany-page.h3-7')}</h3>
            <h3>{t('aboutcompany-page.h3-8')}</h3>
            <ul>
                <li>{t('aboutcompany-page.li-8')}</li>
                <li>{t('aboutcompany-page.li-9')}</li>
            </ul>
        </div>
    </main>)
}

export default AboutCompanyPage;