import { Container, Button, Modal, Col, Row, ButtonGroup } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useContext, useState } from 'react'
import userService from '../../services/user.service'
import { AuthContext } from '../../contexts/auth.context'
import './Profile.css'


const Profile = ({ setShowProfileModal }) => {

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

    const clickLogout = () => {
        setShowProfileModal(false)
        logout()
    }


    return (

        < Container className="mx-auto" >

            <img className='Avatar mb-5' src={user?.avatar} alt="Avatar" />

            <h3 className="mb-5 text-center">{user?.email}</h3>

            <Row className="justify-content-center">
                <Col sm={10} md={6} className="mb-3">

                    <Link to='/inbox' onClick={() => setShowProfileModal(false)}>
                        <Button as="figure" variant="dark" className="w-100 mb-3">Mis mensajes</Button>
                    </Link>

                    <Link to='/myPlans' onClick={() => setShowProfileModal(false)}>
                        <Button as="figure" variant="dark" className="w-100 mb-3">Mis planes</Button>
                    </Link>

                    <hr className="mb-3" />

                    <Link to='/' onClick={clickLogout}>
                        <Button as="figure" variant="dark" className="w-100 mb-3">LogOut</Button>
                    </Link>

                    <Link to={`/editUser`}>
                        <Button as="figure" variant="dark" className="w-100 mb-3">Editar perfil</Button>
                    </Link>

                    <hr className="mb-3" />

                    <Link>
                        <Button as="figure" variant="dark" className="w-100 mb-3 mt-3" onClick={handleShow}>
                            Borrar perfil
                        </Button>
                    </Link>
                </Col>
            </Row>


            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Confirmacion de eliminación</Modal.Title>
                </Modal.Header>
                <Modal.Body>¿Estás seguro de que no te quieres quedar?</Modal.Body>
                <Modal.Footer>
                    <Button variant="dark" onClick={handleClose}>
                        Cerrar
                    </Button>
                    <Button variant="dark" onClick={handleDeleteProfile} >
                        Borrar
                    </Button>
                </Modal.Footer>
            </Modal>


        </Container >
    )
}

export default Profile


