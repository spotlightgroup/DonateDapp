(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./build/contracts/MetaCoin.json":
/*!***************************************!*\
  !*** ./build/contracts/MetaCoin.json ***!
  \***************************************/
/*! exports provided: contractName, abi, bytecode, deployedBytecode, sourceMap, deployedSourceMap, source, sourcePath, ast, compiler, networks, schemaVersion, updatedAt, default */
/***/ (function(module) {

module.exports = {"contractName":"MetaCoin","abi":[{"constant":true,"inputs":[{"name":"addr","type":"address"}],"name":"getBalanceInEth","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"receiver","type":"address"},{"name":"amount","type":"uint256"}],"name":"sendCoin","outputs":[{"name":"sufficient","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"addr","type":"address"}],"name":"getBalance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_from","type":"address"},{"indexed":true,"name":"_to","type":"address"},{"indexed":false,"name":"_value","type":"uint256"}],"name":"Transfer","type":"event"}],"bytecode":"0x6060604052341561000f57600080fd5b6127106000803273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055506103c5806100636000396000f300606060405260043610610057576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff1680637bd703e81461005c57806390b98a11146100a9578063f8b2cb4f14610103575b600080fd5b341561006757600080fd5b610093600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050610150565b6040518082815260200191505060405180910390f35b34156100b457600080fd5b6100e9600480803573ffffffffffffffffffffffffffffffffffffffff169060200190919080359060200190919050506101f8565b604051808215151515815260200191505060405180910390f35b341561010e57600080fd5b61013a600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050610351565b6040518082815260200191505060405180910390f35b600073__ConvertLib____________________________6396e4ee3d61017584610351565b60026000604051602001526040518363ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808381526020018281526020019250505060206040518083038186803b15156101d657600080fd5b6102c65a03f415156101e757600080fd5b505050604051805190509050919050565b6000816000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020541015610249576000905061034b565b816000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282540392505081905550816000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825401925050819055508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040518082815260200191505060405180910390a3600190505b92915050565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205490509190505600a165627a7a72305820166f25d017cb99fa193e0f430e8a8480a2b9e7ba34db6e77c9e211acc9ea449e0029","deployedBytecode":"0x606060405260043610610057576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff1680637bd703e81461005c57806390b98a11146100a9578063f8b2cb4f14610103575b600080fd5b341561006757600080fd5b610093600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050610150565b6040518082815260200191505060405180910390f35b34156100b457600080fd5b6100e9600480803573ffffffffffffffffffffffffffffffffffffffff169060200190919080359060200190919050506101f8565b604051808215151515815260200191505060405180910390f35b341561010e57600080fd5b61013a600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050610351565b6040518082815260200191505060405180910390f35b600073__ConvertLib____________________________6396e4ee3d61017584610351565b60026000604051602001526040518363ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808381526020018281526020019250505060206040518083038186803b15156101d657600080fd5b6102c65a03f415156101e757600080fd5b505050604051805190509050919050565b6000816000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020541015610249576000905061034b565b816000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282540392505081905550816000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825401925050819055508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040518082815260200191505060405180910390a3600190505b92915050565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205490509190505600a165627a7a72305820166f25d017cb99fa193e0f430e8a8480a2b9e7ba34db6e77c9e211acc9ea449e0029","sourceMap":"316:675:1:-;;;453:62;;;;;;;;506:5;484:8;:19;493:9;484:19;;;;;;;;;;;;;;;:27;;;;316:675;;;;;;","deployedSourceMap":"316:675:1:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;780:117;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;518:259;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;900:89;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;780:117;839:4;855:10;:18;874:16;885:4;874:10;:16::i;:::-;891:1;855:38;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;848:45;;780:117;;;:::o;518:259::-;582:15;630:6;607:8;:20;616:10;607:20;;;;;;;;;;;;;;;;:29;603:47;;;645:5;638:12;;;;603:47;678:6;654:8;:20;663:10;654:20;;;;;;;;;;;;;;;;:30;;;;;;;;;;;710:6;688:8;:18;697:8;688:18;;;;;;;;;;;;;;;;:28;;;;;;;;;;;741:8;720:38;;729:10;720:38;;;751:6;720:38;;;;;;;;;;;;;;;;;;769:4;762:11;;518:259;;;;;:::o;900:89::-;954:4;971:8;:14;980:4;971:14;;;;;;;;;;;;;;;;964:21;;900:89;;;:::o","source":"pragma solidity ^0.4.16;\n\nimport \"./ConvertLib.sol\";\n\n// This is just a simple example of a coin-like contract.\n// It is not standards compatible and cannot be expected to talk to other\n// coin/token contracts. If you want to create a standards-compliant\n// token, see: https://github.com/ConsenSys/Tokens. Cheers!\n\ncontract MetaCoin {\n\tmapping (address => uint) balances;\n\n\tevent Transfer(address indexed _from, address indexed _to, uint256 _value);\n\n\tfunction MetaCoin() public {\n\t\tbalances[tx.origin] = 10000;\n\t}\n\n\tfunction sendCoin(address receiver, uint amount) public returns(bool sufficient) {\n\t\tif (balances[msg.sender] < amount) return false;\n\t\tbalances[msg.sender] -= amount;\n\t\tbalances[receiver] += amount;\n\t\tTransfer(msg.sender, receiver, amount);\n\t\treturn true;\n\t}\n\n\tfunction getBalanceInEth(address addr) public view returns(uint){\n\t\treturn ConvertLib.convert(getBalance(addr),2);\n\t}\n\n\tfunction getBalance(address addr) public view returns(uint) {\n\t\treturn balances[addr];\n\t}\n}\n","sourcePath":"/Users/rbk/Desktop/DonateDapp/contracts/MetaCoin.sol","ast":{"attributes":{"absolutePath":"/Users/rbk/Desktop/DonateDapp/contracts/MetaCoin.sol","exportedSymbols":{"MetaCoin":[112]}},"children":[{"attributes":{"literals":["solidity","^","0.4",".16"]},"id":18,"name":"PragmaDirective","src":"0:24:1"},{"attributes":{"SourceUnit":17,"absolutePath":"/Users/rbk/Desktop/DonateDapp/contracts/ConvertLib.sol","file":"./ConvertLib.sol","scope":113,"symbolAliases":[null],"unitAlias":""},"id":19,"name":"ImportDirective","src":"26:26:1"},{"attributes":{"baseContracts":[null],"contractDependencies":[null],"contractKind":"contract","documentation":null,"fullyImplemented":true,"linearizedBaseContracts":[112],"name":"MetaCoin","scope":113},"children":[{"attributes":{"constant":false,"name":"balances","scope":112,"stateVariable":true,"storageLocation":"default","type":"mapping(address => uint256)","value":null,"visibility":"internal"},"children":[{"attributes":{"type":"mapping(address => uint256)"},"children":[{"attributes":{"name":"address","type":"address"},"id":20,"name":"ElementaryTypeName","src":"346:7:1"},{"attributes":{"name":"uint","type":"uint256"},"id":21,"name":"ElementaryTypeName","src":"357:4:1"}],"id":22,"name":"Mapping","src":"337:25:1"}],"id":23,"name":"VariableDeclaration","src":"337:34:1"},{"attributes":{"anonymous":false,"name":"Transfer"},"children":[{"children":[{"attributes":{"constant":false,"indexed":true,"name":"_from","scope":31,"stateVariable":false,"storageLocation":"default","type":"address","value":null,"visibility":"internal"},"children":[{"attributes":{"name":"address","type":"address"},"id":24,"name":"ElementaryTypeName","src":"390:7:1"}],"id":25,"name":"VariableDeclaration","src":"390:21:1"},{"attributes":{"constant":false,"indexed":true,"name":"_to","scope":31,"stateVariable":false,"storageLocation":"default","type":"address","value":null,"visibility":"internal"},"children":[{"attributes":{"name":"address","type":"address"},"id":26,"name":"ElementaryTypeName","src":"413:7:1"}],"id":27,"name":"VariableDeclaration","src":"413:19:1"},{"attributes":{"constant":false,"indexed":false,"name":"_value","scope":31,"stateVariable":false,"storageLocation":"default","type":"uint256","value":null,"visibility":"internal"},"children":[{"attributes":{"name":"uint256","type":"uint256"},"id":28,"name":"ElementaryTypeName","src":"434:7:1"}],"id":29,"name":"VariableDeclaration","src":"434:14:1"}],"id":30,"name":"ParameterList","src":"389:60:1"}],"id":31,"name":"EventDefinition","src":"375:75:1"},{"attributes":{"constant":false,"implemented":true,"isConstructor":true,"modifiers":[null],"name":"MetaCoin","payable":false,"scope":112,"stateMutability":"nonpayable","superFunction":null,"visibility":"public"},"children":[{"attributes":{"parameters":[null]},"children":[],"id":32,"name":"ParameterList","src":"470:2:1"},{"attributes":{"parameters":[null]},"children":[],"id":33,"name":"ParameterList","src":"480:0:1"},{"children":[{"children":[{"attributes":{"argumentTypes":null,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"operator":"=","type":"uint256"},"children":[{"attributes":{"argumentTypes":null,"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":true,"type":"uint256"},"children":[{"attributes":{"argumentTypes":null,"overloadedDeclarations":[null],"referencedDeclaration":23,"type":"mapping(address => uint256)","value":"balances"},"id":34,"name":"Identifier","src":"484:8:1"},{"attributes":{"argumentTypes":null,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"member_name":"origin","referencedDeclaration":null,"type":"address"},"children":[{"attributes":{"argumentTypes":null,"overloadedDeclarations":[null],"referencedDeclaration":191,"type":"tx","value":"tx"},"id":35,"name":"Identifier","src":"493:2:1"}],"id":36,"name":"MemberAccess","src":"493:9:1"}],"id":37,"name":"IndexAccess","src":"484:19:1"},{"attributes":{"argumentTypes":null,"hexvalue":"3130303030","isConstant":false,"isLValue":false,"isPure":true,"lValueRequested":false,"subdenomination":null,"token":"number","type":"int_const 10000","value":"10000"},"id":38,"name":"Literal","src":"506:5:1"}],"id":39,"name":"Assignment","src":"484:27:1"}],"id":40,"name":"ExpressionStatement","src":"484:27:1"}],"id":41,"name":"Block","src":"480:35:1"}],"id":42,"name":"FunctionDefinition","src":"453:62:1"},{"attributes":{"constant":false,"implemented":true,"isConstructor":false,"modifiers":[null],"name":"sendCoin","payable":false,"scope":112,"stateMutability":"nonpayable","superFunction":null,"visibility":"public"},"children":[{"children":[{"attributes":{"constant":false,"name":"receiver","scope":83,"stateVariable":false,"storageLocation":"default","type":"address","value":null,"visibility":"internal"},"children":[{"attributes":{"name":"address","type":"address"},"id":43,"name":"ElementaryTypeName","src":"536:7:1"}],"id":44,"name":"VariableDeclaration","src":"536:16:1"},{"attributes":{"constant":false,"name":"amount","scope":83,"stateVariable":false,"storageLocation":"default","type":"uint256","value":null,"visibility":"internal"},"children":[{"attributes":{"name":"uint","type":"uint256"},"id":45,"name":"ElementaryTypeName","src":"554:4:1"}],"id":46,"name":"VariableDeclaration","src":"554:11:1"}],"id":47,"name":"ParameterList","src":"535:31:1"},{"children":[{"attributes":{"constant":false,"name":"sufficient","scope":83,"stateVariable":false,"storageLocation":"default","type":"bool","value":null,"visibility":"internal"},"children":[{"attributes":{"name":"bool","type":"bool"},"id":48,"name":"ElementaryTypeName","src":"582:4:1"}],"id":49,"name":"VariableDeclaration","src":"582:15:1"}],"id":50,"name":"ParameterList","src":"581:17:1"},{"children":[{"attributes":{"falseBody":null},"children":[{"attributes":{"argumentTypes":null,"commonType":{"typeIdentifier":"t_uint256","typeString":"uint256"},"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"operator":"<","type":"bool"},"children":[{"attributes":{"argumentTypes":null,"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"type":"uint256"},"children":[{"attributes":{"argumentTypes":null,"overloadedDeclarations":[null],"referencedDeclaration":23,"type":"mapping(address => uint256)","value":"balances"},"id":51,"name":"Identifier","src":"607:8:1"},{"attributes":{"argumentTypes":null,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"member_name":"sender","referencedDeclaration":null,"type":"address"},"children":[{"attributes":{"argumentTypes":null,"overloadedDeclarations":[null],"referencedDeclaration":181,"type":"msg","value":"msg"},"id":52,"name":"Identifier","src":"616:3:1"}],"id":53,"name":"MemberAccess","src":"616:10:1"}],"id":54,"name":"IndexAccess","src":"607:20:1"},{"attributes":{"argumentTypes":null,"overloadedDeclarations":[null],"referencedDeclaration":46,"type":"uint256","value":"amount"},"id":55,"name":"Identifier","src":"630:6:1"}],"id":56,"name":"BinaryOperation","src":"607:29:1"},{"attributes":{"functionReturnParameters":50},"children":[{"attributes":{"argumentTypes":null,"hexvalue":"66616c7365","isConstant":false,"isLValue":false,"isPure":true,"lValueRequested":false,"subdenomination":null,"token":"bool","type":"bool","value":"false"},"id":57,"name":"Literal","src":"645:5:1"}],"id":58,"name":"Return","src":"638:12:1"}],"id":59,"name":"IfStatement","src":"603:47:1"},{"children":[{"attributes":{"argumentTypes":null,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"operator":"-=","type":"uint256"},"children":[{"attributes":{"argumentTypes":null,"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":true,"type":"uint256"},"children":[{"attributes":{"argumentTypes":null,"overloadedDeclarations":[null],"referencedDeclaration":23,"type":"mapping(address => uint256)","value":"balances"},"id":60,"name":"Identifier","src":"654:8:1"},{"attributes":{"argumentTypes":null,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"member_name":"sender","referencedDeclaration":null,"type":"address"},"children":[{"attributes":{"argumentTypes":null,"overloadedDeclarations":[null],"referencedDeclaration":181,"type":"msg","value":"msg"},"id":61,"name":"Identifier","src":"663:3:1"}],"id":62,"name":"MemberAccess","src":"663:10:1"}],"id":63,"name":"IndexAccess","src":"654:20:1"},{"attributes":{"argumentTypes":null,"overloadedDeclarations":[null],"referencedDeclaration":46,"type":"uint256","value":"amount"},"id":64,"name":"Identifier","src":"678:6:1"}],"id":65,"name":"Assignment","src":"654:30:1"}],"id":66,"name":"ExpressionStatement","src":"654:30:1"},{"children":[{"attributes":{"argumentTypes":null,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"operator":"+=","type":"uint256"},"children":[{"attributes":{"argumentTypes":null,"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":true,"type":"uint256"},"children":[{"attributes":{"argumentTypes":null,"overloadedDeclarations":[null],"referencedDeclaration":23,"type":"mapping(address => uint256)","value":"balances"},"id":67,"name":"Identifier","src":"688:8:1"},{"attributes":{"argumentTypes":null,"overloadedDeclarations":[null],"referencedDeclaration":44,"type":"address","value":"receiver"},"id":68,"name":"Identifier","src":"697:8:1"}],"id":69,"name":"IndexAccess","src":"688:18:1"},{"attributes":{"argumentTypes":null,"overloadedDeclarations":[null],"referencedDeclaration":46,"type":"uint256","value":"amount"},"id":70,"name":"Identifier","src":"710:6:1"}],"id":71,"name":"Assignment","src":"688:28:1"}],"id":72,"name":"ExpressionStatement","src":"688:28:1"},{"children":[{"attributes":{"argumentTypes":null,"isConstant":false,"isLValue":false,"isPure":false,"isStructConstructorCall":false,"lValueRequested":false,"names":[null],"type":"tuple()","type_conversion":false},"children":[{"attributes":{"argumentTypes":[{"typeIdentifier":"t_address","typeString":"address"},{"typeIdentifier":"t_address","typeString":"address"},{"typeIdentifier":"t_uint256","typeString":"uint256"}],"overloadedDeclarations":[null],"referencedDeclaration":31,"type":"function (address,address,uint256)","value":"Transfer"},"id":73,"name":"Identifier","src":"720:8:1"},{"attributes":{"argumentTypes":null,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"member_name":"sender","referencedDeclaration":null,"type":"address"},"children":[{"attributes":{"argumentTypes":null,"overloadedDeclarations":[null],"referencedDeclaration":181,"type":"msg","value":"msg"},"id":74,"name":"Identifier","src":"729:3:1"}],"id":75,"name":"MemberAccess","src":"729:10:1"},{"attributes":{"argumentTypes":null,"overloadedDeclarations":[null],"referencedDeclaration":44,"type":"address","value":"receiver"},"id":76,"name":"Identifier","src":"741:8:1"},{"attributes":{"argumentTypes":null,"overloadedDeclarations":[null],"referencedDeclaration":46,"type":"uint256","value":"amount"},"id":77,"name":"Identifier","src":"751:6:1"}],"id":78,"name":"FunctionCall","src":"720:38:1"}],"id":79,"name":"ExpressionStatement","src":"720:38:1"},{"attributes":{"functionReturnParameters":50},"children":[{"attributes":{"argumentTypes":null,"hexvalue":"74727565","isConstant":false,"isLValue":false,"isPure":true,"lValueRequested":false,"subdenomination":null,"token":"bool","type":"bool","value":"true"},"id":80,"name":"Literal","src":"769:4:1"}],"id":81,"name":"Return","src":"762:11:1"}],"id":82,"name":"Block","src":"599:178:1"}],"id":83,"name":"FunctionDefinition","src":"518:259:1"},{"attributes":{"constant":true,"implemented":true,"isConstructor":false,"modifiers":[null],"name":"getBalanceInEth","payable":false,"scope":112,"stateMutability":"view","superFunction":null,"visibility":"public"},"children":[{"children":[{"attributes":{"constant":false,"name":"addr","scope":99,"stateVariable":false,"storageLocation":"default","type":"address","value":null,"visibility":"internal"},"children":[{"attributes":{"name":"address","type":"address"},"id":84,"name":"ElementaryTypeName","src":"805:7:1"}],"id":85,"name":"VariableDeclaration","src":"805:12:1"}],"id":86,"name":"ParameterList","src":"804:14:1"},{"children":[{"attributes":{"constant":false,"name":"","scope":99,"stateVariable":false,"storageLocation":"default","type":"uint256","value":null,"visibility":"internal"},"children":[{"attributes":{"name":"uint","type":"uint256"},"id":87,"name":"ElementaryTypeName","src":"839:4:1"}],"id":88,"name":"VariableDeclaration","src":"839:4:1"}],"id":89,"name":"ParameterList","src":"838:6:1"},{"children":[{"attributes":{"functionReturnParameters":89},"children":[{"attributes":{"argumentTypes":null,"isConstant":false,"isLValue":false,"isPure":false,"isStructConstructorCall":false,"lValueRequested":false,"names":[null],"type":"uint256","type_conversion":false},"children":[{"attributes":{"argumentTypes":[{"typeIdentifier":"t_uint256","typeString":"uint256"},{"typeIdentifier":"t_rational_2_by_1","typeString":"int_const 2"}],"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"member_name":"convert","referencedDeclaration":15,"type":"function (uint256,uint256) pure returns (uint256)"},"children":[{"attributes":{"argumentTypes":null,"overloadedDeclarations":[null],"referencedDeclaration":16,"type":"type(library ConvertLib)","value":"ConvertLib"},"id":90,"name":"Identifier","src":"855:10:1"}],"id":91,"name":"MemberAccess","src":"855:18:1"},{"attributes":{"argumentTypes":null,"isConstant":false,"isLValue":false,"isPure":false,"isStructConstructorCall":false,"lValueRequested":false,"names":[null],"type":"uint256","type_conversion":false},"children":[{"attributes":{"argumentTypes":[{"typeIdentifier":"t_address","typeString":"address"}],"overloadedDeclarations":[null],"referencedDeclaration":111,"type":"function (address) view returns (uint256)","value":"getBalance"},"id":92,"name":"Identifier","src":"874:10:1"},{"attributes":{"argumentTypes":null,"overloadedDeclarations":[null],"referencedDeclaration":85,"type":"address","value":"addr"},"id":93,"name":"Identifier","src":"885:4:1"}],"id":94,"name":"FunctionCall","src":"874:16:1"},{"attributes":{"argumentTypes":null,"hexvalue":"32","isConstant":false,"isLValue":false,"isPure":true,"lValueRequested":false,"subdenomination":null,"token":"number","type":"int_const 2","value":"2"},"id":95,"name":"Literal","src":"891:1:1"}],"id":96,"name":"FunctionCall","src":"855:38:1"}],"id":97,"name":"Return","src":"848:45:1"}],"id":98,"name":"Block","src":"844:53:1"}],"id":99,"name":"FunctionDefinition","src":"780:117:1"},{"attributes":{"constant":true,"implemented":true,"isConstructor":false,"modifiers":[null],"name":"getBalance","payable":false,"scope":112,"stateMutability":"view","superFunction":null,"visibility":"public"},"children":[{"children":[{"attributes":{"constant":false,"name":"addr","scope":111,"stateVariable":false,"storageLocation":"default","type":"address","value":null,"visibility":"internal"},"children":[{"attributes":{"name":"address","type":"address"},"id":100,"name":"ElementaryTypeName","src":"920:7:1"}],"id":101,"name":"VariableDeclaration","src":"920:12:1"}],"id":102,"name":"ParameterList","src":"919:14:1"},{"children":[{"attributes":{"constant":false,"name":"","scope":111,"stateVariable":false,"storageLocation":"default","type":"uint256","value":null,"visibility":"internal"},"children":[{"attributes":{"name":"uint","type":"uint256"},"id":103,"name":"ElementaryTypeName","src":"954:4:1"}],"id":104,"name":"VariableDeclaration","src":"954:4:1"}],"id":105,"name":"ParameterList","src":"953:6:1"},{"children":[{"attributes":{"functionReturnParameters":105},"children":[{"attributes":{"argumentTypes":null,"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"type":"uint256"},"children":[{"attributes":{"argumentTypes":null,"overloadedDeclarations":[null],"referencedDeclaration":23,"type":"mapping(address => uint256)","value":"balances"},"id":106,"name":"Identifier","src":"971:8:1"},{"attributes":{"argumentTypes":null,"overloadedDeclarations":[null],"referencedDeclaration":101,"type":"address","value":"addr"},"id":107,"name":"Identifier","src":"980:4:1"}],"id":108,"name":"IndexAccess","src":"971:14:1"}],"id":109,"name":"Return","src":"964:21:1"}],"id":110,"name":"Block","src":"960:29:1"}],"id":111,"name":"FunctionDefinition","src":"900:89:1"}],"id":112,"name":"ContractDefinition","src":"316:675:1"}],"id":113,"name":"SourceUnit","src":"0:992:1"},"compiler":{"name":"solc","version":"0.4.18+commit.9cf6e910.Emscripten.clang"},"networks":{"5777":{"events":{},"links":{"ConvertLib":"0x0ab73fa459c417a066773990d703851f2bb7d0d9"},"address":"0xc04d96d988946a355e3b8ea390385fbe1ec3079c"}},"schemaVersion":"1.0.1","updatedAt":"2018-05-16T10:56:40.903Z"};

/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " <nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\n\n    <a class=\"nav-link disabled\" href=\"#\">DonateDapp</a>\n\n  <a class=\"navbar-brand\" href=\"#\">About</a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n    <ul class=\"navbar-nav mr-auto\">\n      <li class=\"nav-item active\">\n        <a class=\"nav-link\" href=\"#\">Home <span class=\"sr-only\">(current)</span></a>\n      </li>\n      <li class=\"nav-item\">\n        <a  [routerLink]=\"['/signup']\" class=\"nav-link\" href=\"#\">SignUp</a>\n      </li>\n      <li class=\"nav-item\">\n        <a [routerLink]=\"['/login']\" class=\"nav-link\" href=\"#\">Login</a>\n      </li>\n    </ul>\n    <form class=\"form-inline my-2 my-lg-0\">\n      <input class=\"form-control mr-sm-2\" type=\"search\" placeholder=\"Search\" aria-label=\"Search\">\n      <button class=\"btn btn-outline-success my-2 my-sm-0\" type=\"submit\">Search</button>\n    </form>\n  </div>\n</nav>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _meta_meta_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./meta/meta.module */ "./src/app/meta/meta.module.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var appRoutes = [
    { path: 'home',
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]
    },
    { path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: _login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"],
        data: { title: 'Login' }
    },
    {
        path: 'signup',
        component: _register_register_component__WEBPACK_IMPORTED_MODULE_5__["RegisterComponent"],
        data: { title: 'signup' }
    }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"],
                _register_register_component__WEBPACK_IMPORTED_MODULE_5__["RegisterComponent"]
            ],
            imports: [
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__["BrowserAnimationsModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_10__["CommonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatToolbarModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_8__["HttpModule"],
                _meta_meta_module__WEBPACK_IMPORTED_MODULE_9__["MetaModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_13__["RouterModule"].forRoot(appRoutes, { enableTracing: true })
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h1>Login</h1>\n  <div class=\"row\">\n    <div class=\"col-md-6\">\n      <form (ngSubmit)=\"login()\" #loginForm=\"ngForm\">\n        <div class=\"alert alert-warning alert-dismissible\" role=\"alert\" *ngIf=\"message !== ''\">\n          <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\n          {{message}}\n        </div>\n        <div class=\"form-group\">\n          <label for=\"name\">User Name</label>\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"UserPassword.username\" name=\"username\" required>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"name\">Password</label>\n          <input type=\"password\" class=\"form-control\" [(ngModel)]=\"UserPassword.password\" name=\"password\" required>\n        </div>\n        <div class=\"form-group\">\n          <button type=\"submit\" class=\"btn btn-success\" [disabled]=\"!loginForm.form.valid\">Login</button>\n          <a  [routerLink]=\"['/signup']\" class=\"nav-link\" href=\"#\"> create account </a>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = /** @class */ (function () {
    function LoginComponent(router, http) {
        this.router = router;
        this.http = http;
        this.UserPassword = {};
        this.message = "";
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.http.post('/api/login', this.UserPassword).subscribe(function (res) {
            _this.data = res;
            //to store data in the browser's session
            localStorage.setItem('jwtToken', _this.data.token);
            _this.router.navigate(['home']);
        }, function (err) {
            _this.message = err.error.msg;
        });
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/meta/meta-sender/meta-sender.component.css":
/*!************************************************************!*\
  !*** ./src/app/meta/meta-sender/meta-sender.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n.address-field {\n  width: 400px;\n}\n\n\nli{\n  list-style: none;\n\n}\n"

/***/ }),

/***/ "./src/app/meta/meta-sender/meta-sender.component.html":
/*!*************************************************************!*\
  !*** ./src/app/meta/meta-sender/meta-sender.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container\">\n\n\n<div >\n      <ul>\n        <li *ngFor=\"let account of accounts\" (click)=\"refreshBalance()\" [value]=\"account\">Your Address is : {{account}}</li>\n      </ul>\n    <p>You have <span id=\"balance\">{{model.balance}}</span> RbCoin</p>\n</div>\n\n<div>\n  <h1>Send RbCoin</h1>\n      <input type=\"text\" matInput id=\"amount\" placeholder=\"Amount\" (change)=\"setAmount($event)\">\n      <input type=\"text\" matInput id=\"receiver\" placeholder=\"Receiver Address\" (change)=\"setReceiver($event)\">\n    <button mat-button id=\"send\" (click)=\"sendCoin()\">Send RBCOIN</button>\n</div>\n</div>\n"

/***/ }),

/***/ "./src/app/meta/meta-sender/meta-sender.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/meta/meta-sender/meta-sender.component.ts ***!
  \***********************************************************/
/*! exports provided: MetaSenderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MetaSenderComponent", function() { return MetaSenderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _util_web3_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../util/web3.service */ "./src/app/util/web3.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};



var metacoin_artifacts = __webpack_require__(/*! ../../../../build/contracts/MetaCoin.json */ "./build/contracts/MetaCoin.json");
var MetaSenderComponent = /** @class */ (function () {
    function MetaSenderComponent(web3Service, matSnackBar) {
        this.web3Service = web3Service;
        this.matSnackBar = matSnackBar;
        this.model = {
            amount: 5,
            receiver: '',
            balance: 0,
            account: ''
        };
        this.status = '';
        console.log('Constructor: ' + web3Service);
    }
    MetaSenderComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log('OnInit: ' + this.web3Service);
        console.log(this);
        this.watchAccount();
        this.web3Service.artifactsToContract(metacoin_artifacts)
            .then(function (MetaCoinAbstraction) {
            _this.MetaCoin = MetaCoinAbstraction;
        });
    };
    MetaSenderComponent.prototype.watchAccount = function () {
        var _this = this;
        this.web3Service.accountsObservable.subscribe(function (accounts) {
            _this.accounts = accounts;
            _this.model.account = accounts[0];
            _this.refreshBalance();
        });
    };
    MetaSenderComponent.prototype.setStatus = function (status) {
        this.matSnackBar.open(status, null, { duration: 3000 });
    };
    MetaSenderComponent.prototype.sendCoin = function () {
        return __awaiter(this, void 0, void 0, function () {
            var amount, receiver, deployedMetaCoin, transaction, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.MetaCoin) {
                            this.setStatus('Metacoin is not loaded, unable to send transaction');
                            return [2 /*return*/];
                        }
                        amount = this.model.amount;
                        receiver = this.model.receiver;
                        console.log('Sending coins' + amount + ' to ' + receiver);
                        this.setStatus('Initiating transaction... (please wait)');
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 4, , 5]);
                        return [4 /*yield*/, this.MetaCoin.deployed()];
                    case 2:
                        deployedMetaCoin = _a.sent();
                        return [4 /*yield*/, deployedMetaCoin.sendCoin.sendTransaction(receiver, amount, { from: this.model.account })];
                    case 3:
                        transaction = _a.sent();
                        if (!transaction) {
                            this.setStatus('Transaction failed!');
                        }
                        else {
                            this.setStatus('Transaction complete!');
                        }
                        return [3 /*break*/, 5];
                    case 4:
                        e_1 = _a.sent();
                        console.log(e_1);
                        this.setStatus('Error sending coin; see log.');
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    MetaSenderComponent.prototype.refreshBalance = function () {
        return __awaiter(this, void 0, void 0, function () {
            var deployedMetaCoin, metaCoinBalance, e_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log('Refreshing balance');
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 4, , 5]);
                        return [4 /*yield*/, this.MetaCoin.deployed()];
                    case 2:
                        deployedMetaCoin = _a.sent();
                        console.log(deployedMetaCoin);
                        console.log('Account', this.model.account);
                        return [4 /*yield*/, deployedMetaCoin.getBalance.call(this.model.account)];
                    case 3:
                        metaCoinBalance = _a.sent();
                        console.log('Found balance: ' + metaCoinBalance);
                        this.model.balance = metaCoinBalance;
                        return [3 /*break*/, 5];
                    case 4:
                        e_2 = _a.sent();
                        console.log(e_2);
                        this.setStatus('Error getting balance; see log.');
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    MetaSenderComponent.prototype.setAmount = function (e) {
        console.log('Setting amount: ' + e.target.value);
        this.model.amount = e.target.value;
    };
    MetaSenderComponent.prototype.setReceiver = function (e) {
        console.log('Setting receiver: ' + e.target.value);
        this.model.receiver = e.target.value;
    };
    MetaSenderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-meta-sender',
            template: __webpack_require__(/*! ./meta-sender.component.html */ "./src/app/meta/meta-sender/meta-sender.component.html"),
            styles: [__webpack_require__(/*! ./meta-sender.component.css */ "./src/app/meta/meta-sender/meta-sender.component.css")]
        }),
        __metadata("design:paramtypes", [_util_web3_service__WEBPACK_IMPORTED_MODULE_1__["Web3Service"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"]])
    ], MetaSenderComponent);
    return MetaSenderComponent;
}());



/***/ }),

/***/ "./src/app/meta/meta.module.ts":
/*!*************************************!*\
  !*** ./src/app/meta/meta.module.ts ***!
  \*************************************/
/*! exports provided: MetaModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MetaModule", function() { return MetaModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _meta_sender_meta_sender_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./meta-sender/meta-sender.component */ "./src/app/meta/meta-sender/meta-sender.component.ts");
/* harmony import */ var _util_util_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/util.module */ "./src/app/util/util.module.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var MetaModule = /** @class */ (function () {
    function MetaModule() {
    }
    MetaModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatOptionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSnackBarModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"],
                _util_util_module__WEBPACK_IMPORTED_MODULE_3__["UtilModule"]
            ],
            declarations: [_meta_sender_meta_sender_component__WEBPACK_IMPORTED_MODULE_2__["MetaSenderComponent"]],
            exports: [_meta_sender_meta_sender_component__WEBPACK_IMPORTED_MODULE_2__["MetaSenderComponent"]]
        })
    ], MetaModule);
    return MetaModule;
}());



/***/ }),

/***/ "./src/app/register/register.component.css":
/*!*************************************************!*\
  !*** ./src/app/register/register.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/register/register.component.html":
/*!**************************************************!*\
  !*** ./src/app/register/register.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h1>Register</h1>\n  <div class=\"row\">\n    <div class=\"col-md-6\">\n      <form (ngSubmit)=\"register()\" #registerForm=\"ngForm\">\n        <div class=\"form-group\">\n          <label for=\"name\">User Name:</label>\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"User.username\" name=\"username\" required>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"name\">Email:</label>\n          <input type=\"email\" class=\"form-control\" [(ngModel)]=\"User.email\" name=\"email\" required>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"name\">Password:</label>\n          <input type=\"password\" class=\"form-control\" [(ngModel)]=\"User.password\" name=\"password\" required>\n        </div>\n        <div class=\"form-group\">\n          <button type=\"submit\" class=\"btn btn-success\" [disabled]=\"!registerForm.form.valid\">Sign up</button>\n          <a  [routerLink]=\"['/login']\" class=\"nav-link\" href=\"#\">if you have already account login</a>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/register/register.component.ts":
/*!************************************************!*\
  !*** ./src/app/register/register.component.ts ***!
  \************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(http, router) {
        this.http = http;
        this.router = router;
        //User = {};
        this.User = {};
        this.message = '';
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.register = function () {
        var _this = this;
        console.log("Abdullllllatiiiiif", this.User);
        this.http.post('/api/register', this.User)
            .subscribe(function (res) {
            _this.router.navigate(['/login']);
        }, function (err) {
            console.log(err);
        });
    };
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/util/util.module.ts":
/*!*************************************!*\
  !*** ./src/app/util/util.module.ts ***!
  \*************************************/
/*! exports provided: UtilModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UtilModule", function() { return UtilModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _web3_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./web3.service */ "./src/app/util/web3.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var UtilModule = /** @class */ (function () {
    function UtilModule() {
    }
    UtilModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
            ],
            providers: [
                _web3_service__WEBPACK_IMPORTED_MODULE_2__["Web3Service"]
            ],
            declarations: []
        })
    ], UtilModule);
    return UtilModule;
}());



/***/ }),

/***/ "./src/app/util/web3.service.ts":
/*!**************************************!*\
  !*** ./src/app/util/web3.service.ts ***!
  \**************************************/
/*! exports provided: Web3Service */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Web3Service", function() { return Web3Service; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var truffle_contract__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! truffle-contract */ "./node_modules/truffle-contract/index.js");
/* harmony import */ var truffle_contract__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(truffle_contract__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rxjs_Rx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/Rx */ "./node_modules/rxjs-compat/_esm5/Rx.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};



var Web3 = __webpack_require__(/*! web3 */ "./node_modules/web3/index.js");
var Web3Service = /** @class */ (function () {
    function Web3Service() {
        var _this = this;
        this.ready = false;
        this.accountsObservable = new rxjs_Rx__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        window.addEventListener('load', function (event) {
            _this.bootstrapWeb3();
        });
    }
    Web3Service.prototype.bootstrapWeb3 = function () {
        var _this = this;
        // Checking if Web3 has been injected by the browser (Mist/MetaMask)
        if (typeof window.web3 !== 'undefined') {
            // Use Mist/MetaMask's provider
            this.web3 = new Web3(window.web3.currentProvider);
        }
        else {
            console.log('No web3? You should consider trying MetaMask!');
            // Hack to provide backwards compatibility for Truffle, which uses web3js 0.20.x
            Web3.providers.HttpProvider.prototype.sendAsync = Web3.providers.HttpProvider.prototype.send;
            // fallback - use your fallback strategy (local node / hosted node + in-dapp id mgmt / fail)
            this.web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'));
        }
        setInterval(function () { return _this.refreshAccounts(); }, 100);
    };
    Web3Service.prototype.artifactsToContract = function (artifacts) {
        return __awaiter(this, void 0, void 0, function () {
            var delay, contractAbstraction;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!!this.web3) return [3 /*break*/, 3];
                        delay = new Promise(function (resolve) { return setTimeout(resolve, 100); });
                        return [4 /*yield*/, delay];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.artifactsToContract(artifacts)];
                    case 2: return [2 /*return*/, _a.sent()];
                    case 3:
                        contractAbstraction = truffle_contract__WEBPACK_IMPORTED_MODULE_1__(artifacts);
                        contractAbstraction.setProvider(this.web3.currentProvider);
                        return [2 /*return*/, contractAbstraction];
                }
            });
        });
    };
    Web3Service.prototype.refreshAccounts = function () {
        var _this = this;
        this.web3.eth.getAccounts(function (err, accs) {
            console.log('Refreshing accounts');
            if (err != null) {
                console.warn('There was an error fetching your accounts.');
                return;
            }
            // Get the initial account balance so it can be displayed.
            if (accs.length === 0) {
                console.warn('Couldn\'t get any accounts! Make sure your Ethereum client is configured correctly.');
                return;
            }
            if (!_this.accounts || _this.accounts.length !== accs.length || _this.accounts[0] !== accs[0]) {
                console.log('Observed new accounts');
                _this.accountsObservable.next(accs);
                _this.accounts = accs;
            }
            _this.ready = true;
        });
    };
    Web3Service = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], Web3Service);
    return Web3Service;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/ahmad/Desktop/DonateDapp/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map