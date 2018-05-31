var rbCoin = artifacts.require('./RbCoin.sol')

contract('rbCoin', function (accounts) {
  it('should put 10000 rbCoin in the first account', function () {
    return rbCoin.deployed().then(function (instance) {
      return instance.getBalance.call(accounts[0])
    }).then(function (balance) {
      assert.equal(balance.valueOf(), 10000, "10000 wasn't in the first account")
    })
  })
  it('should call a function that depends on a linked library', function () {
    var rb
    var rbCoinBalance
    var rbCoinEthBalance

    return rbCoin.deployed().then(function (instance) {
      rb = instance
      return rb.getBalance.call(accounts[0])
    }).then(function (outCoinBalance) {
      rbCoinBalance = outCoinBalance.toNumber()
      return rb.getBalanceInEth.call(accounts[0])
    }).then(function (outCoinBalanceEth) {
      rbCoinEthBalance = outCoinBalanceEth.toNumber()
    }).then(function () {
      assert.equal(rbCoinEthBalance, 2 * rbCoinBalance, 'Library function returned unexpected function, linkage may be broken')
    })
  })
  it('should send coin correctly', function () {
    var rb

    // Get initial balances of first and second account.
    var account_one = accounts[0]
    var account_two = accounts[1]

    var account_one_starting_balance
    var account_two_starting_balance
    var account_one_ending_balance
    var account_two_ending_balance

    var amount = 10

    return rbCoin.deployed().then(function (instance) {
      rb = instance
      return rb.getBalance.call(account_one)
    }).then(function (balance) {
      account_one_starting_balance = balance.toNumber()
      return rb.getBalance.call(account_two)
    }).then(function (balance) {
      account_two_starting_balance = balance.toNumber()
      return rb.sendCoin(account_two, amount, {from: account_one})
    }).then(function () {
      return rb.getBalance.call(account_one)
    }).then(function (balance) {
      account_one_ending_balance = balance.toNumber()
      return rb.getBalance.call(account_two)
    }).then(function (balance) {
      account_two_ending_balance = balance.toNumber()

      assert.equal(account_one_ending_balance, account_one_starting_balance - amount, "Amount wasn't correctly taken from the sender")
      assert.equal(account_two_ending_balance, account_two_starting_balance + amount, "Amount wasn't correctly sent to the receiver")
    })
  })
})
