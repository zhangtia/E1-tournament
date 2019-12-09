import React, { Component } from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import AppNavbar from './AppNavbar';
import './CTB.css';

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
    onChange = (x) => {
        alert(x);
        this.setState({ color: 'green' });
    }

    render() {
        return (
            <div>
                <AppNavbar />
                <div class="wrapper">
                    <div class="box a">A</div>
                    <div class="box b">B</div>
                    <div class="box c">C</div>
                    <div class="box d">D</div>
                    <div class="box e">E</div>
                    <div class="box f">F</div>
                </div>

            </div>
        )
    }

}

export default CTBBattle;