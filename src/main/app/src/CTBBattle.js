import React, { Component } from 'react';
import { Button, Container, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { useState } from 'react';
import AppNavbar from './AppNavbar';
import './CTB.css';

const Modalll = ({ left, right, leftc, rightc, battlenumber, namearray }) => {

    const [modal, setModal] = useState(false);
    const [modalc, setModalc] = useState(false);

    const toggle = () => setModal(!modal);
    const togglec = () => setModalc(!modalc);

    return (
        <div>
            <Button color="danger" onClick={toggle}>NEXT BATTLE</Button>
            <Modal isOpen={modal} toggle={toggle} className="WINNER">
                <ModalHeader toggle={toggle}>Battle Winner</ModalHeader>
                <ModalBody>
                    Pick the winner
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={() => { left(); toggle(); togglec(); }}>{battlenumber}</Button>{' '}
                    <Button color="primary" onClick={() => { right(); toggle(); togglec(); }}>{namearray[0]}</Button>
                </ModalFooter>
            </Modal>

            <Modal isOpen={modalc} toggle={togglec} className="CAPTURE">
                <ModalHeader toggle={togglec}>Capture the Breaker!</ModalHeader>
                <ModalBody>
                    Capture!
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={() => { leftc(); togglec(); }}>Team 1</Button>{' '}
                    <Button color="primary" onClick={() => { rightc(); togglec(); }}>Team 2</Button>
                </ModalFooter>
            </Modal>
        </div>
    );
};

/*const EnhancedTable = ({ parentCallback }) => {
    const [count, setCount] = useState(0);
    
    return (
        <button onClick={() => {
            const newValue = count + 1;
            setCount(newValue);
            parentCallback(newValue);
        }}>
             Click me {count}
        </button>
    )
};*/

class CTBBattle extends Component {

    state = {
        groups: [],
        namearr: [],
        battle: 0,
        lastwinner: false
    };


    componentDidMount() {
        fetch('api/groups')
            .then(response => response.json())
            //.then(data => this.setState({ groups: data }))
            .then(data => {
                const arr = [];
                data.sort(this.custom_comp);
                var i = 0;
                data.forEach(function (x) {
                    if (i < 32) { arr.push(x.name); ++i; }
                });
                this.setState({ groups: data, namearr: arr });
            });
    }

    /*createNamearr = () => {
        const hi = this.state.groups;
        hi.sort(this.custom_comp);

        const arr = [];
        hi.forEach(function (x) {
            arr.push(x.name);
        });
        this.setState({ namearr: arr });
        alert("created namearr");
    }*/

    custom_comp(a, b) {
        return b.score - a.score;
    }

    leftwin = () => {
        const hi = this.state.namearr;
        const btlnbr = this.state.battle;

        const r = [];
        hi.forEach(function (x) {
            r.push(x);
        });
        var indx;
        if (btlnbr < 8) {
            indx = btlnbr * 4;
            r.push(r[indx]);
            r.push(r[indx + 1]);
        }

        this.setState({ namearr: r, lastwinner: false });

    }

    rightwin = () => {
        const hi = this.state.namearr;
        const btlnbr = this.state.battle;

        const r = [];
        hi.forEach(function (x) {
            r.push(x);
        });
        var indx;
        if (btlnbr < 8) {
            indx = btlnbr * 4;
            r.push(r[indx + 2]);
            r.push(r[indx + 3]);
        }

        this.setState({ namearr: r, lastwinner: true });

    }

    leftcap = () => {
        const hi = this.state.namearr;
        const btlnbr = this.state.battle;
        const lstwnr = this.state.lastwinner;

        const r = [];
        hi.forEach(function (x) {
            r.push(x);
        });
        var indx;
        if (btlnbr < 8) {
            if (lstwnr) {
                // lastwinner is true, aka bottom team won
                indx = (btlnbr * 4);
            }
            else {
                indx = (btlnbr * 4) + 2;
            }
            r.push(r[indx]);
        }

        const newbtl = btlnbr + 1;
        this.setState({ namearr: r, battle: newbtl });
    }

    rightcap = () => {
        const hi = this.state.namearr;
        const btlnbr = this.state.battle;
        const lstwnr = this.state.lastwinner;

        const r = [];
        hi.forEach(function (x) {
            r.push(x);
        });
        var indx;
        if (btlnbr < 8) {
            if (lstwnr) {
                // lastwinner is true, aka bottom team won
                indx = (btlnbr * 4) + 1;
            }
            else {
                indx = (btlnbr * 4) + 3;
            }
            r.push(r[indx]);
        }

        const newbtl = btlnbr + 1;
        this.setState({ namearr: r, battle: newbtl });
    }

    /*callback = (count) => {
        // do something with value in parent component, like save to state
        alert(count);
        this.setState({ battle : count });
        this.setState({ isShow: true });
    }*/

    render() {

        return (
            <div>
                <AppNavbar />
                <Modalll left={this.leftwin} right={this.rightwin} leftc={this.leftcap} rightc={this.rightcap} battlenumber={this.state.battle} namearray={this.state.namearr} />
                <div class="wrapper">
                    <div class="box a11" id="a11"><p>{this.state.namearr[0]}</p><p>{this.state.namearr[1]}</p></div>
                    <div class="box a12" id="a12"><p>{this.state.namearr[2]}</p><p>{this.state.namearr[3]}</p></div>
                    <div class="box a21" id="a21"><p>{this.state.namearr[4]}</p><p>{this.state.namearr[5]}</p></div>
                    <div class="box a22" id="a22"><p>{this.state.namearr[6]}</p><p>{this.state.namearr[7]}</p></div>
                    <div class="box a31" id="a31"><p>{this.state.namearr[8]}</p><p>{this.state.namearr[9]}</p></div>
                    <div class="box a32" id="a32"><p>{this.state.namearr[10]}</p><p>{this.state.namearr[11]}</p></div>
                    <div class="box a41" id="a41"><p>{this.state.namearr[12]}</p><p>{this.state.namearr[13]}</p></div>
                    <div class="box a42" id="a42"><p>{this.state.namearr[14]}</p><p>{this.state.namearr[15]}</p></div>
                    <div class="box a51" id="a51"><p>{this.state.namearr[16]}</p><p>{this.state.namearr[17]}</p></div>
                    <div class="box a52" id="a52"><p>{this.state.namearr[18]}</p><p>{this.state.namearr[19]}</p></div>
                    <div class="box a61" id="a61"><p>{this.state.namearr[20]}</p><p>{this.state.namearr[21]}</p></div>
                    <div class="box a62" id="a62"><p>{this.state.namearr[22]}</p><p>{this.state.namearr[23]}</p></div>
                    <div class="box a71" id="a71"><p>{this.state.namearr[24]}</p><p>{this.state.namearr[25]}</p></div>
                    <div class="box a72" id="a72"><p>{this.state.namearr[26]}</p><p>{this.state.namearr[27]}</p></div>
                    <div class="box a81" id="a81"><p>{this.state.namearr[28]}</p><p>{this.state.namearr[29]}</p></div>
                    <div class="box a82" id="a82"><p>{this.state.namearr[30]}</p><p>{this.state.namearr[31]}</p></div>

                    <div class="box b11" id="b11"><p>{this.state.namearr[32]}</p><p>{this.state.namearr[33]}</p><p>{this.state.namearr[34]}</p></div>
                    <div class="box b12" id="b12"><p>{this.state.namearr[35]}</p><p>{this.state.namearr[36]}</p><p>{this.state.namearr[37]}</p></div>
                    <div class="box b21" id="b21"><p>{this.state.namearr[38]}</p><p>{this.state.namearr[39]}</p><p>{this.state.namearr[40]}</p></div>
                    <div class="box b22" id="b22"><p>{this.state.namearr[41]}</p><p>{this.state.namearr[42]}</p><p>{this.state.namearr[43]}</p></div>
                    <div class="box b31" id="b31"><p>{this.state.namearr[44]}</p><p>{this.state.namearr[45]}</p><p>{this.state.namearr[46]}</p></div>
                    <div class="box b32" id="b32"><p>{this.state.namearr[47]}</p><p>{this.state.namearr[48]}</p><p>{this.state.namearr[49]}</p></div>
                    <div class="box b41" id="b41"><p>{this.state.namearr[50]}</p><p>{this.state.namearr[51]}</p><p>{this.state.namearr[52]}</p></div>
                    <div class="box b42" id="b42"><p>{this.state.namearr[53]}</p><p>{this.state.namearr[54]}</p><p>{this.state.namearr[55]}</p></div>

                    <div class="box c12" id="c12"><Button style={{ height: "100%", width: "100%" }} color="primary" disabled={this.state.B4C === '#' || this.state.B4C === '' || this.state.C1 === '2' || this.state.C1C === '1' || this.state.C1C === '2'} onClick={() => this.setC1('2')}>C12</Button></div>
                    <div class="box c11" id="c11"><Button style={{ height: "100%", width: "100%" }} color="primary" disabled={this.state.B4C === '#' || this.state.B4C === '' || this.state.C1 === '1' || this.state.C1C === '1' || this.state.C1C === '2'} onClick={() => this.setC1('1')}>C11</Button></div>
                    <div class="box c22" id="c22"><Button style={{ height: "100%", width: "100%" }} color="primary" disabled={this.state.C1C === '#' || this.state.C1C === '' || this.state.C2 === '2' || this.state.C2C === '1' || this.state.C2C === '2'} onClick={() => this.setC2('2')}>C22</Button></div>
                    <div class="box c21" id="c21"><Button style={{ height: "100%", width: "100%" }} color="primary" disabled={this.state.C1C === '#' || this.state.C1C === '' || this.state.C2 === '1' || this.state.C2C === '1' || this.state.C2C === '2'} onClick={() => this.setC2('1')}>C21</Button></div>

                    <div class="box final1">FINAL1</div>
                    <div class="box final2">FINAL2</div>

                    <div class="boxfill a1fill" id="a1fill">&nbsp;</div>
                    <div class="boxfill a2fill" id="a2fill">&nbsp;</div>
                    <div class="boxfill a3fill" id="a3fill">&nbsp;</div>
                    <div class="boxfill a4fill" id="a4fill">&nbsp;</div>
                    <div class="boxfill a5fill" id="a5fill">&nbsp;</div>
                    <div class="boxfill a6fill" id="a6fill">&nbsp;</div>
                    <div class="boxfill a7fill" id="a7fill">&nbsp;</div>
                    <div class="boxfill a8fill" id="a8fill">&nbsp;</div>




                </div >

            </div >
        )
    }

}

export default CTBBattle;