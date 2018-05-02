import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) =>  (
        <Modal 
            isOpen={!!props.selectedOptions}
            onRequestClose={props.handleClearSelectedOption}
            contentLabel="Selected Option">
            <h3>Selected Options</h3>
            <div>{props.selectedOptions && <p>{props.selectedOptions}</p>}</div>
            <button type="button" onClick={props.handleClearSelectedOption}>Okay</button>
        </Modal>
    );

export default OptionModal;