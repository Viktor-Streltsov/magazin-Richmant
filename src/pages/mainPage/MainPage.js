import React, {useEffect} from 'react'
import DishDay from "../dishDay/DishDay"
import {getProductApi} from "../../axios/allApi"
import {useDispatch} from "react-redux"

function MainPage() {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getProductApi())
    }, [dispatch])

    return (
        <div>
            <DishDay/>
        </div>
    )
}

export default MainPage