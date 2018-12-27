import React , {Component} from 'react'
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    Form,
    FormGroup,
    Label,
    Input
} from 'reactstrap'
import { connect } from 'react-redux'
import { AddItem } from '../actions/itemActions'
import uuid from 'uuid'

class AddEventModal extends Component {
    
    state = {
        modal : false,
        firstname : '',
        lastname : ''
    }
    toggle = () => {
        this.setState({
            modal : !this.state.modal
        })
    }
    onChange = (e) =>{
        console.log(e.target.name)
        console.log(e.target.value)
        this.setState({ [e.target.name] : e.target.value });
    }
    onSubmit = (e) => {
        e.preventDefault();

        const newItem = {
            id : uuid(),
            firstname : this.state.firstname,
            lastname : this.state.lastname
        }

        this.props.AddItem(newItem)

        this.toggle();
    }

    render(){
        return(
            <div>
                <Button color="warning" style={{marginBottom : '2rem'}} onClick={this.toggle}>Add Event</Button>
            
                <Modal isOpen={this.state.modal} toggle={this.toggle}>
                    <ModalHeader toggle={this.toggle}>
                        Add new event
                    </ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.onSubmit}>
                            <FormGroup>
                                <Label for="firstname">Firstname : </Label>
                                <Input type="text" name="firstname" id="item" placeholder="Add new event" onChange={this.onChange} />
                                <Label for="firstname">Lastname : </Label>
                                <Input type="text" name="lastname" id="item" placeholder="Add new event" onChange={this.onChange} />
                            </FormGroup>
                            <Button color="dark" style={{marginTop : '2rem' }} > Add </Button>
                        </Form>
                    </ModalBody>
                </Modal>
            </div>
        );
    }

}

const mapStateToProps = (state) => ({
    item : state.item
})

export default connect(mapStateToProps , { AddItem })(AddEventModal)