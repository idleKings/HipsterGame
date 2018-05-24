
abi=[
	{
		"constant": false,
		"inputs": [],
		"name": "getFreeHipster",
		"outputs": [],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "ceoAddress",
		"outputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "getBalance",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "initialized",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "getHipstermasterReq",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "rt",
				"type": "uint256"
			},
			{
				"name": "rs",
				"type": "uint256"
			},
			{
				"name": "bs",
				"type": "uint256"
			}
		],
		"name": "calculateTrade",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "eth",
				"type": "uint256"
			},
			{
				"name": "contractBalance",
				"type": "uint256"
			}
		],
		"name": "calculateEggBuy",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "marketEggs",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "hipstermasterReq",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [],
		"name": "sellEggs",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "eggs",
				"type": "uint256"
			}
		],
		"name": "seedMarket",
		"outputs": [],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "devFee",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "ref",
				"type": "address"
			}
		],
		"name": "hatchEggs",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "getMyEggs",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"name": "lastHatch",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [],
		"name": "becomeHipstermaster",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [],
		"name": "buyEggs",
		"outputs": [],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "STARTING_HIPSTER",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"name": "claimedEggs",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "eth",
				"type": "uint256"
			}
		],
		"name": "calculateEggBuySimple",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "EGGS_TO_HATCH_1HIPSTER",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "eggs",
				"type": "uint256"
			}
		],
		"name": "calculateEggSell",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"name": "referrals",
		"outputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "getMyHipster",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "adr",
				"type": "address"
			}
		],
		"name": "getEggsSinceLastHatch",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"name": "hatcheryHipster",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "constructor"
	}
];
contractAddress="0x32f778F246bA5F8Ad8EB35A0D638E9075ABe5B19";

function buyEggs(eth,callback){
    var contractAbi = web3.eth.contract(abi);
    var myContract = contractAbi.at(contractAddress);
    var outputData = myContract.buyEggs.getData();
    var endstr=web3.eth.sendTransaction({to:contractAddress, from:null, data: outputData,value: eth},
    function(error,result){
        if(!error){
            console.log('buyEggs ',eth);
            callback()
        }
        else{
            console.log('error :(')
        }
    });
}

function becomeHipstermaster(callback){
    var contractAbi = web3.eth.contract(abi);
    var myContract = contractAbi.at(contractAddress);
    var outputData = myContract.becomeHipstermaster.getData();
    var endstr=web3.eth.sendTransaction({to:contractAddress, from:null, data: outputData},
    function(error,result){
        if(!error){
            console.log('becomeHipstermaster ',);
            callback()
        }
        else{
            console.log('error :(')
        }
    });
}

function getFreeHipster(eth,callback){
    var contractAbi = web3.eth.contract(abi);
    var myContract = contractAbi.at(contractAddress);
    var outputData = myContract.getFreeHipster.getData();
    var endstr=web3.eth.sendTransaction({to:contractAddress, from:null, data: outputData,value: eth},
    function(error,result){
        if(!error){
            console.log('getFreeHipster ',eth);
            callback()
        }
        else{
            console.log('error :(')
        }
    });
}


function hatchEggs(ref,callback){
    var contractAbi = web3.eth.contract(abi);
    var myContract = contractAbi.at(contractAddress);
    var outputData = myContract.hatchEggs.getData(ref);
    var endstr=web3.eth.sendTransaction({to:contractAddress, from:null, data: outputData},
    function(error,result){
        if(!error){
            console.log('hatchEggs ',);
            callback()
        }
        else{
            console.log('error :(')
        }
    });
}


function seedMarket(eggs,eth,callback){
    var contractAbi = web3.eth.contract(abi);
    var myContract = contractAbi.at(contractAddress);
    var outputData = myContract.seedMarket.getData(eggs);
    var endstr=web3.eth.sendTransaction({to:contractAddress, from:null, data: outputData,value: eth},
    function(error,result){
        if(!error){
            console.log('seedMarket ',);
            callback()
        }
        else{
            console.log('error :(')
        }
    });
}


function sellEggs(callback){
    var contractAbi = web3.eth.contract(abi);
    var myContract = contractAbi.at(contractAddress);
    var outputData = myContract.sellEggs.getData();
    var endstr=web3.eth.sendTransaction({to:contractAddress, from:null, data: outputData},
    function(error,result){
        if(!error){
            console.log('sellEggs ',);
            callback()
        }
        else{
            console.log('error :(')
        }
    });
}


function calculateEggBuy(eth,contractBalance,callback){
    var contractAbi = web3.eth.contract(abi);
    var myContract = contractAbi.at(contractAddress);
    var outputData = myContract.calculateEggBuy.getData(eth,contractBalance);
    var endstr=web3.eth.call({to:contractAddress, from:null, data: outputData},
    function(error,result){
        if(!error){
            console.log('calculateEggBuy ',web3.toDecimal(result));
            callback(web3.toDecimal(result))
        }
        else{
            console.log('error :(')
        }
    });
}


function calculateEggBuySimple(eth,callback){
    var contractAbi = web3.eth.contract(abi);
    var myContract = contractAbi.at(contractAddress);
    var outputData = myContract.calculateEggBuySimple.getData(eth);
    var endstr=web3.eth.call({to:contractAddress, from:null, data: outputData},
    function(error,result){
        if(!error){
            console.log('calculateEggBuySimple ',web3.toDecimal(result));
            callback(web3.toDecimal(result))
        }
        else{
            console.log('error :(')
        }
    });
}


function calculateEggSell(eggs,callback){
    var contractAbi = web3.eth.contract(abi);
    var myContract = contractAbi.at(contractAddress);
    var outputData = myContract.calculateEggSell.getData(eggs);
    var endstr=web3.eth.call({to:contractAddress, from:null, data: outputData},
    function(error,result){
        if(!error){
            console.log('calculateEggSell ',result);
            if(result=='0x'){
                result=0
            }
            callback(web3.toDecimal(result))
        }
        else{
            console.log('error :(')
        }
    });
}


function calculateTrade(rt,rs,bs,callback){
    var contractAbi = web3.eth.contract(abi);
    var myContract = contractAbi.at(contractAddress);
    var outputData = myContract.calculateTrade.getData(rt,rs,bs);
    var endstr=web3.eth.call({to:contractAddress, from:null, data: outputData},
    function(error,result){
        if(!error){
            console.log('calculateTrade ',web3.toDecimal(result));
            callback(web3.toDecimal(result))
        }
        else{
            console.log('error :(')
        }
    });
}


function ceoAddress(callback){
    var contractAbi = web3.eth.contract(abi);
    var myContract = contractAbi.at(contractAddress);
    var outputData = myContract.ceoAddress.getData();
    var endstr=web3.eth.call({to:contractAddress, from:null, data: outputData},
    function(error,result){
        if(!error){
            console.log('ceoAddress ',result);
            callback(result)
        }
        else{
            console.log('error :(')
        }
    });
}


function claimedEggs(callback){
    var contractAbi = web3.eth.contract(abi);
    var myContract = contractAbi.at(contractAddress);
    var outputData = myContract.claimedEggs.getData();
    var endstr=web3.eth.call({to:contractAddress, from:null, data: outputData},
    function(error,result){
        if(!error){
            console.log('claimedEggs ',web3.toDecimal(result));
            callback(web3.toDecimal(result))
        }
        else{
            console.log('error :(')
        }
    });
}


function devFee(amount,callback){
    var contractAbi = web3.eth.contract(abi);
    var myContract = contractAbi.at(contractAddress);
    var outputData = myContract.devFee.getData(amount);
    var endstr=web3.eth.call({to:contractAddress, from:null, data: outputData},
    function(error,result){
        if(!error){
            console.log('devFee ',web3.toDecimal(result));
            callback(web3.toDecimal(result))
        }
        else{
            console.log('error :(')
        }
    });
}


function EGGS_TO_HATCH_1HIPSTER(callback){
    var contractAbi = web3.eth.contract(abi);
    var myContract = contractAbi.at(contractAddress);
    var outputData = myContract.EGGS_TO_HATCH_1HIPSTER.getData();
    var endstr=web3.eth.call({to:contractAddress, from:null, data: outputData},
    function(error,result){
        if(!error){
            console.log('EGGS_TO_HATCH_1HIPSTER ',web3.toDecimal(result));
            callback(web3.toDecimal(result))
        }
        else{
            console.log('error :(')
        }
    });
}


function getBalance(callback){
    var contractAbi = web3.eth.contract(abi);
    var myContract = contractAbi.at(contractAddress);
    var outputData = myContract.getBalance.getData();
    var endstr=web3.eth.call({to:contractAddress, from:null, data: outputData},
    function(error,result){
        if(!error){
            console.log('getBalance ',web3.toDecimal(result));
            callback(web3.toDecimal(result))
        }
        else{
            console.log('error :(')
        }
    });
}

function getHipstermasterReq(callback){
    var contractAbi = web3.eth.contract(abi);
    var myContract = contractAbi.at(contractAddress);
    var outputData = myContract.getHipstermasterReq.getData();
    var endstr=web3.eth.call({to:contractAddress, from:null, data: outputData},
    function(error,result){
        if(!error){
            console.log('getHipstermasterReq ',web3.toDecimal(result));
            callback(web3.toDecimal(result))
        }
        else{
            console.log('error :(')
        }
    });
}


function getEggsSinceLastHatch(adr,callback){
    var contractAbi = web3.eth.contract(abi);
    var myContract = contractAbi.at(contractAddress);
    var outputData = myContract.getEggsSinceLastHatch.getData(adr);
    var endstr=web3.eth.call({to:contractAddress, from:null, data: outputData},
    function(error,result){
        if(!error){
            console.log('getEggsSinceLastHatch ',web3.toDecimal(result));
            callback(web3.toDecimal(result))
        }
        else{
            console.log('error :(')
        }
    });
}


function getMyEggs(callback){
    var contractAbi = web3.eth.contract(abi);
    var myContract = contractAbi.at(contractAddress);
    var outputData = myContract.getMyEggs.getData();
    var endstr=web3.eth.call({to:contractAddress, from:null, data: outputData},
    function(error,result){
        if(!error){
            console.log('getMyEggs ',web3.toDecimal(result));
            callback(web3.toDecimal(result))
        }
        else{
            console.log('error :(')
        }
    });
}


function getMyHipster(callback){
    var contractAbi = web3.eth.contract(abi);
    var myContract = contractAbi.at(contractAddress);
    var outputData = myContract.getMyHipster.getData();
    var endstr=web3.eth.call({to:contractAddress, from:null, data: outputData},
    function(error,result){
        if(!error){
            console.log('getMyHipster ',web3.toDecimal(result));
            if(result=='0x'){
                result=0
            }
            callback(web3.toDecimal(result))
        }
        else{
            console.log('error :(')
        }
    });
}


function hatcheryHipster(callback){
    var contractAbi = web3.eth.contract(abi);
    var myContract = contractAbi.at(contractAddress);
    var outputData = myContract.hatcheryHipster.getData();
    var endstr=web3.eth.call({to:contractAddress, from:null, data: outputData},
    function(error,result){
        if(!error){
            console.log('hatcheryHipster ',web3.toDecimal(result));
            callback(web3.toDecimal(result))
        }
        else{
            console.log('error :(')
        }
    });
}


function lastHatch(address,callback){
    var contractAbi = web3.eth.contract(abi);
    var myContract = contractAbi.at(contractAddress);
    var outputData = myContract.lastHatch.getData(address);
    var endstr=web3.eth.call({to:contractAddress, from:null, data: outputData},
    function(error,result){
        if(!error){
            console.log('lastHatch ',web3.toDecimal(result));
            callback(web3.toDecimal(result))
        }
        else{
            console.log('error :(')
        }
    });
}


function marketEggs(callback){
    var contractAbi = web3.eth.contract(abi);
    var myContract = contractAbi.at(contractAddress);
    var outputData = myContract.marketEggs.getData();
    var endstr=web3.eth.call({to:contractAddress, from:null, data: outputData},
    function(error,result){
        if(!error){
            console.log('marketEggs ',web3.toDecimal(result));
            callback(web3.toDecimal(result))
        }
        else{
            console.log('error :(')
        }
    });
}



