const url = "https://mainnet.infura.io/v3/293d4a9cac5047e6b9ed5eb54fac669a";
const startingBlock = 6607985;
const endingBlock = 7028323;
const axios = require('axios')

axios.post(url, {
    "jsonrpc":"2.0",
    "method":"eth_getLogs",
    "params":[{"blockHash": "0x7c5a35e9cb3e8ae0e221ab470abae9d446c3a5626ce6689fc777dcffcab52c70", 
    "topics":["0x241ea03ca20251805084d27d4440371c34a0b85ff108f6bb5611248f73818b80"]}],
    "id":1
})
.then((res) => {
  console.log(`statusCode: ${res.statusCode}`)
  console.log(res)
})
.catch((error) => {
  console.error(error)
})

function countBirths(startingBlock, endingBlock){
    let count = 0;

    return count;
}