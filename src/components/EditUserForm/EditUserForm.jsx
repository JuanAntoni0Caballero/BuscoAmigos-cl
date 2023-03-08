import { useContext, useState } from 'react'
import userService from '../../service/user.service'
import { Container, Form, Button } from 'react-bootstrap'
import { AuthContext } from '../../context/auth.context'



const EditUserForm = () => {


    const { user, authenticateUser } = useContext(AuthContext)


    const [userData, setUserData] = useState({
        username: user.username,
        email: user.email,
        avatar: user.avatar
    })


    const handleInputChange = e => {
        const { value, name } = e.target
        setUserData({ ...userData, [name]: value })
    }


    // const handleFormSubmit = e => {

    //     e.preventDefault()

    //     userService
    //         .editUser(user._id, userData)
    //         .then(({ data }) => {
    //             setUserData(data)
    //             navigate('/profile')
    //         })
    //         .catch(err => console.log(err))
    // }

    const handleFormSubmit = e => {

        e.preventDefault()
        userService
            .editUser(userData)
            .then(({ data }) => {
                localStorage.setItem('authToken', data.authToken)
                authenticateUser()
            })
            .catch(err => console.log(err))
    }





    return (

        <Container onSubmit={handleFormSubmit}>
            <h1>Edit Form</h1>

            <Form >

                <Form.Group className="mb-3" controlId="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" value={userData.email} onChange={handleInputChange} name="email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="username">
                    <Form.Label>Nombre de usuario</Form.Label>
                    <Form.Control type="text" value={userData.username} onChange={handleInputChange} name="username" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="avatar">
                    <Form.Label>Avatar</Form.Label>
                    <Form.Control type="file" placevalueholder={userData.avatar} onChange={handleInputChange} name="avatar" />
                </Form.Group>

                <div className="d-grid">
                    <Button variant="dark" type="submit">Save</Button>
                </div>

            </Form>



        </Container>
    )
}

export default EditUserForm