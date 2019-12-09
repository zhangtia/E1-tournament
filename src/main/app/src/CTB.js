import React, { Component } from 'react';
import { Button, UncontrolledPopover, PopoverHeader, PopoverBody } from 'reactstrap';
import AppNavbar from './AppNavbar';
import './CTB.css';

class CTBBattle extends Component {


    state = {
        color: 'red',
        A1: '',
        A2: '#',
        A3: '#',
        A4: '#',
        A5: '#',
        A6: '#',
        A7: '#',
        A8: '#',
        B1: '#',
        B2: '#',
        B3: '#',
        B4: '#',
        C1: '#',
        C2: '#',
    }
    onChange = (x) => {
        alert(x);
        this.setState({ color: 'green' });
    }

    setA1 = (x) => {
        //alert((this.state.A1 == '2') ? "a11" : "a12");

        if (this.state.A1 !== '') {
            this.setState({ A1: '3', A2: '' });
        } else {
            this.setState({ A1: x });
        }
        alert(this.state.A1);
        alert(this.state.A1 == '2');
        alert((this.state.A1 == '2') ? "a11" : "a12");
    }

    setA2 = (x) => {
        if (this.state.A2 !== '') {
            this.setState({ A2: '3', A3: '' });
        } else {
            this.setState({ A2: x });
        }
    }

    render() {
        return (
            <div>
                <AppNavbar />
                <div class="wrapper">
                    <div class="box a11" id="a11"><Button color="primary" disabled={!(this.state.A1 === '' || this.state.A1 === '2')} onClick={() => this.setA1('1')}>A11</Button></div>
                    <div class="box a12" id="a12"><Button color="primary" disabled={!(this.state.A1 === '' || this.state.A1 === '1')} onClick={() => this.setA1('2')}>A12</Button></div>
                    <div class="box a21" id="a21"><Button color="primary" disabled={!(this.state.A2 === '' || this.state.A2 === '2')} onClick={() => this.setA2('1')}>A21</Button></div>
                    <div class="box a22" id="a22"><Button color="primary" disabled={!(this.state.A2 === '' || this.state.A2 === '1')} onClick={() => this.setA2('2')}>A22</Button></div>
                    <div class="box a31">A31</div>
                    <div class="box a32">A32</div>
                    <div class="box a41">A41</div>
                    <div class="box a42">A42</div>
                    <div class="box a51">A51</div>
                    <div class="box a52">A52</div>
                    <div class="box a61">A61</div>
                    <div class="box a62">A62</div>
                    <div class="box a71">A71</div>
                    <div class="box a72">A72</div>
                    <div class="box a81">A81</div>
                    <div class="box a82">A82</div>

                    <div class="box b11">B11</div>
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
                    <UncontrolledPopover trigger="legacy" placement="right" target={ (this.state.A1 == '2') ? "a11" : "a12" } isOpen={ (this.state.A1 === '2' || this.state.A1 === '1') }>
                        <PopoverHeader>Capture the breaker!</PopoverHeader>
                        <PopoverBody>
                            A11/A12 Buttons here to decide which breaker to capture.
                        </PopoverBody>
                    </UncontrolledPopover>
                    <UncontrolledPopover trigger="legacy" placement="right" target={ (this.state.A2 == '2') ? "a21" : "a22" } isOpen={ (this.state.A2 === '2' || this.state.A2 === '1') }>
                        <PopoverHeader>Capture the breaker!</PopoverHeader>
                        <PopoverBody>
                            A21/A22 Buttons here to decide which breaker to capture.
                        </PopoverBody>
                    </UncontrolledPopover>
                </div>

            </div>
        )
    }

}

export default CTBBattle;