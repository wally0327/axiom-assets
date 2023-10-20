/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type {
  Signer,
  AddressLike,
  ContractDeployTransaction,
  ContractRunner,
} from "ethers";
import type { NonPayableOverrides } from "../../../common";
import type {
  BaseERC721,
  BaseERC721Interface,
} from "../../../contracts/BaseERC721.sol/BaseERC721";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "initialOwner",
        type: "address",
      },
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "string",
        name: "symbol",
        type: "string",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "ERC721IncorrectOwner",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "ERC721InsufficientApproval",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "approver",
        type: "address",
      },
    ],
    name: "ERC721InvalidApprover",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "ERC721InvalidOperator",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "ERC721InvalidOwner",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "receiver",
        type: "address",
      },
    ],
    name: "ERC721InvalidReceiver",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "ERC721InvalidSender",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "ERC721NonexistentToken",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "OwnableInvalidOwner",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "OwnableUnauthorizedAccount",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "approved",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "_fromTokenId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_toTokenId",
        type: "uint256",
      },
    ],
    name: "BatchMetadataUpdate",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "_tokenId",
        type: "uint256",
      },
    ],
    name: "MetadataUpdate",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "getApproved",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "isApprovedForAll",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "ownerOf",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "uri",
        type: "string",
      },
    ],
    name: "safeMint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "tokenURI",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60806040523480156200001157600080fd5b5060405162002db738038062002db78339818101604052810190620000379190620003ae565b82828281600090816200004b919062000693565b5080600190816200005d919062000693565b505050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1603620000d55760006040517f1e4fbdf7000000000000000000000000000000000000000000000000000000008152600401620000cc91906200078b565b60405180910390fd5b620000e681620000f060201b60201c565b50505050620007a8565b6000600760009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905081600760006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b6000604051905090565b600080fd5b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000620001f782620001ca565b9050919050565b6200020981620001ea565b81146200021557600080fd5b50565b6000815190506200022981620001fe565b92915050565b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b620002848262000239565b810181811067ffffffffffffffff82111715620002a657620002a56200024a565b5b80604052505050565b6000620002bb620001b6565b9050620002c9828262000279565b919050565b600067ffffffffffffffff821115620002ec57620002eb6200024a565b5b620002f78262000239565b9050602081019050919050565b60005b838110156200032457808201518184015260208101905062000307565b60008484015250505050565b6000620003476200034184620002ce565b620002af565b90508281526020810184848401111562000366576200036562000234565b5b6200037384828562000304565b509392505050565b600082601f8301126200039357620003926200022f565b5b8151620003a584826020860162000330565b91505092915050565b600080600060608486031215620003ca57620003c9620001c0565b5b6000620003da8682870162000218565b935050602084015167ffffffffffffffff811115620003fe57620003fd620001c5565b5b6200040c868287016200037b565b925050604084015167ffffffffffffffff81111562000430576200042f620001c5565b5b6200043e868287016200037b565b9150509250925092565b600081519050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600060028204905060018216806200049b57607f821691505b602082108103620004b157620004b062000453565b5b50919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b6000600883026200051b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82620004dc565b620005278683620004dc565b95508019841693508086168417925050509392505050565b6000819050919050565b6000819050919050565b6000620005746200056e62000568846200053f565b62000549565b6200053f565b9050919050565b6000819050919050565b620005908362000553565b620005a86200059f826200057b565b848454620004e9565b825550505050565b600090565b620005bf620005b0565b620005cc81848462000585565b505050565b5b81811015620005f457620005e8600082620005b5565b600181019050620005d2565b5050565b601f82111562000643576200060d81620004b7565b6200061884620004cc565b8101602085101562000628578190505b620006406200063785620004cc565b830182620005d1565b50505b505050565b600082821c905092915050565b6000620006686000198460080262000648565b1980831691505092915050565b600062000683838362000655565b9150826002028217905092915050565b6200069e8262000448565b67ffffffffffffffff811115620006ba57620006b96200024a565b5b620006c6825462000482565b620006d3828285620005f8565b600060209050601f8311600181146200070b5760008415620006f6578287015190505b62000702858262000675565b86555062000772565b601f1984166200071b86620004b7565b60005b8281101562000745578489015182556001820191506020850194506020810190506200071e565b8683101562000765578489015162000761601f89168262000655565b8355505b6001600288020188555050505b505050505050565b6200078581620001ea565b82525050565b6000602082019050620007a260008301846200077a565b92915050565b6125ff80620007b86000396000f3fe608060405234801561001057600080fd5b506004361061010b5760003560e01c8063715018a6116100a2578063b88d4fde11610071578063b88d4fde146102a4578063c87b56dd146102c0578063cd279c7c146102f0578063e985e9c51461030c578063f2fde38b1461033c5761010b565b8063715018a6146102425780638da5cb5b1461024c57806395d89b411461026a578063a22cb465146102885761010b565b806323b872dd116100de57806323b872dd146101aa57806342842e0e146101c65780636352211e146101e257806370a08231146102125761010b565b806301ffc9a71461011057806306fdde0314610140578063081812fc1461015e578063095ea7b31461018e575b600080fd5b61012a60048036038101906101259190611abb565b610358565b6040516101379190611b03565b60405180910390f35b61014861036a565b6040516101559190611bae565b60405180910390f35b61017860048036038101906101739190611c06565b6103fc565b6040516101859190611c74565b60405180910390f35b6101a860048036038101906101a39190611cbb565b610418565b005b6101c460048036038101906101bf9190611cfb565b61042e565b005b6101e060048036038101906101db9190611cfb565b610530565b005b6101fc60048036038101906101f79190611c06565b610550565b6040516102099190611c74565b60405180910390f35b61022c60048036038101906102279190611d4e565b610562565b6040516102399190611d8a565b60405180910390f35b61024a61061c565b005b610254610630565b6040516102619190611c74565b60405180910390f35b61027261065a565b60405161027f9190611bae565b60405180910390f35b6102a2600480360381019061029d9190611dd1565b6106ec565b005b6102be60048036038101906102b99190611f46565b610702565b005b6102da60048036038101906102d59190611c06565b61071f565b6040516102e79190611bae565b60405180910390f35b61030a6004803603810190610305919061206a565b610731565b005b610326600480360381019061032191906120d9565b610752565b6040516103339190611b03565b60405180910390f35b61035660048036038101906103519190611d4e565b6107e6565b005b60006103638261086c565b9050919050565b60606000805461037990612148565b80601f01602080910402602001604051908101604052809291908181526020018280546103a590612148565b80156103f25780601f106103c7576101008083540402835291602001916103f2565b820191906000526020600020905b8154815290600101906020018083116103d557829003601f168201915b5050505050905090565b6000610407826108cd565b5061041182610955565b9050919050565b61042a8282610425610992565b61099a565b5050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16036104a05760006040517f64a0ae920000000000000000000000000000000000000000000000000000000081526004016104979190611c74565b60405180910390fd5b60006104b483836104af610992565b6109ac565b90508373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161461052a578382826040517f64283d7b00000000000000000000000000000000000000000000000000000000815260040161052193929190612179565b60405180910390fd5b50505050565b61054b83838360405180602001604052806000815250610702565b505050565b600061055b826108cd565b9050919050565b60008073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16036105d55760006040517f89c62b640000000000000000000000000000000000000000000000000000000081526004016105cc9190611c74565b60405180910390fd5b600360008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b610624610bc6565b61062e6000610c4d565b565b6000600760009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b60606001805461066990612148565b80601f016020809104026020016040519081016040528092919081815260200182805461069590612148565b80156106e25780601f106106b7576101008083540402835291602001916106e2565b820191906000526020600020905b8154815290600101906020018083116106c557829003601f168201915b5050505050905090565b6106fe6106f7610992565b8383610d13565b5050565b61070d84848461042e565b61071984848484610e82565b50505050565b606061072a82611039565b9050919050565b610739610bc6565b610743838361114c565b61074d828261116a565b505050565b6000600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b6107ee610bc6565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16036108605760006040517f1e4fbdf70000000000000000000000000000000000000000000000000000000081526004016108579190611c74565b60405180910390fd5b61086981610c4d565b50565b6000634906490660e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614806108c657506108c5826111c6565b5b9050919050565b6000806108d9836112a8565b9050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff160361094c57826040517f7e2732890000000000000000000000000000000000000000000000000000000081526004016109439190611d8a565b60405180910390fd5b80915050919050565b60006004600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b600033905090565b6109a783838360016112e5565b505050565b6000806109b8846112a8565b9050600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16146109fa576109f98184866114aa565b5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614610a8b57610a3c6000856000806112e5565b6001600360008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825403925050819055505b600073ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff1614610b0e576001600360008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825401925050819055505b846002600086815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550838573ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a4809150509392505050565b610bce610992565b73ffffffffffffffffffffffffffffffffffffffff16610bec610630565b73ffffffffffffffffffffffffffffffffffffffff1614610c4b57610c0f610992565b6040517f118cdaa7000000000000000000000000000000000000000000000000000000008152600401610c429190611c74565b60405180910390fd5b565b6000600760009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905081600760006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610d8457816040517f5b08ba18000000000000000000000000000000000000000000000000000000008152600401610d7b9190611c74565b60405180910390fd5b80600560008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c3183604051610e759190611b03565b60405180910390a3505050565b60008373ffffffffffffffffffffffffffffffffffffffff163b1115611033578273ffffffffffffffffffffffffffffffffffffffff1663150b7a02610ec6610992565b8685856040518563ffffffff1660e01b8152600401610ee89493929190612205565b6020604051808303816000875af1925050508015610f2457506040513d601f19601f82011682018060405250810190610f219190612266565b60015b610fa8573d8060008114610f54576040519150601f19603f3d011682016040523d82523d6000602084013e610f59565b606091505b506000815103610fa057836040517f64a0ae92000000000000000000000000000000000000000000000000000000008152600401610f979190611c74565b60405180910390fd5b805181602001fd5b63150b7a0260e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19161461103157836040517f64a0ae920000000000000000000000000000000000000000000000000000000081526004016110289190611c74565b60405180910390fd5b505b50505050565b6060611044826108cd565b50600060066000848152602001908152602001600020805461106590612148565b80601f016020809104026020016040519081016040528092919081815260200182805461109190612148565b80156110de5780601f106110b3576101008083540402835291602001916110de565b820191906000526020600020905b8154815290600101906020018083116110c157829003601f168201915b5050505050905060006110ef61156e565b90506000815103611104578192505050611147565b6000825111156111395780826040516020016111219291906122cf565b60405160208183030381529060405292505050611147565b61114284611585565b925050505b919050565b6111668282604051806020016040528060008152506115ee565b5050565b8060066000848152602001908152602001600020908161118a919061249f565b507ff8e1a15aba9398e019f0b49df1a4fde98ee17ae345cb5f6b5e2c27f5033e8ce7826040516111ba9190611d8a565b60405180910390a15050565b60007f80ac58cd000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916148061129157507f5b5e139f000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b806112a157506112a08261160a565b5b9050919050565b60006002600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b808061131e5750600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614155b1561145257600061132e846108cd565b9050600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415801561139957508273ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614155b80156113ac57506113aa8184610752565b155b156113ee57826040517fa9fbf51f0000000000000000000000000000000000000000000000000000000081526004016113e59190611c74565b60405180910390fd5b811561145057838573ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45b505b836004600085815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050505050565b6114b5838383611674565b61156957600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff160361152a57806040517f7e2732890000000000000000000000000000000000000000000000000000000081526004016115219190611d8a565b60405180910390fd5b81816040517f177e802f000000000000000000000000000000000000000000000000000000008152600401611560929190612571565b60405180910390fd5b505050565b606060405180602001604052806000815250905090565b6060611590826108cd565b50600061159b61156e565b905060008151116115bb57604051806020016040528060008152506115e6565b806115c584611735565b6040516020016115d69291906122cf565b6040516020818303038152906040525b915050919050565b6115f88383611803565b6116056000848484610e82565b505050565b60007f01ffc9a7000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149050919050565b60008073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415801561172c57508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff1614806116ed57506116ec8484610752565b5b8061172b57508273ffffffffffffffffffffffffffffffffffffffff1661171383610955565b73ffffffffffffffffffffffffffffffffffffffff16145b5b90509392505050565b606060006001611744846118fc565b01905060008167ffffffffffffffff81111561176357611762611e1b565b5b6040519080825280601f01601f1916602001820160405280156117955781602001600182028036833780820191505090505b509050600082602001820190505b6001156117f8578080600190039150507f3031323334353637383961626364656600000000000000000000000000000000600a86061a8153600a85816117ec576117eb61259a565b5b049450600085036117a3575b819350505050919050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16036118755760006040517f64a0ae9200000000000000000000000000000000000000000000000000000000815260040161186c9190611c74565b60405180910390fd5b6000611883838360006109ac565b9050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16146118f75760006040517f73c6ac6e0000000000000000000000000000000000000000000000000000000081526004016118ee9190611c74565b60405180910390fd5b505050565b600080600090507a184f03e93ff9f4daa797ed6e38ed64bf6a1f010000000000000000831061195a577a184f03e93ff9f4daa797ed6e38ed64bf6a1f01000000000000000083816119505761194f61259a565b5b0492506040810190505b6d04ee2d6d415b85acef81000000008310611997576d04ee2d6d415b85acef8100000000838161198d5761198c61259a565b5b0492506020810190505b662386f26fc1000083106119c657662386f26fc1000083816119bc576119bb61259a565b5b0492506010810190505b6305f5e10083106119ef576305f5e10083816119e5576119e461259a565b5b0492506008810190505b6127108310611a14576127108381611a0a57611a0961259a565b5b0492506004810190505b60648310611a375760648381611a2d57611a2c61259a565b5b0492506002810190505b600a8310611a46576001810190505b80915050919050565b6000604051905090565b600080fd5b600080fd5b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b611a9881611a63565b8114611aa357600080fd5b50565b600081359050611ab581611a8f565b92915050565b600060208284031215611ad157611ad0611a59565b5b6000611adf84828501611aa6565b91505092915050565b60008115159050919050565b611afd81611ae8565b82525050565b6000602082019050611b186000830184611af4565b92915050565b600081519050919050565b600082825260208201905092915050565b60005b83811015611b58578082015181840152602081019050611b3d565b60008484015250505050565b6000601f19601f8301169050919050565b6000611b8082611b1e565b611b8a8185611b29565b9350611b9a818560208601611b3a565b611ba381611b64565b840191505092915050565b60006020820190508181036000830152611bc88184611b75565b905092915050565b6000819050919050565b611be381611bd0565b8114611bee57600080fd5b50565b600081359050611c0081611bda565b92915050565b600060208284031215611c1c57611c1b611a59565b5b6000611c2a84828501611bf1565b91505092915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000611c5e82611c33565b9050919050565b611c6e81611c53565b82525050565b6000602082019050611c896000830184611c65565b92915050565b611c9881611c53565b8114611ca357600080fd5b50565b600081359050611cb581611c8f565b92915050565b60008060408385031215611cd257611cd1611a59565b5b6000611ce085828601611ca6565b9250506020611cf185828601611bf1565b9150509250929050565b600080600060608486031215611d1457611d13611a59565b5b6000611d2286828701611ca6565b9350506020611d3386828701611ca6565b9250506040611d4486828701611bf1565b9150509250925092565b600060208284031215611d6457611d63611a59565b5b6000611d7284828501611ca6565b91505092915050565b611d8481611bd0565b82525050565b6000602082019050611d9f6000830184611d7b565b92915050565b611dae81611ae8565b8114611db957600080fd5b50565b600081359050611dcb81611da5565b92915050565b60008060408385031215611de857611de7611a59565b5b6000611df685828601611ca6565b9250506020611e0785828601611dbc565b9150509250929050565b600080fd5b600080fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b611e5382611b64565b810181811067ffffffffffffffff82111715611e7257611e71611e1b565b5b80604052505050565b6000611e85611a4f565b9050611e918282611e4a565b919050565b600067ffffffffffffffff821115611eb157611eb0611e1b565b5b611eba82611b64565b9050602081019050919050565b82818337600083830152505050565b6000611ee9611ee484611e96565b611e7b565b905082815260208101848484011115611f0557611f04611e16565b5b611f10848285611ec7565b509392505050565b600082601f830112611f2d57611f2c611e11565b5b8135611f3d848260208601611ed6565b91505092915050565b60008060008060808587031215611f6057611f5f611a59565b5b6000611f6e87828801611ca6565b9450506020611f7f87828801611ca6565b9350506040611f9087828801611bf1565b925050606085013567ffffffffffffffff811115611fb157611fb0611a5e565b5b611fbd87828801611f18565b91505092959194509250565b600067ffffffffffffffff821115611fe457611fe3611e1b565b5b611fed82611b64565b9050602081019050919050565b600061200d61200884611fc9565b611e7b565b90508281526020810184848401111561202957612028611e16565b5b612034848285611ec7565b509392505050565b600082601f83011261205157612050611e11565b5b8135612061848260208601611ffa565b91505092915050565b60008060006060848603121561208357612082611a59565b5b600061209186828701611ca6565b93505060206120a286828701611bf1565b925050604084013567ffffffffffffffff8111156120c3576120c2611a5e565b5b6120cf8682870161203c565b9150509250925092565b600080604083850312156120f0576120ef611a59565b5b60006120fe85828601611ca6565b925050602061210f85828601611ca6565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000600282049050600182168061216057607f821691505b60208210810361217357612172612119565b5b50919050565b600060608201905061218e6000830186611c65565b61219b6020830185611d7b565b6121a86040830184611c65565b949350505050565b600081519050919050565b600082825260208201905092915050565b60006121d7826121b0565b6121e181856121bb565b93506121f1818560208601611b3a565b6121fa81611b64565b840191505092915050565b600060808201905061221a6000830187611c65565b6122276020830186611c65565b6122346040830185611d7b565b818103606083015261224681846121cc565b905095945050505050565b60008151905061226081611a8f565b92915050565b60006020828403121561227c5761227b611a59565b5b600061228a84828501612251565b91505092915050565b600081905092915050565b60006122a982611b1e565b6122b38185612293565b93506122c3818560208601611b3a565b80840191505092915050565b60006122db828561229e565b91506122e7828461229e565b91508190509392505050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b6000600883026123557fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82612318565b61235f8683612318565b95508019841693508086168417925050509392505050565b6000819050919050565b600061239c61239761239284611bd0565b612377565b611bd0565b9050919050565b6000819050919050565b6123b683612381565b6123ca6123c2826123a3565b848454612325565b825550505050565b600090565b6123df6123d2565b6123ea8184846123ad565b505050565b5b8181101561240e576124036000826123d7565b6001810190506123f0565b5050565b601f82111561245357612424816122f3565b61242d84612308565b8101602085101561243c578190505b61245061244885612308565b8301826123ef565b50505b505050565b600082821c905092915050565b600061247660001984600802612458565b1980831691505092915050565b600061248f8383612465565b9150826002028217905092915050565b6124a882611b1e565b67ffffffffffffffff8111156124c1576124c0611e1b565b5b6124cb8254612148565b6124d6828285612412565b600060209050601f83116001811461250957600084156124f7578287015190505b6125018582612483565b865550612569565b601f198416612517866122f3565b60005b8281101561253f5784890151825560018201915060208501945060208101905061251a565b8683101561255c5784890151612558601f891682612465565b8355505b6001600288020188555050505b505050505050565b60006040820190506125866000830185611c65565b6125936020830184611d7b565b9392505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fdfea2646970667358221220c127dd9d7e762b6169b0fc292f3187545e439ac804965db8262a719d745968f864736f6c63430008140033";

type BaseERC721ConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: BaseERC721ConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class BaseERC721__factory extends ContractFactory {
  constructor(...args: BaseERC721ConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    initialOwner: AddressLike,
    name: string,
    symbol: string,
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(
      initialOwner,
      name,
      symbol,
      overrides || {}
    );
  }
  override deploy(
    initialOwner: AddressLike,
    name: string,
    symbol: string,
    overrides?: NonPayableOverrides & { from?: string }
  ) {
    return super.deploy(initialOwner, name, symbol, overrides || {}) as Promise<
      BaseERC721 & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): BaseERC721__factory {
    return super.connect(runner) as BaseERC721__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): BaseERC721Interface {
    return new Interface(_abi) as BaseERC721Interface;
  }
  static connect(address: string, runner?: ContractRunner | null): BaseERC721 {
    return new Contract(address, _abi, runner) as unknown as BaseERC721;
  }
}
