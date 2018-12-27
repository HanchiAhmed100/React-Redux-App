import React , {Component} from 'react'
import {
    Container,
    ListGroup ,
    ListGroupItem,
    Button
    } from 'reactstrap'
import {
    CSSTransition,
    TransitionGroup
} from 'react-transition-group'
import {connect} from 'react-redux'
import { getItems , DeleteItem } from '../actions/itemActions'
import PropTypes from 'prop-types'
import AddEventModal from './AddEventModal'



class AppEventList extends Component{

    componentDidMount(){
        this.props.getItems();
    }

    render(){
        const { items } = this.props.item;
        return(
            <div>
                <Container>
                    <AddEventModal />
                    <ListGroup>
                        <TransitionGroup >
                            {items.map(({ id , firstname, lastname })=>(
                                <CSSTransition key={id} timeout={500} classNames="fade">
                                    <ListGroupItem>
                                        <Button className="remove-btn " color="danger" size="sm" onClick={this.DeleteClick.bind(this,id)} >
                                            &times;
                                        </Button>
                                         fullname : {firstname} {lastname}
                                    </ListGroupItem>
                                </CSSTransition>
                            ))}
                        </TransitionGroup>
                    </ListGroup>
                </Container>
            </div>
        );
    }
    DeleteClick = (id) =>{
        this.props.DeleteItem(id)
    }


    /*
    AddEvent = () => {
        const firstname = prompt('Enter a name')
        if(firstname) {
            this.setState(state => ({
                items : [...state.items,{id : uuid(), firstname}]
            }))
        }
    }
    RemoveEvent = (id) => {
        this.setState(state => ({
            items : state.items.filter(items => items.id !== id )
        }))
    }*/



}
AppEventList.propTypes = {
    getItems : PropTypes.func.isRequired,
    item : PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    item : state.item
})

export default connect(mapStateToProps, { getItems , DeleteItem} )(AppEventList)
