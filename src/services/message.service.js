import axios from 'axios'

class MessageService {

    constructor() {


        this.api = axios.create({
            baseURL: `${process.env.REACT_APP_API_URL}/messages`
        })


        this.api.interceptors.request.use((config) => {

            const storedToken = localStorage.getItem("authToken")

            if (storedToken) {
                config.headers = { Authorization: `Bearer ${storedToken}` }
            }

            return config
        })
    }


    getMessages() {
        return this.api.get('/getMessages')
    }

    createMessage(conversation_id, content) {
        return this.api.post(`/createMessage/${conversation_id}`, content)
    }

    deleteMessage(message_id) {
        return this.api.delete(`/deleteMessage/${message_id}`)
    }

}

const messageService = new MessageService()

export default messageService