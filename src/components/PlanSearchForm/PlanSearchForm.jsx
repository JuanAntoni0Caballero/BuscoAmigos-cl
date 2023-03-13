import { useEffect, useState } from "react"
import { useNavigate } from 'react-router-dom'
import { Container, Row, Col, Form, Button } from "react-bootstrap"
import planService from "../../services/plan.service"



const PlanSearchForm = ({ getPlans }) => {

    const [originPlan, setOriginPlan] = useState([])
    const [destinationPlan, setDestinationPlan] = useState([])
    const [planTypes, setPlanTypes] = useState([])

    const [planData, setPlanData] = useState({
        origin: '',
        destination: '',
        date: '',
        duration: '',
        typePlan: ''
    })

    useEffect(() => {
        loadPlanTypes()
        loadOriginsPlans()
        loadDestinationPlans()
        loadRandomPlans()
    }, [])

    const loadPlanTypes = () => {

        planService
            .getTypePlan()
            .then(({ data }) => setPlanTypes(data))
            .catch(err => console.log(err))
    }

    const loadOriginsPlans = () => {

        planService
            .getOriginPlan()
            .then(({ data }) => setOriginPlan(data))
            .catch(err => console.log(err))
    }

    const loadDestinationPlans = () => {

        planService
            .getDestinationPlan()
            .then(({ data }) => setDestinationPlan(data))
            .catch(err => console.log(err))
    }

    const loadRandomPlans = () => {

        planService
            .getRandomPlans()
            .then(({ data }) => {
                getPlans(data)
                console.log('EEEH', data)
            })
            .catch(err => console.log(err))
    }

    const handleInputChange = e => {
        let { value, name } = e.target

        if (value < 0) value = 0

        setPlanData({ ...planData, [name]: value })
    }

    const handleFormSubmit = e => {
        e.preventDefault()

        planService
            .getPlans(planData)
            .then(({ data }) => getPlans(data))
            .catch(err => console.log(err))
    }


    return (
        <Container>

            <Form onSubmit={handleFormSubmit}>

                <Row>
                    <Col md={{ span: 3 }}>
                        <Form.Group className="mb-3" controlId="origin">
                            <Form.Label>Origen</Form.Label>
                            <Form.Select value={planData.origin} onChange={handleInputChange} name="origin" >
                                <option value=''>Seleccionar...</option>
                                {
                                    originPlan?.map((elm, i) => {
                                        return <option key={`origin-${i}`} value={elm}>{elm}</option>
                                    })
                                }
                            </Form.Select>
                        </Form.Group>
                    </Col>

                    <Col md={{ span: 3 }}>
                        <Form.Group className="mb-3" controlId="destination">
                            <Form.Label>Destino</Form.Label>
                            <Form.Select value={planData.destination} onChange={handleInputChange} name="destination" >
                                <option value=''>Seleccionar...</option>
                                {
                                    destinationPlan?.map((elm, i) => {
                                        return <option key={`destination-${i}`} value={elm}>{elm}</option>
                                    })
                                }
                            </Form.Select>
                        </Form.Group>
                    </Col>

                    <Col md={{ span: 3 }}>
                        <Form.Group className="mb-3" controlId="typePlan">
                            <Form.Label>Tipo de viaje</Form.Label>
                            <Form.Select value={planData.typePlan} onChange={handleInputChange} name="typePlan">
                                <option value=''>Seleccionar...</option>
                                {
                                    planTypes?.map(elm => {
                                        return <option key={elm._id} value={elm._id}>{elm.typePlan}</option>
                                    })
                                }
                            </Form.Select>
                        </Form.Group>
                    </Col>

                    <Col md={{ span: 2 }}>
                        <Form.Group className="mb-3" controlId="date">
                            <Form.Label>Fecha de ida</Form.Label>
                            <Form.Control type="date" value={planData.date} onChange={handleInputChange} name="date" />
                        </Form.Group>
                    </Col>

                    <Col md={{ span: 1 }}>
                        <Form.Group className="mb-3" controlId="duration">
                            <Form.Label>Días</Form.Label>
                            <Form.Control type="number" value={planData.duration} onChange={handleInputChange} name="duration" />
                        </Form.Group>
                    </Col>
                </Row>

                <Row>
                    <Col md={{ span: 2 }}>
                        <div className="d-grid">
                            <Button variant="dark" type="submit">Buscar</Button>
                        </div>
                    </Col>
                </Row>
            </Form>

        </Container >
    )
}

export default PlanSearchForm