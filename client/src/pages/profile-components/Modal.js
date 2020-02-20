// import React, { Component } from "react";
// import { Button, Col, Row, } from 'react-bootstrap';
// import "./style.css";

// class ModalFeature extends Component {
//     constructor(props) {
//         super(props);
//         this.handleSave = this.handleSave.bind(this);
//         this.state = {
//             email: "",
//             firstName: "",
//             lastName: "",
//             password: ""
//         }
//     }
//     // Called when the component may be receiving new props. React may call this even if props have not changed,
//     // so be sure to compare new and existing props if you only want to handle changes.
//     componentWillReceiveProps(nextProps) {
//         this.setState({
//             email: nextProps.email,
//             firstName: nextProps.firstName, 
//             lastName: nextProps.lastName,
//             password: nextProps.password,
//         });
//     }
//     emailHandler(e) {
//         this.setState({ email: e.target.email });
//     }
//     firstNameHandler(e) {
//         this.setState({ firstName: e.target.firstName });
//     }
//     lastNameHandler(e) {
//         this.setState({ lastName: e.target.lastName });
//     }
//     passwordHandler(e) {
//         this.setState({ password: e.target.password });
//     }
//     handleSave() {
//         const userInfo = this.state;
//         this.props.saveModalDetails(userInfo)
//     }

//     render(){ 
//         return (
//             <>
//                 <Modal show={show}
//                     onHide={handleClose}>
//                     <Modal.Header closeButton>
//                         <Modal.Title>Edit Profile</Modal.Title>
//                     </Modal.Header>
//                     <Modal.Body>
    
//                         <Form.Group as={Row}
//                             controlId="formPlaintext">
//                             <Form.Label column sm="2">Email Address</Form.Label>
//                             <Col sm="10">
//                                 <Form.Control type="text"/><input email={this.state.email} onChange={(e) => this.emailHandler(e)} />
//                             </Col>
//                         </Form.Group>
    
//                         <Form.Group as={Row}
//                             controlId="formPlaintext">
//                             <Form.Label column sm="2">First Name</Form.Label>
//                             <Col sm="10">
//                                 <Form.Control type="text"/>
//                             </Col>
//                         </Form.Group>
    
//                         <Form.Group as={Row}
//                             controlId="formPlaintext">
//                             <Form.Label column sm="2">Last Name</Form.Label>
//                             <Col sm="10">
//                                 <Form.Control type="text"/>
//                             </Col>
//                         </Form.Group>
    
//                         <Form.Group as={Row}
//                             controlId="formPlaintext">
//                             <Form.Label column sm="2">Password</Form.Label>
//                             <Col sm="10">
//                                 <Form.Control type="text"/> 
//                             </Col>
//                         </Form.Group>
    
//                     </Modal.Body>
    
//                     <Modal.Footer>
//                         <Button className="secondary"onClick={handleClose} data-dismiss="modal">Close
//                         </Button>
    
//                         <Button className="primary"data-dismiss="modal" onClick={() => { this.handleSave() }}> Save Changes
//                         </Button>
    
//                     </Modal.Footer>
    
//                 </Modal>
//             </>
//         );
//     }
// }  

// export default ModalFeature;