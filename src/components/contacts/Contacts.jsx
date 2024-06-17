import MapLeflet from "./../mapleflet/MapLeflet";
import { useTranslation } from 'react-i18next';
import "./style.css";

const Contacts = () => {
    const { t } = useTranslation();
    return (
        <main
            className='main'
            style={{ minHeight: "calc(100vh - 134px - 124px)" }}
        >
            <div className='container'>
                <div className='contact-header'>
                    <h2 className='title-2'>{t('contacts.header')}</h2>
                </div>
                <div className='contacts-block'>
                    <div className='contact-info'>
                        <h3>ООО НПО "БиоТест"</h3>
                        <p>ОГРН 1055473133715</p>
                        <p>ИНН 5408238619</p>
                        <p>р/с 40702810644050006147</p>
                        <p>
                            Россия, 630128, Новосибирск ул. Кутателадзе д. 4А,
                            офис 101.
                        </p>
                        <p>Тел.: +7 (383) 363-3618</p>
                        <p>Факс: +7 (383) 332-9433</p>
                        <p>E-mail: info@biotst.ru</p>
                        <p>Сайт: www.biotst.ru</p>
                    </div>
                    <div className='contact-map'>
                        <MapLeflet />
                    </div>
                </div>
                {/* <div className='contacts-block'>
                    <div className='contact-info bsgk'>
                        <h3>Продукция</h3>
                        <a href="!#">
                            <img src={img} alt="Кардио-БСЖК"/>
                        </a>
                        
                    </div>
                    <div>
                        <h3>Новости</h3>
                        <p>Новостей пока нет</p>
                        <a href="!#">Все новости {'&#8594'}</a>
                    </div>
                </div> */}
                
            </div>
        </main>
    );
};

export default Contacts;
