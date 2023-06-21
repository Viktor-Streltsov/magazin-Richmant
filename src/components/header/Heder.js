import React from 'react';
import user_img from '../../pages/img/user.png';
import classes from './Header.module.css';


function Header() {
    return (
        <div className={classes.wrapper}>
            <div className={classes.conteiner}>
                <header className={classes.head}>
                    <nav className={classes.menu}>
                        <div className={classes.logo}>
                            <div className={classes.text_logo}>
                                Richmond
                            </div>
                        </div>
                        <div className={classes.menu_link}>
                            <ul>
                                <li><a className={classes.link} href="#"><span>Menu</span></a></li>
                                <li><a className={classes.link} href="#"><span>Contacts</span></a></li>
                            </ul>
                            <div className={classes.user}>
                            <img src={user_img} alt="user"/>
                            </div>
                        </div>
                    </nav>
                </header>
            </div>
        </div>
    )
}

export default Header