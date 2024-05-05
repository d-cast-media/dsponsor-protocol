# d>sponsor contracts

*d>sponsor* is a decentralized solution for sponsorship that provides funding in exchange for shares in visibility. It aligns the interests of both the sponsors and the sponsees.

This protocol allows anyone to create tokens for advertising spaces. These tokens can be purchased to acquire ad spaces on websites, apps, and more, for a specific time period, granting the exclusive right to place advertisements there.

![logo d>sponsor](assets/schema%20dsponsor.png)

## Contracts Features

### DSponsorAdmin.sol

This is the primary contract and serves as the gateway for frontends within the d>sponsor ecosystem. It is compatible with any ERC721 contract, providing token owners with the exclusive right to advertise. It is also compatible with ERC4907 to allow token *users* the exclusive right to advertise.

The contract offers functions for creating and managing sponsorship tokens and advertising proposals. It includes a system for collecting minting fees for the protocol's treasury and a referral program to reward contributions to these fees.

- A sponsee can define any number of sponsorship properties, which might include an audio URL, a website link, a logo, etc., based on their off-chain implementation.
- Sponsors are allowed to submit data only for the sponsorship properties provided.
- The sponsee may approve or reject the submitted data.
- A sponsor can transfer a token to another address; the new owner will then be the only one able to set sponsorship data linked to the `tokenId`.
- Includes a built-in Uniswap swap function to enable ERC20 payments from the native currency.

### DSponsorNFT.sol

While any ERC721-compliant contract can be used with the d>sponsor protocol, this specific NFT contract incorporates various standards and unique functionalities.

- Allows pricing in ERC20 tokens and the native currency.
- Includes rental capabilities (ERC4907).
- Incorporates ERC2981 royalties.
- Enables the contract owner to define a custom base URI for token metadata and a contract-level metadata URI.

### DSponsorMarketplace.sol

This contract manages secondary sales and includes:

- Direct Listing, English Auctions, and Offer mechanisms.
- Options for sale or rent.
- Payments in any ERC20 currency.
- Royalties, fee and protocol rewards mechanisms.

## Deployment Addresses

### Sepolia Testnet (Chain ID = 11155111)

- `DSponsorAdmin`: [`0x6a768A9D9674D8e0D788b817eB38980b203A82DF`](https://sepolia.etherscan.io/address/0x6a768A9D9674D8e0D788b817eB38980b203A82DF)

- `DSponsorNFTFactory`: [`0x041f2E36c2fa7d09F5301C11a7F70bD3d01f7C84`](https://sepolia.etherscan.io/address/0x041f2E36c2fa7d09F5301C11a7F70bD3d01f7C84)

- Example of `DSponsorNFT` deployed: [`0x90F336ab07964eF674F0af6A0C5664971574CaE6`](https://sepolia.etherscan.io/address/0x90F336ab07964eF674F0af6A0C5664971574CaE6)

- `DSponsorMarketplace`: [`0x83b4e1715e9296583f7109473E3D035386c04bb9`](https://sepolia.etherscan.io/address/0x83b4e1715e9296583f7109473E3D035386c04bb9)

## Development

### Setting Up the Environment

- Refer to the `.env_example` file for the necessary and optional environment variables.
- Create your own `.env` file.
- Install dependencies and compile the project:

```shell
# Set up environment variables for tests and deployment
cp .env_example .env

# Install project dependencies
npm install

# Compile contracts
npx hardhat compile
```

### Running tests

Execute tests with gas reports as configured in `hardhat.config.js`:

```shell
npm run test 
```

To check test coverage:

```shell
npm run coverage
```

### Security analysis

```shell
slither . --checklist  > slither-analysis.md
```

### Deploy

```shell
# deploy in testnet
npm run deploy sepolia

# deploy in mainnet
npm run deploy arbitrum
```
