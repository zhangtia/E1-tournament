import React, { useState, Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class BattleModal extends Component {
    sendData = () => {
        this.props.parentCallback("Hey Popsie, How’s it going?");
   }
}

export default BattleModal;