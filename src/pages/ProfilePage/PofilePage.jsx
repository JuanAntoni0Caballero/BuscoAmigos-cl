import { Container, Card, Button, Modal } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useContext, useState } from 'react'
import userService from '../../services/user.service'
import { AuthContext } from '../../contexts/auth.context'


const Profile = () => {

    const { user, logout } = useContext(AuthContext)

    const [show, setShow] = useState(false)

    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)

    const handleDeleteProfile = e => {

        e.preventDefault()

        return userService
            .deleteUser()
            .then(() => logout())
            .catch(err => console.log(err))
    }


    return (

        < Container className="mx-auto" >

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


            <Button as="figure" variant="dark" onClick={handleShow}>
                Delete profile
            </Button>

            <Link to='/inbox'>
                <Button as="figure" variant="dark">Messages</Button>
            </Link>

            <Link to='/myPlans'>
                <Button as="figure" variant="dark">Mis planes</Button>
            </Link>



            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Confirmacion de eliminación</Modal.Title>
                </Modal.Header>
                <Modal.Body>¿Estás seguro de que no te quieres quedar?</Modal.Body>
                <Modal.Footer>
                    <Button variant="dark" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="dark" onClick={handleDeleteProfile} >
                        Delete
                    </Button>
                </Modal.Footer>
            </Modal>


        </Container>
    )
}

export default Profile


