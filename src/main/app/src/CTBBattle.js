import React, { Component } from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import AppNavbar from './AppNavbar';

class CTBBattle extends Component {

changeclr(x) {
    x.style.background="red";
}

    render() {
        return (
            <div>
                <AppNavbar />
                <Container fluid>
                    <Row>
                        <Col><div style={{ background: 'green' }}><Button onClick="changeclr(this)">RED</Button></div></Col>
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
                        <Col>16</Col>
                        <Col>17</Col>
                        <Col>18</Col>
                        <Col>19</Col>
                        <Col>20</Col>
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
                        <Col>16</Col>
                        <Col>17</Col>
                        <Col>18</Col>
                        <Col>19</Col>
                        <Col>20</Col>
                    </Row>
                </Container>
            </div>
        )
    }

}

export default CTBBattle;