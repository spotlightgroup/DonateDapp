(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./build/contracts/MetaCoin.json":
/*!***************************************!*\
  !*** ./build/contracts/MetaCoin.json ***!
  \***************************************/
/*! exports provided: contractName, abi, bytecode, deployedBytecode, sourceMap, deployedSourceMap, source, sourcePath, ast, legacyAST, compiler, networks, schemaVersion, updatedAt, default */
/***/ (function(module) {

module.exports = {"contractName":"MetaCoin","abi":[{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_from","type":"address"},{"indexed":true,"name":"_to","type":"address"},{"indexed":false,"name":"_value","type":"uint256"}],"name":"Transfer","type":"event"},{"constant":false,"inputs":[{"name":"receiver","type":"address"},{"name":"amount","type":"uint256"}],"name":"sendCoin","outputs":[{"name":"sufficient","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"addr","type":"address"}],"name":"getBalanceInEth","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"addr","type":"address"}],"name":"getBalance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"}],"bytecode":"0x608060405234801561001057600080fd5b506127106000803273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055506103fc806100656000396000f300608060405260043610610057576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff1680637bd703e81461005c57806390b98a11146100b3578063f8b2cb4f14610118575b600080fd5b34801561006857600080fd5b5061009d600480360381019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919050505061016f565b6040518082815260200191505060405180910390f35b3480156100bf57600080fd5b506100fe600480360381019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291908035906020019092919050505061022f565b604051808215151515815260200191505060405180910390f35b34801561012457600080fd5b50610159600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610388565b6040518082815260200191505060405180910390f35b600073__ConvertLib____________________________6396e4ee3d61019484610388565b60026040518363ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808381526020018281526020019250505060206040518083038186803b1580156101ed57600080fd5b505af4158015610201573d6000803e3d6000fd5b505050506040513d602081101561021757600080fd5b81019080805190602001909291905050509050919050565b6000816000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205410156102805760009050610382565b816000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282540392505081905550816000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825401925050819055508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040518082815260200191505060405180910390a3600190505b92915050565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205490509190505600a165627a7a72305820403a09b2a322d3b09b10cae71640fedb8193c4553c0bee67df2da0668200ae5e0029","deployedBytecode":"0x608060405260043610610057576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff1680637bd703e81461005c57806390b98a11146100b3578063f8b2cb4f14610118575b600080fd5b34801561006857600080fd5b5061009d600480360381019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919050505061016f565b6040518082815260200191505060405180910390f35b3480156100bf57600080fd5b506100fe600480360381019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291908035906020019092919050505061022f565b604051808215151515815260200191505060405180910390f35b34801561012457600080fd5b50610159600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610388565b6040518082815260200191505060405180910390f35b600073__ConvertLib____________________________6396e4ee3d61019484610388565b60026040518363ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808381526020018281526020019250505060206040518083038186803b1580156101ed57600080fd5b505af4158015610201573d6000803e3d6000fd5b505050506040513d602081101561021757600080fd5b81019080805190602001909291905050509050919050565b6000816000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205410156102805760009050610382565b816000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282540392505081905550816000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825401925050819055508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040518082815260200191505060405180910390a3600190505b92915050565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205490509190505600a165627a7a72305820403a09b2a322d3b09b10cae71640fedb8193c4553c0bee67df2da0668200ae5e0029","sourceMap":"316:675:1:-;;;453:62;8:9:-1;5:2;;;30:1;27;20:12;5:2;453:62:1;506:5;484:8;:19;493:9;484:19;;;;;;;;;;;;;;;:27;;;;316:675;;;;;;","deployedSourceMap":"316:675:1:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;780:117;;8:9:-1;5:2;;;30:1;27;20:12;5:2;780:117:1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;518:259;;8:9:-1;5:2;;;30:1;27;20:12;5:2;518:259:1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;900:89;;8:9:-1;5:2;;;30:1;27;20:12;5:2;900:89:1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;780:117;839:4;855:10;:18;874:16;885:4;874:10;:16::i;:::-;891:1;855:38;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;855:38:1;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;855:38:1;;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;855:38:1;;;;;;;;;;;;;;;;848:45;;780:117;;;:::o;518:259::-;582:15;630:6;607:8;:20;616:10;607:20;;;;;;;;;;;;;;;;:29;603:47;;;645:5;638:12;;;;603:47;678:6;654:8;:20;663:10;654:20;;;;;;;;;;;;;;;;:30;;;;;;;;;;;710:6;688:8;:18;697:8;688:18;;;;;;;;;;;;;;;;:28;;;;;;;;;;;741:8;720:38;;729:10;720:38;;;751:6;720:38;;;;;;;;;;;;;;;;;;769:4;762:11;;518:259;;;;;:::o;900:89::-;954:4;971:8;:14;980:4;971:14;;;;;;;;;;;;;;;;964:21;;900:89;;;:::o","source":"pragma solidity ^0.4.16;\n\nimport \"./ConvertLib.sol\";\n\n// This is just a simple example of a coin-like contract.\n// It is not standards compatible and cannot be expected to talk to other\n// coin/token contracts. If you want to create a standards-compliant\n// token, see: https://github.com/ConsenSys/Tokens. Cheers!\n\ncontract MetaCoin {\n\tmapping (address => uint) balances;\n\n\tevent Transfer(address indexed _from, address indexed _to, uint256 _value);\n\n\tfunction MetaCoin() public {\n\t\tbalances[tx.origin] = 10000;\n\t}\n\n\tfunction sendCoin(address receiver, uint amount) public returns(bool sufficient) {\n\t\tif (balances[msg.sender] < amount) return false;\n\t\tbalances[msg.sender] -= amount;\n\t\tbalances[receiver] += amount;\n\t\tTransfer(msg.sender, receiver, amount);\n\t\treturn true;\n\t}\n\n\tfunction getBalanceInEth(address addr) public view returns(uint){\n\t\treturn ConvertLib.convert(getBalance(addr),2);\n\t}\n\n\tfunction getBalance(address addr) public view returns(uint) {\n\t\treturn balances[addr];\n\t}\n}\n","sourcePath":"/home/ahmad/Desktop/DonateDapp/contracts/MetaCoin.sol","ast":{"absolutePath":"/home/ahmad/Desktop/DonateDapp/contracts/MetaCoin.sol","exportedSymbols":{"MetaCoin":[112]},"id":113,"nodeType":"SourceUnit","nodes":[{"id":18,"literals":["solidity","^","0.4",".16"],"nodeType":"PragmaDirective","src":"0:24:1"},{"absolutePath":"/home/ahmad/Desktop/DonateDapp/contracts/ConvertLib.sol","file":"./ConvertLib.sol","id":19,"nodeType":"ImportDirective","scope":113,"sourceUnit":17,"src":"26:26:1","symbolAliases":[],"unitAlias":""},{"baseContracts":[],"contractDependencies":[],"contractKind":"contract","documentation":null,"fullyImplemented":true,"id":112,"linearizedBaseContracts":[112],"name":"MetaCoin","nodeType":"ContractDefinition","nodes":[{"constant":false,"id":23,"name":"balances","nodeType":"VariableDeclaration","scope":112,"src":"337:34:1","stateVariable":true,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_mapping$_t_address_$_t_uint256_$","typeString":"mapping(address => uint256)"},"typeName":{"id":22,"keyType":{"id":20,"name":"address","nodeType":"ElementaryTypeName","src":"346:7:1","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"nodeType":"Mapping","src":"337:25:1","typeDescriptions":{"typeIdentifier":"t_mapping$_t_address_$_t_uint256_$","typeString":"mapping(address => uint256)"},"valueType":{"id":21,"name":"uint","nodeType":"ElementaryTypeName","src":"357:4:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}}},"value":null,"visibility":"internal"},{"anonymous":false,"documentation":null,"id":31,"name":"Transfer","nodeType":"EventDefinition","parameters":{"id":30,"nodeType":"ParameterList","parameters":[{"constant":false,"id":25,"indexed":true,"name":"_from","nodeType":"VariableDeclaration","scope":31,"src":"390:21:1","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"},"typeName":{"id":24,"name":"address","nodeType":"ElementaryTypeName","src":"390:7:1","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"value":null,"visibility":"internal"},{"constant":false,"id":27,"indexed":true,"name":"_to","nodeType":"VariableDeclaration","scope":31,"src":"413:19:1","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"},"typeName":{"id":26,"name":"address","nodeType":"ElementaryTypeName","src":"413:7:1","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"value":null,"visibility":"internal"},{"constant":false,"id":29,"indexed":false,"name":"_value","nodeType":"VariableDeclaration","scope":31,"src":"434:14:1","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":28,"name":"uint256","nodeType":"ElementaryTypeName","src":"434:7:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":null,"visibility":"internal"}],"src":"389:60:1"},"src":"375:75:1"},{"body":{"id":41,"nodeType":"Block","src":"480:35:1","statements":[{"expression":{"argumentTypes":null,"id":39,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftHandSide":{"argumentTypes":null,"baseExpression":{"argumentTypes":null,"id":34,"name":"balances","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":23,"src":"484:8:1","typeDescriptions":{"typeIdentifier":"t_mapping$_t_address_$_t_uint256_$","typeString":"mapping(address => uint256)"}},"id":37,"indexExpression":{"argumentTypes":null,"expression":{"argumentTypes":null,"id":35,"name":"tx","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":196,"src":"493:2:1","typeDescriptions":{"typeIdentifier":"t_magic_transaction","typeString":"tx"}},"id":36,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"origin","nodeType":"MemberAccess","referencedDeclaration":null,"src":"493:9:1","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":true,"nodeType":"IndexAccess","src":"484:19:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"nodeType":"Assignment","operator":"=","rightHandSide":{"argumentTypes":null,"hexValue":"3130303030","id":38,"isConstant":false,"isLValue":false,"isPure":true,"kind":"number","lValueRequested":false,"nodeType":"Literal","src":"506:5:1","subdenomination":null,"typeDescriptions":{"typeIdentifier":"t_rational_10000_by_1","typeString":"int_const 10000"},"value":"10000"},"src":"484:27:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"id":40,"nodeType":"ExpressionStatement","src":"484:27:1"}]},"documentation":null,"id":42,"implemented":true,"isConstructor":true,"isDeclaredConst":false,"modifiers":[],"name":"MetaCoin","nodeType":"FunctionDefinition","parameters":{"id":32,"nodeType":"ParameterList","parameters":[],"src":"470:2:1"},"payable":false,"returnParameters":{"id":33,"nodeType":"ParameterList","parameters":[],"src":"480:0:1"},"scope":112,"src":"453:62:1","stateMutability":"nonpayable","superFunction":null,"visibility":"public"},{"body":{"id":82,"nodeType":"Block","src":"599:178:1","statements":[{"condition":{"argumentTypes":null,"commonType":{"typeIdentifier":"t_uint256","typeString":"uint256"},"id":56,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftExpression":{"argumentTypes":null,"baseExpression":{"argumentTypes":null,"id":51,"name":"balances","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":23,"src":"607:8:1","typeDescriptions":{"typeIdentifier":"t_mapping$_t_address_$_t_uint256_$","typeString":"mapping(address => uint256)"}},"id":54,"indexExpression":{"argumentTypes":null,"expression":{"argumentTypes":null,"id":52,"name":"msg","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":184,"src":"616:3:1","typeDescriptions":{"typeIdentifier":"t_magic_message","typeString":"msg"}},"id":53,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"sender","nodeType":"MemberAccess","referencedDeclaration":null,"src":"616:10:1","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"nodeType":"IndexAccess","src":"607:20:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"nodeType":"BinaryOperation","operator":"<","rightExpression":{"argumentTypes":null,"id":55,"name":"amount","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":46,"src":"630:6:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"src":"607:29:1","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"}},"falseBody":null,"id":59,"nodeType":"IfStatement","src":"603:47:1","trueBody":{"expression":{"argumentTypes":null,"hexValue":"66616c7365","id":57,"isConstant":false,"isLValue":false,"isPure":true,"kind":"bool","lValueRequested":false,"nodeType":"Literal","src":"645:5:1","subdenomination":null,"typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"},"value":"false"},"functionReturnParameters":50,"id":58,"nodeType":"Return","src":"638:12:1"}},{"expression":{"argumentTypes":null,"id":65,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftHandSide":{"argumentTypes":null,"baseExpression":{"argumentTypes":null,"id":60,"name":"balances","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":23,"src":"654:8:1","typeDescriptions":{"typeIdentifier":"t_mapping$_t_address_$_t_uint256_$","typeString":"mapping(address => uint256)"}},"id":63,"indexExpression":{"argumentTypes":null,"expression":{"argumentTypes":null,"id":61,"name":"msg","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":184,"src":"663:3:1","typeDescriptions":{"typeIdentifier":"t_magic_message","typeString":"msg"}},"id":62,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"sender","nodeType":"MemberAccess","referencedDeclaration":null,"src":"663:10:1","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":true,"nodeType":"IndexAccess","src":"654:20:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"nodeType":"Assignment","operator":"-=","rightHandSide":{"argumentTypes":null,"id":64,"name":"amount","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":46,"src":"678:6:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"src":"654:30:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"id":66,"nodeType":"ExpressionStatement","src":"654:30:1"},{"expression":{"argumentTypes":null,"id":71,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftHandSide":{"argumentTypes":null,"baseExpression":{"argumentTypes":null,"id":67,"name":"balances","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":23,"src":"688:8:1","typeDescriptions":{"typeIdentifier":"t_mapping$_t_address_$_t_uint256_$","typeString":"mapping(address => uint256)"}},"id":69,"indexExpression":{"argumentTypes":null,"id":68,"name":"receiver","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":44,"src":"697:8:1","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":true,"nodeType":"IndexAccess","src":"688:18:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"nodeType":"Assignment","operator":"+=","rightHandSide":{"argumentTypes":null,"id":70,"name":"amount","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":46,"src":"710:6:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"src":"688:28:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"id":72,"nodeType":"ExpressionStatement","src":"688:28:1"},{"expression":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"expression":{"argumentTypes":null,"id":74,"name":"msg","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":184,"src":"729:3:1","typeDescriptions":{"typeIdentifier":"t_magic_message","typeString":"msg"}},"id":75,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"sender","nodeType":"MemberAccess","referencedDeclaration":null,"src":"729:10:1","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},{"argumentTypes":null,"id":76,"name":"receiver","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":44,"src":"741:8:1","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},{"argumentTypes":null,"id":77,"name":"amount","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":46,"src":"751:6:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}}],"expression":{"argumentTypes":[{"typeIdentifier":"t_address","typeString":"address"},{"typeIdentifier":"t_address","typeString":"address"},{"typeIdentifier":"t_uint256","typeString":"uint256"}],"id":73,"name":"Transfer","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":31,"src":"720:8:1","typeDescriptions":{"typeIdentifier":"t_function_event_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$__$","typeString":"function (address,address,uint256)"}},"id":78,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"720:38:1","typeDescriptions":{"typeIdentifier":"t_tuple$__$","typeString":"tuple()"}},"id":79,"nodeType":"ExpressionStatement","src":"720:38:1"},{"expression":{"argumentTypes":null,"hexValue":"74727565","id":80,"isConstant":false,"isLValue":false,"isPure":true,"kind":"bool","lValueRequested":false,"nodeType":"Literal","src":"769:4:1","subdenomination":null,"typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"},"value":"true"},"functionReturnParameters":50,"id":81,"nodeType":"Return","src":"762:11:1"}]},"documentation":null,"id":83,"implemented":true,"isConstructor":false,"isDeclaredConst":false,"modifiers":[],"name":"sendCoin","nodeType":"FunctionDefinition","parameters":{"id":47,"nodeType":"ParameterList","parameters":[{"constant":false,"id":44,"name":"receiver","nodeType":"VariableDeclaration","scope":83,"src":"536:16:1","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"},"typeName":{"id":43,"name":"address","nodeType":"ElementaryTypeName","src":"536:7:1","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"value":null,"visibility":"internal"},{"constant":false,"id":46,"name":"amount","nodeType":"VariableDeclaration","scope":83,"src":"554:11:1","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":45,"name":"uint","nodeType":"ElementaryTypeName","src":"554:4:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":null,"visibility":"internal"}],"src":"535:31:1"},"payable":false,"returnParameters":{"id":50,"nodeType":"ParameterList","parameters":[{"constant":false,"id":49,"name":"sufficient","nodeType":"VariableDeclaration","scope":83,"src":"582:15:1","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"},"typeName":{"id":48,"name":"bool","nodeType":"ElementaryTypeName","src":"582:4:1","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"}},"value":null,"visibility":"internal"}],"src":"581:17:1"},"scope":112,"src":"518:259:1","stateMutability":"nonpayable","superFunction":null,"visibility":"public"},{"body":{"id":98,"nodeType":"Block","src":"844:53:1","statements":[{"expression":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"arguments":[{"argumentTypes":null,"id":93,"name":"addr","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":85,"src":"885:4:1","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}}],"expression":{"argumentTypes":[{"typeIdentifier":"t_address","typeString":"address"}],"id":92,"name":"getBalance","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":111,"src":"874:10:1","typeDescriptions":{"typeIdentifier":"t_function_internal_view$_t_address_$returns$_t_uint256_$","typeString":"function (address) view returns (uint256)"}},"id":94,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"874:16:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},{"argumentTypes":null,"hexValue":"32","id":95,"isConstant":false,"isLValue":false,"isPure":true,"kind":"number","lValueRequested":false,"nodeType":"Literal","src":"891:1:1","subdenomination":null,"typeDescriptions":{"typeIdentifier":"t_rational_2_by_1","typeString":"int_const 2"},"value":"2"}],"expression":{"argumentTypes":[{"typeIdentifier":"t_uint256","typeString":"uint256"},{"typeIdentifier":"t_rational_2_by_1","typeString":"int_const 2"}],"expression":{"argumentTypes":null,"id":90,"name":"ConvertLib","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":16,"src":"855:10:1","typeDescriptions":{"typeIdentifier":"t_type$_t_contract$_ConvertLib_$16_$","typeString":"type(library ConvertLib)"}},"id":91,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"convert","nodeType":"MemberAccess","referencedDeclaration":15,"src":"855:18:1","typeDescriptions":{"typeIdentifier":"t_function_delegatecall_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$","typeString":"function (uint256,uint256) pure returns (uint256)"}},"id":96,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"855:38:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"functionReturnParameters":89,"id":97,"nodeType":"Return","src":"848:45:1"}]},"documentation":null,"id":99,"implemented":true,"isConstructor":false,"isDeclaredConst":true,"modifiers":[],"name":"getBalanceInEth","nodeType":"FunctionDefinition","parameters":{"id":86,"nodeType":"ParameterList","parameters":[{"constant":false,"id":85,"name":"addr","nodeType":"VariableDeclaration","scope":99,"src":"805:12:1","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"},"typeName":{"id":84,"name":"address","nodeType":"ElementaryTypeName","src":"805:7:1","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"value":null,"visibility":"internal"}],"src":"804:14:1"},"payable":false,"returnParameters":{"id":89,"nodeType":"ParameterList","parameters":[{"constant":false,"id":88,"name":"","nodeType":"VariableDeclaration","scope":99,"src":"839:4:1","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":87,"name":"uint","nodeType":"ElementaryTypeName","src":"839:4:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":null,"visibility":"internal"}],"src":"838:6:1"},"scope":112,"src":"780:117:1","stateMutability":"view","superFunction":null,"visibility":"public"},{"body":{"id":110,"nodeType":"Block","src":"960:29:1","statements":[{"expression":{"argumentTypes":null,"baseExpression":{"argumentTypes":null,"id":106,"name":"balances","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":23,"src":"971:8:1","typeDescriptions":{"typeIdentifier":"t_mapping$_t_address_$_t_uint256_$","typeString":"mapping(address => uint256)"}},"id":108,"indexExpression":{"argumentTypes":null,"id":107,"name":"addr","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":101,"src":"980:4:1","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"nodeType":"IndexAccess","src":"971:14:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"functionReturnParameters":105,"id":109,"nodeType":"Return","src":"964:21:1"}]},"documentation":null,"id":111,"implemented":true,"isConstructor":false,"isDeclaredConst":true,"modifiers":[],"name":"getBalance","nodeType":"FunctionDefinition","parameters":{"id":102,"nodeType":"ParameterList","parameters":[{"constant":false,"id":101,"name":"addr","nodeType":"VariableDeclaration","scope":111,"src":"920:12:1","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"},"typeName":{"id":100,"name":"address","nodeType":"ElementaryTypeName","src":"920:7:1","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"value":null,"visibility":"internal"}],"src":"919:14:1"},"payable":false,"returnParameters":{"id":105,"nodeType":"ParameterList","parameters":[{"constant":false,"id":104,"name":"","nodeType":"VariableDeclaration","scope":111,"src":"954:4:1","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":103,"name":"uint","nodeType":"ElementaryTypeName","src":"954:4:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":null,"visibility":"internal"}],"src":"953:6:1"},"scope":112,"src":"900:89:1","stateMutability":"view","superFunction":null,"visibility":"public"}],"scope":113,"src":"316:675:1"}],"src":"0:992:1"},"legacyAST":{"absolutePath":"/home/ahmad/Desktop/DonateDapp/contracts/MetaCoin.sol","exportedSymbols":{"MetaCoin":[112]},"id":113,"nodeType":"SourceUnit","nodes":[{"id":18,"literals":["solidity","^","0.4",".16"],"nodeType":"PragmaDirective","src":"0:24:1"},{"absolutePath":"/home/ahmad/Desktop/DonateDapp/contracts/ConvertLib.sol","file":"./ConvertLib.sol","id":19,"nodeType":"ImportDirective","scope":113,"sourceUnit":17,"src":"26:26:1","symbolAliases":[],"unitAlias":""},{"baseContracts":[],"contractDependencies":[],"contractKind":"contract","documentation":null,"fullyImplemented":true,"id":112,"linearizedBaseContracts":[112],"name":"MetaCoin","nodeType":"ContractDefinition","nodes":[{"constant":false,"id":23,"name":"balances","nodeType":"VariableDeclaration","scope":112,"src":"337:34:1","stateVariable":true,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_mapping$_t_address_$_t_uint256_$","typeString":"mapping(address => uint256)"},"typeName":{"id":22,"keyType":{"id":20,"name":"address","nodeType":"ElementaryTypeName","src":"346:7:1","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"nodeType":"Mapping","src":"337:25:1","typeDescriptions":{"typeIdentifier":"t_mapping$_t_address_$_t_uint256_$","typeString":"mapping(address => uint256)"},"valueType":{"id":21,"name":"uint","nodeType":"ElementaryTypeName","src":"357:4:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}}},"value":null,"visibility":"internal"},{"anonymous":false,"documentation":null,"id":31,"name":"Transfer","nodeType":"EventDefinition","parameters":{"id":30,"nodeType":"ParameterList","parameters":[{"constant":false,"id":25,"indexed":true,"name":"_from","nodeType":"VariableDeclaration","scope":31,"src":"390:21:1","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"},"typeName":{"id":24,"name":"address","nodeType":"ElementaryTypeName","src":"390:7:1","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"value":null,"visibility":"internal"},{"constant":false,"id":27,"indexed":true,"name":"_to","nodeType":"VariableDeclaration","scope":31,"src":"413:19:1","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"},"typeName":{"id":26,"name":"address","nodeType":"ElementaryTypeName","src":"413:7:1","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"value":null,"visibility":"internal"},{"constant":false,"id":29,"indexed":false,"name":"_value","nodeType":"VariableDeclaration","scope":31,"src":"434:14:1","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":28,"name":"uint256","nodeType":"ElementaryTypeName","src":"434:7:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":null,"visibility":"internal"}],"src":"389:60:1"},"src":"375:75:1"},{"body":{"id":41,"nodeType":"Block","src":"480:35:1","statements":[{"expression":{"argumentTypes":null,"id":39,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftHandSide":{"argumentTypes":null,"baseExpression":{"argumentTypes":null,"id":34,"name":"balances","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":23,"src":"484:8:1","typeDescriptions":{"typeIdentifier":"t_mapping$_t_address_$_t_uint256_$","typeString":"mapping(address => uint256)"}},"id":37,"indexExpression":{"argumentTypes":null,"expression":{"argumentTypes":null,"id":35,"name":"tx","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":196,"src":"493:2:1","typeDescriptions":{"typeIdentifier":"t_magic_transaction","typeString":"tx"}},"id":36,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"origin","nodeType":"MemberAccess","referencedDeclaration":null,"src":"493:9:1","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":true,"nodeType":"IndexAccess","src":"484:19:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"nodeType":"Assignment","operator":"=","rightHandSide":{"argumentTypes":null,"hexValue":"3130303030","id":38,"isConstant":false,"isLValue":false,"isPure":true,"kind":"number","lValueRequested":false,"nodeType":"Literal","src":"506:5:1","subdenomination":null,"typeDescriptions":{"typeIdentifier":"t_rational_10000_by_1","typeString":"int_const 10000"},"value":"10000"},"src":"484:27:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"id":40,"nodeType":"ExpressionStatement","src":"484:27:1"}]},"documentation":null,"id":42,"implemented":true,"isConstructor":true,"isDeclaredConst":false,"modifiers":[],"name":"MetaCoin","nodeType":"FunctionDefinition","parameters":{"id":32,"nodeType":"ParameterList","parameters":[],"src":"470:2:1"},"payable":false,"returnParameters":{"id":33,"nodeType":"ParameterList","parameters":[],"src":"480:0:1"},"scope":112,"src":"453:62:1","stateMutability":"nonpayable","superFunction":null,"visibility":"public"},{"body":{"id":82,"nodeType":"Block","src":"599:178:1","statements":[{"condition":{"argumentTypes":null,"commonType":{"typeIdentifier":"t_uint256","typeString":"uint256"},"id":56,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftExpression":{"argumentTypes":null,"baseExpression":{"argumentTypes":null,"id":51,"name":"balances","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":23,"src":"607:8:1","typeDescriptions":{"typeIdentifier":"t_mapping$_t_address_$_t_uint256_$","typeString":"mapping(address => uint256)"}},"id":54,"indexExpression":{"argumentTypes":null,"expression":{"argumentTypes":null,"id":52,"name":"msg","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":184,"src":"616:3:1","typeDescriptions":{"typeIdentifier":"t_magic_message","typeString":"msg"}},"id":53,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"sender","nodeType":"MemberAccess","referencedDeclaration":null,"src":"616:10:1","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"nodeType":"IndexAccess","src":"607:20:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"nodeType":"BinaryOperation","operator":"<","rightExpression":{"argumentTypes":null,"id":55,"name":"amount","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":46,"src":"630:6:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"src":"607:29:1","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"}},"falseBody":null,"id":59,"nodeType":"IfStatement","src":"603:47:1","trueBody":{"expression":{"argumentTypes":null,"hexValue":"66616c7365","id":57,"isConstant":false,"isLValue":false,"isPure":true,"kind":"bool","lValueRequested":false,"nodeType":"Literal","src":"645:5:1","subdenomination":null,"typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"},"value":"false"},"functionReturnParameters":50,"id":58,"nodeType":"Return","src":"638:12:1"}},{"expression":{"argumentTypes":null,"id":65,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftHandSide":{"argumentTypes":null,"baseExpression":{"argumentTypes":null,"id":60,"name":"balances","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":23,"src":"654:8:1","typeDescriptions":{"typeIdentifier":"t_mapping$_t_address_$_t_uint256_$","typeString":"mapping(address => uint256)"}},"id":63,"indexExpression":{"argumentTypes":null,"expression":{"argumentTypes":null,"id":61,"name":"msg","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":184,"src":"663:3:1","typeDescriptions":{"typeIdentifier":"t_magic_message","typeString":"msg"}},"id":62,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"sender","nodeType":"MemberAccess","referencedDeclaration":null,"src":"663:10:1","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":true,"nodeType":"IndexAccess","src":"654:20:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"nodeType":"Assignment","operator":"-=","rightHandSide":{"argumentTypes":null,"id":64,"name":"amount","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":46,"src":"678:6:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"src":"654:30:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"id":66,"nodeType":"ExpressionStatement","src":"654:30:1"},{"expression":{"argumentTypes":null,"id":71,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftHandSide":{"argumentTypes":null,"baseExpression":{"argumentTypes":null,"id":67,"name":"balances","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":23,"src":"688:8:1","typeDescriptions":{"typeIdentifier":"t_mapping$_t_address_$_t_uint256_$","typeString":"mapping(address => uint256)"}},"id":69,"indexExpression":{"argumentTypes":null,"id":68,"name":"receiver","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":44,"src":"697:8:1","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":true,"nodeType":"IndexAccess","src":"688:18:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"nodeType":"Assignment","operator":"+=","rightHandSide":{"argumentTypes":null,"id":70,"name":"amount","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":46,"src":"710:6:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"src":"688:28:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"id":72,"nodeType":"ExpressionStatement","src":"688:28:1"},{"expression":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"expression":{"argumentTypes":null,"id":74,"name":"msg","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":184,"src":"729:3:1","typeDescriptions":{"typeIdentifier":"t_magic_message","typeString":"msg"}},"id":75,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"sender","nodeType":"MemberAccess","referencedDeclaration":null,"src":"729:10:1","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},{"argumentTypes":null,"id":76,"name":"receiver","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":44,"src":"741:8:1","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},{"argumentTypes":null,"id":77,"name":"amount","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":46,"src":"751:6:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}}],"expression":{"argumentTypes":[{"typeIdentifier":"t_address","typeString":"address"},{"typeIdentifier":"t_address","typeString":"address"},{"typeIdentifier":"t_uint256","typeString":"uint256"}],"id":73,"name":"Transfer","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":31,"src":"720:8:1","typeDescriptions":{"typeIdentifier":"t_function_event_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$__$","typeString":"function (address,address,uint256)"}},"id":78,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"720:38:1","typeDescriptions":{"typeIdentifier":"t_tuple$__$","typeString":"tuple()"}},"id":79,"nodeType":"ExpressionStatement","src":"720:38:1"},{"expression":{"argumentTypes":null,"hexValue":"74727565","id":80,"isConstant":false,"isLValue":false,"isPure":true,"kind":"bool","lValueRequested":false,"nodeType":"Literal","src":"769:4:1","subdenomination":null,"typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"},"value":"true"},"functionReturnParameters":50,"id":81,"nodeType":"Return","src":"762:11:1"}]},"documentation":null,"id":83,"implemented":true,"isConstructor":false,"isDeclaredConst":false,"modifiers":[],"name":"sendCoin","nodeType":"FunctionDefinition","parameters":{"id":47,"nodeType":"ParameterList","parameters":[{"constant":false,"id":44,"name":"receiver","nodeType":"VariableDeclaration","scope":83,"src":"536:16:1","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"},"typeName":{"id":43,"name":"address","nodeType":"ElementaryTypeName","src":"536:7:1","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"value":null,"visibility":"internal"},{"constant":false,"id":46,"name":"amount","nodeType":"VariableDeclaration","scope":83,"src":"554:11:1","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":45,"name":"uint","nodeType":"ElementaryTypeName","src":"554:4:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":null,"visibility":"internal"}],"src":"535:31:1"},"payable":false,"returnParameters":{"id":50,"nodeType":"ParameterList","parameters":[{"constant":false,"id":49,"name":"sufficient","nodeType":"VariableDeclaration","scope":83,"src":"582:15:1","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"},"typeName":{"id":48,"name":"bool","nodeType":"ElementaryTypeName","src":"582:4:1","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"}},"value":null,"visibility":"internal"}],"src":"581:17:1"},"scope":112,"src":"518:259:1","stateMutability":"nonpayable","superFunction":null,"visibility":"public"},{"body":{"id":98,"nodeType":"Block","src":"844:53:1","statements":[{"expression":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"arguments":[{"argumentTypes":null,"id":93,"name":"addr","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":85,"src":"885:4:1","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}}],"expression":{"argumentTypes":[{"typeIdentifier":"t_address","typeString":"address"}],"id":92,"name":"getBalance","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":111,"src":"874:10:1","typeDescriptions":{"typeIdentifier":"t_function_internal_view$_t_address_$returns$_t_uint256_$","typeString":"function (address) view returns (uint256)"}},"id":94,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"874:16:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},{"argumentTypes":null,"hexValue":"32","id":95,"isConstant":false,"isLValue":false,"isPure":true,"kind":"number","lValueRequested":false,"nodeType":"Literal","src":"891:1:1","subdenomination":null,"typeDescriptions":{"typeIdentifier":"t_rational_2_by_1","typeString":"int_const 2"},"value":"2"}],"expression":{"argumentTypes":[{"typeIdentifier":"t_uint256","typeString":"uint256"},{"typeIdentifier":"t_rational_2_by_1","typeString":"int_const 2"}],"expression":{"argumentTypes":null,"id":90,"name":"ConvertLib","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":16,"src":"855:10:1","typeDescriptions":{"typeIdentifier":"t_type$_t_contract$_ConvertLib_$16_$","typeString":"type(library ConvertLib)"}},"id":91,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"convert","nodeType":"MemberAccess","referencedDeclaration":15,"src":"855:18:1","typeDescriptions":{"typeIdentifier":"t_function_delegatecall_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$","typeString":"function (uint256,uint256) pure returns (uint256)"}},"id":96,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"855:38:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"functionReturnParameters":89,"id":97,"nodeType":"Return","src":"848:45:1"}]},"documentation":null,"id":99,"implemented":true,"isConstructor":false,"isDeclaredConst":true,"modifiers":[],"name":"getBalanceInEth","nodeType":"FunctionDefinition","parameters":{"id":86,"nodeType":"ParameterList","parameters":[{"constant":false,"id":85,"name":"addr","nodeType":"VariableDeclaration","scope":99,"src":"805:12:1","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"},"typeName":{"id":84,"name":"address","nodeType":"ElementaryTypeName","src":"805:7:1","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"value":null,"visibility":"internal"}],"src":"804:14:1"},"payable":false,"returnParameters":{"id":89,"nodeType":"ParameterList","parameters":[{"constant":false,"id":88,"name":"","nodeType":"VariableDeclaration","scope":99,"src":"839:4:1","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":87,"name":"uint","nodeType":"ElementaryTypeName","src":"839:4:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":null,"visibility":"internal"}],"src":"838:6:1"},"scope":112,"src":"780:117:1","stateMutability":"view","superFunction":null,"visibility":"public"},{"body":{"id":110,"nodeType":"Block","src":"960:29:1","statements":[{"expression":{"argumentTypes":null,"baseExpression":{"argumentTypes":null,"id":106,"name":"balances","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":23,"src":"971:8:1","typeDescriptions":{"typeIdentifier":"t_mapping$_t_address_$_t_uint256_$","typeString":"mapping(address => uint256)"}},"id":108,"indexExpression":{"argumentTypes":null,"id":107,"name":"addr","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":101,"src":"980:4:1","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"nodeType":"IndexAccess","src":"971:14:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"functionReturnParameters":105,"id":109,"nodeType":"Return","src":"964:21:1"}]},"documentation":null,"id":111,"implemented":true,"isConstructor":false,"isDeclaredConst":true,"modifiers":[],"name":"getBalance","nodeType":"FunctionDefinition","parameters":{"id":102,"nodeType":"ParameterList","parameters":[{"constant":false,"id":101,"name":"addr","nodeType":"VariableDeclaration","scope":111,"src":"920:12:1","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"},"typeName":{"id":100,"name":"address","nodeType":"ElementaryTypeName","src":"920:7:1","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"value":null,"visibility":"internal"}],"src":"919:14:1"},"payable":false,"returnParameters":{"id":105,"nodeType":"ParameterList","parameters":[{"constant":false,"id":104,"name":"","nodeType":"VariableDeclaration","scope":111,"src":"954:4:1","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":103,"name":"uint","nodeType":"ElementaryTypeName","src":"954:4:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":null,"visibility":"internal"}],"src":"953:6:1"},"scope":112,"src":"900:89:1","stateMutability":"view","superFunction":null,"visibility":"public"}],"scope":113,"src":"316:675:1"}],"src":"0:992:1"},"compiler":{"name":"solc","version":"0.4.23+commit.124ca40d.Emscripten.clang"},"networks":{"5777":{"events":{},"links":{"ConvertLib":"0x1cf771ba486f977b6cdf10f61f1ccf488d9d56ad"},"address":"0xdc1c535247ad56232f39decbbac504e16e002ab9","transactionHash":"0x85a06bd89c8ace4a418eea777b48869922ddd5033a5accd8a6bf2a3979d1d0a7"}},"schemaVersion":"2.0.0","updatedAt":"2018-05-17T23:19:04.874Z"};

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

module.exports = "\n\n <nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\n\n    <a class=\"nav-link disabled\" [routerLink]=\"['/home']\">DonateDapp</a>\n\n  <a class=\"navbar-brand\" href=\"#\">About</a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n    <ul class=\"navbar-nav mr-auto\">\n      <li class=\"nav-item\">\n        <a  [routerLink]=\"['/profile']\" class=\"nav-link\" href=\"#\">Profile</a>\n      </li>\n      <li class=\"nav-item\">\n        <a  [routerLink]=\"['/signup']\" class=\"nav-link\" href=\"#\">SignUp</a>\n      </li>\n      <li class=\"nav-item\">\n        <a [routerLink]=\"['/login'] \" class=\"nav-link\" href=\"#\">Login</a>\n      </li>\n      <li class=\"nav-item\" *ngIf=\"User !== '' \">\n        <a (click)=\"logout()\" class=\"nav-link\" >log out</a>\n      </li>\n    </ul>\n    <form class=\"form-inline my-2 my-lg-0\">\n      <input class=\"form-control mr-sm-2\" type=\"search\" placeholder=\"Search\" aria-label=\"Search\">\n      <button class=\"btn btn-outline-success my-2 my-sm-0\" type=\"submit\">Search</button>\n    </form>\n  </div>\n</nav>\n<div class=\"alert alert-warning alert-dismissible\" role=\"alert\" *ngIf=\"message !== ''\">\n    <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\n    {{message}}\n  </div>\n\n\n\n<router-outlet></router-outlet>\n"

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
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(http) {
        this.http = http;
        this.User = "";
        this.message = "";
    }
    ;
    AppComponent.prototype.logout = function () {
        var _this = this;
        this.http.post('/api/logout', {}).subscribe(function (res) { }, function (err) {
            _this.message = err.error.msg;
        });
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
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
/* harmony import */ var _meta_meta_sender_meta_sender_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./meta/meta-sender/meta-sender.component */ "./src/app/meta/meta-sender/meta-sender.component.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _meta_meta_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./meta/meta.module */ "./src/app/meta/meta.module.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var appRoutes = [
    { path: 'home',
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"]
    },
    { path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: _login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"],
        data: { title: 'Login' }
    },
    {
        path: 'donate',
        component: _meta_meta_sender_meta_sender_component__WEBPACK_IMPORTED_MODULE_2__["MetaSenderComponent"],
        data: { title: 'DONATE' }
    },
    {
        path: 'signup',
        component: _register_register_component__WEBPACK_IMPORTED_MODULE_6__["RegisterComponent"],
        data: { title: 'signup' }
    },
    {
        path: 'profile',
        component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_15__["ProfileComponent"],
        data: { title: 'profile' }
    }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"],
                _register_register_component__WEBPACK_IMPORTED_MODULE_6__["RegisterComponent"],
                _profile_profile_component__WEBPACK_IMPORTED_MODULE_15__["ProfileComponent"],
            ],
            imports: [
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__["BrowserAnimationsModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_11__["CommonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatToolbarModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_9__["HttpModule"],
                _meta_meta_module__WEBPACK_IMPORTED_MODULE_10__["MetaModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_14__["RouterModule"].forRoot(appRoutes, { enableTracing: true })
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
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

module.exports = "\n<div class=\"inputPost container-fluid\">\n    <h3>What Is Your Project ?</h3>\n    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"model.header\" >\n    <h3>Descrip Your Project</h3>\n    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"model.description\" >\n    <h3>What Is Your Project ?</h3>\n    <input type=\"number\" class=\"form-control\" [(ngModel)]=\"model.needed\" min=\"0\" >\n    <input type=\"button\" name=\"send\" value=\"send\" (click)=\"sendPost()\" class=\"btn btn-outline-success my-2 my-sm-0\">\n    <div class=\"alert alert-warning alert-dismissible\" role=\"alert\" *ngIf=\"message !== ''\">\n      <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\n      {{message}}\n    </div>\n</div>\n\n<div class=\"card container\" *ngFor=\"let post of Posts\" >\n  <h2>{{post.header}}</h2>\n  <p>{{post.description}}</p>\n  <p>{{post.needed}}</p>\n  <div class=\"form-group\">\n    <button [routerLink]=\"['/donate']\" type=\"submit\" class=\"btn btn-success\">Donate</button>\n\n  </div>\n</div>\n"

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
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
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
    function HomeComponent(http) {
        this.http = http;
        this.model = {
            header: "",
            needed: 0,
            description: "",
            publicKey: 'fasdfasss'
        };
        this.message = '';
        this.sender = false;
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.getPosts();
    };
    HomeComponent.prototype.sendPost = function () {
        var _this = this;
        var that = this;
        this.http.post('/addPost', this.model).subscribe(function (res) {
        }, function (err) {
            _this.message = "error";
            return;
        });
        that.message = "done";
        console.log('this', that.message);
        that.model = {
            header: "",
            needed: 0,
            description: "",
            publicKey: 'fasdfasss'
        };
        this.getPosts();
    };
    HomeComponent.prototype.getPosts = function () {
        var _this = this;
        this.http.get("/getPosts").subscribe(function (res) {
            _this.Posts = res;
        }, function (err) {
            _this.message = "error";
            return;
        });
    };
    HomeComponent.prototype.toggleSender = function () {
        this.sender = !this.sender;
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
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

module.exports = "\n<div class=\"container\">\n\n<div >\n      <ul>\n        <li *ngFor=\"let account of accounts\" (click)=\"refreshBalance()\" [value]=\"account\">Your Address is : {{account}}</li>\n      </ul>\n    <p>You have <span id=\"balance\">{{model.balance}}</span> RbCoin</p>\n</div>\n\n<div>\n  <h1>Send RbCoin</h1>\n      <input type=\"text\" matInput id=\"amount\" placeholder=\"Amount\" (change)=\"setAmount($event)\">\n      <input type=\"text\" matInput id=\"receiver\" placeholder=\"Receiver Address\" (change)=\"setReceiver($event)\">\n    <button mat-button id=\"send\" (click)=\"sendCoin()\">Send RBCOIN</button>\n</div>\n</div>\n"

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
    }
    MetaSenderComponent.prototype.ngOnInit = function () {
        var _this = this;
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
            console.log(_this.model.account);
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
            selector: 'app-meta',
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

/***/ "./src/app/profile/profile.component.css":
/*!***********************************************!*\
  !*** ./src/app/profile/profile.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/profile/profile.component.html":
/*!************************************************!*\
  !*** ./src/app/profile/profile.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<link href=\"//maxcdn.bootstrapcdn.com/bootstrap/3.3.0/css/bootstrap.min.css\" rel=\"stylesheet\" id=\"bootstrap-css\">\n<script src=\"//maxcdn.bootstrapcdn.com/bootstrap/3.3.0/js/bootstrap.min.js\"></script>\n<script src=\"//code.jquery.com/jquery-1.11.1.min.js\"></script>\n<!------ Include the above in your HEAD tag ---------->\n\n\n<!DOCTYPE html>\n<html lang=\"en\">\n\n<head>\n\n    <meta charset=\"utf-8\">\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n    <meta name=\"description\" content=\"\">\n    <meta name=\"author\" content=\"\">\n\n    <title>User profile form requirement</title>\n<link href=\"https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css\" rel=\"stylesheet\" integrity=\"sha256-3dkvEK0WLHRJ7/Csr0BZjAWxERc5WH7bdeUya2aXxdU= sha512-+L4yy6FRcDGbXJ9mPG8MT/3UCDzwR9gPeyFNMCtInsol++5m3bk2bXWKdZjvybmohrAsn3Ua5x8gfLnbE1YkOg==\" crossorigin=\"anonymous\">\n    <!-- Bootstrap Core CSS -->\n<!--     <link href=\"css/bootstrap.min.css\" rel=\"stylesheet\"> -->\n<link href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css\" rel=\"stylesheet\" integrity=\"sha256-7s5uDGW3AHqw6xtJmNNtr+OBRJUlgkNJEo78P4b0yRw= sha512-nNo+yCHEyn0smMxSswnf/OnX6/KwJuZTlNZBjauKhTK0c+zT+q5JOCx0UFhXQ6rJR9jg6Es8gPuD2uZcYDLqSw==\" crossorigin=\"anonymous\">\n\n    <!-- Custom CSS -->\n    <style>\n    body {\n        padding-top: 70px;\n        /* Required padding for .navbar-fixed-top. Remove if using .navbar-static-top. Change if height of navigation changes. */\n    }\n\n    .othertop{margin-top:10px;}\n    </style>\n\n    <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->\n    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->\n    <!--[if lt IE 9]>\n        <script src=\"https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js\"></script>\n        <script src=\"https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js\"></script>\n    <![endif]-->\n\n</head>\n\n<body>\n\n   <div class=\"container\">\n<div class=\"row\">\n<div class=\"col-md-10 \">\n<form class=\"form-horizontal\">\n<fieldset>\n\n<!-- Form Name -->\n<legend>User profile form requirement</legend>\n\n<!-- Text input-->\n\n\n\n\n<div class=\"form-group\">\n  <label class=\"col-md-4 control-label\" for=\"Name (Full name)\">Name (Full name)</label>\n  <div class=\"col-md-4\">\n <div class=\"input-group\">\n       <div class=\"input-group-addon\">\n        <i class=\"fa fa-user\">\n        </i>\n       </div>\n       <input id=\"Name (Full name)\" name=\"Name (Full name)\" type=\"text\" placeholder={{username}} class=\"form-control input-md\">\n      </div>\n\n\n  </div>\n\n\n</div>\n\n<!-- File Button -->\n<div class=\"form-group\">\n  <label class=\"col-md-4 control-label\" for=\"Upload photo\">Upload photo</label>\n  <div class=\"col-md-4\">\n    <input id=\"Upload photo\" name=\"Upload photo\" class=\"input-file\" type=\"file\">\n  </div>\n</div>\n\n<!-- Text input-->\n<div class=\"form-group\">\n  <label class=\"col-md-4 control-label\" for=\"Date Of Birth\">Date Of Birth</label>\n  <div class=\"col-md-4\">\n\n  <div class=\"input-group\">\n       <div class=\"input-group-addon\">\n     <i class=\"fa fa-birthday-cake\"></i>\n\n       </div>\n       <input id=\"Date Of Birth\" name=\"Date Of Birth\" type=\"text\" placeholder=\"Date Of Birth\" class=\"form-control input-md\">\n      </div>\n\n\n  </div>\n</div>\n\n\n<!-- Text input-->\n<div class=\"form-group\">\n  <label class=\"col-md-4 control-label\" for=\"Father\">Father's name</label>\n  <div class=\"col-md-4\">\n  <div class=\"input-group\">\n       <div class=\"input-group-addon\">\n      <i class=\"fa fa-male\" style=\"font-size: 20px;\"></i>\n\n       </div>\n      <input id=\"Father\" name=\"Father\" type=\"text\" placeholder=\"Father's name\" class=\"form-control input-md\">\n\n      </div>\n\n  </div>\n</div>\n\n<!-- Text input-->\n<div class=\"form-group\">\n  <label class=\"col-md-4 control-label\" for=\"Mother\">Mother's Name</label>\n  <div class=\"col-md-4\">\n  <div class=\"input-group\">\n       <div class=\"input-group-addon\">\n      <i class=\"fa fa-female\" style=\"font-size: 20px;\"></i>\n\n       </div>\n  <input id=\"Mother\" name=\"Mother\" type=\"text\" placeholder=\"Mother's Name\" class=\"form-control input-md\">\n\n      </div>\n\n  </div>\n</div>\n\n<!-- Multiple Radios (inline) -->\n<div class=\"form-group\">\n  <label class=\"col-md-4 control-label\" for=\"Gender\">Gender</label>\n  <div class=\"col-md-4\">\n    <label class=\"radio-inline\" for=\"Gender-0\">\n      <input type=\"radio\" name=\"Gender\" id=\"Gender-0\" value=\"1\" checked=\"checked\">\n      Male\n    </label>\n    <label class=\"radio-inline\" for=\"Gender-1\">\n      <input type=\"radio\" name=\"Gender\" id=\"Gender-1\" value=\"2\">\n      Female\n    </label>\n    <label class=\"radio-inline\" for=\"Gender-2\">\n      <input type=\"radio\" name=\"Gender\" id=\"Gender-2\" value=\"3\">\n      Other\n    </label>\n  </div>\n</div>\n\n<!-- Multiple Radios (inline) -->\n<div class=\"form-group\">\n  <label class=\"col-md-4 control-label\" for=\"radios\">Marital Status:</label>\n  <div class=\"col-md-4\">\n    <label class=\"radio-inline\" for=\"radios-0\">\n      <input type=\"radio\" name=\"radios\" id=\"radios-0\" value=\"1\" checked=\"checked\">\n      Married\n    </label>\n    <label class=\"radio-inline\" for=\"radios-1\">\n      <input type=\"radio\" name=\"radios\" id=\"radios-1\" value=\"2\">\n      Unmarried\n    </label>\n  </div>\n</div>\n\n<!-- Text input-->\n<!-- <div class=\"form-group\">\n  <label class=\"col-md-4 control-label\" for=\"Temporary Address\">Temporary Address</label>\n  <div class=\"col-md-4\">\n\n  <div class=\"input-group\">\n       <div class=\"input-group-addon\">\n     <i class=\"fa fa-home\" style=\"font-size:20px;\"></i>\n\n       </div>\n <input id=\"Temporary Address\" name=\"Temporary Address\" type=\"text\" placeholder=\"Temporary Address\" class=\"form-control input-md\">\n      </div>\n\n\n  </div>\n</div>\n -->\n\n\n<div class=\"form-group\">\n  <label class=\"col-md-4 control-label col-xs-12\" for=\"Permanent Address\">Permanent Address</label>\n  <div class=\"col-md-2  col-xs-4\">\n  <input id=\"Permanent Address\" name=\"Permanent Address\" type=\"text\" placeholder=\"District\" class=\"form-control input-md \">\n  </div>\n\n  <div class=\"col-md-2 col-xs-4\">\n\n  <input id=\"Permanent Address\" name=\"Permanent Address\" type=\"text\" placeholder=\"Area\" class=\"form-control input-md \">\n  </div>\n\n\n</div>\n\n<div class=\"form-group\">\n  <label class=\"col-md-4 control-label\" for=\"Permanent Address\"></label>\n  <div class=\"col-md-2  col-xs-4\">\n  <input id=\"Permanent Address\" name=\"Permanent Address\" type=\"text\" placeholder=\"Street\" class=\"form-control input-md \">\n\n  </div>\n\n\n\n\n</div>\n\n\n\n\n<div class=\"form-group\">\n  <label class=\"col-md-4 control-label col-xs-12\" for=\"Temporary Address\">Temporary Address</label>\n  <div class=\"col-md-2  col-xs-4\">\n  <input id=\"Temporary Address\" name=\"Temporary Address\" type=\"text\" placeholder=\"District\" class=\"form-control input-md \">\n  </div>\n\n  <div class=\"col-md-2 col-xs-4\">\n\n  <input id=\"Temporary Address\" name=\"Temporary Address\" type=\"text\" placeholder=\"Area\" class=\"form-control input-md \">\n  </div>\n\n\n</div>\n\n<div class=\"form-group\">\n  <label class=\"col-md-4 control-label\" for=\"Temporary Address\"></label>\n  <div class=\"col-md-2  col-xs-4\">\n  <input id=\"Temporary Address\" name=\"Temporary Address\" type=\"text\" placeholder=\"Street\" class=\"form-control input-md \">\n\n  </div>\n\n\n\n\n</div>\n\n\n\n\n<!-- Text input-->\n<div class=\"form-group\">\n  <label class=\"col-md-4 control-label\" for=\"Primary Occupation\">Primary Occupation</label>\n  <div class=\"col-md-4\">\n  <div class=\"input-group\">\n       <div class=\"input-group-addon\">\n     <i class=\"fa fa-briefcase\"></i>\n\n       </div>\n      <input id=\"Primary Occupation\" name=\"Primary Occupation\" type=\"text\" placeholder=\"Primary Occupation\" class=\"form-control input-md\">\n      </div>\n\n\n  </div>\n</div>\n\n<!-- Text input-->\n<div class=\"form-group\">\n  <label class=\"col-md-4 control-label\" for=\"Secondary Occupation (if any)\">Secondary Occupation (if any)</label>\n  <div class=\"col-md-4\">\n  <div class=\"input-group\">\n       <div class=\"input-group-addon\">\n      <i class=\"fa fa-briefcase\"></i>\n\n       </div>\n     <input id=\"Secondary Occupation (if any)\" name=\"Secondary Occupation (if any)\" type=\"text\" placeholder=\"Secondary Occupation (if any)\" class=\"form-control input-md\">\n      </div>\n\n\n  </div>\n</div>\n\n<!-- Text input-->\n<div class=\"form-group\">\n  <label class=\"col-md-4 control-label\" for=\"Skills\">Skills</label>\n  <div class=\"col-md-4\">\n  <div class=\"input-group\">\n       <div class=\"input-group-addon\">\n     <i class=\"fa fa-graduation-cap\"></i>\n\n       </div>\n     <input id=\"Skills\" name=\"Skills\" type=\"text\" placeholder=\"Skills\" class=\"form-control input-md\">\n      </div>\n\n\n  </div>\n</div>\n\n<!-- Text input-->\n<div class=\"form-group\">\n  <label class=\"col-md-4 control-label\" for=\"Phone number \">Phone number </label>\n  <div class=\"col-md-4\">\n  <div class=\"input-group\">\n       <div class=\"input-group-addon\">\n     <i class=\"fa fa-phone\"></i>\n\n       </div>\n    <input id=\"Phone number \" name=\"Phone number \" type=\"text\" placeholder=\"Primary Phone number \" class=\"form-control input-md\">\n\n      </div>\n      <div class=\"input-group othertop\">\n       <div class=\"input-group-addon\">\n     <i class=\"fa fa-mobile fa-1x\" style=\"font-size: 20px;\"></i>\n\n       </div>\n    <input id=\"Phone number \" name=\"Secondary Phone number \" type=\"text\" placeholder=\" Secondary Phone number \" class=\"form-control input-md\">\n\n      </div>\n\n  </div>\n</div>\n\n<!-- Text input-->\n<div class=\"form-group\">\n  <label class=\"col-md-4 control-label\" for=\"Email Address\">Email Address</label>\n  <div class=\"col-md-4\">\n  <div class=\"input-group\">\n       <div class=\"input-group-addon\">\n     <i class=\"fa fa-envelope-o\"></i>\n\n       </div>\n    <input id=\"Email Address\" name=\"Email Address\" type=\"text\" placeholder=\"Email Address\" class=\"form-control input-md\">\n\n      </div>\n\n  </div>\n</div>\n\n<!-- Text input-->\n<div class=\"form-group\">\n  <label class=\"col-md-4 control-label\" for=\"Availability time\">Availability time</label>\n  <div class=\"col-md-4\">\n  <div class=\"input-group\">\n       <div class=\"input-group-addon\">\n     <i class=\"fa fa-clock-o\"></i>\n\n       </div>\n    <input id=\"Availability time\" name=\"Availability time\" type=\"text\" placeholder=\"Availability time\" class=\"form-control input-md\">\n\n      </div>\n\n\n  </div>\n</div>\n\n<!-- Text input-->\n<div class=\"form-group\">\n  <label class=\"col-md-4 control-label\" for=\"Available Service Area\">Available Service Area</label>\n  <div class=\"col-md-4\">\n  <div class=\"input-group\">\n       <div class=\"input-group-addon\">\n     <i class=\"fa fa-street-view\"></i>\n\n       </div>\n   <input id=\"Available Service Area\" name=\"Available Service Area\" type=\"text\" placeholder=\"Available Service Area\" class=\"form-control input-md\">\n\n      </div>\n\n\n  </div>\n</div>\n\n<!-- Text input-->\n<div class=\"form-group\">\n  <label class=\"col-md-4 control-label\" for=\"Citizenship No.\">Citizenship No.</label>\n  <div class=\"col-md-4\">\n  <div class=\"input-group\">\n       <div class=\"input-group-addon\">\n     <i class=\"fa fa-sticky-note-o\"></i>\n\n       </div>\n   <input id=\"Citizenship No.\" name=\"Citizenship No.\" type=\"text\" placeholder=\"Citizenship No.\" class=\"form-control input-md\">\n\n      </div>\n\n\n  </div>\n</div>\n\n<!-- Multiple Checkboxes -->\n<div class=\"form-group\">\n  <label class=\"col-md-4 control-label\" for=\"Languages Known\">Languages Known</label>\n  <div class=\"col-md-4\">\n  <div class=\"checkbox\">\n    <label for=\"Languages Known-0\">\n      <input type=\"checkbox\" name=\"Languages Known\" id=\"Languages Known-0\" value=\"1\">\n      Nepali\n    </label>\n    </div>\n  <div class=\"checkbox\">\n    <label for=\"Languages Known-1\">\n      <input type=\"checkbox\" name=\"Languages Known\" id=\"Languages Known-1\" value=\"2\">\n      Newari\n    </label>\n    </div>\n  <div class=\"checkbox\">\n    <label for=\"Languages Known-2\">\n      <input type=\"checkbox\" name=\"Languages Known\" id=\"Languages Known-2\" value=\"3\">\n      English\n    </label>\n    </div>\n  <div class=\"checkbox\">\n    <label for=\"Languages Known-3\">\n      <input type=\"checkbox\" name=\"Languages Known\" id=\"Languages Known-3\" value=\"4\">\n      Hindi\n    </label>\n    </div>\n\n<div class=\"othertop\">\n    <label for=\"Languages Known-4\">\n\n\n\n    </label>\n\n     <input type=\"input\" name=\"LanguagesKnown\" id=\"Languages Known-4\"  placeholder=\"Other Language\">\n    </div>\n\n  </div>\n</div>\n\n<!-- Text input-->\n<div class=\"form-group\">\n  <label class=\"col-md-4 control-label\" for=\"License No.\">License No.</label>\n  <div class=\"col-md-4\">\n  <div class=\"input-group\">\n       <div class=\"input-group-addon\">\n     <i class=\"fa fa-sticky-note-o\"></i>\n\n       </div>\n   <input id=\"License No.\" name=\"License No.\" type=\"text\" placeholder=\"License No.\" class=\"form-control input-md\">\n\n      </div>\n\n\n  </div>\n</div>\n\n<!-- Multiple Radios -->\n<div class=\"form-group\">\n  <label class=\"col-md-4 control-label\" for=\"Owns Vehicle\">Owns Vehicle?</label>\n  <div class=\"col-md-4\">\n  <div class=\"checkbox\">\n    <label for=\"Owns Vehicle-0\">\n      <input type=\"checkbox\" name=\"Owns Vehicle\" id=\"Owns Vehicle-0\" value=\"1\">\n      4 wheeler\n    </label>\n    </div>\n  <div class=\"checkbox\">\n    <label for=\"Owns Vehicle-1\">\n      <input type=\"checkbox\" name=\"Owns Vehicle\" id=\"Owns Vehicle-1\" value=\"2\">\n     Bike\n    </label>\n    </div>\n  <div class=\"checkbox\">\n    <label for=\"Owns Vehicle-2\">\n      <input type=\"checkbox\" name=\"Owns Vehicle\" id=\"Owns Vehicle-2\" value=\"3\">\n      Bicycle\n    </label>\n    </div>\n  </div>\n</div>\n\n\n<!-- Text input-->\n<div class=\"form-group\">\n  <label class=\"col-md-4 control-label\" for=\"Working Experience (time period)\">Working Experience (time period)</label>\n  <div class=\"col-md-4\">\n  <div class=\"input-group\">\n       <div class=\"input-group-addon\">\n     <i class=\"fa fa-clock-o\"></i>\n\n       </div>\n    <input id=\"Working Experience (time period)\" name=\"Working Experience\" type=\"text\" placeholder=\"Enter time period \" class=\"form-control input-md\">\n\n\n      </div>\n\n  </div>\n</div>\n\n<!-- Textarea -->\n<div class=\"form-group\">\n  <label class=\"col-md-4 control-label\" for=\"Overview (max 200 words)\">Overview (max 200 words)</label>\n  <div class=\"col-md-4\">\n    <textarea class=\"form-control\" rows=\"10\"  id=\"Overview (max 200 words)\" name=\"Overview (max 200 words)\">Overview</textarea>\n  </div>\n</div>\n\n\n<div class=\"form-group\">\n  <label class=\"col-md-4 control-label\" ></label>\n  <div class=\"col-md-4\">\n  <a href=\"#\" class=\"btn btn-success\"><span class=\"glyphicon glyphicon-thumbs-up\"></span> Submit</a>\n  <a href=\"#\" class=\"btn btn-danger\" value=\"\"><span class=\"glyphicon glyphicon-remove-sign\"></span> Clear</a>\n\n  </div>\n</div>\n\n</fieldset>\n</form>\n</div>\n<div class=\"col-md-2 hidden-xs\">\n<img src=\"http://websamplenow.com/30/userprofile/images/avatar.jpg\" class=\"img-responsive img-thumbnail \">\n  <div>\n  <label>{{username}}</label>\n  </div>\n</div>\n\n\n</div>\n   </div>\n    <!-- jQuery Version 1.11.1 -->\n    <script src=\"js/jquery.js\"></script>\n\n    <!-- Bootstrap Core JavaScript -->\n    <script src=\"js/bootstrap.min.js\"></script>\n\n</body>\n\n</html>\n"

/***/ }),

/***/ "./src/app/profile/profile.component.ts":
/*!**********************************************!*\
  !*** ./src/app/profile/profile.component.ts ***!
  \**********************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(http) {
        this.http = http;
        this.username = "";
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.http.get('/api/currentUser', {}).subscribe(function (res) {
            console.log("resss", res);
            //  console.log("resss msssg",res.msg);
            if (res['msg']) {
                _this.username = res['msg'];
            }
        }, function (err) {
            console.log(err.error);
        });
    };
    ProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.css */ "./src/app/profile/profile.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ProfileComponent);
    return ProfileComponent;
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