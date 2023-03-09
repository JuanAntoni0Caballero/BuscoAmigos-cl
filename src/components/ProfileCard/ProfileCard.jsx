import { useContext, useEffect, useState } from 'react'
import userService from '../../service/user.service'
import { Card, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../context/auth.context'


const ProfileCard = () => {

    const { user: userContext } = useContext(AuthContext)
    const [user, setUser] = useState(userContext)




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

            <Link to='/editUser'>Edit Profile</Link>
            <Link to='/profile'>Menssages</Link>

        </Container>
    )
}

export default ProfileCard