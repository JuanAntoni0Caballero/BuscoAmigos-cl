import { useEffect, useState, useContext } from "react"
import { Button } from "react-bootstrap"
import Table from 'react-bootstrap/Table'
import { Link } from "react-router-dom"
import { AuthContext } from "../../contexts/auth.context"
import conversationService from "../../services/conversation.service"



const ImboxPage = () => {

    const [conversation, setConversation] = useState([])

    useEffect(() => {
        loadConversations()
    }, [])

    const { user } = useContext(AuthContext)

    const loadConversations = () => {

        conversationService
            .getAllConversations()
            .then(({ data }) => setConversation(data))
            .catch(err => console.log(err))
    }
    console.log(conversation)

    return (
        <>
            <h1>Pene</h1>

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
                        conversation?.map(({ messages, members, plan, _id }) => {
                            const [member1, member2] = members
                            let conversationStyle = {}
                            let conversationUser = ""

                            if (messages?.some(elm => elm.read)) {
                                conversationStyle = { backgroundColor: 'grey' }
                            } else {
                                conversationStyle = { backgroundColor: 'green' }
                            }

                            if (member2._id == user._id) {
                                conversationUser = member1.username
                            } else {
                                conversationUser = member2.username
                            }


                            return (
                                <tr >
                                    <td>{plan?.title}</td>
                                    <td>{conversationUser}</td>
                                    <td>
                                        <Link key={_id} to={`/inbox/${_id}`}>
                                            <Button as="figure" variant="dark">Mensajes</Button>
                                        </Link>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </Table>
        </>
    )
}

export default ImboxPage





