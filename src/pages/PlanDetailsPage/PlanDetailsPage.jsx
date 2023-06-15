import { Container, Col, Button, Offcanvas, Modal, Row } from "react-bootstrap"
import { useEffect, useState, useContext } from "react"
import { AuthContext } from '../../contexts/auth.context'
import { useParams, Link } from "react-router-dom"
import planService from "../../services/plan.service"
import { useNavigate } from "react-router-dom"
import conversationService from '../../services/conversation.service'
import ChatMessages from "../../components/ChatMessages/ChatMessages"
import PlanEditForm from '../../components/PlanEditForm/PlanEditForm'
import './PlanDetailsPage.css'
import Loader from "../../components/Loader/Loader"


const PlanDetailsPage = () => {

    const { user } = useContext(AuthContext)
    const { plan_id } = useParams()

    const [plan, setPlan] = useState({})
    const [conversation, setConversation] = useState({})
    const [show, setShow] = useState(false)
    const [showEditPlanModal, setShowEditPlanModal] = useState(false)
    const [showDeleteModal, setShowDeleteModal] = useState(false)

    const handleCloseDelete = () => setShowDeleteModal(false)
    const handleShowDelete = () => setShowDeleteModal(true)

    const navigate = useNavigate()

    useEffect(() => {
        loadPlanData()
    }, [plan_id])

    const handleClose = () => setShow(false)

    const handleShow = () => {
        createConversation()
        setShow(true)
    }

    const fireFinalActions = () => {
        setShowEditPlanModal(false)
    }

    const handleDeletePlan = e => {

        planService
            .deletePlan(plan_id)
            .then(() => navigate('/'))
            .catch(err => console.log(err))
    }

    const loadPlanData = () => {

        planService
            .getOnePlan(plan_id)
            .then(({ data }) => setPlan(data))
            .catch(err => console.log(err))
    }

    const createConversation = () => {

        conversationService
            .createConversation(plan_id)
            .then(({ data }) => {
                loadConversationData(data._id)
            })
            .catch(err => console.log(err))
    }

    const loadConversationData = (conversation_id) => {

        conversationService
            .getConversation(conversation_id)
            .then(({ data }) => {
                setConversation(data)
            })
            .catch(err => console.log(err))
    }

    if (!plan) {
        return (
            <Loader />
        )
    }

    return (
        <>
            <Container>
                <Row>
                    <Col className="text-center" md={{ span: 12 }}>
                        <img className="DetailsImg" src={plan.image} alt='PlanImg' />
                    </Col>
                </Row>

                <h1 className="mb-4">{plan.title} </h1>
                <hr />

                <Row>
                    <Col md={{ span: 6 }}>
                        <Row>
                            <Col lg={{ span: 2 }}>
                                <h5 className="tripTitle">Origen:</h5>
                            </Col>
                            <Col lg={{ span: 10 }}>
                                <h5>{plan.origin}</h5>
                            </Col>
                        </Row>

                        <Row>
                            <Col lg={{ span: 2 }}>
                                <h5 className="tripTitle">Destino:</h5>
                            </Col>
                            <Col lg={{ span: 10 }}>
                                <h5>{plan.destination}</h5>
                            </Col>
                        </Row>

                        <Row>
                            <Col lg={{ span: 2 }}>
                                <h5 className="tripTitle">Fecha:</h5>
                            </Col>
                            <Col lg={{ span: 10 }}>
                                <h5>{plan.date}</h5>
                            </Col>
                        </Row>

                        <Row>
                            <Col lg={{ span: 2 }}>
                                <h5 className="tripTitle">Noches:</h5>
                            </Col>
                            <Col lg={{ span: 10 }}>
                                <h5>{plan.duration}</h5>
                            </Col>
                        </Row>
                    </Col>

                    <Col md={{ span: 6 }}>
                        <Row>
                            <h5 className="tripTitle">Descripción:</h5>
                            <Col md={{ span: 12 }}>
                                <h5 className="descriptionText">{plan.description}</h5>
                            </Col>
                        </Row>
                    </Col>
                </Row>

                <Row className="d-flex justify-content-center mt-5">

                    <Col md={2} xxl={1} className="mb-1">
                        <Link to='/'>
                            <Button className="detailsButton" as="figure" variant="dark">Inicio</Button>
                        </Link>
                    </Col>

                    {
                        user && (user._id === plan?.owner || user.role === 'ADMIN')
                        &&
                        <>
                            <Col md={2} xxl={1} className="mb-1">
                                <Link >
                                    <Button className="detailsButton" onClick={() => setShowEditPlanModal(true)} as="figure" variant="secondary">Editar</Button>
                                </Link>
                            </Col>

                            <Col md={2} xxl={1} className="mb-1">
                                <Link>
                                    <Button className="detailsButton" as="figure" onClick={handleShowDelete} variant="danger">Borrar</Button>
                                </Link>
                            </Col>
                        </>
                    }
                    {
                        user && (user._id !== plan?.owner)
                        &&
                        <>
                            <Col md={2} xxl={1} className="mb-1">
                                <Link onClick={handleShow}>
                                    <Button className="detailsButton" as="figure" variant="success">Contactar</Button>
                                </Link>
                            </Col>

                        </>
                    }
                </Row>
            </Container >

            <Offcanvas show={show} onHide={handleClose}>
                <ChatMessages conversation={conversation} setConversation={setConversation} />
            </Offcanvas >

            <Modal show={showDeleteModal} onHide={handleCloseDelete}>
                <Modal.Header closeButton>
                    <Modal.Title>Confirmacion de eliminación</Modal.Title>
                </Modal.Header>
                <Modal.Body>¿Estás seguro de que lo quieres eliminar?</Modal.Body>
                <Modal.Footer>
                    <Button variant="danger" onClick={handleDeletePlan} >
                        Borrar
                    </Button>
                    <Button variant="dark" onClick={handleCloseDelete}>
                        Cerrar
                    </Button>
                </Modal.Footer>
            </Modal>

            <Modal size="lg" centered show={showEditPlanModal} onHide={() => setShowEditPlanModal(false)}>
                <Modal.Header closeButton> <Modal.Title>Editar Plan</Modal.Title></Modal.Header>
                <Modal.Body>
                    <PlanEditForm setShowEditPlanModal={setShowEditPlanModal} fireFinalActions={fireFinalActions} />
                </Modal.Body>
            </Modal>
        </>
    )
}

export default PlanDetailsPage