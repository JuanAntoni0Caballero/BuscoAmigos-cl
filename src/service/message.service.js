import axios from 'axios'

class MessageService {

    constructor() {


        this.api = axios.create({
            baseURL: `${process.env.REACT_APP_API_URL}/message`
        })


        this.api.interceptors.request.use((config) => {

            const storedToken = localStorage.getItem("authToken");

            if (storedToken) {
                config.headers = { Authorization: `Bearer ${storedToken}` }
            }

            return config
        })

    }

    getMessage() {
        return this.api.get('/getMessage')
    }

    saveMessage(messageData) {
        return this.api.post('/saveMessage', messageData)
    }


    // deleteMessage(message_id) {
    //     return this.api.delete(`/deleteMessage/${message_id}`)
    // }

}

const messageService = new MessageService()

export default messageService