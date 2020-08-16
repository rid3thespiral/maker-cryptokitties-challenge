const url = "https://mainnet.infura.io/v3/293d4a9cac5047e6b9ed5eb54fac669a";
const startingBlock = 6607985;
const endingBlock = 7028323;
const axios = require('axios');
const startingBlockHex = '0x'+startingBlock.toString(16);
const endingBlockHex = '0x'+endingBlock.toString(16);


axios.post(url, {
    "jsonrpc":"2.0",
    "method":"eth_getLogs",
    "params":[
        {
            "fromBlock": "0x64d471",
            "toBlock": "0x64d472",
        }],
        "id":1
    }
)
.then((res) => {
  console.log(`statusCode: ${res.statusCode}`)
  console.log(res.data)
})
.catch((error) => {
  console.error(error)
})

