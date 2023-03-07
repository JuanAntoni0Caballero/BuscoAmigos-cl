import { useEffect, useState } from 'react'
import userService from '../../service/user.service'
import { Card } from 'react-bootstrap'


const Profile = () => {

    const [user, setUser] = useState([])



    useEffect(() => {
        userService
            .profileUser()
            .then(({ data }) => setUser(data))
            .catch(err => console.log(err))

    }, [])


    return (


        <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>{user.username}</Card.Title>
                <p>{user.email}</p>
                <img src={user.avatal} alt="image" />
            </Card.Body>
        </Card>

    )


}

export default Profile