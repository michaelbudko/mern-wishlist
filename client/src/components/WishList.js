import React, { Component } from "react";
import { Container, ListGroup, ListGroupItem, Button} from "reactstrap";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import {v4 as uuid}  from "uuid";

class WishList extends Component {
    state = {
        items: [
            { id: uuid(), name:"Table" },
            { id: uuid(), name:"Hat" },
            { id: uuid(), name:"Watch" }
        ]
    }
    render() {
       const { items } = this.state;
       return(
        <Container>
            <Button 
              color="dark" 
              style={{marginBottom: '2rem'}}
              onClick={() => {
                const name = prompt("Enter Item");
                if(name) {
                    this.setState(state => ({
                        items: [...state.items, { id: uuid(), name}]
                    }));
                }
              }}
            >Add Item
            </Button>
            <ListGroup>
                <TransitionGroup className="WishList">
                  {items.map(({id, name}) => (
                    <CSSTransition key={id} timeout={200} classNames="fade">
                        <ListGroupItem>
                            <Button
                                className="remove-btn"
                                color="danger"
                                size="sm"
                                onClick = {() => {
                                    this.setState(state => ({
                                        items: state.items.filter(item => item.id !== id) 
                                    }));
                                }}
                            >&times;</Button>
                            {name}
                        </ListGroupItem>
                    </CSSTransition>
                  ))}
                </TransitionGroup>
            </ListGroup>
        </Container>
       );
    }
}

export default WishList;