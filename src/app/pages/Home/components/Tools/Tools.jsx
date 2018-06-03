


import React from 'react';
import { Card, CardHeader, CardBody } from 'reactstrap';
import { Icon } from 'react-fa';

export default class Tools extends React.PureComponent {
    render() {
        return (
            <React.Fragment>
                <div style={{ position: 'fixed', width: 100, margin: 20 }}>
                    <Card>
                        <CardHeader>
                            Tools
                        </CardHeader>
                        <CardBody>
                            <Icon name='check-square' />&nbsp;&nbsp;
                            <Icon name='square' />&nbsp;&nbsp;
                            <Icon name='edit' />&nbsp;&nbsp;
                        </CardBody>
                    </Card>
                </div>
            </React.Fragment>
        );
    }
}