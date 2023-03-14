import { Container, Row, Col, Button, Offcanvas, Form, FloatingLabel } from "react-bootstrap"
import { useEffect, useState, useContext } from "react"
import { AuthContext } from '../../contexts/auth.context'
import { useParams, Link } from "react-router-dom"
import planService from "../../services/plan.service"
import { useNavigate } from "react-router-dom"
import conversationService from '../../services/conversation.service'
import Loader from "../../components/Loader/Loader"
import FormError from "../../components/FormError/FormError"
import messageService from "../../services/message.service"
import PruebaMessages from "../../components/ProfilePost/PruebaMessages"


const PlanDetailsPage = () => {


    const [plan, setPlan] = useState({})

    const { user } = useContext(AuthContext)


    const { plan_id } = useParams()

    const navigate = useNavigate()

    const [messageData, setMessageData] = useState({
        content: '',
        owner: user._id
    })

    const [conversation, setConversation] = useState({})

    const [show, setShow] = useState(false)
    const [errors, setErrors] = useState([])

    const handleClose = () => setShow(false)
    const handleShow = () => {
        createConversation()
        setShow(true)
    }

    useEffect(() => {
        loadPlanData()
    }, [plan_id])

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
                setConversation(data)
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

    const handleInputChange = e => {
        let { value } = e.target

        setMessageData({ ...messageData, content: value })
    }

    const handleFormSubmit = (event) => {
        if (event.key === 'Enter') {
            createNewMessage()
            setMessageData({ ...messageData, content: "" })
        }
    }

    const createNewMessage = () => {

        messageService
            .createMessage(conversation._id, messageData)
            .then(() => loadConversationData(conversation._id))
            .catch(err => setErrors(err.response.data.errorMessages))
    }


    return (

        <>

            <Container>
                <h1 className="mb-4">{plan.title} </h1>
                <hr />
                <Row>

                    <Col md={{ span: 6, offset: 1 }}>
                        <h6>Description</h6>
                        <p>{plan.description}</p>
                        <h6>Origen</h6>
                        <p>{plan.origin}</p>
                        <h6>Destino</h6>
                        <p>{plan.destination}</p>
                        <h6>Fecha</h6>
                        <p>{plan.date}</p>
                        <h6>Duración</h6>
                        <p>{plan.duration}</p>
                        <hr />

                        {
                            user._id === plan?.owner || user.role === 'ADMIN'
                                ?
                                <>
                                    <Link to={`/planEdit/${plan_id}`}>
                                        <Button as="figure" variant="dark">Edit</Button>
                                    </Link>

                                    <Link to='/plan'>
                                        <Button as="figure" onClick={handleDeletePlan} variant="dark">Delete</Button>
                                    </Link>

                                    <Link to="/plan">
                                        <Button as="figure" variant="dark">Go back</Button>
                                    </Link>
                                </>
                                :
                                <>
                                    <Link to="/plan">
                                        <Button as="figure" variant="dark">Go back</Button>
                                    </Link>

                                    <Link onClick={handleShow}>
                                        <Button as="figure" variant="dark" >Contacta con el creador</Button>
                                    </Link>
                                </>
                        }
                    </Col>

                    <Col md={{ span: 4 }}>
                        <img src={plan.typePlan?.picture} style={{ width: '100%' }} alt='PlanImg' />
                    </Col>
                </Row >

                {/* <PruebaMessages handleClose={handleClose} /> */}

            </Container >


            <Offcanvas show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>plan.title</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>

                    <h3>Messages</h3>

                    <div>
                        {
                            conversation.messages?.map(elm => {

                                if (user._id === elm.owner) {
                                    return (
                                        <div key={elm._id}>
                                            <p style={{ color: 'green', wordBreak: 'break-all' }}>{elm.owner.username}</p>
                                            <p>{elm.content}</p>
                                        </div>
                                    )
                                } else {
                                    return (
                                        <div key={elm._id}>
                                            <p style={{ color: 'red', wordBreak: 'break-all' }}>{elm.owner.username}</p>
                                            <p> {elm.content}</p>
                                        </div>
                                    )
                                }
                            })
                        }
                    </div>

                    <FloatingLabel controlId="message" label="New message">
                        <Form.Control value={messageData.content} onKeyDown={handleFormSubmit}
                            onChange={handleInputChange} name="content"
                            as="textarea"
                        />
                    </FloatingLabel>

                </Offcanvas.Body>

                {errors.length > 0 && <FormError>{errors.map(elm => <p key={elm._id}>{elm}</p>)}</FormError>}

            </Offcanvas>

        </>
    )
}

export default PlanDetailsPage
