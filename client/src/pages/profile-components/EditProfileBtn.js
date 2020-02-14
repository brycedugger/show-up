import React, {useState, Component} from "react";
import {Button, Modal, Form, Row, Col } from 'react-bootstrap';
import "./style.css"

class ModalFeature extends Component {
    constructor(props) {
        super(props);
        this.handleSave = this.handleSave.bind(this);
        this.state = {
            firstName: "",
            lastName: "",
            userName: ""
        }
    }

    // Called when the component may be receiving new props. React may call this even if props have not changed,
    // so be sure to compare new and existing props if you only want to handle changes.
    componentWillReceiveProps(nextProps) {
        this.setState({firstName: nextProps.firstName, lastName: nextProps.lastName, userName: nextProps.userName});
    }

    firstNameHandler(e) {
        this.setState({firstName: e.target.value});
    }

    lastNameHandler(e) {
        this.setState({lastName: e.target.value});
    }

    userNameHandler(e) {
        this.setState({userName: e.target.value});
    }

    handleSave() {
        const userInfo = this.state;
        this.props.saveModalDetails(userInfo)
    }

}

function EditProfileBtn() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="primary"
                onClick={handleShow}>
                Edit Profile
            </Button>

            <Modal show={show}
                onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit Profile</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Group as={Row}
                        controlId="formPlaintextPassword">
                        <Form.Label column sm="2">
                            First Name
                        </Form.Label>
                        <Col sm="10">
                            <Form.Control type="password" placeholder=""/>
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row}
                        controlId="formPlaintextPassword">
                        <Form.Label column sm="2">
                            Last Name
                        </Form.Label>
                        <Col sm="10">
                            <Form.Control type="password" placeholder=""/>
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row}
                        controlId="formPlaintextPassword">
                        <Form.Label column sm="2">
                            Username
                        </Form.Label>
                        <Col sm="10">
                            <Form.Control type="password" placeholder=""/>
                        </Col>
                    </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary"
                        onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary"
                        onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

// render (<EditProfileBtn />);

export default EditProfileBtn;


// set value to the form state
// pass in value of whatever is in state
// pass in function that updates state in parent component so it knows when to change
