import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) =>(
    <Modal
        isOpen = {!!props.selectedOption}
        contentLabel = "Selected Option"
        onRequestClose={props.unselect}
    >
        <h3>Selected Option</h3>
        <h4>{props.selectedOption}</h4>
        <button onClick={props.unselect}>OK</button>
    </Modal>
);

export default OptionModal;