// import pinataSDK from '@pinata/sdk';
// const pinata = pinataSDK('08d0ea34d82743359669', '29cac61ba50e631b1dc6ae40fc64a294417d8e84732a8083b93b70a0fe63cdca');
import contractABI from "./contract-abi.json";
import { createAlchemyWeb3 } from "@alch/alchemy-web3";

const minting = {
    ALCHEMY_KEY: "https://eth-ropsten.alchemyapi.io/v2/uMnfAGW5bD8JCiHxzXpyENtBJao_AjHe",
    CONTRACT_ADDRESS: "0x9Fb8e4Ce6b7A223aeEAE31d5c8c0F1101C5023c6",
    PRIVATE_KEY: "84036a8cb8da31395f331c1028811c1772f72714623ce766b9ec4f9922a74ba9"
};
const Alchemy = createAlchemyWeb3(minting.ALCHEMY_KEY);
const rand = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1)) + min;
const resMeta = `https://gateway.pinata.cloud/ipfs/QmPM3BrVj5A7dgq8oeX2MdZ7YxmvXvakC9WMpLaWAbvuAr/nft${rand(0, 100)}.json`;

export default async function onMint(account: string) {
    const Contract = await new Alchemy.eth.Contract(contractABI, minting.CONTRACT_ADDRESS);
    const tx = {
        from: account,
        to: minting.CONTRACT_ADDRESS,
        gas: "21000",
        value: "0x7c585087238000", // 0.035 - 0x7c585087238000 ; 0.07 - 0xf8b0a10e470000
        data: Contract.methods.mintNFT(account, resMeta).encodeABI()
    };

    // @ts-ignore
    window.ethereum.request({ method: "eth_sendTransaction", params: [tx] }).then((rx: any) => {
        console.log(`https://ropsten.etherscan.io/tx/${rx}`);
        console.log(resMeta);
    });

    /* Alchemy.eth.accounts.signTransaction(tx, minting.PRIVATE_KEY)
        .then((signedTx: any) => {
            Alchemy.eth.sendSignedTransaction(signedTx.rawTransaction, (err: any, hash: any) => console.log(err ? err : hash));
        })
        .catch((err: any) => console.log("Promise failed:", err)); */
};