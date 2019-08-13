import React from 'react';
import Row from './Row';

// takes in a list of rows and renders it
class RowsRenderer extends React.Component {
    render() {
        let {isTracker, collection} = this.props
        let rows = collection.map((row, idx) => <Row data={row} rank={idx} isTracker={isTracker} key={idx}/>)

        return <React.Fragment>
            {rows}
        </React.Fragment>
    }
}

export default RowsRenderer;