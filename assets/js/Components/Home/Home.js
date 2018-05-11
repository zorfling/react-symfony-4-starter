import React from 'react';
import { render } from "react-dom";
import { Button, Card, CardBody, CardImage, CardTitle, CardText } from 'mdbreact';
import Avatar from 'react-user-avatar';

const Home = () => (
    <div class="container">
        <div class="row">
            <div class="col-sm">
                <Card cascade>
                    <CardBody>
                    <Avatar name="Anne Jansen" size="150"/>
                        <CardTitle>Anne Jansen</CardTitle>
                        <Button href="#">Shedule</Button>
                        <Button href="#">Progression</Button>
                    </CardBody>
                </Card>
            </div>
        </div>
    </div>
);

export default Home