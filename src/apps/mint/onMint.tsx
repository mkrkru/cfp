import contractABI from "./contract-abi.json";
import { createAlchemyWeb3 } from "@alch/alchemy-web3";
import pinataSDK from '@pinata/sdk';

const pinata = pinataSDK('08d0ea34d82743359669', '29cac61ba50e631b1dc6ae40fc64a294417d8e84732a8083b93b70a0fe63cdca');

const NETWORK = "ropsten";
const minting = {
    ALCHEMY_KEY: `https://eth-${NETWORK}.alchemyapi.io/v2/uMnfAGW5bD8JCiHxzXpyENtBJao_AjHe`,
    CONTRACT_ADDRESS: "0x9Fb8e4Ce6b7A223aeEAE31d5c8c0F1101C5023c6"
};
const Alchemy = createAlchemyWeb3(minting.ALCHEMY_KEY);
const randomorg = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1)) + min;

export default async function onMint() {
    const all = await pinata.pinList({ status: 'pinned', pinSizeMin: 1000 });
    const resNum = randomorg(0, all.count - 1);

    pinata.pinJSONToIPFS({
        image: `https://gateway.pinata.cloud/ipfs/${all.rows[resNum]["ipfs_pin_hash"]}`,
        name: `Crypto Frying Pan ${resNum + 1}`,
        description: "CFP - definitely should be in your collection. Take one and please Mom with a new frying pan."
    })
        .then(async (rx: any) => {
            console.log(rx);

            // @ts-ignore
            window.contract = await new Alchemy.eth.Contract(contractABI, minting.CONTRACT_ADDRESS);

            // @ts-ignore
            window.ethereum.request({
                method: "eth_sendTransaction",
                params: [{
                    gas: "21000", // @ts-ignore
                    from: window.ethereum.selectedAddress,
                    to: minting.CONTRACT_ADDRESS, // @ts-ignore
                    data: window.contract.methods.mintNFT(window.ethereum.selectedAddress, `https://gateway.pinata.cloud/ipfs/${rx.IpfsHash}`).encodeABI()
                }]
            })
                .then((txHash: any) => window.open(`https://${NETWORK}.etherscan.io/tx/${txHash}`))
                .catch(console.error);
        })
        .catch(alert);
}