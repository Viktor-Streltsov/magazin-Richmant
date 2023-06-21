import {$api, } from "./index"
import {setError} from "../store/slices/errorSlice"
import {setPay, setPays, setProducts} from "../store/slices/allSlice"

export const getAllPayApi = () => {
    return async (dispatch) => {
        try {
            const {data} = await $api.get(`api/pay/`)
            dispatch(setPays(data))
        } catch (e) {
            dispatch(setError(e.message))
        }
    }
}

export const getProductApi = () => {
    return async (dispatch) => {
        try {
            const {data} = await $api.get(`api/product/`)
            dispatch(setProducts(data))
        } catch (e) {
            dispatch(setError(e.message))
        }
    }
}

export const addPayApi = (formData) => {
    return async (dispatch) => {
        try {
            const data = await $api.post('api/pay/', formData)
            if (data.status === 200) {
                alert('Вы успешно добавили оплату')
            }
        } catch (e) {
            alert(e)
        }
    }
}
export const addProduct = (formData) => {
    return async (dispatch) => {
        try {
            const data = await $api.post('api/product/', formData)
            if (data.status === 200) {
                alert('Вы успешно добавили товар')
            }
        } catch (e) {
            alert(e)
        }
    }
}

export const getUserPayApi = (id) => {
    return async (dispatch) => {
        try {
            const {data} = await $api.get(`api/pay/user/${id}`)
            dispatch(setPay(data))
        } catch (e) {
            dispatch(setError(e.message))
        }
    }
}
