// import pinataSDK from '@pinata/sdk';
// const pinata = pinataSDK('08d0ea34d82743359669', '29cac61ba50e631b1dc6ae40fc64a294417d8e84732a8083b93b70a0fe63cdca');
import contractABI from "./contract-abi.json";
import { createAlchemyWeb3 } from "@alch/alchemy-web3";

const Alchemy = createAlchemyWeb3(process.env.REACT_APP_ALCHEMY_KEY);
const rand = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1)) + min;
const resMeta = `https://gateway.pinata.cloud/ipfs/QmPM3BrVj5A7dgq8oeX2MdZ7YxmvXvakC9WMpLaWAbvuAr/nft${rand(0, 100)}.json`;

export default async function onMint(account: string) {
    const Contract = await new Alchemy.eth.Contract(contractABI, process.env.REACT_APP_CONTRACT_ADDRESS);
    const tx = {
        from: account,
        to: process.env.REACT_APP_CONTRACT_ADDRESS,
        gas: "21000",
        value: "0x7c585087238000", // 0.035 - 0x7c585087238000 ; 0.07 - 0xf8b0a10e470000
        data: Contract.methods.mintNFT(account, resMeta).encodeABI()
    };

    // @ts-ignore
    window.ethereum.request({ method: "eth_sendTransaction", params: [tx] }).then((rx: any) => {
        console.log(`https://ropsten.etherscan.io/tx/${rx}`);
        console.log(resMeta);
    });

    /* Alchemy.eth.accounts.signTransaction(tx, process.env.REACT_APP_PRIVATE_KEY)
        .then((signedTx: any) => {
            Alchemy.eth.sendSignedTransaction(signedTx.rawTransaction, (err: any, hash: any) => console.log(err ? err : hash));
        })
        .catch((err: any) => console.log("Promise failed:", err)); */
};