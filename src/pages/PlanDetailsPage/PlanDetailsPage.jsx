import { Container, Col, Button, Offcanvas, Modal, Row, Table } from "react-bootstrap"
import { useEffect, useState, useContext } from "react"
import { AuthContext } from '../../contexts/auth.context'
import { useParams, Link } from "react-router-dom"
import planService from "../../services/plan.service"
import { useNavigate } from "react-router-dom"
import conversationService from '../../services/conversation.service'
import ChatMessages from "../../components/ChatMessages/ChatMessages"
import PlanEditForm from '../../components/PlanEditForm/PlanEditForm'
import './PlanDetailsPage.css'



const PlanDetailsPage = () => {

    const { user } = useContext(AuthContext)
    const { plan_id } = useParams()

    const [plan, setPlan] = useState({})
    const [conversation, setConversation] = useState({ messages: [] })
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

    const createConversation = e => {

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


    return (

        <>

            <Container>

                <Row>
                    <Col className="text-center" md={{ span: 12 }}>
                        <img src={plan.image} alt='PlanImg' />
                    </Col>
                </Row>

                <Row>
                    <h1 className="mb-4">{plan.title} </h1>
                    <hr />

                    <div className="description" md={{ span: 6, offset: 1 }}>
                        <h6>Description:</h6>
                        <p>{plan.description}</p>
                        <h6>Origen:</h6>
                        <p>{plan.origin}</p>
                        <h6>Destino:</h6>
                        <p>{plan.destination}</p>
                        <h6>Fecha:</h6>
                        <p>{plan.date}</p>
                        <h6>Duración:</h6>
                        <p>{plan.duration}</p>
                        <hr />

                    </div>

                </Row>

                <div>
                    <Link to={`/`}>
                        <Button as="figure" variant="dark">Inicio</Button>
                    </Link>

                    {
                        user && (user._id === plan?.owner || user.role === 'ADMIN')
                        &&
                        <>
                            <Link >
                                <Button onClick={() => setShowEditPlanModal(true)} as="figure" variant="dark">Editar</Button>
                            </Link>

                            <Link>
                                <Button as="figure" onClick={handleShowDelete} variant="dark">Borrar</Button>
                            </Link>

                        </>
                    }
                    {
                        user && (user._id !== plan?.owner)
                        &&
                        <>
                            <Link onClick={handleShow}>
                                <Button as="figure" variant="dark">Contactar</Button>
                            </Link>

                        </>
                    }
                </div >


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
                    <Button variant="dark" onClick={handleDeletePlan} >
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
