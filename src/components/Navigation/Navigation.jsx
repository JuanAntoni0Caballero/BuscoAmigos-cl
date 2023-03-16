
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
    const [showProfileCanvas, setShowProfileCanvas] = useState(false)


    const { user, logout } = useContext(AuthContext)

    const fireFinalActions = () => {
        setShowLoginModal(false)
        setShowSingUpModal(false)
        setShowCreatePlanModal(false)
        setShowProfileModal(false)
    }

    return (


        <Navbar className="me-auto" collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Link to='/'>
                    <Navbar.Brand as='span' className='navTitle'>BUSCO
                        <img src="../../../../images/icon-transp-yellow.png" alt="" />
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
                                        <Nav.Link onClick={() => setShowLoginModal(true)} as='span'>LogIn</Nav.Link>
                                    </Link>

                                    <Link>
                                        <Nav.Link onClick={() => setShowSingUpModal(true)} as='span'>SignUp</Nav.Link>
                                    </Link>
                                </>
                                :
                                <>
                                    <Link>
                                        <Nav.Link onClick={() => setShowCreatePlanModal(true)} as='span'>Create plan</Nav.Link>
                                    </Link>

                                    <Link>
                                        <Nav.Link onClick={() => setShowProfileModal(true)} as='span'>
                                            <img src={user.avatar} alt="Avatar" />
                                        </Nav.Link>
                                    </Link>
                                </>
                        }

                        <Modal show={showLogInModal} onHide={() => setShowLoginModal(false)}>
                            <Modal.Header closeButton> <Modal.Title> LogIn</Modal.Title></Modal.Header>
                            <Modal.Body>
                                <LoginForm setShowLoginModal={setShowLoginModal} fireFinalActions={fireFinalActions} />
                            </Modal.Body>
                        </Modal>

                        <Modal size="lg" show={showSingUpModal} onHide={() => setShowSingUpModal(false)}>
                            <Modal.Header closeButton> <Modal.Title> SignUp</Modal.Title></Modal.Header>
                            <Modal.Body>
                                <SignupForm setShowSingUpModal={setShowSingUpModal} setShowLoginModal={setShowLoginModal} fireFinalActions={fireFinalActions} />
                            </Modal.Body>
                        </Modal>

                        <Modal size="lg" centered show={showCreatePlanModal} onHide={() => setShowCreatePlanModal(false)}>
                            <Modal.Header closeButton> <Modal.Title>Create Plan</Modal.Title></Modal.Header>
                            <Modal.Body >
                                <PlanNewForm setShowCreatePlanModal={setShowCreatePlanModal} fireFinalActions={fireFinalActions} />
                            </Modal.Body>
                        </Modal>

                        <Modal show={showProfileModal} onHide={() => setShowProfileModal(false)} style={{ right: '0' }}>
                            <Modal.Header closeButton> <Modal.Title>Perfil de {user?.username}</Modal.Title></Modal.Header>
                            <Modal.Body >
                                <ProfilePage setShowProfileModal={setShowProfileModal} fireFinalActions={fireFinalActions} />
                            </Modal.Body>
                        </Modal>

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar >
    )
}


export default Navigation