import axios from 'axios'

class UserService {

    constructor() {
        this.api = axios.create({
            baseURL: `${process.env.REACT_APP_API_URL}/user`
        })
    }

    getUser() {
        return this.api.get('/getUsers')
    }

    getOneUser(user_id) {
        return this.api.get(`/getOneUser/${user_id}`)
    }

    editUser(user_id) {
        return this.api.get(`/edit/${user_id}`)
    }

    deleteUser(user_id) {
        return this.api.post(`/delete/${user_id}`)
    }
}

const userService = new UserService()

export default userService