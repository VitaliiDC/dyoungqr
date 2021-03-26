import api from '../api/api'

const initialState = {

}

const main = (state = initialState, action) => {
    switch(action.type){
        default: return state
    }
}

export const sendMailThunk = (data) => async (dispatch) => {
    return api.sendMail(data)
}

export default main