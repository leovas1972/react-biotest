import { useState, useEffect } from "react";
import "./style.css";
const BurgerIcon = () => {
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        if (isActive === true) {
            document
                .querySelector(".nav-icon")
                .classList.add("nav-icon--active");


            document.querySelector(".navigation").classList.add("navigation--active");
        } else {
            document
                .querySelector(".nav-icon")
                .classList.remove("nav-icon--active");

                document.querySelector(".navigation").classList.remove("navigation--active")
        }
    }, [isActive]);

    const toggleClass = () => {
        setIsActive(!isActive);
    };
    return (
        <div className='nav-icon' onClick={toggleClass}>
            <div className='nav-icon__middle'></div>
        </div>
    );
};

export default BurgerIcon;
