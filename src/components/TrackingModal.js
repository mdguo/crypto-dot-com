import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import eventEmitter from '../helper/event';

class TrackingModal extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            show: false,
            content: '',
        }

        eventEmitter.on('trackerAdded', this.handleOpen)
        eventEmitter.on('trackerRemoved', this.handleOpen)
    }

    handleClose = () => {
        this.setState({show: false})
    }

    handleOpen = (msg) => {
        this.setState({show: true, content: msg})
    }

    render() {
        let { show, content } = this.state

        return (
            <Modal show={show} onHide={this.handleClose} centered={true} keyboard={false}>
                <Modal.Body>
                    {content}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={this.handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        )
    }
}

export default TrackingModal;