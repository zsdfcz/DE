import Web3 from '../../node_modules/web3';

function getWeb3() { 
    const web3 = new Web3(new providers.HttpProvider('http://127.0.0.1:8545'));
    return web3;
}

async function getAccounts() {
    try {
        const accounts = await getWeb3().eth.getAccounts(); 
        console.log(accounts);
        return accounts;
    } catch (e) {
        console.log("오류");
        return e;
    }
}

getAccounts()