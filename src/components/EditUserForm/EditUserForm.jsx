import { useEffect, useState } from 'react'
import userService from '../../service/user.service'
import { Card, Container, Form, Button } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { AuthContext } from '../../context/auth.context'




const EditUserForm = () => {

    const navigate = useNavigate()

    const [user, setUser] = useState({})

    const { user_id } = useParams()


    console.log('user_id', user_id)
    console.log('user', user)



    const handleInputChange = e => {
        const { value, name } = e.target
        setUser({ ...setUser, [name]: value })
    }


    const handleFormSubmit = e => {

        e.preventDefault()

        userService
            .getOneUser(user_id)
            .then(({ data }) => setUser(data))
            .catch(err => console.log(err))
    }



    return (

        <Container onSubmit={handleFormSubmit}>
            <h1>Edit Form</h1>

            <Form >

                <Form.Group className="mb-3" controlId="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" value={user.email} onChange={handleInputChange} name="email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="username">
                    <Form.Label>Nombre de usuario</Form.Label>
                    <Form.Control type="text" onChange={handleInputChange} name="username" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="password">
                    <Form.Label>Contraseña</Form.Label>
                    <Form.Control type="password" onChange={handleInputChange} name="password" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="avatar">
                    <Form.Label>Avatar</Form.Label>
                    <Form.Control type="file" onChange={handleInputChange} name="avatar" />
                </Form.Group>

                <div className="d-grid">
                    <Button variant="dark" type="submit">Save</Button>
                </div>

            </Form>



        </Container>
    )
}

export default EditUserForm