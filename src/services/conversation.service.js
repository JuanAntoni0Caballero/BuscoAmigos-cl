import axios from 'axios'

class ConversationService {

    constructor() {


        this.api = axios.create({
            baseURL: `${process.env.REACT_APP_API_URL}/conversation`
        })


        this.api.interceptors.request.use((config) => {

            const storedToken = localStorage.getItem("authToken");

            if (storedToken) {
                config.headers = { Authorization: `Bearer ${storedToken}` }
            }

            return config
        })
    }


    getConversation() {
        return this.api.get('/getConversation')
    }

    createConversation(receiver_id) {
        return this.api.post(`/createConversation/${receiver_id}`)
    }


    deleteConversation(conversation_id) {
        return this.api.delete(`/conversationMessage/${conversation_id}`)
    }

}

const conversationService = new ConversationService()

export default conversationService