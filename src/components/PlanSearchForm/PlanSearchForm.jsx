import { useEffect, useState } from "react"
import { Container, Row, Col, Form, Button } from "react-bootstrap"
import planService from "../../services/plan.service"


const PlanSearchForm = ({ getPlans }) => {

    const [originPlan, setOriginPlan] = useState([])
    const [destinationPlan, setDestinationPlan] = useState([])
    const [planTypes, setPlanTypes] = useState([])
    const [planSort, setPlanSort] = useState('sortOrigin=1')
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
                setPlanData({
                    origin: '',
                    destination: '',
                    date: '',
                    duration: '',
                    typePlan: ''
                })
                getPlans(data)
            })
            .catch(err => console.log(err))
    }

    const handleInputChange = e => {
        let { value, name } = e.target

        if (value < 0) value = 0

        setPlanData({ ...planData, [name]: value })
    }

    const handleInputSortChange = e => {
        let { value } = e.target

        setPlanSort(value)
    }

    const handleFormSubmit = e => {
        e.preventDefault()

        planService
            .getAllPlans(planData, planSort)
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
                            <Form.Control type="date" value={planData.date} onChange={handleInputChange} name="date" min={new Date().toISOString().split("T")[0]} />
                        </Form.Group>
                    </Col>

                    <Col md={{ span: 1 }}>
                        <Form.Group className="mb-3" controlId="duration">
                            <Form.Label>Noches</Form.Label>
                            <Form.Control type="number" value={planData.duration} onChange={handleInputChange} name="duration" />
                        </Form.Group>
                    </Col>
                </Row>

                <Row className="justify-content-center">
                    <Col md={{ span: 3 }}>
                        <Form.Group className="mb-3" controlId="sort">
                            <Form.Label>Ordenar por:</Form.Label>
                            <Form.Select value={planSort} onChange={handleInputSortChange} name="sort" >
                                <option value='sortOrigin=1'>Origen ascendente</option>
                                <option value='sortOrigin=%2D1'>Origen descendente</option>
                                <option value='sortDestination=1'>Destino ascendente</option>
                                <option value='sortDestination=%2D1'>Destino descendente</option>
                                <option value='sortDate=1'>Fecha ascendente</option>
                                <option value='sortDate=%2D1'>Fecha descendente</option>
                                <option value='sortDuration=1'>Noches ascendente</option>
                                <option value='sortDuration=%2D1'>Noches descendente</option>
                            </Form.Select>
                        </Form.Group>
                    </Col>
                </Row>

                <Row className="justify-content-center mt-3 mb-4">
                    <Col md={{ span: 3 }}>
                        <div className="d-grid">
                            <Button variant="dark" type="submit">Buscar</Button>
                        </div>
                    </Col>

                    <Col md={{ span: 1 }}></Col>

                    <Col md={{ span: 3 }}>
                        <div className="d-grid">
                            <Button variant="dark" onClick={() => loadRandomPlans()}>Borrar filtros</Button>
                        </div>
                    </Col>
                </Row>
            </Form>

        </Container >
    )
}

export default PlanSearchForm