import { useContext, useEffect, useState } from 'react'
import userService from '../../service/user.service'
import { Card, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../context/auth.context'


const ProfileCard = () => {

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

            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={user.avatar} />
                <Card.Body>
                    <Card.Title>{user.username}</Card.Title>
                    <Card.Text>
                        {user.email}
                    </Card.Text>
                </Card.Body>
            </Card>

            <Link to={'/editUser'}>Edit Profile</Link>
            <button onClick={handleDeleteProfile}>Delete Profile</button>
            <Link to='/inbox'>Menssages</Link>



        </Container>
    )
}

export default ProfileCard