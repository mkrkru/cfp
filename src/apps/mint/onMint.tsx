import contractABI from "./contract-abi.json";
import { createAlchemyWeb3 } from "@alch/alchemy-web3";
const Alchemy = createAlchemyWeb3(process.env.REACT_APP_ALCHEMY_KEY);

export default async function onMint(account: string) {
    const address = "0x3bbcA2CC4DBDF51B49E1E9A6508570065B473439";
    const Contract = await new Alchemy.eth.Contract(contractABI, address);
    
    // @ts-ignore
    window.ethereum.request({
        method: 'eth_sendTransaction',
        params: [{
            from: account,
            to: address,
            data: Contract.methods.mint(account, 1).encodeABI()
        }]
    }).then((rx: any) => `https://rinkeby.etherscan.io/tx/${rx}`).catch((error: any) => console.error(error));
};