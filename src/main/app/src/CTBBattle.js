import React, { Component } from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import AppNavbar from './AppNavbar';

class CTBBattle extends Component {

    state = {
        color: 'red',
        A1: '',
        A2: '',
        A3: '',
        A4: '',
        A5: '',
        A6: '',
        A7: '',
        A8: '',
        B1: '',
        B2: '',
        B3: '',
        B4: '',
        C1: '',
        C2: '',
    }
    onChange = (id) => {
        alert(id);
        this.setState({ color: 'green' });
    }

    render() {
        return (
            <div>
                <AppNavbar />
                <Container fluid>
                    <Row>
                        <Col><Button color="primary" id="first" onClick={() => alert(this.id)}>A1</Button></Col>
                        <Col>&nbsp;</Col>
                        <Col>&nbsp;</Col>
                        <Col>&nbsp;</Col>
                        <Col>&nbsp;</Col>
                        <Col>&nbsp;</Col>
                        <Col>&nbsp;</Col>
                        <Col>&nbsp;</Col>
                        <Col>&nbsp;</Col>
                        <Col>&nbsp;</Col>
                        <Col>&nbsp;</Col>
                        <Col>&nbsp;</Col>
                        <Col>&nbsp;</Col>
                        <Col>&nbsp;</Col>
                        <Col><Button color="primary">A5</Button></Col>
                    </Row>
                    <Row>
                        <Col><Button color="primary">A1</Button></Col>
                        <Col>&nbsp;</Col>
                        <Col><Button color="primary">B1</Button></Col>
                        <Col>&nbsp;</Col>
                        <Col>&nbsp;</Col>
                        <Col>&nbsp;</Col>
                        <Col>&nbsp;</Col>
                        <Col>&nbsp;</Col>
                        <Col>&nbsp;</Col>
                        <Col>&nbsp;</Col>
                        <Col>&nbsp;</Col>
                        <Col>&nbsp;</Col>
                        <Col><Button color="primary">B3</Button></Col>
                        <Col>&nbsp;</Col>
                        <Col><Button color="primary">A5</Button></Col>
                    </Row>
                    <Row>
                        <Col>&nbsp;</Col>
                        <Col>&nbsp;</Col>
                        <Col><Button color="primary">B1</Button></Col>
                        <Col>&nbsp;</Col>
                        <Col>&nbsp;</Col>
                        <Col>&nbsp;</Col>
                        <Col>&nbsp;</Col>
                        <Col>&nbsp;</Col>
                        <Col>&nbsp;</Col>
                        <Col>&nbsp;</Col>
                        <Col>&nbsp;</Col>
                        <Col>&nbsp;</Col>
                        <Col><Button color="primary">B3</Button></Col>
                        <Col>&nbsp;</Col>
                        <Col>&nbsp;</Col>
                    </Row>
                    <Row>
                        <Col><Button color="primary">A1</Button></Col>
                        <Col>&nbsp;</Col>
                        <Col><Button color="primary">B1</Button></Col>
                        <Col>&nbsp;</Col>
                        <Col>&nbsp;</Col>
                        <Col>&nbsp;</Col>
                        <Col>&nbsp;</Col>
                        <Col>&nbsp;</Col>
                        <Col>&nbsp;</Col>
                        <Col>&nbsp;</Col>
                        <Col>&nbsp;</Col>
                        <Col>&nbsp;</Col>
                        <Col><Button color="primary">B3</Button></Col>
                        <Col>&nbsp;</Col>
                        <Col><Button color="primary">A5</Button></Col>
                    </Row>
                    <Row>
                        <Col><Button color="primary">A1</Button></Col>
                        <Col>&nbsp;</Col>
                        <Col>&nbsp;</Col>
                        <Col>&nbsp;</Col>
                        <Col><Button color="primary">C1</Button></Col>
                        <Col>&nbsp;</Col>
                        <Col>&nbsp;</Col>
                        <Col>&nbsp;</Col>
                        <Col>&nbsp;</Col>
                        <Col>&nbsp;</Col>
                        <Col><Button color="primary">C2</Button></Col>
                        <Col>&nbsp;</Col>
                        <Col>&nbsp;</Col>
                        <Col>&nbsp;</Col>
                        <Col><Button color="primary">A5</Button></Col>
                    </Row>
                    <Row>
                        <Col>&nbsp;</Col>
                        <Col>&nbsp;</Col>
                        <Col>&nbsp;</Col>
                        <Col>&nbsp;</Col>
                        <Col><Button color="primary">C1</Button></Col>
                        <Col>&nbsp;</Col>
                        <Col>&nbsp;</Col>
                        <Col>&nbsp;</Col>
                        <Col>&nbsp;</Col>
                        <Col>&nbsp;</Col>
                        <Col><Button color="primary">C2</Button></Col>
                        <Col>&nbsp;</Col>
                        <Col>&nbsp;</Col>
                        <Col>&nbsp;</Col>
                        <Col>&nbsp;</Col>
                    </Row>
                    <Row>
                        <Col>&nbsp;</Col>
                        <Col>&nbsp;</Col>
                        <Col>&nbsp;</Col>
                        <Col>&nbsp;</Col>
                        <Col><Button color="primary">C1</Button></Col>
                        <Col>&nbsp;</Col>
                        <Col>&nbsp;</Col>
                        <Col>&nbsp;</Col>
                        <Col>&nbsp;</Col>
                        <Col>&nbsp;</Col>
                        <Col><Button color="primary">C2</Button></Col>
                        <Col>&nbsp;</Col>
                        <Col>&nbsp;</Col>
                        <Col>&nbsp;</Col>
                        <Col>&nbsp;</Col>
                    </Row>
                    <Row>
                        <Col><Button color="primary">A2</Button></Col>
                        <Col>&nbsp;</Col>
                        <Col>&nbsp;</Col>
                        <Col>&nbsp;</Col>
                        <Col><Button color="primary">C1</Button></Col>
                        <Col>&nbsp;</Col>
                        <Col>&nbsp;</Col>
                        <Col>&nbsp;</Col>
                        <Col>&nbsp;</Col>
                        <Col>&nbsp;</Col>
                        <Col><Button color="primary">C2</Button></Col>
                        <Col>&nbsp;</Col>
                        <Col>&nbsp;</Col>
                        <Col>&nbsp;</Col>
                        <Col><Button color="primary">A6</Button></Col>
                    </Row>
                    <Row>
                        <Col><Button color="primary">A2</Button></Col>
                        <Col>&nbsp;</Col>
                        <Col><Button color="primary">B1</Button></Col>
                        <Col>&nbsp;</Col>
                        <Col>&nbsp;</Col>
                        <Col>&nbsp;</Col>
                        <Col>&nbsp;</Col>
                        <Col>&nbsp;</Col>
                        <Col>&nbsp;</Col>
                        <Col>&nbsp;</Col>
                        <Col>&nbsp;</Col>
                        <Col>&nbsp;</Col>
                        <Col><Button color="primary">B3</Button></Col>
                        <Col>&nbsp;</Col>
                        <Col><Button color="primary">A6</Button></Col>
                    </Row>
                    <Row>
                        <Col>&nbsp;</Col>
                        <Col>&nbsp;</Col>
                        <Col><Button color="primary">B1</Button></Col>
                        <Col>&nbsp;</Col>
                        <Col>&nbsp;</Col>
                        <Col>&nbsp;</Col>
                        <Col>&nbsp;</Col>
                        <Col>&nbsp;</Col>
                        <Col>&nbsp;</Col>
                        <Col>&nbsp;</Col>
                        <Col>&nbsp;</Col>
                        <Col>&nbsp;</Col>
                        <Col><Button color="primary">B3</Button></Col>
                        <Col>&nbsp;</Col>
                        <Col>&nbsp;</Col>
                    </Row>
                    <Row>
                        <Col><Button color="primary">A2</Button></Col>
                        <Col>&nbsp;</Col>
                        <Col><Button color="primary">B1</Button></Col>
                        <Col>&nbsp;</Col>
                        <Col>&nbsp;</Col>
                        <Col>&nbsp;</Col>
                        <Col>&nbsp;</Col>
                        <Col>&nbsp;</Col>
                        <Col>&nbsp;</Col>
                        <Col>&nbsp;</Col>
                        <Col>&nbsp;</Col>
                        <Col>&nbsp;</Col>
                        <Col><Button color="primary">B3</Button></Col>
                        <Col>&nbsp;</Col>
                        <Col><Button color="primary">A6</Button></Col>
                    </Row>
                    <Row>
                        <Col><Button color="primary">A2</Button></Col>
                        <Col>&nbsp;</Col>
                        <Col>&nbsp;</Col>
                        <Col>&nbsp;</Col>
                        <Col>&nbsp;</Col>
                        <Col>&nbsp;</Col>
                        <Col><Button color="primary">F</Button></Col>
                        <Col>&nbsp;</Col>
                        <Col><Button color="primary">F</Button></Col>
                        <Col>&nbsp;</Col>
                        <Col>&nbsp;</Col>
                        <Col>&nbsp;</Col>
                        <Col>&nbsp;</Col>
                        <Col>&nbsp;</Col>
                        <Col><Button color="primary">A6</Button></Col>
                    </Row>
                    <Row>
                        <Col>&nbsp;</Col>
                        <Col>&nbsp;</Col>
                        <Col>&nbsp;</Col>
                        <Col>&nbsp;</Col>
                        <Col>&nbsp;</Col>
                        <Col>&nbsp;</Col>
                        <Col><Button color="primary">I</Button></Col>
                        <Col>&nbsp;</Col>
                        <Col><Button color="primary">I</Button></Col>
                        <Col>&nbsp;</Col>
                        <Col>&nbsp;</Col>
                        <Col>&nbsp;</Col>
                        <Col>&nbsp;</Col>
                        <Col>&nbsp;</Col>
                        <Col>&nbsp;</Col>
                    </Row>
                    <Row>
                        <Col>1</Col>
                        <Col>2</Col>
                        <Col>3</Col>
                        <Col>4</Col>
                        <Col>5</Col>
                        <Col>6</Col>
                        <Col><Button color="primary">N</Button></Col>
                        <Col>8</Col>
                        <Col><Button color="primary">N</Button></Col>
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
                        <Col><Button color="primary">A</Button></Col>
                        <Col>8</Col>
                        <Col><Button color="primary">A</Button></Col>
                        <Col>10</Col>
                        <Col>11</Col>
                        <Col>12</Col>
                        <Col>13</Col>
                        <Col>14</Col>
                        <Col>15</Col>
                    </Row>
                    <Row>
                        <Col><Button color="primary">A3</Button></Col>
                        <Col>2</Col>
                        <Col>3</Col>
                        <Col>4</Col>
                        <Col>5</Col>
                        <Col>6</Col>
                        <Col><Button color="primary">L</Button></Col>
                        <Col>8</Col>
                        <Col><Button color="primary">L</Button></Col>
                        <Col>10</Col>
                        <Col>11</Col>
                        <Col>12</Col>
                        <Col>13</Col>
                        <Col>14</Col>
                        <Col><Button color="primary">A7</Button></Col>
                    </Row>
                    <Row>
                        <Col><Button color="primary">A3</Button></Col>
                        <Col>2</Col>
                        <Col><Button color="primary">B2</Button></Col>
                        <Col>4</Col>
                        <Col>5</Col>
                        <Col>6</Col>
                        <Col>7</Col>
                        <Col>8</Col>
                        <Col>9</Col>
                        <Col>10</Col>
                        <Col>11</Col>
                        <Col>12</Col>
                        <Col><Button color="primary">B4</Button></Col>
                        <Col>14</Col>
                        <Col><Button color="primary">A7</Button></Col>
                    </Row>
                    <Row>
                        <Col>1</Col>
                        <Col>2</Col>
                        <Col><Button color="primary">B2</Button></Col>
                        <Col>4</Col>
                        <Col>5</Col>
                        <Col>6</Col>
                        <Col>7</Col>
                        <Col>8</Col>
                        <Col>9</Col>
                        <Col>10</Col>
                        <Col>11</Col>
                        <Col>12</Col>
                        <Col><Button color="primary">B4</Button></Col>
                        <Col>14</Col>
                        <Col>15</Col>
                    </Row>
                    <Row>
                        <Col><Button color="primary">A3</Button></Col>
                        <Col>2</Col>
                        <Col><Button color="primary">B2</Button></Col>
                        <Col>4</Col>
                        <Col>5</Col>
                        <Col>6</Col>
                        <Col>7</Col>
                        <Col>8</Col>
                        <Col>9</Col>
                        <Col>10</Col>
                        <Col>11</Col>
                        <Col>12</Col>
                        <Col><Button color="primary">B4</Button></Col>
                        <Col>14</Col>
                        <Col><Button color="primary">A7</Button></Col>
                    </Row>
                    <Row>
                        <Col><Button color="primary">A3</Button></Col>
                        <Col>2</Col>
                        <Col>3</Col>
                        <Col>4</Col>
                        <Col><Button color="primary">C1</Button></Col>
                        <Col>6</Col>
                        <Col>7</Col>
                        <Col>8</Col>
                        <Col>9</Col>
                        <Col>10</Col>
                        <Col><Button color="primary">C2</Button></Col>
                        <Col>12</Col>
                        <Col>13</Col>
                        <Col>14</Col>
                        <Col><Button color="primary">A7</Button></Col>
                    </Row>
                    <Row>
                        <Col>1</Col>
                        <Col>2</Col>
                        <Col>3</Col>
                        <Col>4</Col>
                        <Col><Button color="primary">C1</Button></Col>
                        <Col>6</Col>
                        <Col>7</Col>
                        <Col>8</Col>
                        <Col>9</Col>
                        <Col>10</Col>
                        <Col><Button color="primary">C2</Button></Col>
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
                        <Col><Button color="primary">C1</Button></Col>
                        <Col>6</Col>
                        <Col>7</Col>
                        <Col>8</Col>
                        <Col>9</Col>
                        <Col>10</Col>
                        <Col><Button color="primary">C2</Button></Col>
                        <Col>12</Col>
                        <Col>13</Col>
                        <Col>14</Col>
                        <Col>15</Col>
                    </Row>
                    <Row>
                        <Col><Button color="primary">A4</Button></Col>
                        <Col>2</Col>
                        <Col>3</Col>
                        <Col>4</Col>
                        <Col><Button color="primary">C1</Button></Col>
                        <Col>6</Col>
                        <Col>7</Col>
                        <Col>8</Col>
                        <Col>9</Col>
                        <Col>10</Col>
                        <Col><Button color="primary">C2</Button></Col>
                        <Col>12</Col>
                        <Col>13</Col>
                        <Col>14</Col>
                        <Col><Button color="primary">A8</Button></Col>
                    </Row>
                    <Row>
                        <Col><Button color="primary">A4</Button></Col>
                        <Col>2</Col>
                        <Col><Button color="primary">B2</Button></Col>
                        <Col>4</Col>
                        <Col>5</Col>
                        <Col>6</Col>
                        <Col>7</Col>
                        <Col>8</Col>
                        <Col>9</Col>
                        <Col>10</Col>
                        <Col>11</Col>
                        <Col>12</Col>
                        <Col><Button color="primary">B4</Button></Col>
                        <Col>14</Col>
                        <Col><Button color="primary">A8</Button></Col>
                    </Row>
                    <Row>
                        <Col>1</Col>
                        <Col>2</Col>
                        <Col><Button color="primary">B2</Button></Col>
                        <Col>4</Col>
                        <Col>5</Col>
                        <Col>6</Col>
                        <Col>7</Col>
                        <Col>8</Col>
                        <Col>9</Col>
                        <Col>10</Col>
                        <Col>11</Col>
                        <Col>12</Col>
                        <Col><Button color="primary">B4</Button></Col>
                        <Col>14</Col>
                        <Col>15</Col>
                    </Row>
                    <Row>
                        <Col><Button color="primary">A4</Button></Col>
                        <Col>2</Col>
                        <Col><Button color="primary">B2</Button></Col>
                        <Col>4</Col>
                        <Col>5</Col>
                        <Col>6</Col>
                        <Col>7</Col>
                        <Col>8</Col>
                        <Col>9</Col>
                        <Col>10</Col>
                        <Col>11</Col>
                        <Col>12</Col>
                        <Col><Button color="primary">B4</Button></Col>
                        <Col>14</Col>
                        <Col><Button color="primary">A8</Button></Col>
                    </Row>
                    <Row>
                        <Col><Button color="primary">A4</Button></Col>
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
                        <Col><Button color="primary">A8</Button></Col>
                    </Row>

                    <Row><div style={{ backgroundColor: this.state.color }}>please change</div></Row>
                </Container>
            </div>
        )
    }

}

export default CTBBattle;