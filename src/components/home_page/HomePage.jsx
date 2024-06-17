import { useTranslation } from 'react-i18next';
import homeBg from './../../img/home_bg.jpeg';
import './style.css';

const HomePage = () => {
    const { t } = useTranslation();

    return (<main className='main' style={{ minHeight: 'calc(100vh - 134px - 124px)' }}>
        <div className='container'>
            <h1 className="title-1">{t('home_page.welcome')}</h1>
            <div className='home-bg'>
                <img src={homeBg} alt='home-bg' />
            </div>
            <p>{t('home_page.p-one')}</p>
            <h2 className='title-2'>{t('home_page.title-two')}</h2>
            <p>{t('home_page.p-two')}</p>
            <p>{t('home_page.p-three')}</p>
        </div>
    </main>)
}

export default HomePage;