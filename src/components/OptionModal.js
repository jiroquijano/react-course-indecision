import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) =>(
    <Modal
        isOpen = {!!props.selectedOption}
        contentLabel = "Selected Option"
        onRequestClose={props.unselect}
        closeTimeoutMS={200}
        className="modal"
    >
        <h3 className='modal__title'>Selected Option</h3>
        <h4 className='modal__body'>{props.selectedOption}</h4>
        <button className='button' onClick={props.unselect}>OK</button>
    </Modal>
);

export default OptionModal;