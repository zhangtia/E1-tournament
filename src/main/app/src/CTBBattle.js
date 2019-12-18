import React, { Component } from 'react';
import { Button, Container, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { useState } from 'react';
import AppNavbar from './AppNavbar';
import './CTB.css';

const Modalll = ({ left, right }) => {

    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    return (
        <div>
            <Button color="danger" onClick={toggle}>NEXT BATTLE</Button>
            <Modal isOpen={modal} toggle={toggle} className="its 4am">
                <ModalHeader toggle={toggle}>header</ModalHeader>
                <ModalBody>
                    stuff
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={left}>Team 1</Button>{' '}
                    <Button color="primary" onClick={right}>Team 2</Button>
                </ModalFooter>
            </Modal>
        </div>
    );
}

class CTBBattle extends Component {

    state = {
        groups: [],
        namearr: [],
        battle: 0
    };

    componentDidMount() {
        fetch('api/groups')
            .then(response => response.json())
            .then(data => this.setState({ groups: data }));
    }

    custom_comp(a, b) {
        return b.score - a.score;
    }

    leftwin() {
        const x = this.state.namearr;
        alert("hi");
        alert(x.length);
        x.push(x[0]);
        alert(x.length);
        this.setState({ namearr: x });
    }

    rightwin() {
        const x = this.state.namearr;
        alert("hi");
        alert(x.length);
        x.push(x[0]);
        alert(x.length);
        this.setState({ namearr: x });
    }

    render() {

        const hi = this.state.groups;
        hi.sort(this.custom_comp);

        const arr = [];
        hi.forEach(function (x) {
            arr.push(x.name);
        });
        this.setState({ namearr: arr });
        //alert(hi);

        return (
            <div>
                <AppNavbar />
                <Modalll left={this.leftwin} right={this.rightwin} />
                <div class="wrapper">
                    <div class="box a11" id="a11"><Button style={{ height: "100%", width: "100%" }} color="primary" disabled={this.state.A1 === '1' || this.state.A1C === '1' || this.state.A1C === '2'} onClick={() => this.setA1('1')}><p>{this.state.namearr[0]}</p><p>{this.state.namearr[1]}</p></Button></div>
                    <div class="box a12" id="a12"><Button style={{ height: "100%", width: "100%" }} color="primary" disabled={this.state.A1 === '2' || this.state.A1C === '1' || this.state.A1C === '2'} onClick={() => this.setA1('2')}>{this.state.namearr[1]} + "\n" +{this.state.namearr[2]} + "\n" +{this.state.namearr[3]}</Button></div>
                    <div class="box a21" id="a21"><Button style={{ height: "100%", width: "100%" }} color="primary" disabled={this.state.A1C === '#' || this.state.A1C === '' || this.state.A2 === '1' || this.state.A2C === '1' || this.state.A2C === '2'} onClick={() => this.setA2('1')}>A21</Button></div>
                    <div class="box a22" id="a22"><Button style={{ height: "100%", width: "100%" }} color="primary" disabled={this.state.A1C === '#' || this.state.A1C === '' || this.state.A2 === '2' || this.state.A2C === '1' || this.state.A2C === '2'} onClick={() => this.setA2('2')}>A22</Button></div>
                    <div class="box a31" id="a31"><Button style={{ height: "100%", width: "100%" }} color="primary" disabled={this.state.A2C === '#' || this.state.A2C === '' || this.state.A3 === '1' || this.state.A3C === '1' || this.state.A3C === '2'} onClick={() => this.setA3('1')}>A31</Button></div>
                    <div class="box a32" id="a32"><Button style={{ height: "100%", width: "100%" }} color="primary" disabled={this.state.A2C === '#' || this.state.A2C === '' || this.state.A3 === '2' || this.state.A3C === '1' || this.state.A3C === '2'} onClick={() => this.setA3('2')}>A32</Button></div>
                    <div class="box a41" id="a41"><Button style={{ height: "100%", width: "100%" }} color="primary" disabled={this.state.A3C === '#' || this.state.A3C === '' || this.state.A4 === '1' || this.state.A4C === '1' || this.state.A4C === '2'} onClick={() => this.setA4('1')}>A41</Button></div>
                    <div class="box a42" id="a42"><Button style={{ height: "100%", width: "100%" }} color="primary" disabled={this.state.A3C === '#' || this.state.A3C === '' || this.state.A4 === '2' || this.state.A4C === '1' || this.state.A4C === '2'} onClick={() => this.setA4('2')}>A42</Button></div>
                    <div class="box a51" id="a51"><Button style={{ height: "100%", width: "100%" }} color="primary" disabled={this.state.A4C === '#' || this.state.A4C === '' || this.state.A5 === '1' || this.state.A5C === '1' || this.state.A5C === '2'} onClick={() => this.setA5('1')}>A51</Button></div>
                    <div class="box a52" id="a52"><Button style={{ height: "100%", width: "100%" }} color="primary" disabled={this.state.A4C === '#' || this.state.A4C === '' || this.state.A5 === '2' || this.state.A5C === '1' || this.state.A5C === '2'} onClick={() => this.setA5('2')}>A52</Button></div>
                    <div class="box a61" id="a61"><Button style={{ height: "100%", width: "100%" }} color="primary" disabled={this.state.A5C === '#' || this.state.A5C === '' || this.state.A6 === '1' || this.state.A6C === '1' || this.state.A6C === '2'} onClick={() => this.setA6('1')}>A61</Button></div>
                    <div class="box a62" id="a62"><Button style={{ height: "100%", width: "100%" }} color="primary" disabled={this.state.A5C === '#' || this.state.A5C === '' || this.state.A6 === '2' || this.state.A6C === '1' || this.state.A6C === '2'} onClick={() => this.setA6('2')}>A62</Button></div>
                    <div class="box a71" id="a71"><Button style={{ height: "100%", width: "100%" }} color="primary" disabled={this.state.A6C === '#' || this.state.A6C === '' || this.state.A7 === '1' || this.state.A7C === '1' || this.state.A7C === '2'} onClick={() => this.setA7('1')}>A71</Button></div>
                    <div class="box a72" id="a72"><Button style={{ height: "100%", width: "100%" }} color="primary" disabled={this.state.A6C === '#' || this.state.A6C === '' || this.state.A7 === '2' || this.state.A7C === '1' || this.state.A7C === '2'} onClick={() => this.setA7('2')}>A72</Button></div>
                    <div class="box a81" id="a81"><Button style={{ height: "100%", width: "100%" }} color="primary" disabled={this.state.A7C === '#' || this.state.A7C === '' || this.state.A8 === '1' || this.state.A8C === '1' || this.state.A8C === '2'} onClick={() => this.setA8('1')}>A81</Button></div>
                    <div class="box a82" id="a82"><Button style={{ height: "100%", width: "100%" }} color="primary" disabled={this.state.A7C === '#' || this.state.A7C === '' || this.state.A8 === '2' || this.state.A8C === '1' || this.state.A8C === '2'} onClick={() => this.setA8('2')}>A82</Button></div>

                    <div class="box b11" id="b11"><Button style={{ height: "100%", width: "100%" }} color="primary" disabled={this.state.A8C === '#' || this.state.A8C === '' || this.state.B1 === '1' || this.state.B1C === '1' || this.state.B1C === '2'} onClick={() => this.setB1('1')}>B11</Button></div>
                    <div class="box b12" id="b12"><Button style={{ height: "100%", width: "100%" }} color="primary" disabled={this.state.A8C === '#' || this.state.A8C === '' || this.state.B1 === '2' || this.state.B1C === '1' || this.state.B1C === '2'} onClick={() => this.setB1('2')}>B12</Button></div>
                    <div class="box b21" id="b21"><Button style={{ height: "100%", width: "100%" }} color="primary" disabled={this.state.B1C === '#' || this.state.B1C === '' || this.state.B2 === '1' || this.state.B2C === '1' || this.state.B2C === '2'} onClick={() => this.setB2('1')}>B21</Button></div>
                    <div class="box b22" id="b22"><Button style={{ height: "100%", width: "100%" }} color="primary" disabled={this.state.B1C === '#' || this.state.B1C === '' || this.state.B2 === '2' || this.state.B2C === '1' || this.state.B2C === '2'} onClick={() => this.setB2('2')}>B22</Button></div>
                    <div class="box b31" id="b31"><Button style={{ height: "100%", width: "100%" }} color="primary" disabled={this.state.B2C === '#' || this.state.B2C === '' || this.state.B3 === '1' || this.state.B3C === '1' || this.state.B3C === '2'} onClick={() => this.setB3('1')}>B31</Button></div>
                    <div class="box b32" id="b32"><Button style={{ height: "100%", width: "100%" }} color="primary" disabled={this.state.B2C === '#' || this.state.B2C === '' || this.state.B3 === '2' || this.state.B3C === '1' || this.state.B3C === '2'} onClick={() => this.setB3('2')}>B32</Button></div>
                    <div class="box b41" id="b41"><Button style={{ height: "100%", width: "100%" }} color="primary" disabled={this.state.B3C === '#' || this.state.B3C === '' || this.state.B4 === '1' || this.state.B4C === '1' || this.state.B4C === '2'} onClick={() => this.setB4('1')}>B41</Button></div>
                    <div class="box b42" id="b42"><Button style={{ height: "100%", width: "100%" }} color="primary" disabled={this.state.B3C === '#' || this.state.B3C === '' || this.state.B4 === '2' || this.state.B4C === '1' || this.state.B4C === '2'} onClick={() => this.setB4('2')}>B42</Button></div>

                    <div class="box c12" id="c12"><Button style={{ height: "100%", width: "100%" }} color="primary" disabled={this.state.B4C === '#' || this.state.B4C === '' || this.state.C1 === '2' || this.state.C1C === '1' || this.state.C1C === '2'} onClick={() => this.setC1('2')}>C12</Button></div>
                    <div class="box c11" id="c11"><Button style={{ height: "100%", width: "100%" }} color="primary" disabled={this.state.B4C === '#' || this.state.B4C === '' || this.state.C1 === '1' || this.state.C1C === '1' || this.state.C1C === '2'} onClick={() => this.setC1('1')}>C11</Button></div>
                    <div class="box c22" id="c22"><Button style={{ height: "100%", width: "100%" }} color="primary" disabled={this.state.C1C === '#' || this.state.C1C === '' || this.state.C2 === '2' || this.state.C2C === '1' || this.state.C2C === '2'} onClick={() => this.setC2('2')}>C22</Button></div>
                    <div class="box c21" id="c21"><Button style={{ height: "100%", width: "100%" }} color="primary" disabled={this.state.C1C === '#' || this.state.C1C === '' || this.state.C2 === '1' || this.state.C2C === '1' || this.state.C2C === '2'} onClick={() => this.setC2('1')}>C21</Button></div>

                    <div class="box final1">FINAL1</div>
                    <div class="box final2">FINAL2</div>

                    <div class="box a1fill" id="a1fill">&nbsp;</div>
                    <div class="box a2fill" id="a2fill">&nbsp;</div>
                    <div class="box a3fill" id="a3fill">&nbsp;</div>
                    <div class="box a4fill" id="a4fill">&nbsp;</div>
                    <div class="box a5fill" id="a5fill">&nbsp;</div>
                    <div class="box a6fill" id="a6fill">&nbsp;</div>
                    <div class="box a7fill" id="a7fill">&nbsp;</div>
                    <div class="box a8fill" id="a8fill">&nbsp;</div>




                </div >

            </div >
        )
    }

}

export default CTBBattle;