import axios from 'axios'



class UserService {

    constructor() {
        this.api = axios.create({
            baseURL: `${process.env.REACT_APP_API_URL}/user`
        })
        this.api.interceptors.request.use((config) => {
            const storedToken = localStorage.getItem("authToken");
            if (storedToken) {
                config.headers = { Authorization: `Bearer ${storedToken}` }
            }
            return config
        })

    }
    getUser() {
        return this.api.get('/getUsers')
    }
    getOneUser(user_id) {
        return this.api.get(`/getOneUser/${user_id}`)
    }
    profileUser(user_id) {
        return this.api.get(`/profile`)
    }
    editUser(user_id) {
        return this.api.get(`/editUser/${user_id}`)
    }
    deleteUser(user_id) {
        return this.api.post(`/deleteUser/${user_id}`)
    }
}
const userService = new UserService()
export default userService









