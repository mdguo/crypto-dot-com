import React from 'react';
import RowRenderer from './RowRenderer';
import query from '../helper/network';
import { columns, displayCols } from '../helper/collection';
import Table from 'react-bootstrap/Table';
import _ from 'lodash';

class TableView extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            rowsList: [],
            sort: {
                column: 'marketCap',
                desc: true
            }
        }
    }

    sortRows = (rows) => {
        // takes in rows and sort object, return sorted rows
        rows.sort()

        // use _.orderBy

        return rows
    }

    // TODO: parameterize convertion currency, default USD for now
    componentDidMount() {
        let response = query.getMarketCap({})
        
        let data = response.Data.map(data => {
            let result = {}
            Object.keys(columns).forEach(colName => {
                result[colName] = _.get(data, columns[colName])
            })
            return result
        });

        this.setState({
            rowsList: data
        })
    }

    render() {
        let header = Object.keys(displayCols).map((col, idx) => <th key={idx}>{displayCols[col]}</th>)

        return (<div>
            <Table striped>
                <thead>
                    <tr>
                        <th>#</th>
                        {header}
                    </tr>
                </thead>
                <tbody>
                    <RowRenderer rows={this.state.rowsList} />
                </tbody>
            </Table>
        </div>)
    }
}

export default TableView;