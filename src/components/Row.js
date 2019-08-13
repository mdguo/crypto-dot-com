import React from 'react';
import { columnsInfo } from '../helper/collection';
import storage from '../helper/storage';
import Button from 'react-bootstrap/Button';
import _ from 'lodash';

let trackerStorage = storage("tracked_currencies")

// takes in a row and renders it
class Row extends React.Component {

    handleAddTracker = (symbol) => {
        // limit to 10
        if (trackerStorage.get() === null) {
            trackerStorage.set(symbol)
        } else {
            let tracked = trackerStorage.get().split(',')
            if (tracked.indexOf(symbol) < 0 && tracked.length <= 10) {
                tracked.push(symbol)
                trackerStorage.set(tracked.join())
                console.log('Added coin to tracked list.')
            }
        }
    }

    handleUntrack = (symbol) => {
        if (trackerStorage.get() !== null) {
            let tracked = trackerStorage.get().split(',')
            if (tracked.indexOf(symbol) >= 0) {
                _.pull(tracked, symbol)
                trackerStorage.set(tracked.join())
                console.log('Removed coin from tracked list.')
            }

        }
    }

    render() {
        let cells = Object.keys(columnsInfo).map((col, idx) => {
            return <td className={columnsInfo[col].className} key={idx}>
                {this.props.data[col]}
            </td>
        })

        let {isTracker} = this.props

        let tracker = !isTracker ? (
            <td>
                <Button 
                    variant="outline-secondary" 
                    size="sm"
                    onClick={this.handleAddTracker.bind(this, this.props.data.short)}>
                    Track
                </Button>
                <Button 
                    variant="outline-danger" 
                    size="sm"
                    onClick={this.handleUntrack.bind(this, this.props.data.short)}>
                    Untrack
                </Button>
            </td>
        ) : <td></td>

        return (<tr>
            <td>{this.props.rank+1}</td>
            {cells}
            {tracker}
        </tr>)
    }
}

export default Row;