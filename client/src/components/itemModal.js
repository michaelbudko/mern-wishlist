import React, {Component} from "react";
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    Form,
    FormGroup,
    Label,
    Input
} from "reactstrap";
import { connect } from "react-redux";
import { addItem } from "../actions/itemActions";

class ItemModal extends Component {
    state = {
        modal: false, 
        name: "",
        secret: false
    }

    toggle = () => {
        this.setState({
            modal: !this.state.modal
        });
    }

    onChange = (e) => {
        this.setState({[e.target.name]:e.target.value});
    }

    onSubmit = (e) => {
        e.preventDefault();

        const newItem = {
            itemName: this.state.name,
        }

        //add item via addItem action
        this.props.addItem(newItem);

        //close modal
        this.toggle();
    }

    render() {
        return(
            <div>
                <Button 
                  color="dark"
                  style={{marginBottom: "2rem"}}
                  onClick={this.toggle}
                >Add Item</Button>

                <Modal
                  isOpen={this.state.modal}
                  toggle = {this.toggle}
                >
                    <ModalHeader toggle={this.toggle}>Item that you want to get</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.onSubmit}>
                            <FormGroup>
                                {/* <Label for="item">Item</Label> */}
                                <Input
                                  type="text"
                                  name="name"
                                  secret = "false"
                                  id ="item"
                                  placeholder="Funny socks"
                                  onChange={this.onChange}
                                >
                                </Input>
                                <Button
                                  color="dark"
                                  style={{marginTop: "0.69rem", marginBottom: "0rem"}}
                                  block
                                >Add</Button>
                            </FormGroup>
                        </Form>
                    </ModalBody>
                </Modal>
            </div>
        );
    };
}

const mapStateToProps = state => ({
    item: state.item
});

export default connect(mapStateToProps, {addItem})(ItemModal);