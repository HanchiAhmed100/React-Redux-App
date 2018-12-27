import React, { Component } from 'react';
import { Container } from 'reactstrap' 



class hanchi extends Component {
    state = {
        msg : "my state message"
    }

    render(){
        return(
            <div>
                <Container color="warning">
                    <div className="text-center">
                        <h1>Ahmed hanchi</h1>
                        <h4> {this.state.msg} </h4>
                    </div>
                </Container>
            </div>
        );
    }
}
export default hanchi