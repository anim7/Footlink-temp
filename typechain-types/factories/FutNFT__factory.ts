/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { FutNFT, FutNFTInterface } from "../FutNFT";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
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
        indexed: false,
        internalType: "uint256",
        name: "playerId",
        type: "uint256",
      },
    ],
    name: "PlayerAdded",
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
        internalType: "uint256",
        name: "_id",
        type: "uint256",
      },
    ],
    name: "getPlayer",
    outputs: [
      {
        components: [
          {
            internalType: "string",
            name: "name",
            type: "string",
          },
          {
            internalType: "string",
            name: "preferredPosition",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "id",
            type: "uint256",
          },
          {
            internalType: "uint8",
            name: "age",
            type: "uint8",
          },
          {
            internalType: "uint8",
            name: "level",
            type: "uint8",
          },
          {
            internalType: "uint32",
            name: "lastUpgrade",
            type: "uint32",
          },
          {
            internalType: "string[]",
            name: "suitablePositions",
            type: "string[]",
          },
          {
            internalType: "string",
            name: "imageURI",
            type: "string",
          },
        ],
        internalType: "struct FutNFT.Player",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_id",
        type: "uint256",
      },
    ],
    name: "getPlayerExists",
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
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "listedOnMarket",
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
    inputs: [
      {
        components: [
          {
            internalType: "string",
            name: "name",
            type: "string",
          },
          {
            internalType: "string",
            name: "preferredPosition",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "id",
            type: "uint256",
          },
          {
            internalType: "uint8",
            name: "age",
            type: "uint8",
          },
          {
            internalType: "uint8",
            name: "level",
            type: "uint8",
          },
          {
            internalType: "uint32",
            name: "lastUpgrade",
            type: "uint32",
          },
          {
            internalType: "string[]",
            name: "suitablePositions",
            type: "string[]",
          },
          {
            internalType: "string",
            name: "imageURI",
            type: "string",
          },
        ],
        internalType: "struct FutNFT.Player",
        name: "_player",
        type: "tuple",
      },
    ],
    name: "mint",
    outputs: [],
    stateMutability: "nonpayable",
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
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "playerToOwner",
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
        name: "_data",
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
        name: "index",
        type: "uint256",
      },
    ],
    name: "tokenByIndex",
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
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "tokenOfOwnerByIndex",
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
    inputs: [],
    name: "totalSupply",
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
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b506040805180820182526006815265119d5d13919560d21b6020808301918252835180850190945260048452631193919560e21b9084015281519192916200005c91600091620000eb565b50805162000072906001906020840190620000eb565b5050506200008f620000896200009560201b60201c565b62000099565b620001ce565b3390565b600a80546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b828054620000f99062000191565b90600052602060002090601f0160209004810192826200011d576000855562000168565b82601f106200013857805160ff191683800117855562000168565b8280016001018555821562000168579182015b82811115620001685782518255916020019190600101906200014b565b50620001769291506200017a565b5090565b5b808211156200017657600081556001016200017b565b600181811c90821680620001a657607f821691505b60208210811415620001c857634e487b7160e01b600052602260045260246000fd5b50919050565b61240980620001de6000396000f3fe608060405234801561001057600080fd5b50600436106101585760003560e01c806370a08231116100c3578063a22cb4651161007c578063a22cb46514610309578063b88d4fde1461031c578063c87b56dd1461032f578063e55ae4e814610342578063e985e9c514610362578063f2fde38b1461039e57600080fd5b806370a082311461029f578063715018a6146102b25780638da5cb5b146102ba57806393ba736e146102cb57806395d89b41146102de57806396ffdb02146102e657600080fd5b806323b872dd1161011557806323b872dd146102155780632f745c591461022857806342842e0e1461023b5780634f6ccce71461024e578063580adaa3146102615780636352211e1461028c57600080fd5b806301ffc9a71461015d57806306fdde0314610185578063081812fc1461019a578063095ea7b3146101c557806318160ddd146101da57806319b90d27146101ec575b600080fd5b61017061016b366004611b71565b6103b1565b60405190151581526020015b60405180910390f35b61018d6103c2565b60405161017c9190611be6565b6101ad6101a8366004611bf9565b610454565b6040516001600160a01b03909116815260200161017c565b6101d86101d3366004611c2e565b6104ee565b005b6008545b60405190815260200161017c565b6101ad6101fa366004611bf9565b600d602052600090815260409020546001600160a01b031681565b6101d8610223366004611c58565b610604565b6101de610236366004611c2e565b610635565b6101d8610249366004611c58565b6106cb565b6101de61025c366004611bf9565b6106e6565b61017061026f366004611bf9565b6000908152600d60205260409020546001600160a01b0316151590565b6101ad61029a366004611bf9565b610779565b6101de6102ad366004611c94565b610784565b6101d861080b565b600a546001600160a01b03166101ad565b6101d86102d9366004611e5c565b610841565b61018d610a0d565b6101706102f4366004611bf9565b600e6020526000908152604090205460ff1681565b6101d8610317366004611f73565b610a1c565b6101d861032a366004611faf565b610a2b565b61018d61033d366004611bf9565b610a63565b610355610350366004611bf9565b610b4b565b60405161017c9190612080565b610170610370366004612144565b6001600160a01b03918216600090815260056020908152604080832093909416825291909152205460ff1690565b6101d86103ac366004611c94565b610e8e565b60006103bc82610f29565b92915050565b6060600080546103d190612177565b80601f01602080910402602001604051908101604052809291908181526020018280546103fd90612177565b801561044a5780601f1061041f5761010080835404028352916020019161044a565b820191906000526020600020905b81548152906001019060200180831161042d57829003601f168201915b5050505050905090565b6000818152600260205260408120546001600160a01b03166104d25760405162461bcd60e51b815260206004820152602c60248201527f4552433732313a20617070726f76656420717565727920666f72206e6f6e657860448201526b34b9ba32b73a103a37b5b2b760a11b60648201526084015b60405180910390fd5b506000908152600460205260409020546001600160a01b031690565b60006104f982610f4e565b9050806001600160a01b0316836001600160a01b031614156105675760405162461bcd60e51b815260206004820152602160248201527f4552433732313a20617070726f76616c20746f2063757272656e74206f776e656044820152603960f91b60648201526084016104c9565b336001600160a01b038216148061058357506105838133610370565b6105f55760405162461bcd60e51b815260206004820152603860248201527f4552433732313a20617070726f76652063616c6c6572206973206e6f74206f7760448201527f6e6572206e6f7220617070726f76656420666f7220616c6c000000000000000060648201526084016104c9565b6105ff8383610fc5565b505050565b61060e3382611033565b61062a5760405162461bcd60e51b81526004016104c9906121b2565b6105ff83838361112a565b600061064083610784565b82106106a25760405162461bcd60e51b815260206004820152602b60248201527f455243373231456e756d657261626c653a206f776e657220696e646578206f7560448201526a74206f6620626f756e647360a81b60648201526084016104c9565b506001600160a01b03919091166000908152600660209081526040808320938352929052205490565b6105ff83838360405180602001604052806000815250610a2b565b60006106f160085490565b82106107545760405162461bcd60e51b815260206004820152602c60248201527f455243373231456e756d657261626c653a20676c6f62616c20696e646578206f60448201526b7574206f6620626f756e647360a01b60648201526084016104c9565b6008828154811061076757610767612203565b90600052602060002001549050919050565b60006103bc82610f4e565b60006001600160a01b0382166107ef5760405162461bcd60e51b815260206004820152602a60248201527f4552433732313a2062616c616e636520717565727920666f7220746865207a65604482015269726f206164647265737360b01b60648201526084016104c9565b506001600160a01b031660009081526003602052604090205490565b600a546001600160a01b031633146108355760405162461bcd60e51b81526004016104c990612219565b61083f60006112d1565b565b600a546001600160a01b0316331461086b5760405162461bcd60e51b81526004016104c990612219565b6040808201516000908152600d60205220546001600160a01b0316156108c45760405162461bcd60e51b815260206004820152600e60248201526d506c61796572204578697374732160901b60448201526064016104c9565b6040808201516000908152600c60209081529190208251805184936108ed928492910190611a12565b5060208281015180516109069260018501920190611a12565b50604082015160028201556060820151600382018054608085015160a086015163ffffffff16620100000265ffffffff00001960ff9283166101000261ffff199094169290951691909117919091179290921691909117905560c0820151805161097a916004840191602090910190611a96565b5060e08201518051610996916005840191602090910190611a12565b505050604080820180516000908152600d6020529190912080546001600160a01b0319163390811790915590516109cd9190611323565b7f5af403e238a3f8f7d43c05ff2fac53c833e031e8fb8ec011b3c8e073d870ad7b8160400151604051610a0291815260200190565b60405180910390a150565b6060600180546103d190612177565b610a27338383611471565b5050565b610a353383611033565b610a515760405162461bcd60e51b81526004016104c9906121b2565b610a5d84848484611540565b50505050565b6000818152600260205260409020546060906001600160a01b0316610ae25760405162461bcd60e51b815260206004820152602f60248201527f4552433732314d657461646174613a2055524920717565727920666f72206e6f60448201526e3732bc34b9ba32b73a103a37b5b2b760891b60648201526084016104c9565b6000610af960408051602081019091526000815290565b90506000815111610b195760405180602001604052806000815250610b44565b80610b2384611573565b604051602001610b3492919061224e565b6040516020818303038152906040525b9392505050565b610b9f604051806101000160405280606081526020016060815260200160008152602001600060ff168152602001600060ff168152602001600063ffffffff16815260200160608152602001606081525090565b6000828152600c60205260409081902081516101008101909252805482908290610bc890612177565b80601f0160208091040260200160405190810160405280929190818152602001828054610bf490612177565b8015610c415780601f10610c1657610100808354040283529160200191610c41565b820191906000526020600020905b815481529060010190602001808311610c2457829003601f168201915b50505050508152602001600182018054610c5a90612177565b80601f0160208091040260200160405190810160405280929190818152602001828054610c8690612177565b8015610cd35780601f10610ca857610100808354040283529160200191610cd3565b820191906000526020600020905b815481529060010190602001808311610cb657829003601f168201915b50505091835250506002820154602080830191909152600383015460ff808216604080860191909152610100830490911660608501526201000090910463ffffffff16608084015260048401805482518185028101850190935280835260a090940193919290919060009084015b82821015610ded578382906000526020600020018054610d6090612177565b80601f0160208091040260200160405190810160405280929190818152602001828054610d8c90612177565b8015610dd95780601f10610dae57610100808354040283529160200191610dd9565b820191906000526020600020905b815481529060010190602001808311610dbc57829003601f168201915b505050505081526020019060010190610d41565b505050508152602001600582018054610e0590612177565b80601f0160208091040260200160405190810160405280929190818152602001828054610e3190612177565b8015610e7e5780601f10610e5357610100808354040283529160200191610e7e565b820191906000526020600020905b815481529060010190602001808311610e6157829003601f168201915b5050505050815250509050919050565b600a546001600160a01b03163314610eb85760405162461bcd60e51b81526004016104c990612219565b6001600160a01b038116610f1d5760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b60648201526084016104c9565b610f26816112d1565b50565b60006001600160e01b0319821663780e9d6360e01b14806103bc57506103bc82611671565b6000818152600260205260408120546001600160a01b0316806103bc5760405162461bcd60e51b815260206004820152602960248201527f4552433732313a206f776e657220717565727920666f72206e6f6e657869737460448201526832b73a103a37b5b2b760b91b60648201526084016104c9565b600081815260046020526040902080546001600160a01b0319166001600160a01b0384169081179091558190610ffa82610f4e565b6001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b6000818152600260205260408120546001600160a01b03166110ac5760405162461bcd60e51b815260206004820152602c60248201527f4552433732313a206f70657261746f7220717565727920666f72206e6f6e657860448201526b34b9ba32b73a103a37b5b2b760a11b60648201526084016104c9565b60006110b783610f4e565b9050806001600160a01b0316846001600160a01b031614806110f25750836001600160a01b03166110e784610454565b6001600160a01b0316145b8061112257506001600160a01b0380821660009081526005602090815260408083209388168352929052205460ff165b949350505050565b826001600160a01b031661113d82610f4e565b6001600160a01b0316146111a15760405162461bcd60e51b815260206004820152602560248201527f4552433732313a207472616e736665722066726f6d20696e636f72726563742060448201526437bbb732b960d91b60648201526084016104c9565b6001600160a01b0382166112035760405162461bcd60e51b8152602060048201526024808201527f4552433732313a207472616e7366657220746f20746865207a65726f206164646044820152637265737360e01b60648201526084016104c9565b61120e8383836116c1565b611219600082610fc5565b6001600160a01b0383166000908152600360205260408120805460019290611242908490612293565b90915550506001600160a01b03821660009081526003602052604081208054600192906112709084906122aa565b909155505060008181526002602052604080822080546001600160a01b0319166001600160a01b0386811691821790925591518493918716917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef91a4505050565b600a80546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b6001600160a01b0382166113795760405162461bcd60e51b815260206004820181905260248201527f4552433732313a206d696e7420746f20746865207a65726f206164647265737360448201526064016104c9565b6000818152600260205260409020546001600160a01b0316156113de5760405162461bcd60e51b815260206004820152601c60248201527f4552433732313a20746f6b656e20616c7265616479206d696e7465640000000060448201526064016104c9565b6113ea600083836116c1565b6001600160a01b03821660009081526003602052604081208054600192906114139084906122aa565b909155505060008181526002602052604080822080546001600160a01b0319166001600160a01b03861690811790915590518392907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908290a45050565b816001600160a01b0316836001600160a01b031614156114d35760405162461bcd60e51b815260206004820152601960248201527f4552433732313a20617070726f766520746f2063616c6c65720000000000000060448201526064016104c9565b6001600160a01b03838116600081815260056020908152604080832094871680845294825291829020805460ff191686151590811790915591519182527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a3505050565b61154b84848461112a565b611557848484846116cc565b610a5d5760405162461bcd60e51b81526004016104c9906122c2565b6060816115975750506040805180820190915260018152600360fc1b602082015290565b8160005b81156115c157806115ab81612314565b91506115ba9050600a83612345565b915061159b565b60008167ffffffffffffffff8111156115dc576115dc611caf565b6040519080825280601f01601f191660200182016040528015611606576020820181803683370190505b5090505b84156111225761161b600183612293565b9150611628600a86612359565b6116339060306122aa565b60f81b81838151811061164857611648612203565b60200101906001600160f81b031916908160001a90535061166a600a86612345565b945061160a565b60006001600160e01b031982166380ac58cd60e01b14806116a257506001600160e01b03198216635b5e139f60e01b145b806103bc57506301ffc9a760e01b6001600160e01b03198316146103bc565b6105ff8383836117ca565b60006001600160a01b0384163b156117bf57604051630a85bd0160e11b81526001600160a01b0385169063150b7a029061171090339089908890889060040161236d565b6020604051808303816000875af192505050801561174b575060408051601f3d908101601f19168201909252611748918101906123a0565b60015b6117a5573d808015611779576040519150601f19603f3d011682016040523d82523d6000602084013e61177e565b606091505b50805161179d5760405162461bcd60e51b81526004016104c9906122c2565b805181602001fd5b6001600160e01b031916630a85bd0160e11b149050611122565b506001949350505050565b6001600160a01b0383166118255761182081600880546000838152600960205260408120829055600182018355919091527ff3f7a9fe364faab93b216da50a3214154f22a0a2b415b23a84c8169e8b636ee30155565b611848565b816001600160a01b0316836001600160a01b031614611848576118488382611882565b6001600160a01b03821661185f576105ff8161191f565b826001600160a01b0316826001600160a01b0316146105ff576105ff82826119ce565b6000600161188f84610784565b6118999190612293565b6000838152600760205260409020549091508082146118ec576001600160a01b03841660009081526006602090815260408083208584528252808320548484528184208190558352600790915290208190555b5060009182526007602090815260408084208490556001600160a01b039094168352600681528383209183525290812055565b60085460009061193190600190612293565b6000838152600960205260408120546008805493945090928490811061195957611959612203565b90600052602060002001549050806008838154811061197a5761197a612203565b60009182526020808320909101929092558281526009909152604080822084905585825281205560088054806119b2576119b26123bd565b6001900381819060005260206000200160009055905550505050565b60006119d983610784565b6001600160a01b039093166000908152600660209081526040808320868452825280832085905593825260079052919091209190915550565b828054611a1e90612177565b90600052602060002090601f016020900481019282611a405760008555611a86565b82601f10611a5957805160ff1916838001178555611a86565b82800160010185558215611a86579182015b82811115611a86578251825591602001919060010190611a6b565b50611a92929150611aef565b5090565b828054828255906000526020600020908101928215611ae3579160200282015b82811115611ae35782518051611ad3918491602090910190611a12565b5091602001919060010190611ab6565b50611a92929150611b04565b5b80821115611a925760008155600101611af0565b80821115611a92576000611b188282611b21565b50600101611b04565b508054611b2d90612177565b6000825580601f10611b3d575050565b601f016020900490600052602060002090810190610f269190611aef565b6001600160e01b031981168114610f2657600080fd5b600060208284031215611b8357600080fd5b8135610b4481611b5b565b60005b83811015611ba9578181015183820152602001611b91565b83811115610a5d5750506000910152565b60008151808452611bd2816020860160208601611b8e565b601f01601f19169290920160200192915050565b602081526000610b446020830184611bba565b600060208284031215611c0b57600080fd5b5035919050565b80356001600160a01b0381168114611c2957600080fd5b919050565b60008060408385031215611c4157600080fd5b611c4a83611c12565b946020939093013593505050565b600080600060608486031215611c6d57600080fd5b611c7684611c12565b9250611c8460208501611c12565b9150604084013590509250925092565b600060208284031215611ca657600080fd5b610b4482611c12565b634e487b7160e01b600052604160045260246000fd5b604051610100810167ffffffffffffffff81118282101715611ce957611ce9611caf565b60405290565b604051601f8201601f1916810167ffffffffffffffff81118282101715611d1857611d18611caf565b604052919050565b600067ffffffffffffffff831115611d3a57611d3a611caf565b611d4d601f8401601f1916602001611cef565b9050828152838383011115611d6157600080fd5b828260208301376000602084830101529392505050565b600082601f830112611d8957600080fd5b610b4483833560208501611d20565b803560ff81168114611c2957600080fd5b803563ffffffff81168114611c2957600080fd5b600082601f830112611dce57600080fd5b8135602067ffffffffffffffff80831115611deb57611deb611caf565b8260051b611dfa838201611cef565b9384528581018301938381019088861115611e1457600080fd5b84880192505b85831015611e5057823584811115611e325760008081fd5b611e408a87838c0101611d78565b8352509184019190840190611e1a565b98975050505050505050565b600060208284031215611e6e57600080fd5b813567ffffffffffffffff80821115611e8657600080fd5b908301906101008286031215611e9b57600080fd5b611ea3611cc5565b823582811115611eb257600080fd5b611ebe87828601611d78565b825250602083013582811115611ed357600080fd5b611edf87828601611d78565b60208301525060408301356040820152611efb60608401611d98565b6060820152611f0c60808401611d98565b6080820152611f1d60a08401611da9565b60a082015260c083013582811115611f3457600080fd5b611f4087828601611dbd565b60c08301525060e083013582811115611f5857600080fd5b611f6487828601611d78565b60e08301525095945050505050565b60008060408385031215611f8657600080fd5b611f8f83611c12565b915060208301358015158114611fa457600080fd5b809150509250929050565b60008060008060808587031215611fc557600080fd5b611fce85611c12565b9350611fdc60208601611c12565b925060408501359150606085013567ffffffffffffffff811115611fff57600080fd5b8501601f8101871361201057600080fd5b61201f87823560208401611d20565b91505092959194509250565b600081518084526020808501808196508360051b8101915082860160005b85811015612073578284038952612061848351611bba565b98850198935090840190600101612049565b5091979650505050505050565b602081526000825161010080602085015261209f610120850183611bba565b91506020850151601f19808685030160408701526120bd8483611bba565b935060408701516060870152606087015191506120df608087018360ff169052565b608087015160ff811660a0880152915060a087015163ffffffff811660c0880152915060c08701519150808685030160e087015261211d848361202b565b935060e087015191508086850301838701525061213a8382611bba565b9695505050505050565b6000806040838503121561215757600080fd5b61216083611c12565b915061216e60208401611c12565b90509250929050565b600181811c9082168061218b57607f821691505b602082108114156121ac57634e487b7160e01b600052602260045260246000fd5b50919050565b60208082526031908201527f4552433732313a207472616e736665722063616c6c6572206973206e6f74206f6040820152701ddb995c881b9bdc88185c1c1c9bdd9959607a1b606082015260800190565b634e487b7160e01b600052603260045260246000fd5b6020808252818101527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604082015260600190565b60008351612260818460208801611b8e565b835190830190612274818360208801611b8e565b01949350505050565b634e487b7160e01b600052601160045260246000fd5b6000828210156122a5576122a561227d565b500390565b600082198211156122bd576122bd61227d565b500190565b60208082526032908201527f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560408201527131b2b4bb32b91034b6b83632b6b2b73a32b960711b606082015260800190565b60006000198214156123285761232861227d565b5060010190565b634e487b7160e01b600052601260045260246000fd5b6000826123545761235461232f565b500490565b6000826123685761236861232f565b500690565b6001600160a01b038581168252841660208201526040810183905260806060820181905260009061213a90830184611bba565b6000602082840312156123b257600080fd5b8151610b4481611b5b565b634e487b7160e01b600052603160045260246000fdfea2646970667358221220e90fceb24704ae1ebc89c4d59caa77752780bbaf73db3a4cac964333c3b702f864736f6c634300080c0033";

type FutNFTConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: FutNFTConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class FutNFT__factory extends ContractFactory {
  constructor(...args: FutNFTConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "FutNFT";
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<FutNFT> {
    return super.deploy(overrides || {}) as Promise<FutNFT>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): FutNFT {
    return super.attach(address) as FutNFT;
  }
  connect(signer: Signer): FutNFT__factory {
    return super.connect(signer) as FutNFT__factory;
  }
  static readonly contractName: "FutNFT";
  public readonly contractName: "FutNFT";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): FutNFTInterface {
    return new utils.Interface(_abi) as FutNFTInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): FutNFT {
    return new Contract(address, _abi, signerOrProvider) as FutNFT;
  }
}