import {useTranslation} from 'react-i18next';
import './style.css'
const TabsAboutTest = () => {
    const {t} = useTranslation();
    return (<main className='main' style={{ minHeight: 'calc(100vh - 134px - 124px)' }}>
        <div className='container'>
            <p><strong>{t('products-page.tabs-about-test.strong')}</strong>{t('products-page.tabs-about-test.p-1')}</p>
            <p>{t('products-page.tabs-about-test.p-2')}</p>
            <ul>
                <li>{t('products-page.tabs-about-test.li-1')}</li>
                <li>{t('products-page.tabs-about-test.li-2')}</li>
            </ul>
            <h3>{t('products-page.tabs-about-test.h3-1')}</h3>
            <ul>
                <li>{t('products-page.tabs-about-test.li-3')}</li>
                <li>{t('products-page.tabs-about-test.li-4')}</li>
                <li>{t('products-page.tabs-about-test.li-5')}</li>
                <li>{t('products-page.tabs-about-test.li-6')}</li>
                <li>{t('products-page.tabs-about-test.li-7')}</li>
                <li>{t('products-page.tabs-about-test.li-8')}</li>
                <li>{t('products-page.tabs-about-test.li-9')}</li>
            </ul>
            <h3>{t('products-page.tabs-about-test.h3-2')}</h3>
            <p>{t('products-page.tabs-about-test.p-3')}</p>
            <ol>
                <li>{t('products-page.tabs-about-test.ol-li-1')}</li>
                <li>{t('products-page.tabs-about-test.ol-li-2')}</li>
            </ol>
            <p><strong>{t('products-page.tabs-about-test.p-4strong')}</strong></p>
            <table>
                <tbody>
                    <tr>
                        <td>{t('products-page.tabs-about-test.table.td-1')}</td>
                        <td>{t('products-page.tabs-about-test.table.td-2')}</td>
                    </tr>
                    <tr>
                        <td>{t('products-page.tabs-about-test.table.td-3')}</td>
                        <td>{t('products-page.tabs-about-test.table.td-4')}</td>
                    </tr>
                    <tr>
                        <td>{t('products-page.tabs-about-test.table.td-5')}</td>
                        <td>{t('products-page.tabs-about-test.table.td-6')}</td>
                    </tr>
                    <tr>
                        <td>{t('products-page.tabs-about-test.table.td-7')}</td>
                        <td>{t('products-page.tabs-about-test.table.td-8')}</td>
                    </tr>
                    <tr>
                        <td>{t('products-page.tabs-about-test.table.td-9')}</td>
                        <td>{t('products-page.tabs-about-test.table.td-10')}</td>
                    </tr>
                    <tr>
                        <td>{t('products-page.tabs-about-test.table.td-11')}</td>
                        <td>{t('products-page.tabs-about-test.table.td-12')}</td>
                    </tr>
                    <tr>
                        <td>{t('products-page.tabs-about-test.table.td-13')}</td>
                        <td>{t('products-page.tabs-about-test.table.td-14')}</td>
                    </tr>
                    <tr>
                        <td>{t('products-page.tabs-about-test.table.td-15')}</td>
                        <td>{t('products-page.tabs-about-test.table.td-16')}</td>
                    </tr>
                    <tr>
                        <td>{t('products-page.tabs-about-test.table.td-17')}</td>
                        <td>{t('products-page.tabs-about-test.table.td-18')}</td>
                    </tr>
                    <tr>
                        <td>{t('products-page.tabs-about-test.table.td-19')}</td>
                        <td>
                            <p>{t('products-page.tabs-about-test.table.td-20-p1')}</p>
                            <p>{t('products-page.tabs-about-test.table.td-20-p2')}</p>
                            <p>{t('products-page.tabs-about-test.table.td-20-p3')}</p>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </main >)
}

export default TabsAboutTest;