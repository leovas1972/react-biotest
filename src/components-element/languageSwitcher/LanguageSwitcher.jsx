import React from 'react'
import { useTranslation } from 'react-i18next'
import ru from './../../img/flag-svg-img/ru.svg'
import en from './../../img/flag-svg-img/gb.svg'
import fr from './../../img/flag-svg-img/fr.svg'
import de from './../../img/flag-svg-img/de.svg'
import './style.css';

const LanguageSwitcher = () => { 
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  }
  // console.log(i18n.language)

  return (
    <div className='button-box'>
      <button onClick={() => changeLanguage('ru')}>
        <img style={{ width: '40px', height: '30px' }} src={ru} alt="Russian" />
      </button>
      <button onClick={() => changeLanguage('en')}>
        <img style={{ width: '40px', height: '30px' }} src={en} alt="English" />
      </button>
      <button onClick={() => changeLanguage('fr')}>
        <img style={{ width: '40px', height: '30px' }} src={fr} alt="English" />
      </button>
      <button onClick={() => changeLanguage('de')}>
        <img style={{ width: '40px', height: '30px' }} src={de} alt="English" />
      </button>
    </div>
  )
}

export default LanguageSwitcher
