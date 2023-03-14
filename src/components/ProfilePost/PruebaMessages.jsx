const PruebaMessages = () => {




    // return (

    //     <Offcanvas show={show} onHide={handleClose}>
    //         <Offcanvas.Header closeButton>
    //             <Offcanvas.Title>plan.title</Offcanvas.Title>
    //         </Offcanvas.Header>
    //         <Offcanvas.Body>

    //             <h3>Messages</h3>

    //             <div>
    //                 {
    //                     conversation.messages?.map(elm => {

    //                         if (user._id === elm.owner) {
    //                             return (
    //                                 <div key={elm._id}>
    //                                     <p style={{ color: 'green', wordBreak: 'break-all' }}>{elm.owner.username}</p>
    //                                     <p>{elm.content}</p>
    //                                 </div>
    //                             )
    //                         } else {
    //                             return (
    //                                 <div key={elm._id}>
    //                                     <p style={{ color: 'red', wordBreak: 'break-all' }}>{elm.owner.username}</p>
    //                                     <p> {elm.content}</p>
    //                                 </div>
    //                             )
    //                         }
    //                     })
    //                 }
    //             </div>

    //             <FloatingLabel controlId="message" label="New message">
    //                 <Form.Control value={messageData.content} onKeyDown={handleFormSubmit}
    //                     onChange={handleInputChange} name="content"
    //                     as="textarea"
    //                 />
    //             </FloatingLabel>

    //         </Offcanvas.Body>

    //         {errors.length > 0 && <FormError>{errors.map(elm => <p key={elm._id}>{elm}</p>)}</FormError>}

    //     </Offcanvas>
    // )
}

export default PruebaMessages


