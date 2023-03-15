import { Container, Row, Col, Button, Offcanvas } from "react-bootstrap"
import { useEffect, useState, useContext } from "react"
import { AuthContext } from '../../contexts/auth.context'
import { useParams, Link } from "react-router-dom"
import planService from "../../services/plan.service"
import { useNavigate } from "react-router-dom"
import conversationService from '../../services/conversation.service'
import PruebaMessages from "../../components/ProfilePost/PruebaMessages"


const PlanDetailsPage = () => {

    const { user } = useContext(AuthContext)

    const { plan_id } = useParams()

    const navigate = useNavigate()

    const [plan, setPlan] = useState({})
    const [conversation, setConversation] = useState({ messages: [] })
    const [show, setShow] = useState(false)

    useEffect(() => {
        loadPlanData()
    }, [plan_id])

    const handleClose = () => setShow(false)
    const handleShow = () => {
        createConversation()
        setShow(true)
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
                                        <Button as="figure" variant="dark">Editar</Button>
                                    </Link>

                                    <Link to='/plan'>
                                        <Button as="figure" onClick={handleDeletePlan} variant="dark">Borrar</Button>
                                    </Link>

                                    <Link to="/plan">
                                        <Button as="figure" variant="dark">Volver</Button>
                                    </Link>
                                </>
                                :
                                <>
                                    <Link to="/plan">
                                        <Button as="figure" variant="dark">Volver</Button>
                                    </Link>

                                    <Link onClick={handleShow}>
                                        <Button as="figure" variant="dark" >Contactar</Button>
                                    </Link>
                                </>
                        }
                    </Col>

                    <Col md={{ span: 4 }}>
                        <img src={plan.image} style={{ width: '100%' }} alt='PlanImg' />
                    </Col>
                </Row >


            </Container >


            <Offcanvas show={show} onHide={handleClose}>

                <PruebaMessages conversation={conversation} setConversation={setConversation} />

            </Offcanvas >

        </>
    )
}

export default PlanDetailsPage
