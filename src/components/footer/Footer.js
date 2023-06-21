import React from "react";
import classes from './Footer.module.css';
import watch from '../../pages/img/watch.png';
import near from '../../pages/img/near_me.png';
import call from '../../pages/img/call.png';


function Footer() {
    return (
        <div className={classes.wrapper}>
            <div className={classes.conteiner}>
                <footer className={classes.footer}>
                    <div className={classes.info_footer_restoran}>
                        <ul>
                            <li>
                                <img src={watch} alt="icon" />
                                <p>Today 10:00 am - 7:00 pm</p>
                                <p className={classes.text_info}>Working hours</p>
                            </li>
                            <li>
                                <img src={near} alt="icon" />
                                <p>Velyka Vasylkivska 100</p>
                                <p className={classes.text_info}>Get Directions</p>
                            </li>
                            <li>
                                <img src={call} alt="icon"/>
                                    <p>+38 (063)833 24 15</p>
                                    <p className={classes.text_info}>Call Online</p>
                            </li>
                        </ul>
                    </div>
                </footer>
            </div>
        </div>
    )
}

export default Footer