import { Container, Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useContext, useState } from 'react'
import userService from '../../services/user.service'
import { AuthContext } from '../../contexts/auth.context'


const Profile = () => {

    const { user, logout } = useContext(AuthContext)

    const handleDeleteProfile = e => {

        e.preventDefault()

        return userService
            .deleteUser()
            .then(() => logout())
            .catch(err => console.log(err))
    }


    return (
        <Container>

            <h1>My profile</h1>

            <hr />

            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={user.avatar} />
                <Card.Body>
                    <Card.Title>{user.username}</Card.Title>
                    <Card.Text>
                        {user.email}
                    </Card.Text>
                </Card.Body>
            </Card>

            <Link to={`/editUser`}>
                <Button as="figure" variant="dark">Edit Profile</Button>
            </Link>

            <Link to='/plan'>
                <Button as="figure" onClick={handleDeleteProfile} variant="dark">Delete Profile</Button>
            </Link>

            <Link to='/inbox'>
                <Button as="figure" variant="dark">Messages</Button>
            </Link>

            <Link to='/myPlans'>
                <Button as="figure" variant="dark">Mis planes</Button>
            </Link>



        </Container>
    )
}

export default Profile


