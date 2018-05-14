import React, { Component } from 'react';
import { render } from "react-dom";
import { Button, Card, CardBody, CardImage, CardTitle, CardText } from 'mdbreact';
import Avatar from 'react-user-avatar';
import './Home.css'

class Home extends Component {
    constructor(){
        super();
        this.handleClick = this.handleClick.bind(this);
        this.transferClick = this.transferClick.bind(this);
    }

    handleClick(e) {
        e.preventDefault();
        this.props.history.push('/schedule');
    }

    transferClick(e) {
        e.preventDefault();
        this.props.history.push('/progress');
    }
   
    render() {
        return(
            <div className="container">
                <div className="row">
                    <div className="col-sm-6">
                        <Card cascade>
                            <CardBody>
                            <Avatar name="Anne Jansen" size="150" color="#f9cfde"/>
                                <CardTitle>Anne Jansen</CardTitle>
                                <Button onClick={this.handleClick}>Shedule</Button>
                                <Button onClick={this.transferClick}>Progress</Button>
                            </CardBody>
                        </Card>
                    </div>
                </div>
            </div>

        );
    }
}

export default Home