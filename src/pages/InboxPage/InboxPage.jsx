import { useEffect, useState, useContext } from "react"
import { Button, Col, Container, Offcanvas } from "react-bootstrap"
import Table from 'react-bootstrap/Table'
import { Link } from "react-router-dom"
import ChatMessages from "../../components/ChatMessages/ChatMessages"
import { AuthContext } from "../../contexts/auth.context"
import conversationService from "../../services/conversation.service"
import './InboxPage.css'


const ImboxPage = () => {

    const { user } = useContext(AuthContext)

    const [conversations, setConversations] = useState([])
    const [conversation, setConversation] = useState([])
    const [show, setShow] = useState(false)

    useEffect(() => {
        loadConversations()
    }, [])

    useEffect(() => {
        loadConversations()
    }, [conversation])

    const handleClose = () => setShow(false)
    const handleShow = (conversation_id) => {
        loadConversationData(conversation_id)
        setShow(true)
    }

    const loadConversations = () => {

        conversationService
            .getAllConversations()
            .then(({ data }) => {
                setConversations(data)
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
        <Container className="mt-5">

            <Table striped className="table">
                <thead>
                    <tr>
                        <th className="tablePlan">Título del plan</th>
                        <th className="tableName">Nombre del usuario</th>
                        <th className="tableMsg">Mensajes</th>
                    </tr>
                </thead>

                <tbody>
                    {

                        conversations?.map(({ messages, members, plan, _id }) => {

                            const [member1, member2] = members
                            let conversationStyle = {}
                            let conversationButton = {}
                            let conversationUser = ""

                            if (messages?.some(elm => !elm.read)) {
                                conversationStyle = 'success'
                                conversationButton = 'Mensaje nuevo'
                            } else {
                                conversationStyle = 'dark'
                                conversationButton = 'Ver mensajes'
                            }

                            if (member2._id === user._id) {
                                conversationUser = member1.username
                            } else {
                                conversationUser = member2.username
                            }


                            return (
                                <>
                                    <tr key={_id}>
                                        <td>{plan?.title}</td>
                                        <td className="tableName">{conversationUser}</td>
                                        <td className="tableMsg">
                                            <Link onClick={() => handleShow(_id)}>
                                                <Button variant={conversationStyle} as="figure">{conversationButton}</Button>
                                            </Link>
                                        </td>
                                    </tr>


                                    <Offcanvas show={show} onHide={handleClose}>
                                        <ChatMessages conversation={conversation} setConversation={setConversation} />
                                    </Offcanvas >
                                </>
                            )
                        })
                    }
                </tbody>
            </Table>
        </Container>
    )
}

export default ImboxPage