import * as axios from 'axios'

const instance = axios.create({
    withcredentials: true,
    baseURL: 'https://dyoungqr.herokuapp.com'
})

const api = {
    sendMail(data){console.log(data); return instance.post(`/`, {...data}).then(e => e.data)}
}

export default api