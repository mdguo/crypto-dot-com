import React from 'react';
import TableView from './TableView';
import storage from '../helper/storage';

let trackerStorage = storage("tracked_currencies")

class Tracker extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            trackList: trackerStorage.get()
        }
    }

    render() {
        let {trackList} = this.state

        return (
            <React.Fragment>
                <TableView isTracker={true} trackList={trackList}/>
            </React.Fragment>
        )
    }
}

export default Tracker;
