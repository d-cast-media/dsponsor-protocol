export const ZERO_ADDRESS = '0x0000000000000000000000000000000000000000'

export const UINT256_MAX = BigInt(
  '115792089237316195423570985008687907853269984665640564039457584007913129639935'
)

export const ABSTRACT_TESTNET_CHAIN_ID = '11124'
export const BASE_CHAIN_ID = '8453'
export const MODE_CHAIN_ID = '34443'
export const SEPOLIA_CHAIN_ID = '11155111'

type ChainIdAddr = {
  [key: string]: string
}

export const USDC_ADDR: ChainIdAddr = {
  [ABSTRACT_TESTNET_CHAIN_ID]: '0xa70e901a190c5605a5137a1019c6514F5a626517', // /!\ Mock
  [BASE_CHAIN_ID]: '0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913',
  [MODE_CHAIN_ID]: '0xd988097fb8612cc24eeC14542bC03424c656005f',
  [SEPOLIA_CHAIN_ID]: '0x94a9D9AC8a22534E3FaCa9F4e7F2E2cf85d5E4C8'
}
export const WETH_ADDR: ChainIdAddr = {
  [ABSTRACT_TESTNET_CHAIN_ID]: '0x80392dF95f8ed7F2f6299Be35A1007f31D5Fc5b6',
  [BASE_CHAIN_ID]: '0x4200000000000000000000000000000000000006',
  [MODE_CHAIN_ID]: '0x4200000000000000000000000000000000000006',
  [SEPOLIA_CHAIN_ID]: '0xfFf9976782d46CC05630D1f6eBAb18b2324d6B14'
}

/*
export const UNI_ADDR: ChainIdAddr = {
  // pool uniV3 testnet 1 UNI = 4,99778 ETH - 1 ETH = 0,20054 UNI
  [SEPOLIA_CHAIN_ID]: '0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984',
  [ARB_CHAIN_ID]: '0xfa7f8980b0f1e64a2062791cc3b0871572f1f7f0'
}
*/

export const FORWARDER_ADDR: ChainIdAddr = {
  [ABSTRACT_TESTNET_CHAIN_ID]: '0x0000000000000000000000000000000000000000',
  [BASE_CHAIN_ID]: '0xD04F98C88cE1054c90022EE34d566B9237a1203C', // thirdweb trust forwarder
  [MODE_CHAIN_ID]: '0xD04F98C88cE1054c90022EE34d566B9237a1203C',
  [SEPOLIA_CHAIN_ID]: '0xD04F98C88cE1054c90022EE34d566B9237a1203C'
}

export const TREASURY_ADDR: ChainIdAddr = {
  [ABSTRACT_TESTNET_CHAIN_ID]: '0x5b15Cbb40Ef056F74130F0e6A1e6FD183b14Cdaf',
  [BASE_CHAIN_ID]: '0x5b15Cbb40Ef056F74130F0e6A1e6FD183b14Cdaf', // dsponsor.eth
  [MODE_CHAIN_ID]: '0x5b15Cbb40Ef056F74130F0e6A1e6FD183b14Cdaf',
  [SEPOLIA_CHAIN_ID]: '0x6a0F850Cc341935Dd004a7C8C5aef3533ba284B9'
}

// https://docs.uniswap.org/contracts/v3/reference/deployments

// SwapRouter02
export const SWAP_ROUTER_ADDR: ChainIdAddr = {
  [ABSTRACT_TESTNET_CHAIN_ID]: '0x03DD2f8996A2fBA6a4f7b3A383C4c0Ff367Dd95c', // /!\ Mock
  [BASE_CHAIN_ID]: '0x2626664c2603336E57B271c5C0b26F421741e481',
  [MODE_CHAIN_ID]: '0x016e131C05fb007b5ab286A6D614A5dab99BD415', // https://docs.supswap.xyz/developers/smart-contracts/supswap-exchange/v3-contracts
  [SEPOLIA_CHAIN_ID]: '0x3bFA4769FB09eefC5a80d6E87c3B9C650f7Ae48E'
}

// QuoterV2
export const QUOTE_ADDR: ChainIdAddr = {
  [ABSTRACT_TESTNET_CHAIN_ID]: '0x0000000000000000000000000000000000000000',
  [BASE_CHAIN_ID]: '0x3d4e44Eb1374240CE5F1B871ab261CD16335B76a',
  [MODE_CHAIN_ID]: '0x5E6AEbab1AD525f5336Bd12E6847b851531F72ba', // https://docs.supswap.xyz/developers/smart-contracts/supswap-exchange/v3-contracts
  [SEPOLIA_CHAIN_ID]: '0xEd1f6473345F45b75F8179591dd5bA1888cf2FB3'
}
