import { useContext, useEffect, useState } from "react"
import { Offcanvas, Form, FloatingLabel } from "react-bootstrap"
import { AuthContext } from "../../contexts/auth.context"
import conversationService from '../../services/conversation.service'
import messageService from "../../services/message.service"
import FormError from "../FormError/FormError"


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


    return (
        <>
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>plan.title</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>

                <h3>Messages</h3>

                <div>
                    {
                        conversation.messages?.map(elm => {

                            if (user._id === elm.owner._id) {
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
        </>
    )
}

export default ChatMessages


