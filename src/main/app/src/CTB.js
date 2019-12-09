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
                    <div class="box a11">A11</div>
                    <div class="box a12">A12</div>
                    <div class="box a21">A21</div>
                    <div class="box a22">A22</div>
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
                    
                    
                    <div class="box b12">B12</div>
                    <div class="box c12">C12</div>
                    <div class="box a12">A12</div>
                    <div class="box c11">C11</div>
                    <div class="box b11">B11</div>
                </div>

            </div>
        )
    }

}

export default CTBBattle;