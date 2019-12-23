import React, { Component } from 'react';
import { Button, Container, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './CTB.css';

const Modalll = ({ left, right, leftc, rightc, battlenumber, namearray, winteam, thirdc, fourc }) => {

    const [modal, setModal] = useState(false);
    const [modalc, setModalc] = useState(false);

    const toggle = () => setModal(!modal);
    const togglec = () => setModalc(!modalc);

    const [collapsed, setCollapsed] = useState(true);

    const toggleNavbar = () => setCollapsed(!collapsed);

    return (
        <div>
            <Navbar color="dark" dark expand="md" fixed="top">
                <NavbarBrand tag={Link} to="/">Home</NavbarBrand>
                <NavbarToggler onClick={toggleNavbar} className="mr-2" />
                <Collapse isOpen={!collapsed} navbar>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <Button color="danger" onClick={toggle}>NEXT BATTLE</Button>
                            <Modal isOpen={modal} toggle={toggle} className="WINNER">
                                <ModalHeader toggle={toggle}>Battle Winner</ModalHeader>
                                <ModalBody>
                                    Pick the winner
                                </ModalBody>
                                <ModalFooter>
                                    <Button color="primary" onClick={() => { left(); toggle(); togglec(); }}>{(battlenumber < 8) ? namearray[(battlenumber * 4)] + ", " + namearray[(battlenumber * 4) + 1] : ((battlenumber < 12) ? namearray[((battlenumber - 8) * 6) + 32] + ", " + namearray[((battlenumber - 8) * 6) + 33] + ", " + namearray[((battlenumber - 8) * 6) + 34] : ((battlenumber < 14) ? namearray[((battlenumber - 12) * 8) + 56] + ", " + namearray[((battlenumber - 12) * 8) + 57] + ", " + namearray[((battlenumber - 12) * 8) + 58] + ", " + namearray[((battlenumber - 12) * 8) + 59] : "FINALS"))}</Button>{' '}
                                    <Button color="primary" onClick={() => { right(); toggle(); togglec(); }}>{(battlenumber < 8) ? namearray[(battlenumber * 4) + 2] + ", " + namearray[(battlenumber * 4) + 3] : ((battlenumber < 12) ? namearray[((battlenumber - 8) * 6) + 35] + ", " + namearray[((battlenumber - 8) * 6) + 36] + ", " + namearray[((battlenumber - 8) * 6) + 37] : ((battlenumber < 14) ? namearray[((battlenumber - 12) * 8) + 60] + ", " + namearray[((battlenumber - 12) * 8) + 61] + ", " + namearray[((battlenumber - 12) * 8) + 62] + ", " + namearray[((battlenumber - 12) * 8) + 63] : "TIME!")/* battlenbr from 12 onwards */)}</Button>
                                </ModalFooter>
                            </Modal>

                            <Modal isOpen={modalc} toggle={togglec} className="CAPTURE">
                                <ModalHeader toggle={togglec}>Capture the Breaker!</ModalHeader>
                                <ModalBody>
                                    Capture!
                                </ModalBody>
                                <ModalFooter>
                                    <Button color="primary" onClick={() => { leftc(); togglec(); }}>{(battlenumber < 8 && winteam) ? namearray[(battlenumber * 4)] : ((battlenumber < 8 && !winteam) ? namearray[(battlenumber * 4) + 2] : ((battlenumber < 12 && winteam) ? namearray[((battlenumber - 8) * 6) + 32] : ((battlenumber < 12 && !winteam) ? namearray[((battlenumber - 8) * 6) + 35] : ((battlenumber < 14 && winteam) ? namearray[((battlenumber - 12) * 8) + 56] : ((battlenumber < 14 && !winteam ? namearray[((battlenumber - 12) * 8) + 60] : "WATCH"))) /* add parantheses for battle > 12 */))/* winteam true means bottom won */)}</Button>{' '}
                                    <Button color="primary" onClick={() => { rightc(); togglec(); }}>{(battlenumber < 8 && winteam) ? namearray[(battlenumber * 4) + 1] : ((battlenumber < 8 && !winteam) ? namearray[(battlenumber * 4) + 3] : ((battlenumber < 12 && winteam) ? namearray[((battlenumber - 8) * 6) + 33] : ((battlenumber < 12 && !winteam) ? namearray[((battlenumber - 8) * 6) + 36] : ((battlenumber < 14 && winteam) ? namearray[((battlenumber - 12) * 8) + 57] : ((battlenumber < 14 && !winteam) ? namearray[((battlenumber - 12) * 8) + 61] : "THE"))/* add parantheses for battle > 12 */))/* winteam true means bottom won */)}</Button>{' '}
                                    {battlenumber >= 8 && <Button color="primary" onClick={() => { thirdc(); togglec(); }}>{(battlenumber >= 8 && battlenumber < 12 && winteam) ? namearray[((battlenumber - 8) * 6) + 34] : ((battlenumber >= 8 && battlenumber < 12 && !winteam) ? namearray[((battlenumber - 8) * 6) + 37] : ((battlenumber < 14 && winteam) ? namearray[((battlenumber - 12) * 8) + 58] : ((battlenumber < 14 && !winteam) ? namearray[((battlenumber - 12) * 8) + 62] : "FINALS")))}</Button>}
                                    {battlenumber >= 12 && <Button color="primary" onClick={() => { fourc(); togglec(); }}>{(battlenumber >= 12 && battlenumber < 14 && winteam) ? namearray[((battlenumber - 12) * 8) + 59] : ((battlenumber >= 12 && battlenumber < 14 && !winteam) ? namearray[((battlenumber - 12) * 8) + 63] : "LIVE!")}</Button>}
                                </ModalFooter>
                            </Modal>
                        </NavItem>
                        <NavItem>
                            <NavLink href="https://zhangtia.github.io/page/">My Creator!</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
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
        lastwinner: false,
        divclr: []
    };


    componentDidMount() {
        fetch('api/groups')
            .then(response => response.json())
            //.then(data => this.setState({ groups: data }))
            .then(data => {
                const arr = [];
                const clr = [];
                data.sort(this.custom_comp);
                var i = 0;
                data.forEach(function (x) {
                    if (i < 32) { 
                        arr.push(x.name);
                        clr.push("blue");
                        ++i;
                    }
                });
                this.setState({ groups: data, namearr: arr, divclr: clr });
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
        const newclr = this.state.divclr;

        const r = [];
        var count = 0;
        hi.forEach(function (x) {
            if (btlnbr < 8 && (count < (32 + (3 * btlnbr)))) {
                r.push(x);
            }
            else if (btlnbr >= 8 && btlnbr < 12 && (count < (56 + (4 * (btlnbr - 8))))) {
                r.push(x);
            }
            else if (btlnbr >= 12 && btlnbr < 14 && (count < (72 + (5 * (btlnbr - 12))))) {
                r.push(x);
            }
            else if (btlnbr >= 14) {
                r.push(x);
            }
            ++count;
        });
        var indx;
        if (btlnbr < 8) {
            indx = btlnbr * 4;
            r.push(r[indx]);
            r.push(r[indx + 1]);
        }
        else if (btlnbr >= 8 && btlnbr < 12) {
            indx = (btlnbr - 8) * 6 + 32;
            r.push(r[indx]);
            r.push(r[indx + 1]);
            r.push(r[indx + 2]);
        }
        else if (btlnbr >= 12 && btlnbr < 14) {
            indx = (btlnbr - 12) * 8 + 56;
            r.push(r[indx]);
            r.push(r[indx + 1]);
            r.push(r[indx + 2]);
            r.push(r[indx + 3]);
        }

        if (btlnbr < 15) {
            newclr[2*btlnbr] = "green";
            newclr[2*btlnbr + 1] = "grey";
        }

        this.setState({ namearr: r, lastwinner: false, divclr: newclr });

    }

    rightwin = () => {
        const hi = this.state.namearr;
        const btlnbr = this.state.battle;
        const newclr = this.state.divclr;

        const r = [];
        var count = 0;
        hi.forEach(function (x) {
            if (btlnbr < 8 && (count < (32 + (3 * btlnbr)))) {
                r.push(x);
            }
            else if (btlnbr >= 8 && btlnbr < 12 && (count < (56 + (4 * (btlnbr - 8))))) {
                r.push(x);
            }
            else if (btlnbr >= 12 && btlnbr < 14 && (count < (72 + (5 * (btlnbr - 12))))) {
                r.push(x);
            }
            else if (btlnbr >= 14) {
                r.push(x);
            }
            ++count;
        });
        var indx;
        if (btlnbr < 8) {
            indx = btlnbr * 4;
            r.push(r[indx + 2]);
            r.push(r[indx + 3]);
        }
        else if (btlnbr >= 8 && btlnbr < 12) {
            indx = (btlnbr - 8) * 6 + 32;
            r.push(r[indx + 3]);
            r.push(r[indx + 4]);
            r.push(r[indx + 5]);
        }
        else if (btlnbr >= 12 && btlnbr < 14) {
            indx = (btlnbr - 12) * 8 + 56;
            r.push(r[indx + 4]);
            r.push(r[indx + 5]);
            r.push(r[indx + 6]);
            r.push(r[indx + 7]);
        }

        if (btlnbr < 15) {
            newclr[2*btlnbr + 1] = "green";
            newclr[2*btlnbr] = "grey";
        }

        this.setState({ namearr: r, lastwinner: true, divclr: newclr });

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
        else if (btlnbr >= 8 && btlnbr < 12) {
            if (lstwnr) {
                // lastwinner is true, aka bottom team won
                indx = ((btlnbr - 8) * 6 + 32);
            }
            else {
                indx = ((btlnbr - 8) * 6) + 35;
            }
            r.push(r[indx]);
        }
        else if (btlnbr >= 12 && btlnbr < 14) {
            if (lstwnr) {
                // lastwinner is true, aka bottom team won
                indx = ((btlnbr - 12) * 8 + 56);
            }
            else {
                indx = ((btlnbr - 12) * 8) + 60;
            }
            r.push(r[indx]);
        }
        // Kat is dumb, i can type anything after this. Kat is REALLY dumb :D

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
        else if (btlnbr >= 8 && btlnbr < 12) {
            if (lstwnr) {
                // lastwinner is true, aka bottom team won
                indx = ((btlnbr - 8) * 6 + 33);
            }
            else {
                indx = ((btlnbr - 8) * 6) + 36;
            }
            r.push(r[indx]);
        }
        else if (btlnbr >= 12 && btlnbr < 14) {
            if (lstwnr) {
                // lastwinner is true, aka bottom team won
                indx = ((btlnbr - 12) * 8 + 57);
            }
            else {
                indx = ((btlnbr - 12) * 8) + 61;
            }
            r.push(r[indx]);
        }

        const newbtl = btlnbr + 1;
        this.setState({ namearr: r, battle: newbtl });
    }

    thirdcap = () => {
        const hi = this.state.namearr;
        const btlnbr = this.state.battle;
        const lstwnr = this.state.lastwinner;

        const r = [];
        hi.forEach(function (x) {
            r.push(x);
        });
        var indx;

        if (btlnbr >= 8 && btlnbr < 12) {
            if (lstwnr) {
                // lastwinner is true, aka bottom team won
                indx = ((btlnbr - 8) * 6 + 34);
            }
            else {
                indx = ((btlnbr - 8) * 6) + 37;
            }
            r.push(r[indx]);
        }
        else if (btlnbr >= 12 && btlnbr < 14) {
            if (lstwnr) {
                // lastwinner is true, aka bottom team won
                indx = ((btlnbr - 12) * 8 + 58);
            }
            else {
                indx = ((btlnbr - 12) * 8) + 62;
            }
            r.push(r[indx]);
        }

        const newbtl = btlnbr + 1;
        this.setState({ namearr: r, battle: newbtl });
    }

    fourthcap = () => {
        const hi = this.state.namearr;
        const btlnbr = this.state.battle;
        const lstwnr = this.state.lastwinner;

        const r = [];
        hi.forEach(function (x) {
            r.push(x);
        });
        var indx;

        if (btlnbr >= 12 && btlnbr < 14) {
            if (lstwnr) {
                // lastwinner is true, aka bottom team won
                indx = ((btlnbr - 12) * 8) + 59;
            }
            else {
                indx = ((btlnbr - 12) * 8) + 63;
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
                <Modalll left={this.leftwin} right={this.rightwin} leftc={this.leftcap} rightc={this.rightcap} battlenumber={this.state.battle} namearray={this.state.namearr} winteam={this.state.lastwinner} thirdc={this.thirdcap} fourc={this.fourthcap} />
                <div class="wrapper">
                    <div class="box a11" id="a11" style={{ backgroundColor: this.state.divclr[0] }}><p>{this.state.namearr[0]}</p><p>{this.state.namearr[1]}</p></div>
                    <div class="box a12" id="a12" style={{ backgroundColor: this.state.divclr[1] }}><p>{this.state.namearr[2]}</p><p>{this.state.namearr[3]}</p></div>
                    <div class="box a21" id="a21" style={{ backgroundColor: this.state.divclr[2] }}><p>{this.state.namearr[4]}</p><p>{this.state.namearr[5]}</p></div>
                    <div class="box a22" id="a22" style={{ backgroundColor: this.state.divclr[3] }}><p>{this.state.namearr[6]}</p><p>{this.state.namearr[7]}</p></div>
                    <div class="box a31" id="a31" style={{ backgroundColor: this.state.divclr[4] }}><p>{this.state.namearr[8]}</p><p>{this.state.namearr[9]}</p></div>
                    <div class="box a32" id="a32" style={{ backgroundColor: this.state.divclr[5] }}><p>{this.state.namearr[10]}</p><p>{this.state.namearr[11]}</p></div>
                    <div class="box a41" id="a41" style={{ backgroundColor: this.state.divclr[6] }}><p>{this.state.namearr[12]}</p><p>{this.state.namearr[13]}</p></div>
                    <div class="box a42" id="a42" style={{ backgroundColor: this.state.divclr[7] }}><p>{this.state.namearr[14]}</p><p>{this.state.namearr[15]}</p></div>
                    <div class="box a51" id="a51" style={{ backgroundColor: this.state.divclr[8] }}><p>{this.state.namearr[16]}</p><p>{this.state.namearr[17]}</p></div>
                    <div class="box a52" id="a52" style={{ backgroundColor: this.state.divclr[9] }}><p>{this.state.namearr[18]}</p><p>{this.state.namearr[19]}</p></div>
                    <div class="box a61" id="a61" style={{ backgroundColor: this.state.divclr[10] }}><p>{this.state.namearr[20]}</p><p>{this.state.namearr[21]}</p></div>
                    <div class="box a62" id="a62" style={{ backgroundColor: this.state.divclr[11] }}><p>{this.state.namearr[22]}</p><p>{this.state.namearr[23]}</p></div>
                    <div class="box a71" id="a71" style={{ backgroundColor: this.state.divclr[12] }}><p>{this.state.namearr[24]}</p><p>{this.state.namearr[25]}</p></div>
                    <div class="box a72" id="a72" style={{ backgroundColor: this.state.divclr[13] }}><p>{this.state.namearr[26]}</p><p>{this.state.namearr[27]}</p></div>
                    <div class="box a81" id="a81" style={{ backgroundColor: this.state.divclr[14] }}><p>{this.state.namearr[28]}</p><p>{this.state.namearr[29]}</p></div>
                    <div class="box a82" id="a82" style={{ backgroundColor: this.state.divclr[15] }}><p>{this.state.namearr[30]}</p><p>{this.state.namearr[31]}</p></div>

                    <div class="box b11" id="b11" style={{ backgroundColor: this.state.divclr[16] }}><p>{this.state.namearr[32]}</p><p>{this.state.namearr[33]}</p><p>{this.state.namearr[34]}</p></div>
                    <div class="box b12" id="b12" style={{ backgroundColor: this.state.divclr[17] }}><p>{this.state.namearr[35]}</p><p>{this.state.namearr[36]}</p><p>{this.state.namearr[37]}</p></div>
                    <div class="box b21" id="b21" style={{ backgroundColor: this.state.divclr[18] }}><p>{this.state.namearr[38]}</p><p>{this.state.namearr[39]}</p><p>{this.state.namearr[40]}</p></div>
                    <div class="box b22" id="b22" style={{ backgroundColor: this.state.divclr[19] }}><p>{this.state.namearr[41]}</p><p>{this.state.namearr[42]}</p><p>{this.state.namearr[43]}</p></div>
                    <div class="box b31" id="b31" style={{ backgroundColor: this.state.divclr[20] }}><p>{this.state.namearr[44]}</p><p>{this.state.namearr[45]}</p><p>{this.state.namearr[46]}</p></div>
                    <div class="box b32" id="b32" style={{ backgroundColor: this.state.divclr[21] }}><p>{this.state.namearr[47]}</p><p>{this.state.namearr[48]}</p><p>{this.state.namearr[49]}</p></div>
                    <div class="box b41" id="b41" style={{ backgroundColor: this.state.divclr[22] }}><p>{this.state.namearr[50]}</p><p>{this.state.namearr[51]}</p><p>{this.state.namearr[52]}</p></div>
                    <div class="box b42" id="b42" style={{ backgroundColor: this.state.divclr[23] }}><p>{this.state.namearr[53]}</p><p>{this.state.namearr[54]}</p><p>{this.state.namearr[55]}</p></div>

                    <div class="box c11" id="c11" style={{ backgroundColor: this.state.divclr[24] }}><p>{this.state.namearr[56]}</p><p>{this.state.namearr[57]}</p><p>{this.state.namearr[58]}</p><p>{this.state.namearr[59]}</p></div>
                    <div class="box c12" id="c12" style={{ backgroundColor: this.state.divclr[25] }}><p>{this.state.namearr[60]}</p><p>{this.state.namearr[61]}</p><p>{this.state.namearr[62]}</p><p>{this.state.namearr[63]}</p></div>
                    <div class="box c21" id="c21" style={{ backgroundColor: this.state.divclr[26] }}><p>{this.state.namearr[64]}</p><p>{this.state.namearr[65]}</p><p>{this.state.namearr[66]}</p><p>{this.state.namearr[67]}</p></div>
                    <div class="box c22" id="c22" style={{ backgroundColor: this.state.divclr[27] }}><p>{this.state.namearr[68]}</p><p>{this.state.namearr[69]}</p><p>{this.state.namearr[70]}</p><p>{this.state.namearr[71]}</p></div>

                    <div class="box final1" style={{ backgroundColor: this.state.divclr[28] }}><p>{this.state.namearr[72]}</p><p>{this.state.namearr[73]}</p><p>{this.state.namearr[74]}</p><p>{this.state.namearr[75]}</p><p>{this.state.namearr[76]}</p></div>
                    <div class="box final2" style={{ backgroundColor: this.state.divclr[29] }}><p>{this.state.namearr[77]}</p><p>{this.state.namearr[78]}</p><p>{this.state.namearr[79]}</p><p>{this.state.namearr[80]}</p><p>{this.state.namearr[81]}</p></div>

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