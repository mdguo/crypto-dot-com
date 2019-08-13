// MarketCap
export let columnsMap = (currency) => {
    return {
        token: `DISPLAY.${currency}.FROMSYMBOL`,    // cryptocurrency symbol
        symbol: `DISPLAY.${currency}.TOSYMBOL`,     // selected currency symbol
        short: 'CoinInfo.Name',
        name: 'CoinInfo.FullName',
        price: `DISPLAY.${currency}.PRICE`,
        supply: `DISPLAY.${currency}.SUPPLY`,
        market_cap: `DISPLAY.${currency}.MKTCAP`,
        volume_24h: `DISPLAY.${currency}.TOTALVOLUME24HTO`,
        price_raw: `RAW.${currency}.PRICE`,
        supply_raw: `RAW.${currency}.SUPPLY`,
        market_cap_raw: `RAW.${currency}.MKTCAP`,
        volume_24h_raw: `RAW.${currency}.TOTALVOLUME24HTO`
    }
}

export let columnsInfo = {
    short: {
        display: 'Symbol',
        data: 'short',
        className: 'text-left'
    },
    name: {
        display: 'Full Name',
        data: 'name',
        className: 'text-left'
    },
    price: {
        display: 'Price',
        data: 'price_raw',
        className: 'text-right number'
    },
    supply: {
        display: 'Supply',
        data: 'supply_raw',
        className: 'text-right number'
    },
    market_cap: {
        display: 'Market Cap',
        data: 'market_cap_raw',
        className: 'text-right number'
    },
    volume_24h: {
        display: 'Volume (24)',
        data: 'volume_24h_raw',
        className: 'text-right number'
    },
}

// Multiple Symbols
export let multiSymbolsMap = (fsym, tsym) => {
    return {
        short: `RAW.${fsym}.${tsym}.FROMSYMBOL`,
        name: `RAW.${fsym}.${tsym}.FROMSYMBOL`,
        price: `DISPLAY.${fsym}.${tsym}.PRICE`,
        supply: `DISPLAY.${fsym}.${tsym}.SUPPLY`,
        market_cap: `DISPLAY.${fsym}.${tsym}.MKTCAP`,
        volume_24h: `DISPLAY.${fsym}.${tsym}.TOTALVOLUME24HTO`,
        price_raw: `RAW.${fsym}.${tsym}.PRICE`,
        supply_raw: `RAW.${fsym}.${tsym}.SUPPLY`,
        market_cap_raw: `RAW.${fsym}.${tsym}.MKTCAP`,
        volume_24h_raw: `RAW.${fsym}.${tsym}.TOTALVOLUME24HTO`
    }
}