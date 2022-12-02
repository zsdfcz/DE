export const CONTACT_ADDRESS = '0xec8ad9C48974175612a5eB31427fBcdf2020BBE7'
export const owner = '0x3b3c85f2C1b1001c48CfE7c5E4445B0b9CcF5eEA'

export const ABI = [
	{
		"constant": false,
		"inputs": [],
		"name": "kill",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "name",
				"type": "string"
			},
			{
				"name": "addr",
				"type": "string"
			},
			{
				"name": "hash",
				"type": "string"
			}
		],
		"name": "addvideo",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "vidnum",
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
		"name": "owner",
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
		"inputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"name": "VS",
		"outputs": [
			{
				"name": "addr",
				"type": "address"
			},
			{
				"name": "videohash",
				"type": "string"
			},
			{
				"name": "videoname",
				"type": "string"
			},
			{
				"name": "videoaddr",
				"type": "string"
			},
			{
				"name": "transaction",
				"type": "bool"
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