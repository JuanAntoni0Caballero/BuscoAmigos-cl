import { useEffect, useState } from "react"
import { Container, Row, Col, Form, Button } from "react-bootstrap"
import { useNavigate, useParams } from 'react-router-dom'
import planService from "../../service/plan.service"


const PlanEditForm = () => {

    const [plan, setPlan] = useState({
        title: '',
        description: '',
        origin: '',
        destination: '',
        date: '',
        duration: '',
        typePlan: ''
    })

    useEffect(() => {
        typeOfPlans()
    }, [])

    const navigate = useNavigate()

    const { plan_id } = useParams()

    useEffect(() => {
        planService
            .getOnePlan(plan_id)
            .then(({ data }) => setPlan(data))
            .catch(err => console.log(err))

    }, [])

    const handleInputChange = e => {
        let { value, name } = e.target

        if (value < 0) value = 0

        setPlan({ ...plan, [name]: value })
    }

    const handleFormSubmit = e => {

        e.preventDefault()

        planService
            .editPlan(plan_id, plan)
            .then(() => navigate(`/plan`))
            .catch(err => console.log(err))
    }

    const [planTypes, setplanTypes] = useState(null)

    const typeOfPlans = () => {

        planService
            .getTypePlan()
            .then(type => setplanTypes(type.data))
            .catch(err => console.log(err))
    }

    return (

        <Container>


            <Form onSubmit={handleFormSubmit}>

                <Form.Group className="mb-3" controlId="title">
                    <Form.Label>Título</Form.Label>
                    <Form.Control type="text" value={plan.title} onChange={handleInputChange} name="title" />
                </Form.Group>

                <Row>
                    <Col md={{ span: 6 }}>
                        <Form.Group className="mb-3" controlId="origin">
                            <Form.Label>Origen</Form.Label>
                            <Form.Control type="text" value={plan.origin} onChange={handleInputChange} name="origin" />
                        </Form.Group>
                    </Col>

                    <Col md={{ span: 6 }}>
                        <Form.Group className="mb-3" controlId="destination">
                            <Form.Label>Destino</Form.Label>
                            <Form.Control type="text" value={plan.destination} onChange={handleInputChange} name="destination" />
                        </Form.Group>
                    </Col>
                </Row>

                <Row>
                    <Col md={{ span: 6 }}>
                        <Form.Group className="mb-3" controlId="date">
                            <Form.Label>Fecha de ida</Form.Label>
                            <Form.Control type="date" value={plan.date} onChange={handleInputChange} name="date" />
                        </Form.Group>
                    </Col>

                    <Col md={{ span: 6 }}>
                        <Form.Group className="mb-3" controlId="duration">
                            <Form.Label>Días de duración del viaje</Form.Label>
                            <Form.Control type="number" value={plan.duration} onChange={handleInputChange} name="duration" />
                        </Form.Group>
                    </Col>
                </Row>

                <Form.Group className="mb-3" controlId="typePlan">
                    <Form.Label>Tipo de viaje</Form.Label>
                    <Form.Select value={plan.typePlan} onChange={handleInputChange} name="typePlan">
                        {
                            planTypes?.map(elm => {
                                return <option key={elm._id} value={elm._id}>{elm.typePlan}</option>
                            })
                        }
                    </Form.Select>
                </Form.Group>

                <Form.Group className="mb-3" controlId="description">
                    <Form.Label>Descripción</Form.Label>
                    <Form.Control as="textarea" rows={3} value={plan.description} onChange={handleInputChange} name="description" />
                </Form.Group>

                <div className="d-grid">
                    <Button variant="dark" type="submit">Guardar</Button>
                </div>

            </Form>



        </Container >




    )
}

export default PlanEditForm