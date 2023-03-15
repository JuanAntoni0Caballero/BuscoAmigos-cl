// import React, { useState, useEffect, useContext } from 'react'
// import Offcanvas from 'react-bootstrap/Offcanvas'
// import { Form, FloatingLabel, Button, Container } from 'react-bootstrap'
// import { useParams } from 'react-router-dom'
// import FormError from '../FormError/FormError'
// import { AuthContext } from '../../contexts/auth.context'
// import messageService from '../../services/message.service'
// import conversationService from '../../services/conversation.service'



// const ProfilePost = () => {

//     const { user } = useContext(AuthContext)

//     const [messageData, setMessageData] = useState({
//         content: '',
//         owner: user._id
//     })
//     const [conversation, setConversation] = useState({})
//     const [show, setShow] = useState(false)
//     const [errors, setErrors] = useState([])

//     const { conversation_id } = useParams()

//     const handleClose = () => setShow(false)
//     const handleShow = () => setShow(true)

//     useEffect(() => {
//         loadConversationData()
//     }, [])

//     const loadConversationData = () => {

//         conversationService
//             .getConversation(conversation_id)
//             .then(({ data }) => {
//                 setConversation(data)
//             })
//             .catch(err => console.log(err))
//     }

//     const handleInputChange = e => {
//         let { value } = e.target

//         setMessageData({ ...messageData, content: value })
//     }

//     const handleFormSubmit = (event) => {
//         if (event.key === 'Enter') {
//             createNewMessage()
//             setMessageData({ ...messageData, content: "" })

//         }
//     }

//     const createNewMessage = () => {

//         messageService
//             .createMessage(conversation_id, messageData)
//             .then(() => loadConversationData())
//             .catch(err => setErrors(err.response.data.errorMessages))
//     }


//     return (

//         <Container>

//             <Button variant="success" onClick={handleShow}>
//                 {conversation._id}
//             </Button>

//             <Offcanvas show={show} onHide={handleClose}>
//                 <Offcanvas.Header closeButton>
//                     <Offcanvas.Title>plan.title</Offcanvas.Title>
//                 </Offcanvas.Header>
//                 <Offcanvas.Body>

//                     <h3>Messages</h3>

//                     <div>
//                         {
//                             conversation.messages?.map(elm => {

//                                 if (user._id === elm.owner._id) {

//                                     return (
//                                         <div key={elm._id}>
//                                             <p style={{ color: 'green', wordBreak: 'break-all' }}>{user.username}</p>
//                                             <p>{elm.content}</p>
//                                         </div>)
//                                 }
//                                 else {
//                                     return (
//                                         <div key={elm._id}>
//                                             <p style={{ color: 'red', wordBreak: 'break-all' }}>{elm.owner.username}</p>
//                                             <p> {elm.content}</p>
//                                         </div>
//                                     )
//                                 }
//                             })
//                         }
//                     </div>

//                     <FloatingLabel controlId="message" label="New message">
//                         <Form.Control value={messageData.content} onKeyDown={handleFormSubmit}
//                             onChange={handleInputChange} name="content"
//                             as="textarea"
//                         />
//                     </FloatingLabel>

//                 </Offcanvas.Body>



//                 {errors.length > 0 && <FormError>{errors.map(elm => <p key={elm._id}>{elm}</p>)}</FormError>}

//             </Offcanvas>


//         </Container >
//     )


// }

// export default ProfilePost