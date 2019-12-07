import React, { Component } from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import AppNavbar from './AppNavbar';

class CTBBattle extends Component {

    state = {
        color: 'red'
    }
    onChange = () => {
        this.setState({ color: 'green' });
    }

    render() {
        return (
            <div>
                <AppNavbar />
                <Container fluid>
                    <Row>
                        <Col><Button color="primary">1</Button></Col>
                        <Col>2</Col>
                        <Col>3</Col>
                        <Col>4</Col>
                        <Col>5</Col>
                        <Col>6</Col>
                        <Col>7</Col>
                        <Col>8</Col>
                        <Col>9</Col>
                        <Col>10</Col>
                        <Col>11</Col>
                        <Col>12</Col>
                        <Col>13</Col>
                        <Col>14</Col>
                        <Col><Button color="primary">15</Button></Col>
                    </Row>
                    <Row>
                        <Col><Button color="primary">1</Button></Col>
                        <Col>2</Col>
                        <Col>3</Col>
                        <Col>4</Col>
                        <Col>5</Col>
                        <Col>6</Col>
                        <Col>7</Col>
                        <Col>8</Col>
                        <Col>9</Col>
                        <Col>10</Col>
                        <Col>11</Col>
                        <Col>12</Col>
                        <Col>13</Col>
                        <Col>14</Col>
                        <Col>15</Col>
                    </Row>
                    <Row>
                        <Col>1</Col>
                        <Col>2</Col>
                        <Col>3</Col>
                        <Col>4</Col>
                        <Col>5</Col>
                        <Col>6</Col>
                        <Col>7</Col>
                        <Col>8</Col>
                        <Col>9</Col>
                        <Col>10</Col>
                        <Col>11</Col>
                        <Col>12</Col>
                        <Col>13</Col>
                        <Col>14</Col>
                        <Col>15</Col>
                    </Row>
                    <Row>
                        <Col><Button color="primary">1</Button></Col>
                        <Col>2</Col>
                        <Col>3</Col>
                        <Col>4</Col>
                        <Col>5</Col>
                        <Col>6</Col>
                        <Col>7</Col>
                        <Col>8</Col>
                        <Col>9</Col>
                        <Col>10</Col>
                        <Col>11</Col>
                        <Col>12</Col>
                        <Col>13</Col>
                        <Col>14</Col>
                        <Col>15</Col>
                    </Row>
                    <Row>
                        <Col><Button color="primary">1</Button></Col>
                        <Col>2</Col>
                        <Col>3</Col>
                        <Col>4</Col>
                        <Col>5</Col>
                        <Col>6</Col>
                        <Col>7</Col>
                        <Col>8</Col>
                        <Col>9</Col>
                        <Col>10</Col>
                        <Col>11</Col>
                        <Col>12</Col>
                        <Col>13</Col>
                        <Col>14</Col>
                        <Col>15</Col>
                    </Row>
                    <Row>
                        <Col>1</Col>
                        <Col>2</Col>
                        <Col>3</Col>
                        <Col>4</Col>
                        <Col>5</Col>
                        <Col>6</Col>
                        <Col>7</Col>
                        <Col>8</Col>
                        <Col>9</Col>
                        <Col>10</Col>
                        <Col>11</Col>
                        <Col>12</Col>
                        <Col>13</Col>
                        <Col>14</Col>
                        <Col>15</Col>
                    </Row>
                    <Row><div style={{ backgroundColor: this.state.color }}>please change</div></Row>
                </Container>
            </div>
        )
    }

}

export default CTBBattle;