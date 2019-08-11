
// TODO: hook this up to UI somehow?
let currency = 'USD'

// datagrid column names plus some symbols
export let columns = {
    short: 'CoinInfo.Name',
    name: 'CoinInfo.FullName',
    price: `RAW.${currency}.PRICE`,
    supply: `RAW.${currency}.SUPPLY`,
    token: `DISPLAY.${currency}.FROMSYMBOL`,    // cryptocurrency symbol
    market_cap: `RAW.${currency}.MKTCAP`,
    volume_24h: `RAW.${currency}.TOTALVOLUME24HTO`,
    symbol: `DISPLAY.${currency}.TOSYMBOL`      // selected currency symbol
}

export let displayCols = {
    short: 'Symbol',
    name: 'Full Name',
    price: 'Price',
    supply: 'Supply',
    market_cap: 'Market Cap',
    volume_24h: 'Volume (24)'
}