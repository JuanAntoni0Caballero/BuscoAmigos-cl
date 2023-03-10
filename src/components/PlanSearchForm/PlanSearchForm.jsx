import { useEffect, useState } from "react"
import { Container, Row, Col, Form, Button } from "react-bootstrap"



const PlanSearchForm = () => {

    const [plan, setPlan] = useState({
        title: '',
        description: '',
        origin: '',
        destination: '',
        date: '',
        duration: '',
        typePlan: ''
    })

    const [planTypes, setplanTypes] = useState(null)

    const handleInputChange = e => {

    }

    const handleFormSubmit = e => {

    }


    return (
        <Container>


            <Form onSubmit={handleFormSubmit}>

                <Row>
                    <Col md={{ span: 2 }}>
                        <Form.Group className="mb-3" controlId="origin">
                            <Form.Label>Origen</Form.Label>
                            <Form.Control type="text" value={plan.origin} onChange={handleInputChange} name="origin" />
                        </Form.Group>
                    </Col>

                    <Col md={{ span: 2 }}>
                        <Form.Group className="mb-3" controlId="destination">
                            <Form.Label>Destino</Form.Label>
                            <Form.Control type="text" value={plan.destination} onChange={handleInputChange} name="destination" />
                        </Form.Group>
                    </Col>

                    <Col md={{ span: 2 }}>
                        <Form.Group className="mb-3" controlId="date">
                            <Form.Label>Fecha de ida</Form.Label>
                            <Form.Control type="date" value={plan.date} onChange={handleInputChange} name="date" />
                        </Form.Group>
                    </Col>

                    <Col md={{ span: 2 }}>
                        <Form.Group className="mb-3" controlId="duration">
                            <Form.Label>Días</Form.Label>
                            <Form.Control type="number" value={plan.duration} onChange={handleInputChange} name="duration" />
                        </Form.Group>
                    </Col>

                    <Col md={{ span: 2 }}>
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
                    </Col>

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