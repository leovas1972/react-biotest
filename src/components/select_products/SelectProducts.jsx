// import {useContext} from 'react';
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
// import { ContextSelect } from '../../App';
import "./style.css";

export const SelectProducts = () => {
    const { t } = useTranslation();
    // const [select, setSelect] = useState(t("navbar.navigation.products"))
    // const {select, setSelect} = useContext(ContextSelect);

    // const getSelectValue = (event) => {
    //     setSelect(event.target.value);
    // }

    // console.log(typeof(select), select);
    
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        const dropDownBtn = document.querySelector(".dropdown__button");
        const dropDownList = document.querySelector(".dropdown__list");
        if (isActive === true) {
            dropDownBtn.classList.add("dropdown__button--active");
            dropDownList.classList.add("dropdown__list--visible");
        } else {
            dropDownBtn.classList.remove("dropdown__button--active");
            dropDownList.classList.remove("dropdown__list--visible");
        }
    }, [isActive]);

    const toggleClass = () => {
        setIsActive(!isActive);
        console.log()
    };

    return (
        <div className='dropdown'>
            <button className='dropdown__button' onClick={toggleClass}>
            {t("navbar.navigation.products")}
            </button>
            <ul className='dropdown__list'>
                <li className='dropdown__list-item' data-value='products'>
                    {t("navbar.navigation.products")}
                </li>
                <li className='dropdown__list-item' data-value='express_test'>
                    {t("navbar.select.Express test")}
                </li>
                <li className='dropdown__list-item' data-value='procalcitonin'>
                    {t("navbar.select.Procalcitonin")}
                </li>
                <li
                    className='dropdown__list-item'
                    data-value='bioprosibir.nethouse.ru'
                >
                    {t("navbar.select.Price")}
                </li>
                <li className='dropdown__list-item' data-value='proBNP'>
                    {t("navbar.select.proBNP")}
                </li>
            </ul>
            {/* <input type="text" name="select-category" value="" class="dropdown__input-hidden" > */}
        </div>
    );
};


    /* <select className='select' value={select} onChange={getSelectValue}>
             <option value='products'>{t("navbar.navigation.products")}</option>
            <option value='express_test'>{t("navbar.select.Express test")}></option>
            <option value='procalcitonin'>{t("navbar.select.Procalcitonin")}</option>
            <option value='bioprosibir.nethouse.ru'>{t("navbar.select.Price")}</option>
            <option value='proBNP'>{t("navbar.select.proBNP")}</option>
    </select> */

