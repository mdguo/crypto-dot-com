import React from 'react';
import Row from './Row';

// takes in a list of rows and renders it
class RowRenderer extends React.Component {
    render() {
        let rows = this.props.rows.map((row, idx) => <Row data={row} rank={idx} key={idx}/>)

        return <React.Fragment>
            {rows}
        </React.Fragment>
    }
}

export default RowRenderer;