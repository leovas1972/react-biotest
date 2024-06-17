import {useTranslation} from 'react-i18next';
import { Outlet, NavLink } from 'react-router-dom'
// import TabsAboutTest from './tabs/tabs-about/TabsAboutTest'
import imgBg from './../../img/banner-cardio-bszhk.jpg'
import './style.css'
// import TabsReviews from './tabs/tabs-reviews/TabsReviews'
// import TabsPatents from './tabs/tabs-patents/TabsPatents'

const setActive = ({isActive}) => isActive ? 'active' : '';

const ProductsPage = () => {
    const {t} = useTranslation();
    return (<main className='main' style={{ minHeight: 'calc(100vh - 134px - 124px)' }}>
        <div className='container'>
            <h1 className="title-1">{t('products-page.title-1')}</h1>
            <img className='img-bg' src={imgBg} alt='bsgk' />
            <ul className='tabs'>
                <li className='tabs-item'><NavLink className={setActive} to="about" title="О тесте">{t('products-page.li-1')}</NavLink></li>
                <li className='tabs-item'><NavLink className={setActive} to="rewers" title="Отзывы">{t('products-page.li-2')}</NavLink></li>
                <li className='tabs-item'><NavLink className={setActive} to="patents" title="Патенты">{t('products-page.li-3')}</NavLink></li>
            </ul>
            <div className='block'>
                <Outlet />  
                <ul className='products-links'>
                    <li className='products-item pdf'>
                        <a href="!#">
                            Методические рекомендации (pdf)
                        </a>
                    </li>
                    <li className='products-item pdf'>
                        <a href="!#">
                        Экспертное заключение ММА(город Москва) (pdf)
                        </a>
                    </li>
                    <li className='products-item jpg'>
                        <a href="!#">
                        Регистрационное Удостоверение (jpg)
                        </a>
                    </li>
                    <li className='products-item pdf'>
                        <a href="!#">
                        Регистрационное Удостоверение  "КардиоБСЖК"  республика Казахстан (pdf)
                        </a>
                    </li>
                    <li className='products-item pdf'>
                        <a href="!#">
                        Экспертное заключение от Томского НИИ Кардиологии (pdf)
                        </a>
                    </li>
                    <li className='products-item pdf'>
                        <a href="!#">
                        Национальные рекомендации (pdf)
                        </a>
                    </li>
                    <li className='products-item jpg'>
                        <a href="!#">
                        ГOСТ ISO 9001-2011 (jpg)
                        </a>
                    </li>
                    
                </ul>
            </div>
        </div>
    </main>)
}

export default ProductsPage;