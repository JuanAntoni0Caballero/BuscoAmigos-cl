import { useState, useContext } from "react"
import { Form, Button } from "react-bootstrap"
import { Link } from "react-router-dom"
import { useNavigate } from 'react-router-dom'
// import { AuthContext } from "../../context/auth.context"
import authService from "../../service/auth.service"


const LoginForm = () => {

    const [loginData, setLoginData] = useState({
        email: '',
        password: ''
    })

    const navigate = useNavigate()

    const handleInputChange = e => {
        const { value, name } = e.target
        setLoginData({ ...loginData, [name]: value })
    }

    const handleSubmit = e => {

        e.preventDefault()

        authService
            .login(loginData)
            .then(({ data }) => {
                localStorage.setItem('authToken', data.authToken)
                navigate('/profile')
            })
            .catch(err => console.log(err))
    }

    return (

        <Form onSubmit={handleSubmit}>

            <Form.Group className="mb-3" controlId="email">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" value={loginData.email} onChange={handleInputChange} name="email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="password">
                <Form.Label>Contraseña</Form.Label>
                <Form.Control type="password" value={loginData.password} onChange={handleInputChange} name="password" />
            </Form.Group>
            <Link to='/signup'>Date de alta</Link>

            <div className="d-grid">
                <Button variant="dark" type="submit">Acceder</Button>
            </div>

        </Form>
    )
}

export default LoginForm