import axios from 'axios'

class ConversationService {

    constructor() {


        this.api = axios.create({
            baseURL: `${process.env.REACT_APP_API_URL}/conversation`
        })


        this.api.interceptors.request.use((config) => {

            const storedToken = localStorage.getItem("authToken")

            if (storedToken) {
                config.headers = { Authorization: `Bearer ${storedToken}` }
            }

            return config
        })
    }


    getConversation(conversation_id) {
        return this.api.get(`/getConversation/${conversation_id}`)
    }

    getAllConversations() {
        return this.api.get(`/getAllConversations`)
    }

    createConversation(plan_id) {
        return this.api.post(`/createConversation/${plan_id}`)
    }

    deleteConversation(conversation_id) {
        return this.api.delete(`/conversationMessage/${conversation_id}`)
    }

}

const conversationService = new ConversationService()

export default conversationService