import React, {useEffect, useState} from 'react';
import "./Header.css";

const link = "https://github.com/utk09/Netflix-Clone-Traversy/blob/master/images/logo.png?raw=true";
const avatarLink = "https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png";

const Header = () => {
    const [show, setShow] = useState(false);
    console.log(show)
    const transitionHeader = () => {
        if (window.scrollY > 100) {
            setShow(true);
        } else {
            setShow(false);
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", transitionHeader);
        return () => window.removeEventListener("scroll", transitionHeader)
    }, [])

    return (
        <div className={`header ${show && "header__black"}`}>
            <div className="header__contents">
                <img src={link} className={"header__logo"} alt=""/>
                <img src={avatarLink} className={"header__avatar"} alt=""/>

            </div>
        </div>
    );
};

export default Header;