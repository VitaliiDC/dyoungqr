import * as axios from 'axios'

const instance = axios.create({
    withcredentials: true,
    baseURL: 'http://localhost:5000'
})

const api = {
    sendMail(data){console.log(data); return instance.post(`/`, {...data}).then(e => e.data)}
}

export default api