import axios from 'axios'

function network() {
    let XHR = axios.create({
        baseURL: 'https://min-api.cryptocompare.com/',
        timeout: 3000,
        headers: {
            'authorization': 'Apikey ' + process.env.REACT_APP_APIKEY
        }
    })

    function getMarketCap() {
        return '';
    }

    function getMultiSymbols() {
        // fsyms: Comma separated cryptocurrency symbols list
        // tsyms: Comma separated cryptocurrency symbols list to convert into
        return XHR.get('/data/pricemultifull', {
            params: {
                fsyms: 'BTC',
                tsyms: 'USD'
            }
        }).then(response => {
            console.log(response)
            return response
        }).catch(error => {
            console.log(error)
        });
    }

    return {
        getMarketCap,
        getMultiSymbols
    }
}

export default network