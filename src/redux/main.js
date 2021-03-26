import api from '../api/api'

const initialState = {
    loading: false
}

const main = (state = initialState, action) => {
    switch(action.type){
        case 'loading': return {...state, loading: action.value}
        default: return state
    }
}

export const setLoading = (value) => ({type: 'loading', value})

export const sendMailThunk = (data) => async (dispatch) => {
    dispatch(setLoading(true))
    await api.sendMail(data)
    dispatch(setLoading(false))
}

export default main