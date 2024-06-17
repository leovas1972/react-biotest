import {useTranslation} from 'react-i18next';
import "./style.css";
const Footer = () => {
    const {t} = useTranslation();
    return (
        <footer className='footer'>
            <div className='container'>
                <div className='footer-adress'>
                    <p>
                        {t('footer.adress')}
                    </p>
                    <p>{t('footer.telfax')}+7(383) 332-94-33, 363-36-18</p>
                    <p>
                        Email:<a href='mailto:info@biotst.ru'>info@biotst.ru</a>{" "}
                        &nbsp; &nbsp; &nbsp;
                        <a href='www.biotst.ru'>www.biotst.ru</a> &nbsp;&nbsp;
                        {new Date().getFullYear()}
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
