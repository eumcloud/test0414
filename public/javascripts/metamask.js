window.onload = () =>{
// if (typeof window.ethereum !== 'undefined') {
// console.log('MetaMask is installed!');
// }

// const ethereumButton = document.querySelector('.enableEthereumButton');

// ethereumButton.addEventListener('click', () => {
//     //Will Start the metamask extension
//     ethereum.request({ method: 'eth_requestAccounts' });
// });
function getBalance() { 
    var address, wei, balance, address = document.getElementById("address").value;
        
    try { 
        web3.eth.getBalance(address, function (error, wei) {
            if (!error) { 
                var balance = web3.fromWei(wei, 'ether'); 
                document.getElementById("output").innerHTML = balance + " ETH"; 
            } 
        }); 
    } catch (err) {
        document.getElementById("output").innerHTML = err; 
    } 
}


window.web3 = new Web3(new Web3.providers.HttpProvider("https://ropsten.infura.io/v3/7 abae76b3c194ad88d53aae12a391048"));
    if (typeof web3 !== 'undefined') {
            console.log('Web3 Detected! ' + web3.currentProvider.constructor.name) 
            window.web3 = new Web3(web3.currentProvider); 
    } else { 
        console.log('No Web3 Detected... using HTTP Provider') 
        window.web3 = new Web3(new Web3.providers.HttpProvider("https://ropsten.infura.io/v3/7abae76b3c194ad88d53aae12a391048")); 
    } 
    
    

}