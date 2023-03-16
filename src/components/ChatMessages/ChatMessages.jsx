import { useContext, useEffect, useRef, useState } from "react"
import { Offcanvas, Form, FloatingLabel, Button } from "react-bootstrap"
import { Link } from "react-router-dom"
import { AuthContext } from "../../contexts/auth.context"
import conversationService from '../../services/conversation.service'
import messageService from "../../services/message.service"
import FormError from "../FormError/FormError"
import './ChatMessages.css'
import Loader from './../Loader/Loader'

const ChatMessages = ({ conversation, setConversation }) => {

    const { user } = useContext(AuthContext)

    const [messageData, setMessageData] = useState({
        content: '',
        owner: user._id
    })
    const [errors, setErrors] = useState([])

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

    const sendMessage = (event) => {

        createNewMessage()
        setMessageData({ ...messageData, content: "" })

    }

    const createNewMessage = () => {

        messageService
            .createMessage(conversation._id, messageData)
            .then(() => loadConversationData(conversation._id))
            .catch(err => setErrors(err.response.data.errorMessages))
    }

    const loadConversationData = (conversation_id) => {

        conversationService
            .getConversation(conversation_id)
            .then(({ data }) => {
                setConversation(data)
            })
            .catch(err => console.log(err))
    }


    if (!conversation) {
        return (
            <Loader />
        )
    }


    return (
        <>
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>{conversation.plan?.title}</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>

                <FloatingLabel controlId="message" label="New message" className="ChatForm">
                    <Form.Control value={messageData.content} onKeyDown={handleFormSubmit}
                        onChange={handleInputChange} name="content"
                        as="textarea" />
                </FloatingLabel>

                <Link>
                    <Button variant='dark' className="sendButton" onClick={sendMessage}> Enviar</Button>
                </Link>



                <div className="Chat">
                    {
                        conversation.messages?.map(elm => {
                            if (user._id === elm.owner._id) {
                                return (
                                    <div key={elm._id} className="ChatSender">
                                        <p className="ChatName">{elm.owner.username}</p>
                                        <p className="ChatText">{elm.content}</p>
                                    </div>
                                )
                            } else {
                                return (
                                    <div key={elm._id} className="ChatReciver">
                                        <p className="ChatName">{elm.owner.username}</p>
                                        <p className="ChatText">{elm.content}</p>
                                    </div>
                                )
                            }
                        })
                    }
                </div>



            </Offcanvas.Body>

            {errors.length > 0 && <FormError>{errors.map(elm => <p key={elm._id}>{elm}</p>)}</FormError>}
        </>
    )
}

export default ChatMessages


