import {useTranslation} from 'react-i18next';
import './style.css';

const OurPartnersPage = () => {
    const {t} = useTranslation();
    return (<main className='main' style={{ minHeight: 'calc(100vh - 134px - 124px)' }}>
        <div className='container'>
            <h1 className="title-1">{t('ourpartners-page.title-one')}</h1>
            <p>{t('ourpartners-page.p-1')}<a href='http://www.bialexa.ru/'>www.bialexa.ru</a></p>
            <p>{t('ourpartners-page.p-2')}<a href='http://www.soramn.ru/'>www.soramn.ru</a></p>
            <p>{t('ourpartners-page.p-3')}<a href='http://www.vector.nsc.ru/'>www.vector.nsc.ru</a></p>
            <p>{t('ourpartners-page.p-4')}<a href='http://www.narzdrav.ru/healthcare/municipal/0014.html'>www.narzdrav.ru</a></p>
            <p>{t('ourpartners-page.p-5')}<a href='http://iimed.ru/'>iimed.ru</a></p>
            <p>{t('ourpartners-page.p-6')}<a href='http://gb71.ru/'>gb71.ru</a></p>
            <p>{t('ourpartners-page.p-7')}</p>
            <p>{t('ourpartners-page.p-8')}<a href='http://bsmp.sibmedport.ru/'>bsmp.sibmedport.ru</a></p>
            <p>{t('ourpartners-page.p-9')}<a href='http://krasgmu.ru/'>www.krasgmu.ru</a></p>
            <p>{t('ourpartners-page.p-10')}<a href='http://scardio.ru/'>www.scardio.ru</a></p>
            <p>{t('ourpartners-page.p-11')}<a href='http://www.emergencyrus.ru/'>www.emergencyrus.ru</a></p>
            
        </div>
    </main>)
}

export default OurPartnersPage;