import React, { Component } from "react";
import { Container, ListGroup, ListGroupItem, Button, FormGroup, Label, Input } from "reactstrap";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { connect } from "react-redux";
import { getItems, deleteItem } from "../actions/itemActions";
import PropTypes from "prop-types";

class WishList extends Component {
    state = {
        items: this.props.item
    }

    componentDidMount() {
        this.props.getItems();
    }

    onDeleteClick = (id) => {
        this.props.deleteItem(id);
    };    

    render() {

       const { items } = this.props.item;

       return(
        <Container>
            <ListGroup>
                <TransitionGroup className="WishList">
                 {/* show items that are not secret */}      
                  {items.map(({_id, itemName}) => (
                    <CSSTransition key={_id} timeout={200} classNames="fade">
                        <ListGroupItem style={{backgroundColor: 'white'}}>
                            <Button
                                className="remove-btn"
                                color="danger"
                                size="sm"
                                onClick = {this.onDeleteClick.bind(this, _id)}
                            >&times;</Button>
                            {itemName}
                        </ListGroupItem>
                    </CSSTransition>
                  ))}
                </TransitionGroup>
            </ListGroup>
        </Container>
       );
    }
}

WishList.propTypes = {
    getItems: PropTypes.func.isRequired,
    item: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    item: state.item
});

export default connect(mapStateToProps, {getItems, deleteItem})(WishList);