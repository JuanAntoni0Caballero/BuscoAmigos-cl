// import { useEffect, useState } from "react"
// import { Container, Row, Col, Form, Button } from "react-bootstrap"
// import { useNavigate } from 'react-router-dom'
// import planService from "../../service/plan.service"


// const PlanEditForm = () => {

//     const [plan, setPlan] = useState({})


//     const { plan_id } = useParams()

//     useEffect(() => {
//         planService
//             .getOnePlan(plan_id)
//             .then(({ data }) => setPlan(data))
//             .catch(err => console.log(err))

//     }, [])

//     return (

//         <Container>
//             <h1 className="mb-4">Detalles de {plan.title} </h1>
//             <hr />

//             <Row>

//                 <Col md={{ span: 6, offset: 1 }}>
//                     <h5>Description</h5>
//                     <p>{plan.description}</p>
//                     <hr />


//                     <Link to={`/plan/${plan_id}`}>
//                         <Button as="figure" variant="dark">Volver atras</Button>
//                     </Link>
//                 </Col>

//                 <Col md={{ span: 4 }}>
//                     <img src='plan.imageURL' style={{ width: '100%' }} />
//                 </Col>

//             </Row >




//             <Form onSubmit={handleFormSubmit}>

//                 <Form.Group className="mb-3" controlId="title">
//                     <Form.Label>Título</Form.Label>
//                     <Form.Control type="text" value={planData.title} onChange={handleInputChange} name="title" />
//                 </Form.Group>

//                 <Row>
//                     <Col md={{ span: 6 }}>
//                         <Form.Group className="mb-3" controlId="origin">
//                             <Form.Label>Origen</Form.Label>
//                             <Form.Control type="text" value={planData.origin} onChange={handleInputChange} name="origin" />
//                         </Form.Group>
//                     </Col>

//                     <Col md={{ span: 6 }}>
//                         <Form.Group className="mb-3" controlId="destination">
//                             <Form.Label>Destino</Form.Label>
//                             <Form.Control type="text" value={planData.destination} onChange={handleInputChange} name="destination" />
//                         </Form.Group>
//                     </Col>
//                 </Row>

//                 <Row>
//                     <Col md={{ span: 6 }}>
//                         <Form.Group className="mb-3" controlId="date">
//                             <Form.Label>Fecha de ida</Form.Label>
//                             <Form.Control type="date" value={planData.date} onChange={handleInputChange} name="date" />
//                         </Form.Group>
//                     </Col>

//                     <Col md={{ span: 6 }}>
//                         <Form.Group className="mb-3" controlId="duration">
//                             <Form.Label>Días de duración del viaje</Form.Label>
//                             <Form.Control type="number" value={planData.duration} onChange={handleInputChange} name="duration" />
//                         </Form.Group>
//                     </Col>
//                 </Row>

//                 <Form.Group className="mb-3" controlId="typePlan">
//                     <Form.Label>Tipo de viaje</Form.Label>
//                     <Form.Select value={planData.typePlan} onChange={handleInputChange} name="typePlan">
//                         {
//                             planTypes?.map(elm => {
//                                 return <option key={elm._id} value={elm._id}>{elm.typePlan}</option>
//                             })
//                         }
//                     </Form.Select>
//                 </Form.Group>

//                 <Form.Group className="mb-3" controlId="description">
//                     <Form.Label>Descripción</Form.Label>
//                     <Form.Control as="textarea" rows={3} value={planData.description} onChange={handleInputChange} name="description" />
//                 </Form.Group>

//                 <div className="d-grid">
//                     <Button variant="dark" type="submit">Guardar</Button>
//                 </div>

//             </Form>



//         </Container >




//     )
// }

// export default PlanEditForm