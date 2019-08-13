import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Spinner from 'react-bootstrap/Spinner';
import eventEmitter from '../helper/event';

class LoadingModal extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            show: false
        }

        eventEmitter.on('dataQuerying', this.handleOpen)
        eventEmitter.on('dataLoaded', this.handleClose)
    }

    handleClose = () => {
        this.setState({show: false})
    }

    handleOpen = () => {
        this.setState({show: true})
    }

    render() {
        let { show } = this.state

        return (
            <Modal show={show} onHide={this.handleClose} centered={true} keyboard={false}>
                <Modal.Body>
                <Spinner animation="border" role="status">
                    <span className="sr-only">Loading...</span>
                </Spinner>
                </Modal.Body>
            </Modal>
        )
    }
}

export default LoadingModal;