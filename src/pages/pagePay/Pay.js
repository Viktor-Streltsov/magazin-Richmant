import React from "react";
import classes from './Pay.module.css';
import face from '../img/facebook.png';
import apple from '../img/apple.png';
import googl from '../img/google.png';


function Pay() {
    return(
<div className={classes.wrapper}>
        <div className={classes.conteiner}>
            <div className={classes.block_reag}>
                <div className={classes.content_reg}>
                    <h2>Payment</h2>
                    <div className={classes.contener_block}>
                        <div className={classes.img_block}><img src={face} alt="img"/></div>
                        <div className={classes.img_block}><img src={apple} alt="img"/></div>
                        <div className={classes.img_block}><img src={googl} alt="img"/></div>
                    </div>
                    <div className={classes.input_conteiner}>
                        <div className={classes.block_inp}>
                            <label for="name">Tel:</label>
                            <input className={classes.input} id="name" type="text" placeholder="+996..."/>
                        </div>
                        <div className={classes.block_inp}>
                            <label for="email">Card:</label>
                            <input className={classes.input} id="email" type="text" placeholder="Number card"/>
                        </div>
                        <div className={classes.block_inp}>
                            <label for="pass">Sum:</label>
                            <input className={classes.input} id="pass" type="text" placeholder="Your sum"/>
                        </div>
                    </div>
                    <div className={classes.sing_up}>
                        <a href="#" className={classes.link_sing}><span className={classes.text_link}>PAYMANT</span></a>
                    </div>
                </div>
            </div>
        </div>
    </div>

    )
}