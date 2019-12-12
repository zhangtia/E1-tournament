import React, { Component } from 'react';
import { Button, UncontrolledPopover, PopoverHeader, PopoverBody } from 'reactstrap';
import AppNavbar from './AppNavbar';
import './CTB.css';

class CTBBattle extends Component {

        state = {
            groups: [],

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
            B1C: "#",
            B2: '#',
            B2C: '#',
            B3: '#',
            B3C: '#',
            B4: '#',
            B4C: '#',

            C1: '#',
            C1C: '#',
            C2: '#',
            C2C: '#',
        };


    componentDidMount() {
        fetch('api/groups')
            .then(response => response.json())
            .then(data => this.setState({ groups: data }));
    }

    custom_comp(a, b) {
        return b.score - a.score;
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
            this.setState({ A6: x });
        }
    }

    setA6C(x) {
        this.setState({ A6C: x });
    }

    setA7(x) {
        if (this.state.A7 !== '') {
            this.setState({ A7C: '', A8: '' });
        } else {
            this.setState({ A7: x });
        }
    }

    setA7C(x) {
        this.setState({ A7C: x });
    }

    setA8(x) {
        if (this.state.A8 !== '') {
            this.setState({ A8C: '', B1: '' });
        } else {
            this.setState({ A8: x });
        }
    }

    setA8C(x) {
        this.setState({ A8C: x });
    }

    setB1(x) {
        if (this.state.B1 !== '') {
            this.setState({ B1C: '', B2: '' });
        } else {
            this.setState({ B1: x });
        }
    }

    setB1C(x) {
        this.setState({ B1C: x });
    }

    setB2(x) {
        if (this.state.B2 !== '') {
            this.setState({ B2C: '', B3: '' });
        } else {
            this.setState({ B2: x });
        }
    }

    setB2C(x) {
        this.setState({ B2C: x });
    }

    setB3(x) {
        if (this.state.B3 !== '') {
            this.setState({ B3C: '', B4: '' });
        } else {
            this.setState({ B3: x });
        }
    }

    setB3C(x) {
        this.setState({ B3C: x });
    }

    setB4(x) {
        if (this.state.B4 !== '') {
            this.setState({ B4C: '', C1: '' });
        } else {
            this.setState({ B4: x });
        }
    }

    setB4C(x) {
        this.setState({ B4C: x });
    }

    setC1(x) {
        if (this.state.C1 !== '') {
            this.setState({ C1C: '', C2: '' });
        } else {
            this.setState({ C1: x });
        }
    }

    setC1C(x) {
        this.setState({ C1C: x });
    }

    setC2(x) {
        if (this.state.C2 !== '') {
            this.setState({ C2C: '' });
        } else {
            this.setState({ C2: x });
        }
    }

    setC2C(x) {
        this.setState({ C2C: x });
    }


    report() {
        alert("A1 : " + this.state.A1 + " A1C : " + this.state.A1C);
    }

    render() {
        const hi = this.state.groups;
        hi.sort(this.custom_comp);

        const arr = [];
        hi.forEach(function (x) {
            arr.push(x.name);
        });

        //alert(hi);

        return (
            <div>
                <AppNavbar />
                <div class="wrapper">
                    <Button class="box a11" id="a11" color="primary" disabled={this.state.A1 === '1' || this.state.A1C === '1' || this.state.A1C === '2'} onClick={() => this.setA1('1')}>{arr[0]}</Button>
                    <Button class="box a12" id="a12" color="primary" disabled={this.state.A1 === '2' || this.state.A1C === '1' || this.state.A1C === '2'} onClick={() => this.setA1('2')}>{arr[1]}</Button>
                    <Button class="box a21" id="a21" color="primary" disabled={this.state.A1C === '#' || this.state.A1C === '' || this.state.A2 === '1' || this.state.A2C === '1' || this.state.A2C === '2'} onClick={() => this.setA2('1')}>A21</Button>
                    <div class="box a22" id="a22"><Button color="primary" disabled={this.state.A1C === '#' || this.state.A1C === '' || this.state.A2 === '2' || this.state.A2C === '1' || this.state.A2C === '2'} onClick={() => this.setA2('2')}>A22</Button></div>
                    <div class="box a31" id="a31"><Button color="primary" disabled={this.state.A2C === '#' || this.state.A2C === '' || this.state.A3 === '1' || this.state.A3C === '1' || this.state.A3C === '2'} onClick={() => this.setA3('1')}>A31</Button></div>
                    <div class="box a32" id="a32"><Button color="primary" disabled={this.state.A2C === '#' || this.state.A2C === '' || this.state.A3 === '2' || this.state.A3C === '1' || this.state.A3C === '2'} onClick={() => this.setA3('2')}>A32</Button></div>
                    <div class="box a41" id="a41"><Button color="primary" disabled={this.state.A3C === '#' || this.state.A3C === '' || this.state.A4 === '1' || this.state.A4C === '1' || this.state.A4C === '2'} onClick={() => this.setA4('1')}>A41</Button></div>
                    <div class="box a42" id="a42"><Button color="primary" disabled={this.state.A3C === '#' || this.state.A3C === '' || this.state.A4 === '2' || this.state.A4C === '1' || this.state.A4C === '2'} onClick={() => this.setA4('2')}>A42</Button></div>
                    <div class="box a51" id="a51"><Button color="primary" disabled={this.state.A4C === '#' || this.state.A4C === '' || this.state.A5 === '1' || this.state.A5C === '1' || this.state.A5C === '2'} onClick={() => this.setA5('1')}>A51</Button></div>
                    <div class="box a52" id="a52"><Button color="primary" disabled={this.state.A4C === '#' || this.state.A4C === '' || this.state.A5 === '2' || this.state.A5C === '1' || this.state.A5C === '2'} onClick={() => this.setA5('2')}>A52</Button></div>
                    <div class="box a61" id="a61"><Button color="primary" disabled={this.state.A5C === '#' || this.state.A5C === '' || this.state.A6 === '1' || this.state.A6C === '1' || this.state.A6C === '2'} onClick={() => this.setA6('1')}>A61</Button></div>
                    <div class="box a62" id="a62"><Button color="primary" disabled={this.state.A5C === '#' || this.state.A5C === '' || this.state.A6 === '2' || this.state.A6C === '1' || this.state.A6C === '2'} onClick={() => this.setA6('2')}>A62</Button></div>
                    <div class="box a71" id="a71"><Button color="primary" disabled={this.state.A6C === '#' || this.state.A6C === '' || this.state.A7 === '1' || this.state.A7C === '1' || this.state.A7C === '2'} onClick={() => this.setA7('1')}>A71</Button></div>
                    <div class="box a72" id="a72"><Button color="primary" disabled={this.state.A6C === '#' || this.state.A6C === '' || this.state.A7 === '2' || this.state.A7C === '1' || this.state.A7C === '2'} onClick={() => this.setA7('2')}>A72</Button></div>
                    <div class="box a81" id="a81"><Button color="primary" disabled={this.state.A7C === '#' || this.state.A7C === '' || this.state.A8 === '1' || this.state.A8C === '1' || this.state.A8C === '2'} onClick={() => this.setA8('1')}>A81</Button></div>
                    <div class="box a82" id="a82"><Button color="primary" disabled={this.state.A7C === '#' || this.state.A7C === '' || this.state.A8 === '2' || this.state.A8C === '1' || this.state.A8C === '2'} onClick={() => this.setA8('2')}>A82</Button></div>

                    <div class="box b11" id="b11"><Button color="primary" disabled={this.state.A8C === '#' || this.state.A8C === '' || this.state.B1 === '1' || this.state.B1C === '1' || this.state.B1C === '2'} onClick={() => this.setB1('1')}>B11</Button></div>
                    <div class="box b12" id="b12"><Button color="primary" disabled={this.state.A8C === '#' || this.state.A8C === '' || this.state.B1 === '2' || this.state.B1C === '1' || this.state.B1C === '2'} onClick={() => this.setB1('2')}>B12</Button></div>
                    <div class="box b21" id="b21"><Button color="primary" disabled={this.state.B1C === '#' || this.state.B1C === '' || this.state.B2 === '1' || this.state.B2C === '1' || this.state.B2C === '2'} onClick={() => this.setB2('1')}>B21</Button></div>
                    <div class="box b22" id="b22"><Button color="primary" disabled={this.state.B1C === '#' || this.state.B1C === '' || this.state.B2 === '2' || this.state.B2C === '1' || this.state.B2C === '2'} onClick={() => this.setB2('2')}>B22</Button></div>
                    <div class="box b31" id="b31"><Button color="primary" disabled={this.state.B2C === '#' || this.state.B2C === '' || this.state.B3 === '1' || this.state.B3C === '1' || this.state.B3C === '2'} onClick={() => this.setB3('1')}>B31</Button></div>
                    <div class="box b32" id="b32"><Button color="primary" disabled={this.state.B2C === '#' || this.state.B2C === '' || this.state.B3 === '2' || this.state.B3C === '1' || this.state.B3C === '2'} onClick={() => this.setB3('2')}>B32</Button></div>
                    <div class="box b41" id="b41"><Button color="primary" disabled={this.state.B3C === '#' || this.state.B3C === '' || this.state.B4 === '1' || this.state.B4C === '1' || this.state.B4C === '2'} onClick={() => this.setB4('1')}>B41</Button></div>
                    <div class="box b42" id="b42"><Button color="primary" disabled={this.state.B3C === '#' || this.state.B3C === '' || this.state.B4 === '2' || this.state.B4C === '1' || this.state.B4C === '2'} onClick={() => this.setB4('2')}>B42</Button></div>

                    <div class="box c12" id="c12"><Button color="primary" disabled={this.state.B4C === '#' || this.state.B4C === '' || this.state.C1 === '2' || this.state.C1C === '1' || this.state.C1C === '2'} onClick={() => this.setC1('2')}>C12</Button></div>
                    <div class="box c11" id="c11"><Button color="primary" disabled={this.state.B4C === '#' || this.state.B4C === '' || this.state.C1 === '1' || this.state.C1C === '1' || this.state.C1C === '2'} onClick={() => this.setC1('1')}>C11</Button></div>
                    <div class="box c22" id="c22"><Button color="primary" disabled={this.state.C1C === '#' || this.state.C1C === '' || this.state.C2 === '2' || this.state.C2C === '1' || this.state.C2C === '2'} onClick={() => this.setC2('2')}>C22</Button></div>
                    <div class="box c21" id="c21"><Button color="primary" disabled={this.state.C1C === '#' || this.state.C1C === '' || this.state.C2 === '1' || this.state.C2C === '1' || this.state.C2C === '2'} onClick={() => this.setC2('1')}>C21</Button></div>

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

                    <UncontrolledPopover trigger="legacy" placement="right" target="a4fill" isOpen={(this.state.A4C === '')}>
                        <PopoverHeader>Capture the breaker!</PopoverHeader>
                        <PopoverBody>
                            <Button onClick={() => this.setA4C('1')}>{(this.state.A4 === '2') ? "A1 First" : "A2 First"}</Button>
                            <Button onClick={() => this.setA4C('2')}>{(this.state.A4 === '2') ? "A1 Second" : "A2 Second"}</Button>
                        </PopoverBody>
                    </UncontrolledPopover>

                    <UncontrolledPopover trigger="legacy" placement="left" target="a5fill" isOpen={(this.state.A5C === '')}>
                        <PopoverHeader>Capture the breaker!</PopoverHeader>
                        <PopoverBody>
                            <Button onClick={() => this.setA5C('1')}>{(this.state.A5 === '2') ? "A1 First" : "A2 First"}</Button>
                            <Button onClick={() => this.setA5C('2')}>{(this.state.A5 === '2') ? "A1 Second" : "A2 Second"}</Button>
                        </PopoverBody>
                    </UncontrolledPopover>

                    <UncontrolledPopover trigger="legacy" placement="left" target="a6fill" isOpen={(this.state.A6C === '')}>
                        <PopoverHeader>Capture the breaker!</PopoverHeader>
                        <PopoverBody>
                            <Button onClick={() => this.setA6C('1')}>{(this.state.A6 === '2') ? "A1 First" : "A2 First"}</Button>
                            <Button onClick={() => this.setA6C('2')}>{(this.state.A6 === '2') ? "A1 Second" : "A2 Second"}</Button>
                        </PopoverBody>
                    </UncontrolledPopover>

                    <UncontrolledPopover trigger="legacy" placement="left" target="a7fill" isOpen={(this.state.A7C === '')}>
                        <PopoverHeader>Capture the breaker!</PopoverHeader>
                        <PopoverBody>
                            <Button onClick={() => this.setA7C('1')}>{(this.state.A7 === '2') ? "A1 First" : "A2 First"}</Button>
                            <Button onClick={() => this.setA7C('2')}>{(this.state.A7 === '2') ? "A1 Second" : "A2 Second"}</Button>
                        </PopoverBody>
                    </UncontrolledPopover>

                    <UncontrolledPopover trigger="legacy" placement="left" target="a8fill" isOpen={(this.state.A8C === '')}>
                        <PopoverHeader>Capture the breaker!</PopoverHeader>
                        <PopoverBody>
                            <Button onClick={() => this.setA8C('1')}>{(this.state.A8 === '2') ? "A1 First" : "A2 First"}</Button>
                            <Button onClick={() => this.setA8C('2')}>{(this.state.A8 === '2') ? "A1 Second" : "A2 Second"}</Button>
                        </PopoverBody>
                    </UncontrolledPopover>

                    {(this.state.B1 === '2') &&
                        <UncontrolledPopover trigger="legacy" placement="bottom" target="b11" isOpen={(this.state.B1C === '')}>
                            <PopoverHeader>Capture the breaker!</PopoverHeader>
                            <PopoverBody>
                                <Button onClick={() => this.setB1C('1')}>{(this.state.B1 === '2') ? "B1 First" : "B2 First"}</Button>
                                <Button onClick={() => this.setB1C('2')}>{(this.state.B1 === '2') ? "B1 Second" : "B2 Second"}</Button>
                                <Button onClick={() => this.setB1C('3')}>{(this.state.B1 === '2') ? "B1 Third" : "B2 Third"}</Button>
                            </PopoverBody>
                        </UncontrolledPopover>}

                    {(this.state.B1 === '1') &&
                        <UncontrolledPopover trigger="legacy" placement="top" target="b12" isOpen={(this.state.B1C === '')}>
                            <PopoverHeader>Capture the breaker!</PopoverHeader>
                            <PopoverBody>
                                <Button onClick={() => this.setB1C('1')}>{(this.state.B1 === '2') ? "B1 First" : "B2 First"}</Button>
                                <Button onClick={() => this.setB1C('2')}>{(this.state.B1 === '2') ? "B1 Second" : "B2 Second"}</Button>
                                <Button onClick={() => this.setB1C('3')}>{(this.state.B1 === '2') ? "B1 Third" : "B2 Third"}</Button>
                            </PopoverBody>
                        </UncontrolledPopover>}

                    {(this.state.B2 === '2') &&
                        <UncontrolledPopover trigger="legacy" placement="bottom" target="b21" isOpen={(this.state.B2C === '')}>
                            <PopoverHeader>Capture the breaker!</PopoverHeader>
                            <PopoverBody>
                                <Button onClick={() => this.setB2C('1')}>{(this.state.B2 === '2') ? "B1 First" : "B2 First"}</Button>
                                <Button onClick={() => this.setB2C('2')}>{(this.state.B2 === '2') ? "B1 Second" : "B2 Second"}</Button>
                                <Button onClick={() => this.setB2C('3')}>{(this.state.B2 === '2') ? "B1 Third" : "B2 Third"}</Button>
                            </PopoverBody>
                        </UncontrolledPopover>}

                    {(this.state.B2 === '1') &&
                        <UncontrolledPopover trigger="legacy" placement="top" target="b22" isOpen={(this.state.B2C === '')}>
                            <PopoverHeader>Capture the breaker!</PopoverHeader>
                            <PopoverBody>
                                <Button onClick={() => this.setB2C('1')}>{(this.state.B2 === '2') ? "B1 First" : "B2 First"}</Button>
                                <Button onClick={() => this.setB2C('2')}>{(this.state.B2 === '2') ? "B1 Second" : "B2 Second"}</Button>
                                <Button onClick={() => this.setB2C('3')}>{(this.state.B2 === '2') ? "B1 Third" : "B2 Third"}</Button>
                            </PopoverBody>
                        </UncontrolledPopover>}

                    {(this.state.B3 === '2') &&
                        <UncontrolledPopover trigger="legacy" placement="bottom" target="b31" isOpen={(this.state.B3C === '')}>
                            <PopoverHeader>Capture the breaker!</PopoverHeader>
                            <PopoverBody>
                                <Button onClick={() => this.setB3C('1')}>{(this.state.B3 === '2') ? "B1 First" : "B2 First"}</Button>
                                <Button onClick={() => this.setB3C('2')}>{(this.state.B3 === '2') ? "B1 Second" : "B2 Second"}</Button>
                                <Button onClick={() => this.setB3C('3')}>{(this.state.B3 === '2') ? "B1 Third" : "B2 Third"}</Button>
                            </PopoverBody>
                        </UncontrolledPopover>}

                    {(this.state.B3 === '1') &&
                        <UncontrolledPopover trigger="legacy" placement="top" target="b32" isOpen={(this.state.B3C === '')}>
                            <PopoverHeader>Capture the breaker!</PopoverHeader>
                            <PopoverBody>
                                <Button onClick={() => this.setB3C('1')}>{(this.state.B3 === '2') ? "B1 First" : "B2 First"}</Button>
                                <Button onClick={() => this.setB3C('2')}>{(this.state.B3 === '2') ? "B1 Second" : "B2 Second"}</Button>
                                <Button onClick={() => this.setB3C('3')}>{(this.state.B3 === '2') ? "B1 Third" : "B2 Third"}</Button>
                            </PopoverBody>
                        </UncontrolledPopover>}

                    {(this.state.B4 === '2') &&
                        <UncontrolledPopover trigger="legacy" placement="bottom" target="b41" isOpen={(this.state.B4C === '')}>
                            <PopoverHeader>Capture the breaker!</PopoverHeader>
                            <PopoverBody>
                                <Button onClick={() => this.setB4C('1')}>{(this.state.B4 === '2') ? "B1 First" : "B2 First"}</Button>
                                <Button onClick={() => this.setB4C('2')}>{(this.state.B4 === '2') ? "B1 Second" : "B2 Second"}</Button>
                                <Button onClick={() => this.setB4C('3')}>{(this.state.B4 === '2') ? "B1 Third" : "B2 Third"}</Button>
                            </PopoverBody>
                        </UncontrolledPopover>}

                    {(this.state.B4 === '1') &&
                        <UncontrolledPopover trigger="legacy" placement="top" target="b42" isOpen={(this.state.B4C === '')}>
                            <PopoverHeader>Capture the breaker!</PopoverHeader>
                            <PopoverBody>
                                <Button onClick={() => this.setB4C('1')}>{(this.state.B4 === '2') ? "B1 First" : "B2 First"}</Button>
                                <Button onClick={() => this.setB4C('2')}>{(this.state.B4 === '2') ? "B1 Second" : "B2 Second"}</Button>
                                <Button onClick={() => this.setB4C('3')}>{(this.state.B4 === '2') ? "B1 Third" : "B2 Third"}</Button>
                            </PopoverBody>
                        </UncontrolledPopover>}

                    {(this.state.C1 === '2') &&
                        <UncontrolledPopover trigger="legacy" placement="bottom" target="c11" isOpen={(this.state.C1C === '')}>
                            <PopoverHeader>Capture the breaker!</PopoverHeader>
                            <PopoverBody>
                                <Button onClick={() => this.setC1C('1')}>{(this.state.C1 === '2') ? "B1 First" : "B2 First"}</Button>
                                <Button onClick={() => this.setC1C('2')}>{(this.state.C1 === '2') ? "B1 Second" : "B2 Second"}</Button>
                                <Button onClick={() => this.setC1C('3')}>{(this.state.C1 === '2') ? "B1 Third" : "B2 Third"}</Button>
                            </PopoverBody>
                        </UncontrolledPopover>}

                    {(this.state.C1 === '1') &&
                        <UncontrolledPopover trigger="legacy" placement="top" target="c12" isOpen={(this.state.C1C === '')}>
                            <PopoverHeader>Capture the breaker!</PopoverHeader>
                            <PopoverBody>
                                <Button onClick={() => this.setC1C('1')}>{(this.state.C1 === '2') ? "B1 First" : "B2 First"}</Button>
                                <Button onClick={() => this.setC1C('2')}>{(this.state.C1 === '2') ? "B1 Second" : "B2 Second"}</Button>
                                <Button onClick={() => this.setC1C('3')}>{(this.state.C1 === '2') ? "B1 Third" : "B2 Third"}</Button>
                            </PopoverBody>
                        </UncontrolledPopover>}

                    {(this.state.C2 === '2') &&
                        <UncontrolledPopover trigger="legacy" placement="bottom" target="c21" isOpen={(this.state.C2C === '')}>
                            <PopoverHeader>Capture the breaker!</PopoverHeader>
                            <PopoverBody>
                                <Button onClick={() => this.setC2C('1')}>{(this.state.C2 === '2') ? "B1 First" : "B2 First"}</Button>
                                <Button onClick={() => this.setC2C('2')}>{(this.state.C2 === '2') ? "B1 Second" : "B2 Second"}</Button>
                                <Button onClick={() => this.setC2C('3')}>{(this.state.C2 === '2') ? "B1 Third" : "B2 Third"}</Button>
                            </PopoverBody>
                        </UncontrolledPopover>}

                    {(this.state.C2 === '1') &&
                        <UncontrolledPopover trigger="legacy" placement="top" target="c22" isOpen={(this.state.C2C === '')}>
                            <PopoverHeader>Capture the breaker!</PopoverHeader>
                            <PopoverBody>
                                <Button onClick={() => this.setC2C('1')}>{(this.state.C2 === '2') ? "B1 First" : "B2 First"}</Button>
                                <Button onClick={() => this.setC2C('2')}>{(this.state.C2 === '2') ? "B1 Second" : "B2 Second"}</Button>
                                <Button onClick={() => this.setC2C('3')}>{(this.state.C2 === '2') ? "B1 Third" : "B2 Third"}</Button>
                            </PopoverBody>
                        </UncontrolledPopover>}


                </div>

            </div>
        )
    }

}

export default CTBBattle;