import React, { Component } from 'react';
import { Button, UncontrolledPopover, PopoverHeader, PopoverBody } from 'reactstrap';
import AppNavbar from './AppNavbar';
import './CTB.css';

class CTBBattle extends Component {


    state = {
        A1: '',
        A1C: '#',
        A2: '#',
        A2C: '#',
        A3: '#',
        A3C: '#',
        A4: '#',
        A4C: '#',
        A5: '#',
        A5C: '#',
        A6: '#',
        A6C: '#',
        A7: '#',
        A7C: '#',
        A8: '#',
        A8C: '#',

        B1: '#',
        B2: '#',
        B3: '#',
        B4: '#',
        C1: '#',
        C2: '#',
    }
    /*onChange = (x) => {
        alert(x);
        this.setState({ color: 'green' });
    }*/

    setA1(x) {
        if (this.state.A1 !== '') {
            this.setState({ A1C: '', A2: '' });
        } else {
            this.setState({ A1: x });
        }
    }

    setA1C(x) {
        this.setState({ A1C: x });
    }

    setA2(x) {
        if (this.state.A2 !== '') {
            this.setState({ A2C: '', A3: '' });
        } else {
            this.setState({ A2: x });
        }
    }

    setA2C(x) {
        this.setState({ A2C: x });
    }

    setA3(x) {
        if (this.state.A3 !== '') {
            this.setState({ A3C: '', A4: '' });
        } else {
            this.setState({ A3: x });
        }
    }

    setA3C(x) {
        this.setState({ A3C: x });
    }

    setA4(x) {
        if (this.state.A4 !== '') {
            this.setState({ A4C: '', A5: '' });
        } else {
            this.setState({ A4: x });
        }
    }

    setA4C(x) {
        this.setState({ A4C: x });
    }

    setA5(x) {
        if (this.state.A5 !== '') {
            this.setState({ A5C: '', A6: '' });
        } else {
            this.setState({ A5: x });
        }
    }

    setA5C(x) {
        this.setState({ A5C: x });
    }

    setA6(x) {
        if (this.state.A6 !== '') {
            this.setState({ A6C: '', A7: '' });
        } else {
            this.setState({ A7: x });
        }
    }

    setA7C(x) {
        this.setState({ A7C: x });
    }

    report() {
        alert("A1 : " + this.state.A1 + " A1C : " + this.state.A1C);
    }

    render() {
        return (
            <div>
                <AppNavbar />
                <div class="wrapper">
                    <div class="box a11" id="a11"><Button color="primary" disabled={this.state.A1 === '1' || this.state.A1C === '1' || this.state.A1C === '2'} onClick={() => this.setA1('1')}>A11</Button></div>
                    <div class="box a12" id="a12"><Button color="primary" disabled={this.state.A1 === '2' || this.state.A1C === '1' || this.state.A1C === '2'} onClick={() => this.setA1('2')}>A12</Button></div>
                    <div class="box a21" id="a21"><Button color="primary" disabled={this.state.A1C === '#' || this.state.A1C === '' || this.state.A2 === '1' || this.state.A2C === '1' || this.state.A2C === '2'} onClick={() => this.setA2('1')}>A21</Button></div>
                    <div class="box a22" id="a22"><Button color="primary" disabled={this.state.A1C === '#' || this.state.A1C === '' || this.state.A2 === '2' || this.state.A2C === '1' || this.state.A2C === '2'} onClick={() => this.setA2('2')}>A22</Button></div>
                    <div class="box a31" id="a31"><Button color="primary" disabled={this.state.A2C === '#' || this.state.A2C === '' || this.state.A3 === '1' || this.state.A3C === '1' || this.state.A3C === '2'} onClick={() => this.setA3('1')}>A31</Button></div>
                    <div class="box a32" id="a32"><Button color="primary" disabled={this.state.A2C === '#' || this.state.A2C === '' || this.state.A3 === '2' || this.state.A3C === '1' || this.state.A3C === '2'} onClick={() => this.setA3('2')}>A22</Button></div>
                    <div class="box a41" id="a41">A41</div>
                    <div class="box a42" id="a42">A42</div>
                    <div class="box a51" id="a51">A51</div>
                    <div class="box a52" id="a52">A52</div>
                    <div class="box a61" id="a61">A61</div>
                    <div class="box a62" id="a62">A62</div>
                    <div class="box a71" id="a71">A71</div>
                    <div class="box a72" id="a72">A72</div>
                    <div class="box a81" id="a81">A81</div>
                    <div class="box a82" id="a82">A82</div>

                    <div class="box b11"><Button color="primary" onClick={() => this.report()}>B11</Button></div>
                    <div class="box b12">B12</div>
                    <div class="box b21">B21</div>
                    <div class="box b22">B22</div>
                    <div class="box b31">B31</div>
                    <div class="box b32">B32</div>
                    <div class="box b41">B41</div>
                    <div class="box b42">B42</div>

                    <div class="box c12">C12</div>
                    <div class="box c11">C11</div>
                    <div class="box c22">C22</div>
                    <div class="box c21">C21</div>

                    <div class="box final1">FINAL1</div>
                    <div class="box final2">FINAL2</div>

                    <div class="fillbox a1fill" id="a1fill">&nbsp;</div>
                    <div class="fillbox a2fill" id="a2fill">&nbsp;</div>
                    <div class="fillbox a3fill" id="a3fill">&nbsp;</div>
                    <div class="fillbox a4fill" id="a4fill">&nbsp;</div>
                    <div class="fillbox a5fill" id="a5fill">&nbsp;</div>
                    <div class="fillbox a6fill" id="a6fill">&nbsp;</div>
                    <div class="fillbox a7fill" id="a7fill">&nbsp;</div>
                    <div class="fillbox a8fill" id="a8fill">&nbsp;</div>

                    <UncontrolledPopover trigger="legacy" placement="right" target="a1fill" isOpen={(this.state.A1C === '')}>
                        <PopoverHeader>Capture the breaker!</PopoverHeader>
                        <PopoverBody>
                            <Button onClick={() => this.setA1C('1')}>{(this.state.A1 === '2') ? "A1 First" : "A2 First"}</Button>
                            <Button onClick={() => this.setA1C('2')}>{(this.state.A1 === '2') ? "A1 Second" : "A2 Second"}</Button>
                        </PopoverBody>
                    </UncontrolledPopover>

                    <UncontrolledPopover trigger="legacy" placement="right" target="a2fill" isOpen={(this.state.A2C === '')}>
                        <PopoverHeader>Capture the breaker!</PopoverHeader>
                        <PopoverBody>
                            <Button onClick={() => this.setA2C('1')}>{(this.state.A2 === '2') ? "A1 First" : "A2 First"}</Button>
                            <Button onClick={() => this.setA2C('2')}>{(this.state.A2 === '2') ? "A1 Second" : "A2 Second"}</Button>
                        </PopoverBody>
                    </UncontrolledPopover>

                    <UncontrolledPopover trigger="legacy" placement="right" target="a3fill" isOpen={(this.state.A3C === '')}>
                        <PopoverHeader>Capture the breaker!</PopoverHeader>
                        <PopoverBody>
                            <Button onClick={() => this.setA3C('1')}>{(this.state.A3 === '2') ? "A1 First" : "A2 First"}</Button>
                            <Button onClick={() => this.setA3C('2')}>{(this.state.A3 === '2') ? "A1 Second" : "A2 Second"}</Button>
                        </PopoverBody>
                    </UncontrolledPopover>
                </div>

            </div>
        )
    }

}

export default CTBBattle;