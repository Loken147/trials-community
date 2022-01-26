// Coin Price

// Coingecko IDS:
// bitcoin,ethereum,tether,cardano,solana,avalanche-2,crypto-com-chain,algorand,litecoin,polkadot,matic-network,loopring,cosmos,chainlink

var settings = {
    "async": true,
    "scrossDomain": true,
    "url": "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Ctether%2Ccardano%2Csolana%2Cavalanche-2%2Ccrypto-com-chain%2Calgorand%2Clitecoin%2Cpolkadot%2Cmatic-network%2Cloopring%2Ccosmos%2Cchainlink&vs_currencies=usd",
    "method": "GET",
    "headers": {}
}

// Row One
var btcPrice = document.getElementById("btcPrice");
var ethPrice = document.getElementById("ethPrice");
var tetherPrice = document.getElementById("tetherPrice");
var cardanoPrice = document.getElementById("cardanoPrice");
var solanaPrice = document.getElementById("solanaPrice");
var avalanchePrice = document.getElementById("avalanchePrice");
var ltcPrice = document.getElementById("ltcPrice");

// Row Two
var loopringPrice = document.getElementById("loopringPrice");
var polygonPrice = document.getElementById("polygonPrice");
var polkadotPrice = document.getElementById("polkadotPrice");
var croPrice = document.getElementById("croPrice");
var algorandPrice = document.getElementById("algorandPrice");
var chainlinkPrice = document.getElementById("chainlinkPrice");
var cosmosPrice = document.getElementById("cosmosPrice");

//Row Three
var bnbPrice = document.getElementById("bnbPrice");
var lunaPrice = document.getElementById("lunaPrice");
var fantomPrice = document.getElementById("fantom");
var manaPrice = document.getElementById("manaPrice");
var filecoinPrice = document.getElementById("filecoinPrice");
var lunaPrice = document.getElementById("lunaPrice");
var lunaPrice = document.getElementById("lunaPrice");

$.ajax(settings).done(function (response) {

    // Row One
    btcPrice.innerHTML = response.bitcoin.usd;
    ethPrice.innerHTML = response.ethereum.usd;
    tetherPrice.innerHTML = response.tether.usd;
    cardanoPrice.innerHTML = response.cardano.usd;
    solanaPrice.innerHTML = response.solana.usd;
    avalanchePrice.innerHTML = response['avalanche-2'].usd;
    ltcPrice.innerHTML = response.litecoin.usd;

    // Row Two
    loopringPrice.innerHTML = response.loopring.usd;
    polygonPrice.innerHTML = response['matic-network'].usd;
    polkadotPrice.innerHTML = response.polkadot.usd;
    croPrice.innerHTML = response['crypto-com-chain'].usd;
    algorandPrice.innerHTML = response.algorand.usd;
    chainlinkPrice.innerHTML = response.chainlink.usd;
    cosmosPrice.innerHTML = response.cosmos.usd;
});