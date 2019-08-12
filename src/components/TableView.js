import React from 'react';
import RowRenderer from './RowRenderer';
import query from '../helper/network';
import eventEmitter from '../helper/event';
import { columnsMap, displayCols, dataCols, cellAlign } from '../helper/collection';
import Table from 'react-bootstrap/Table';
import _ from 'lodash';

class TableView extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: {
                collection: [],
                columns: []
            },
            prevSort: '',
            currPage: 0,
            currency: 'USD'
        }

        eventEmitter.on('currencyChanged', this.handleCurrencyChanged)
        eventEmitter.on('paginate', this.handlePagination)
    }

    sort = (columnName) => {
        let newData = this.sortRows(this.state.data, columnName, this.state.prevSort)
        this.setState({
            data: newData,
            prevSort: (this.state.prevSort == columnName) ? '' : columnName
        })
    }

    sortRows = (data, currSortCol, prevSortCol) => {
        // console.log("now sorting: " + currSortCol + ", previously sorting: " + prevSortCol)
        data.collection = this.sortCollection(data.collection, currSortCol, (currSortCol == prevSortCol))
        return data
    }

    sortCollection = (collection, columnName, ascending) => {
        let order = ascending ? 'asc' : 'desc'
        return _.orderBy(collection, columnName, order)
    }

    handleCurrencyChanged = (currency) => {
        if (currency && currency != this.state.currency) {
            this.queryMarketCapData({tsym: currency}).then(data => {
                this.setState({
                    data,
                    currency
                })
            })
        }
    }

    handlePagination = (page) => {
        this.queryMarketCapData({
            tsym: this.state.currency,
            page
        }).then(data => {
            this.setState({
                data
            })
        })
    }

    queryMarketCapData = (options) => {
        options = options || {}
        let { tsym } = options
        return query.getMarketCap(options).then(response => {
            // rebuild column mapping based on currency
            let columnMap = columnsMap(tsym)
            let collection = response.Data.map(datum => {
                let result = {}
                Object.keys(columnMap).forEach(colName => {
                    result[colName] = _.get(datum, columnMap[colName])
                })
                return result
            });
            
            // return results
            return {
                collection,
                columns: displayCols
            }
        })
    }

    componentDidMount() {
        this.queryMarketCapData({tsym: this.state.currency}).then(data => {  
            this.setState({ data })
        })
    }

    render() {
        let header = Object.keys(dataCols).map((col, idx) => {
            // col is the data key
            return <th key={idx} className={cellAlign[col]}
                onClick={this.sort.bind(this, col)}>
                {dataCols[col]}
            </th>
        })

        return (<div>
            <Table striped>
                <thead>
                    <tr>
                        <th>#</th>
                        {header}
                    </tr>
                </thead>
                <tbody>
                    <RowRenderer collection={this.state.data.collection} />
                </tbody>
            </Table>
        </div>)
    }
}

export default TableView;