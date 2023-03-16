
import { useContext, useState } from 'react'
import { Nav, Navbar, Container, Modal, NavDropdown, Offcanvas } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../contexts/auth.context'
import LoginForm from '../LoginForm/LoginForm'
import SignupForm from '../SignupForm/SignupForm'
import PlanNewForm from '../PlanNewForm/PlanNewForm'
import ProfilePage from '../Profile/Pofile'
import './Navigation.css'


const Navigation = () => {

    const [showLogInModal, setShowLoginModal] = useState(false)
    const [showSingUpModal, setShowSingUpModal] = useState(false)
    const [showCreatePlanModal, setShowCreatePlanModal] = useState(false)
    const [showProfileModal, setShowProfileModal] = useState(false)

    const { user } = useContext(AuthContext)

    const fireFinalActions = () => {
        setShowLoginModal(false)
        setShowSingUpModal(false)
        setShowCreatePlanModal(false)
        setShowProfileModal(false)
    }

    return (

        <Navbar className="me-auto, nav" collapseOnSelect expand="lg" >

            <Container>

                <Link to='/'>
                    <Navbar.Brand as='span' className='navTitle'>BUSCO
                        <img src="../../../../images/icon-transp-yellow.png" alt="icon" />
                        AMIGOS</Navbar.Brand>
                </Link>

                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse className="me-auto, justify-content-end" >

                    <Nav >
                        {
                            !user
                                ?
                                <>
                                    <Link >
                                        <Nav.Link className='acces' onClick={() => setShowLoginModal(true)} as='span'>Inicia sesión</Nav.Link>
                                    </Link>

                                    <Link>
                                        <Nav.Link className='acces' onClick={() => setShowSingUpModal(true)} as='span'>Regístrate</Nav.Link>
                                    </Link>
                                </>
                                :
                                <>
                                    <Link>
                                        <Nav.Link className='acces' onClick={() => setShowCreatePlanModal(true)} as='span'>Crea tu plan</Nav.Link>
                                    </Link>

                                    <Link>
                                        <Nav.Link onClick={() => setShowProfileModal(true)} as='span'>
                                            <img className='navAvatar' src={user.avatar} alt="Avatar" />
                                        </Nav.Link>
                                    </Link>
                                </>
                        }

                        <Modal show={showLogInModal} onHide={() => setShowLoginModal(false)}>
                            <Modal.Header closeButton> <Modal.Title>Inicio de sesión</Modal.Title></Modal.Header>
                            <Modal.Body>
                                <LoginForm setShowLoginModal={setShowLoginModal} fireFinalActions={fireFinalActions} />
                            </Modal.Body>
                        </Modal>

                        <Modal size="lg" show={showSingUpModal} onHide={() => setShowSingUpModal(false)}>
                            <Modal.Header closeButton> <Modal.Title>Registro</Modal.Title></Modal.Header>
                            <Modal.Body>
                                <SignupForm setShowSingUpModal={setShowSingUpModal} setShowLoginModal={setShowLoginModal} fireFinalActions={fireFinalActions} />
                            </Modal.Body>
                        </Modal>

                        <Modal size="lg" centered show={showCreatePlanModal} onHide={() => setShowCreatePlanModal(false)}>
                            <Modal.Header closeButton> <Modal.Title>Crear plan</Modal.Title></Modal.Header>
                            <Modal.Body >
                                <PlanNewForm setShowCreatePlanModal={setShowCreatePlanModal} fireFinalActions={fireFinalActions} />
                            </Modal.Body>
                        </Modal>

                        <Modal show={showProfileModal} onHide={() => setShowProfileModal(false)}>
                            <Modal.Header closeButton> <Modal.Title>Perfil de {user?.username}</Modal.Title></Modal.Header>
                            <Modal.Body >
                                <ProfilePage className='profileModal' setShowProfileModal={setShowProfileModal} fireFinalActions={fireFinalActions} />
                            </Modal.Body>
                        </Modal>

                    </Nav>
                </Navbar.Collapse>

            </Container>
        </Navbar >
    )
}


export default Navigation