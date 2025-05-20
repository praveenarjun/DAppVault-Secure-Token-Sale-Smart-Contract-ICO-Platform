import {ethers} from "ethers";
import Web3Modal from "web3modal";

//Internal Import
import tokenICO from "./TokenICO.json";
import erc20 from "./ERC20.json";
import { sign } from "crypto";

export const TOKEN_ADDRESS = "";
export const ERC20_ABI = "";

export const OWNER_ADDRESS= "";

export const CONTRACT_ADDRESS ="";

export const CONTRACT_ABI = "";




const networks = {
  sepolia: {
    chainId: `0x${Number(11155111).toString(16)}`,
    chainName: "Sepolia",
    nativeCurrency: {
      name: "SepoliaETH",
      symbol: "SepoliaETH",
      decimals: 18,
    },
    rpcUrls: ["https://sepolia.infura.io/v3/"],
    blockExplorerUrls: ["https://sepolia.etherscan.io"],
  },
  holesky: {
    chainId: `0x${Number(17000).toString(16)}`,
    chainName: "Holesky",
    nativeCurrency: {
      name: "holesky",
      symbol: "ETH",
      decimals: 18,
    },
    rpcUrls: ["https://rpc.ankr.com/eth_holesky"],
    blockExplorerUrls: ["https://holesky.etherscan.io/"],
  },
  polygon_amoy: {
    chainId: `0x${Number(80002).toString(16)}`,
    chainName: "Polygon Amoy",
    nativeCurrency: {
      name: "MATIC",
      symbol: "MATIC",
      decimals: 18,
    },
    rpcUrls: ["https://rpc-amoy.polygon.technology/"],
    blockExplorerUrls: ["https://www.oklink.com/amoy"],
  },
  polygon_mumbai: {
    chainId: `0x${Number(80001).toString(16)}`,
    chainName: "Polygon Mumbai",
    nativeCurrency: {
      name: "MATIC",
      symbol: "MATIC",
      decimals: 18,
    },
    rpcUrls: ["https://rpc.ankr.com/polygon_mumbai"],
    blockExplorerUrls: ["https://mumbai.polygonscan.com/"],
  },
  polygon: {
    chainId: `0x${Number(137).toString(16)}`,
    chainName: "Polygon Mainnet",
    nativeCurrency: {
      name: "MATIC",
      symbol: "MATIC",
      decimals: 18,
    },
    rpcUrls: ["https://rpc.ankr.com/polygon"],
    blockExplorerUrls: ["https://polygonscan.com/"],
  },
  bsc: {
    chainId: `0x${Number(56).toString(16)}`,
    chainName: "Binance Smart Chain Mainnet",
    nativeCurrency: {
      name: "Binance Chain Native Token",
      symbol: "BNB",
      decimals: 18,
    },
    rpcUrls: ["https://rpc.ankr.com/bsc"],
    blockExplorerUrls: ["https://bscscan.com"],
  },
  base_mainnet: {
    chainId: `0x${Number(8453).toString(16)}`,
    chainName: "Base Mainnet",
    nativeCurrency: {
      name: "ETH",
      symbol: "ETH",
      decimals: 18,
    },
    rpcUrls: ["https://mainnet.base.org/"],
    blockExplorerUrls: ["https://bscscan.com"],
  },
  base_sepolia: {
    chainId: `0x${Number(84532).toString(16)}`,
    chainName: "Base Sepolia",
    nativeCurrency: {
      name: "ETH",
      symbol: "ETH",
      decimals: 18,
    },
    rpcUrls: ["https://sepolia.base.org"],
    blockExplorerUrls: ["https://bscscan.com"],
  },
  localhost: {
    chainId: `0x${Number(31337).toString(16)}`,
    chainName: "localhost",
    nativeCurrency: {
      name: "GO",
      symbol: "GO",
      decimals: 18,
    },
    rpcUrls: ["http://127.0.0.1:8545/"],
    blockExplorerUrls: ["https://bscscan.com"],
  },
};

const changeNetwork= async({networkName}) =>{
  try{
    if(!window.ethereum) throw new Error("No crypto wallet found");
    await window.ethereum.request({
      method: "wallet_addEthereumChain",
      params: [
        {
          ...networks[networkName],
        },
      ],
    });
  }
  catch(error){
    console.log(err.message);
  }
}

export const handleNetworkSwitch = async () => {
  const networkName = "holesky"; // Change this to the desired network name
  await changeNetwork({networkName});
};


export const CHECK_WALLET_CONNECTED = async () => {
  if(!window.ethereum) return console.log ("Please Install Meta mass");
  await handleNetworkSwitch();

  const account = await window.ethereum.request({
    method: "eth_accounts"
  });
  if(accounts.length){
    return account[0];
  }else{
    console.log("please install metamask& connect , Reload");
  }
};

export const CONNECT_WALLET = async() => {
  try{
    if(!window.ethereum) return console.log ("Please Install Meta mass");
  await handleNetworkSwitch();

  const account = await window.ethereum.request({
    method: "eth_requestAccounts"
  });
  window.location.reload();
    return account[0];
  }
  catch(error){
    console.log(error.message);

  }
}

const fetchContract = (address,abi,signer) => 
  new ethers.Contract(address,abi,signer);

export const TOKEN_ICO_CONTRACT = async() => {
  try{
    const web3Modal = new Web3Modal();
    const connection = await web3Modal().connect();
    const provider = new ethers.providers.Web3Provider(connection);
    const signer = provider.getSigner();

    const contract = fetchContract(CONTRACT_ADDRESS,CONTRACT_ABI,signer);
    return contract;

  }
  catch(error){
    console.log(error.message);

  }
}

export const ERC20 = async() => {
  try{
    const web3Modal = new Web3Modal();
    const connection = await web3Modal().connect();
    const provider = new ethers.providers.Web3Provider(connection);
    const network = await provider.getNetwork();
    const signer = await provider.getSigner();
    const userAddress = await signer.getAddress();
    const balance = await contract.balanceOf(userAddress);

    const name = await contract.name();
    const symbol = await contract.symbol();
    const totalSupply = await contract.totalSupply();
    const decimals = await contract.decimals();
    const address = await contract.address;
    const token ={
      address: address,
      name: name,
      symbol: symbol,
      decimals:decimals,
      supply: ethers.utils.formatEthers(supply.toString()),
      balance: ethers.utils.formatEthers(balance.toString),
      chainId: network.chainId,
    };
    console.log(token);

    return token;
  }
  catch(error){
    console.log(error.message);

  }
}

export const ERC20_CONTRACT = async(CONTRACT_ADDRESS) => {
  try{
    const web3Modal = new Web3Modal();
    const connection = await web3Modal().connect();
    const provider = new ethers.providers.Web3Provider(connection);
    const signer = provider.getSigner();

    const contract = fetchContract(CONTRACT_ADDRESS,ERC20_ABI,signer);
    return contract;

  }
  catch(error){
    console.log(error.message);

  }
}

export const GET_BALANCE = async() => {
  try{
    const web3Modal = new Web3Modal();
    const connection = await web3Modal().connect();
    const provider = new ethers.providers.Web3Provider(connection);
    const signer = provider.getSigner();

    const maticBal = await signer.getBalance();
    return ethers.utils.formatEther(maticBal.toString());

  }
  catch(error){
    console.log(error.message);

  }
}

export const CHECK_ACCOUNT_BALANCE = async(ADDRESS) => {
  try{
    const web3Modal = new Web3Modal();
    const connection = await web3Modal().connect();
    const provider = new ethers.providers.Web3Provider(connection);
    

    const maticBal = await signer.getBalance(ADDRESS);
    return ethers.utils.formatEther(maticBal.toString());

  }
  catch(error){
    console.log(error.message);

  }
}


export const addtokenToMetaMask = async() =>{
  const tokenImage = "https://www.daulathussain.com/wp-content/uploads/2024/05/theblockchaincoders.jpg";
  
  if(window.ethereum){
    const tokenDetails = await ERC20(TOKEN_ADDRESS);

    const tokenDecimals = tokenDetails?.decimals;
    const tokenAddress = TOKEN_ADDRESS; 
    const tokenSymbol = tokenDetails?.symbol;
    
    try{
      const wasAdded = await window.ethereum.request({
        method: "wallet_watchAsset",
        params:{
          type: "ERC20",
          options:{
            address: tokenAddress,
            symbol: tokenSymbol,
            decimals: tokenDecimals,
            image: tokenImage,
          },
        },
      });
      if (wasAdded) {
        console.log("Token added successfully");
      } else {
        console.log("Token not added");
      }
    } catch (error) {
      console.log("Failed to add token:", error.message);
    }
  } else{
    console.log("Please Install MetaMask");
  }
};
