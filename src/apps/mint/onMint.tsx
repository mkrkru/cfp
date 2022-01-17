import contractABI from "./contract-abi.json";
import { createAlchemyWeb3 } from "@alch/alchemy-web3";
const Alchemy = createAlchemyWeb3(process.env.REACT_APP_ALCHEMY_KEY);

export default async function onMint(account: string) {
    const address = "0xF48549f4969565b6c87788D6312EF648Db864e89";
    const Contract = await new Alchemy.eth.Contract(contractABI, address);
    
    // @ts-ignore
    window.ethereum.request({
        method: 'eth_sendTransaction',
        params: [{
            from: account,
            to: address,
            data: Contract.methods.mint(1).encodeABI()
        }]
    }).then((rx: any) => setTimeout(() => window.open(`https://etherscan.io/tx/${rx}`), 2000)).catch((error: any) => console.error(error));
};