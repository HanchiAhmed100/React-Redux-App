import React ,{Component} from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Container
} from 'reactstrap'

class AppNavBar extends Component{
    state = {
        isOpen : false
    }
    toggle = () => {
        this.setState ({
            isOpen : !this.state.isOpen
        })
    }
    render(){
        return(
            <div>
                <Navbar color="warning" light expand="sm" className="mb-5">
                    <Container>
                        <NavbarBrand href="/"> My App </NavbarBrand>
                        <NavbarToggler onClick={this.toggle} />
                        <Collapse isOpen={this.state.isOpen} navbar >
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink href="">home</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="">about</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="">contact</NavLink>
                            </NavItem>
                        </Nav>
                        </Collapse>
                    </Container>
                </Navbar>
            </div>
        );
    }

} export default AppNavBar