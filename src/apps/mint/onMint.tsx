/* import ipfsClient from "ipfs-http-client";
import contractABI from "./contract-abi.json";
import { createAlchemyWeb3 } from "@alch/alchemy-web3";

const IPFS = ipfsClient("https://bafybeidjpgqe3mb5lrjgt5jmhsn3c6kntuvafhv6gx75jfwz6gzyvo5c6q.ipfs.dweb.link/");
const Alchemy = createAlchemyWeb3(minting.ALCHEMY_KEY);
const NETWORK = "ropsten";
const minting = {
    CID: "QmVSP5ruaf3jCjjhFGELTLX13bMen9vFyFsst5QuWA3JTm",
    ALCHEMY_KEY: `https://eth-${NETWORK}.alchemyapi.io/v2/uMnfAGW5bD8JCiHxzXpyENtBJao_AjHe`,
    CONTRACT_ADDRESS: "0x9Fb8e4Ce6b7A223aeEAE31d5c8c0F1101C5023c6",
    HASHES: "QmTjNeHXgXTLL5J3w19Mz7VM83PRC2zpeenjySYgneC7Fo"
} */

// eslint-disable-next-line
export default async function onMint() {
    /* const all = await IPFS.ls(minting.CID);
    IPFS.add({ image: `https://gateway.pinata.cloud/ipfs/${all[randomorg(0, all.length - 1)].path}`, name: "Crypto Frying Pans", description: "CFP - definitely should be in your collection. Take one and please Mom with a new frying pan." })
            .then(async (rx: any) => {
                console.log(rx);
                setLoading(false);

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
            .catch((err: any) => {
                alert(err);
                setLoading(false);
            }); */
}