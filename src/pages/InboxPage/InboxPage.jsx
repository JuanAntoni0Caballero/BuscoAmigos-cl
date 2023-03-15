import { useEffect, useState, useContext } from "react"
import { Button, Offcanvas } from "react-bootstrap"
import Table from 'react-bootstrap/Table'
import { Link } from "react-router-dom"
import PruebaMessages from "../../components/ProfilePost/PruebaMessages"
import { AuthContext } from "../../contexts/auth.context"
import conversationService from "../../services/conversation.service"


const ImboxPage = () => {

    const { user } = useContext(AuthContext)

    const [conversations, setConversations] = useState([])
    const [conversation, setConversation] = useState([])
    const [show, setShow] = useState(false)

    useEffect(() => {
        loadConversations()
    }, [])

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
        <>
            <h1>Mis conversaciones</h1>

            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Plan</th>
                        <th>Nombre</th>
                        <th>Ver mensajes</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        conversations?.map(({ messages, members, plan, _id }) => {

                            const [member1, member2] = members
                            let conversationStyle = {}
                            let conversationUser = ""

                            if (messages?.some(elm => elm.read)) {
                                conversationStyle = { backgroundColor: 'grey' }
                            } else {
                                conversationStyle = { backgroundColor: 'green' }
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
                                        <td>{conversationUser}</td>
                                        <td>
                                            <Link onClick={() => handleShow(_id)}>
                                                <Button style={conversationStyle} as="figure" variant="dark">Mensajes</Button>
                                            </Link>
                                        </td>
                                    </tr>


                                    <Offcanvas show={show} onHide={handleClose}>
                                        <PruebaMessages conversation={conversation} setConversation={setConversation} />

                                    </Offcanvas >
                                </>
                            )
                        })
                    }
                </tbody>
            </Table>
        </>
    )
}

export default ImboxPage