 import Web3 from 'web3';

const getWeb3 = () => {
  if (window.ethereum) {
    const web3 = new Web3(window.ethereum);
    return web3;
  } else {
    console.error('No Web3 provider found');
    return null;
  }
};

const connectToMetaMask = async () => {
  try {
    await window.ethereum.request({ method: 'eth_requestAccounts' });
    return true;
  } catch (error) {
    console.error('Error connecting to MetaMask:', error);
    return false;
  }
};

const getContractInstance = (abi, address) => {
  const web3 = getWeb3();
  if (web3) {
    return new web3.eth.Contract(abi, address);
  } else {
    console.error('No Web3 provider found');
    return null;
  }
};

export { getWeb3, connectToMetaMask, getContractInstance };
