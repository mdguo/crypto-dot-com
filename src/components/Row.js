import React from 'react';
import { displayCols, cellAlign } from '../helper/collection';

// takes in a row and renders it
class Row extends React.Component {
    render() {

        let cells = Object.keys(displayCols).map((col, idx) => {
            return <td className={cellAlign[col]} key={idx}>
                {this.props.data[col]}
            </td>
        })

        return (<tr>
            <td>{this.props.rank+1}</td>
            {cells}
        </tr>)
    }
}

export default Row;