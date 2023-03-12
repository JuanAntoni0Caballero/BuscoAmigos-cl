import { useEffect, useState } from "react"
import { Button } from "react-bootstrap"
import conversationService from "../../services/conversation.service"
import { Link } from "react-router-dom"


const ImboxPage = () => {

    const [conversation, setConversation] = useState([])

    useEffect(() => {
        loadConversationData()
    }, [])

    const loadConversationData = () => {

        conversationService
            .getAllConversations()
            .then(({ data }) => setConversation(data))
            .catch(err => console.log(err))
    }


    return (
        <>
            <h1>Pene</h1>
            {

                conversation?.map(elm => {
                    return (
                        <Link to={`/inbox/${elm._id}`}>
                            <div>
                                <Button as="figure" variant="dark">{elm.plan.title}</Button>
                            </div>
                        </Link>
                    )
                })
            }
        </>
    )
}

export default ImboxPage