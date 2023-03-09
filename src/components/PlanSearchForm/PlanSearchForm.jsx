import { useState, useContext } from "react"
import { Container, Row, Col, Form, Button } from "react-bootstrap"
import { Link } from "react-router-dom"
import { AuthContext } from "../../context/auth.context"
import authService from "../../service/auth.service"


const PlanSearchForm = () => {

    // const [loginData, setLoginData] = useState({
    //     email: '',
    //     password: ''
    // })

    // const { authenticateUser, user } = useContext(AuthContext)

    // const handleInputChange = e => {
    //     const { value, name } = e.target
    //     setLoginData({ ...loginData, [name]: value })
    //}

    // const handleSubmit = e => {

    //     e.preventDefault()

    //     authService
    //         .login(loginData)
    //         .then(({ data }) => {
    //             localStorage.setItem('authToken', data.authToken)
    //             authenticateUser()
    //         })
    //         .catch(err => console.log(err))
    // }


    return (

        <h1>JUAANAN</h1>

        // <Form onSubmit={handleFormSubmit}>

        //     <Row>
        //         <Col md={{ span: 6 }}>
        //             <Form.Group className="mb-3" controlId="origin">
        //                 <Form.Label>Origen</Form.Label>
        //                 <Form.Control type="text" value={plan.origin} onChange={handleInputChange} name="origin" />
        //             </Form.Group>
        //         </Col>

        //         <Col md={{ span: 6 }}>
        //             <Form.Group className="mb-3" controlId="destination">
        //                 <Form.Label>Destino</Form.Label>
        //                 <Form.Control type="text" value={plan.destination} onChange={handleInputChange} name="destination" />
        //             </Form.Group>
        //         </Col>
        //     </Row>

        //     <Row>
        //         <Col md={{ span: 6 }}>
        //             <Form.Group className="mb-3" controlId="date">
        //                 <Form.Label>Fecha de ida</Form.Label>
        //                 <Form.Control type="date" value={plan.date} onChange={handleInputChange} name="date" />
        //             </Form.Group>
        //         </Col>

        //         <Col md={{ span: 6 }}>
        //             <Form.Group className="mb-3" controlId="duration">
        //                 <Form.Label>Días de duración del viaje</Form.Label>
        //                 <Form.Control type="number" value={plan.duration} onChange={handleInputChange} name="duration" />
        //             </Form.Group>
        //         </Col>
        //     </Row>

        //     <Form.Group className="mb-3" controlId="typePlan">
        //         <Form.Label>Tipo de viaje</Form.Label>
        //         <Form.Select value={plan.typePlan} onChange={handleInputChange} name="typePlan">
        //             {
        //                 planTypes?.map(elm => {
        //                     return <option key={elm._id} value={elm._id}>{elm.typePlan}</option>
        //                 })
        //             }
        //         </Form.Select>
        //     </Form.Group>

        //     <div className="d-grid">
        //         <Button variant="dark" type="submit">Guardar</Button>
        //     </div>

        // </Form>
    )
}

export default PlanSearchForm