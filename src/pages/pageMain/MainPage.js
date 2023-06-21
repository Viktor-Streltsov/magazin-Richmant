import React, {useEffect} from 'react'
import classes from './Main.module.css';
import wath from '../../img/watch.png';
import nearme from '../../img/near_me.png';
import call from '../../img/call.png';
import arrow_left_black from '../../img/arrow-left-black.png';
import arrow_right_black from '../../img/arrow-right-black.png';
import sigaret from '../../img/sigaret-more.png';
import {useDispatch, useSelector} from "react-redux"
import ProductItem from "../../components/productItem/ProductItem"
import {getProductApi} from "../../axios/allApi"
import Reviews from "../../components/reviews/Reviews"

function Main() {

    const {products} = useSelector(state => state.allReducer)
    console.log(products)

    function isObjectEmpty(obj) {
        return Object.keys(obj).length === 0;
    }

    const check = isObjectEmpty(products)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getProductApi())
    }, [dispatch])


    return(
        <div className={classes.wrapper}>
        <div className={classes.conteiner}>
            <section className={classes.one_block_food}>
                <div className={classes.your_favarite_food}>
                    <h1 className={classes.title_head_food}>
                        Your <span>Lorem, ipsum</span>
                        Delivered <span>Hot & Fresh</span>
                    </h1>
                    <p className={classes.text_head_food}>
                        HEALTHY SWITCHER chefs do all the prep work, like peeling, chopping & marinating, so you can cook a fresh homemade dinner in just 15 minutes.
                    </p>
                </div>
                <div className={classes.button_order_now}>
                    <a href="#"><span>Order Now</span></a>
                </div>
                <div className={classes.info_about_restoran}>
                    <ul>
                        <li>
                            <img src={wath} alt="icon"/>
                            <p>Today 10:00 am _ 7:00 pm</p>
                            <p className={classes.text_info}>Working hours</p>
                        </li>
                        <li>
                            <img src={nearme} alt="icon"/>
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
            </section>
            <section className={classes.basics_food}>
                <header className={classes.basics_head}>
                    <h2 className={classes.about_head_basics}>
                        ABOUT
                    </h2>
                    <h2 className={classes.text_head_basics}>
                        The Basics Of Healthy Food
                    </h2>
                </header>
                <div className={classes.text_basics}>
                    <p>
                        In aliqua ea ullamco ad est ex non deserunt nulla. Consectetur sint ea aliquip aliquip consectetur voluptate est. Eu minim dolore laboris enim mollit voluptate irure esse aliquip.
                    </p>
                </div>
                <div className={classes.slider}>
                    <div className={classes.arrow_left}>
                        <img src={arrow_left_black} alt="arrow"/>
                    </div>
                    <ul>
                        <li>
                            <img src={sigaret} alt="img"/>
                        </li>
                    </ul>
                    <div className={classes.arrow_right}>
                        <img src={arrow_right_black} alt="arrow"/>
                    </div>
                </div>
            </section>
            <Reviews/>
            <section className={classes.dish_day}>
                <div className={classes.dish_head}>
                    <h2 className={classes.about_head_dish}>
                        CIGARETTES
                    </h2>
                    <h2 className={classes.text_head_dish}>
                        Richman
                    </h2>
                </div>
                <div className={classes.line_dish}></div>
                <ul className={classes.blocks_dish}>
                    {
                        !check
                            ?
                            products.map(product => <ProductItem product={product}/>  )
                            :
                            <h1 className={classes.text_head_dish}>нету блюд</h1>
                    }
                </ul>
            </section>
        </div>
    </div>
    )
}

export default Main