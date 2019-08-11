import React from 'react';

// takes in a row and renders it
class Row extends React.Component {
    render() {
        let {
            name,
            fullName,
            price,
            volume24,
            supply,
            marketCap
        } = this.props.data

        return (<tr>
            <td>{this.props.rank+1}</td>
            <td>{name}</td>
            <td>{fullName}</td>
            <td>{price}</td>
            <td>{supply}</td>
            <td>{marketCap}</td>
            <td>{volume24}</td>
        </tr>)
    }
}

export default Row;