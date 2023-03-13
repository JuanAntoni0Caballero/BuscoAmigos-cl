import { Container, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useContext, useState } from 'react'
import userService from '../../services/user.service'
import { AuthContext } from '../../contexts/auth.context'



const ProfilePage = () => {

    const { user: userContext, logout } = useContext(AuthContext)
    const [user, setUser] = useState(userContext)




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

            <Container>

                <Link to={'/editUser'}>Edit Profile</Link>
                <Link to='/inbox'>Messages</Link>
                <Link onClick={handleDeleteProfile}> Delete Profile </Link>

            </Container>


        </Container>
    )
}

export default ProfilePage


