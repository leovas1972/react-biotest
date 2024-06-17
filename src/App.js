import { Suspense, createContext, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'

import Contacts from './components/contacts/Contacts';
import LanguageSwitcher from './components-element/languageSwitcher/LanguageSwitcher';
// import HomePage from './components/home_page/HomePage';
import AboutCompanyPage from './components/aboutCompany_page/AboutCompanyPage';
import './css/main.css'
import OurPartnersPage from './components/ourPartners_page/OurPartnersPage';
import ProductsPage from './components/products_page/ProductsPage';
import TabsAboutTest from './components/products_page/tabs/tabs-about/TabsAboutTest'
import TabsReviews from './components/products_page/tabs/tabs-reviews/TabsReviews'
import TabsPatents from './components/products_page/tabs/tabs-patents/TabsPatents'
import ExpressTest from './components/express_test/ExpressTest';

export const ContextSelect = createContext(null);

function App() {

  const [select, setSelect] = useState('');
  console.log(typeof(select), select);
  return (
    <div className="App">
      <BrowserRouter>
        <LanguageSwitcher />
        <ContextSelect.Provider value={{select, setSelect}}>
          <Navbar />
          <Routes>
            <Route path='/' element={<AboutCompanyPage />} />
            <Route path='our_partners' element={<OurPartnersPage />} />
            <Route path='products/' element={<ProductsPage />}>
              <Route index element={<TabsAboutTest />} />
              <Route path='about' element={<TabsAboutTest />} />
              <Route path='rewers' element={<TabsReviews />} />
              <Route path='patents' element={<TabsPatents />} />
            </Route>
            <Route path={select} element={<ExpressTest />} />

            <Route path='contacts' element={<Contacts />} />
          </Routes>
        </ContextSelect.Provider>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default function WrapperApp() {
  return (<Suspense fallback='...loading'>
    <App />
  </Suspense>)
}
