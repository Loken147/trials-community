// Coin Price

// Coingecko IDS:
// bitcoin,ethereum,cardano,solana,avalanche-2,crypto-com-chain,algorand,litecoin,polkadot,matic-network,loopring,cosmos,chainlink,binancecoin

var settings = {
    "async": true,
    "scrossDomain": true,
    "url": "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Ccardano%2Csolana%2Cavalanche-2%2Ccrypto-com-chain%2Calgorand%2Clitecoin%2Cpolkadot%2Cmatic-network%2Cloopring%2Ccosmos%2Cchainlink%2Cbinancecoin&vs_currencies=usd&include_market_cap=true&include_24hr_vol=true&include_24hr_change=true",
    "method": "GET",
    "headers": {}
}

var imported = document.createElement('script');
imported.src = '../js-modules/Numeral-js-master/numeral.js';
document.head.appendChild(imported);

// Price
var btcPrice = document.getElementById("btcPrice");
var ethPrice = document.getElementById("ethPrice");
var cardanoPrice = document.getElementById("cardanoPrice");
var solanaPrice = document.getElementById("solanaPrice");
var avalanchePrice = document.getElementById("avalanchePrice");
var ltcPrice = document.getElementById("ltcPrice");
var loopringPrice = document.getElementById("loopringPrice");
var polygonPrice = document.getElementById("polygonPrice");
var polkadotPrice = document.getElementById("polkadotPrice");
var croPrice = document.getElementById("croPrice");
var algorandPrice = document.getElementById("algorandPrice");
var chainlinkPrice = document.getElementById("chainlinkPrice");
var cosmosPrice = document.getElementById("cosmosPrice");

$.ajax(settings).done(function (response) {

    var greenColor = "#04AA6B";

    // Bitcoin
    btcPrice.innerHTML = response.bitcoin.usd;
    var btcMCap = document.getElementById("btcMCap");
    btcMCap.innerHTML = numeral(response.bitcoin.usd_market_cap).format("0.00a").toUpperCase();
    var btcChange = document.getElementById("btcChange");
    btcChange.innerHTML = numeral(response.bitcoin.usd_24h_change).format('0.00') + '%';
    var btcVol = document.getElementById("btcVol");
    btcVol.innerHTML = numeral(response.bitcoin.usd_24h_vol).format('0.00a').toUpperCase();
    if (response.bitcoin.usd_24h_change >= 0) {
        document.getElementById("btcChange").style.color = greenColor;
    } 

    // Ethereum
    ethPrice.innerHTML = response.ethereum.usd;
    var ethMCap = document.getElementById("ethMCap");
    ethMCap.innerHTML = numeral(response.ethereum.usd_market_cap).format("0.00a").toUpperCase();
    var ethChange = document.getElementById("ethChange");
    ethChange.innerHTML = numeral(response.ethereum.usd_24h_change).format('0.00') + '%';
    var ethVol = document.getElementById("ethVol");
    ethVol.innerHTML = numeral(response.ethereum.usd_24h_vol).format('0.00a').toUpperCase();
    if (response.ethereum.usd_24h_change >= 0) {
        document.getElementById("ethChange").style.color = greenColor;
    } 

    // Binance
    binancePrice.innerHTML = response.binancecoin.usd;
    var ethMCap = document.getElementById("binanceMCap");
    binanceMCap.innerHTML = numeral(response.binancecoin.usd_market_cap).format("0.00a").toUpperCase();
    var ethChange = document.getElementById("binanceChange");
    binanceChange.innerHTML = numeral(response.binancecoin.usd_24h_change).format('0.00') + '%';
    var ethVol = document.getElementById("binanceVol");
    binanceVol.innerHTML = numeral(response.binancecoin.usd_24h_vol).format('0.00a').toUpperCase();
    if (response.binancecoin.usd_24h_change >= 0) {
        document.getElementById("binanceChange").style.color = greenColor;
    } 

    // Litecoin
    litecoinPrice.innerHTML = response.litecoin.usd;
    var litecoinMCap = document.getElementById("litecoinMCap");
    litecoinMCap.innerHTML = numeral(response.litecoin.usd_market_cap).format("0.00a").toUpperCase();
    var ethChange = document.getElementById("litecoinChange");
    litecoinChange.innerHTML = numeral(response.litecoin.usd_24h_change).format('0.00') + '%';
    var litecoinVol = document.getElementById("litecoinVol");
    litecoinVol.innerHTML = numeral(response.litecoin.usd_24h_vol).format('0.00a').toUpperCase();
    if (response.litecoin.usd_24h_change >= 0) {
        document.getElementById("litecoinChange").style.color = greenColor;
    } 

    // Avalanche
    avalanchePrice.innerHTML = response['avalanche-2'].usd;
    var avalancheMCap = document.getElementById("avalancheMCap");
    avalancheMCap.innerHTML = numeral(response['avalanche-2'].usd_market_cap).format("0.00a").toUpperCase();
    var avalancheChange = document.getElementById("avalancheChange");
    avalancheChange.innerHTML = numeral(response['avalanche-2'].usd_24h_change).format('0.00') + '%';
    var avalancheVol = document.getElementById("avalancheVol");
    avalancheVol.innerHTML = numeral(response['avalanche-2'].usd_24h_vol).format('0.00a').toUpperCase();
    if (response['avalanche-2'].usd_24h_change >= 0) {
        document.getElementById("avalancheChange").style.color = greenColor;
    } 

    // Cosmos
    cosmosPrice.innerHTML = response.cosmos.usd;
    var cosmosMCap = document.getElementById("cosmosMCap");
    cosmosMCap.innerHTML = numeral(response.cosmos.usd_market_cap).format("0.00a").toUpperCase();
    var cosmosChange = document.getElementById("cosmosChange");
    cosmosChange.innerHTML = numeral(response.cosmos.usd_24h_change).format('0.00') + '%';
    var cosmosVol = document.getElementById("cosmosVol");
    cosmosVol.innerHTML = numeral(response.cosmos.usd_24h_vol).format('0.00a').toUpperCase();
    if (response.cosmos.usd_24h_change >= 0) {
        document.getElementById("cosmosChange").style.color = greenColor;
    } 

    // Cardano
    cardanoPrice.innerHTML = response.cardano.usd;
    var cardanoMCap = document.getElementById("cardanoMCap");
    cardanoMCap.innerHTML = numeral(response.cardano.usd_market_cap).format("0.00a").toUpperCase();
    var cardanoChange = document.getElementById("cardanoChange");
    cardanoChange.innerHTML = numeral(response.cardano.usd_24h_change).format('0.00') + '%';
    var cardanoVol = document.getElementById("cardanoVol");
    cardanoVol.innerHTML = numeral(response.cardano.usd_24h_vol).format('0.00a').toUpperCase();
    if (response.cardano.usd_24h_change >= 0) {
        document.getElementById("cardanoChange").style.color = greenColor;
    } 

    // Solana
    solanaPrice.innerHTML = response.solana.usd;
    var solanaMCap = document.getElementById("solanaMCap");
    solanaMCap.innerHTML = numeral(response.solana.usd_market_cap).format("0.00a").toUpperCase();
    var solanaChange = document.getElementById("solanaChange");
    solanaChange.innerHTML = numeral(response.solana.usd_24h_change).format('0.00') + '%';
    var solanaVol = document.getElementById("solanaVol");
    solanaVol.innerHTML = numeral(response.solana.usd_24h_vol).format('0.00a').toUpperCase();
    if (response.solana.usd_24h_change >= 0) {
        document.getElementById("solanaChange").style.color = greenColor;
    } 

    // Polygon
    polygonPrice.innerHTML = response['matic-network'].usd;
    var polygonMCap = document.getElementById("polygonMCap");
    polygonMCap.innerHTML = numeral(response['matic-network'].usd_market_cap).format("0.00a").toUpperCase();
    var polygonChange = document.getElementById("polygonChange");
    polygonChange.innerHTML = numeral(response['matic-network'].usd_24h_change).format('0.00') + '%';
    var polygonVol = document.getElementById("polygonVol");
    polygonVol.innerHTML = numeral(response['matic-network'].usd_24h_vol).format('0.00a').toUpperCase();
    if (response['matic-network'].usd_24h_change >= 0) {
        document.getElementById("polygonChange").style.color = greenColor;
    } 

    // Algorand
    algorandPrice.innerHTML = response.algorand.usd;
    var algorandMCap = document.getElementById("algorandMCap");
    algorandMCap.innerHTML = numeral(response.algorand.usd_market_cap).format("0.00a").toUpperCase();
    var algorandChange = document.getElementById("algorandChange");
    algorandChange.innerHTML = numeral(response.algorand.usd_24h_change).format('0.00') + '%';
    var algorandVol = document.getElementById("algorandVol");
    algorandVol.innerHTML = numeral(response.algorand.usd_24h_vol).format('0.00a').toUpperCase();
    if (response.algorand.usd_24h_change >= 0) {
        document.getElementById("algorandChange").style.color = greenColor;
    } 
    
    /*
    loopringPrice.innerHTML = response.loopring.usd;
    polkadotPrice.innerHTML = response.polkadot.usd;
    croPrice.innerHTML = response['crypto-com-chain'].usd;
    chainlinkPrice.innerHTML = response.chainlink.usd;*/


});


