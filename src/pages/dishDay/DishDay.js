import React from 'react'
import classes from "./dishDay.module.css"
import {useSelector} from "react-redux"
import ProductItem from "../../components/productItem/ProductItem"


function DishDay() {

    const {dishes} = useSelector(state => state.allReducer)

    function isObjectEmpty(obj) {
        return Object.keys(obj).length === 0;
    }

    const check = isObjectEmpty(dishes)

    return (
        <section className={classes.dish_day}>
            <div className={classes.dish_head}>
                <h2 className={classes.about_head_dish}>
                    DISHES
                </h2>
                <h2 className={classes.text_head_dish}>
                    RichMan
                </h2>
            </div>
            <div className={classes.line_dish}></div>
            <ul className={classes.blocks_dish}>
                {
                    !check
                        ?
                        dishes.map(dish => <ProductItem dish={dish}/>  )
                        :
                        <h1 className={classes.text_head_dish}>нету блюд</h1>

                }
            </ul>
        </section>
    )
}

export default DishDay