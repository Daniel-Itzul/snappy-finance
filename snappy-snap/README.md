# Snappy Finance:

This is a project to demo how Snaps can be used to quickly add clarification to actions typically taken in Defi Protocols.


# Purpose:

It introduces a Snap that explains DeFi related actions and ask confirmation from the user before starting asking for sending the related DeFi transactions.

# Installation:
- Clone the repository
- The sample UI needs a Mock Defi Protocol and tokens to interact with. 
- The following contracts are included under the contracts folder: 
   - An ERC20 Token
   - A Lending Platform
   - Mock Oracle (mocks the response from chainlink price feeds)
   Contracts are not audited and not meant for production.
- These contracts should be deployed in the following order:
   - ERC20 token requires a Name and a Symbol as parameters.
   - Lending Platform 
   - Mock Oracle requires the price in USD for the token, this can be changed at any time by the Oracle Deployer to change health factors.
- Authorization
   - Before interacting with the lending platform the token and its price feed (Mock oracle) have to be whitelisted in the Lending platform.

# On the Snap
- Copy the addresses of your token or tokens somewhere, the UI requires those.
- Copy the address of your lending platform in the corresponding part of the Index.html javascript script.
- Run Yarn install 
- Run Yarn build
- Run Yarn serve
   - The UI should be served in http://localhost:8080/