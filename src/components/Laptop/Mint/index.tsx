import pinataSDK from '@pinata/sdk';
import contractABI from "./contract-abi.json";
import { createAlchemyWeb3 } from "@alch/alchemy-web3";
import { Button, Spinner } from "@chakra-ui/react";
import { useState } from "react";
import { colors } from "../../../config";

const NETWORK = "ropsten";
const randomorg = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1)) + min;
const minting = {
    PINATA_KEY: "4aed00c527e48881b09b",
    PINATA_SECRET: "545a3ab04c9bf420ed24435150f4c2ad13b5014bbe06cf68c6ede7e8fe178a13",
    ALCHEMY_KEY: `https://eth-${NETWORK}.alchemyapi.io/v2/uMnfAGW5bD8JCiHxzXpyENtBJao_AjHe`,
    CONTRACT_ADDRESS: "0x9Fb8e4Ce6b7A223aeEAE31d5c8c0F1101C5023c6",
    HASHES: "QmTjNeHXgXTLL5J3w19Mz7VM83PRC2zpeenjySYgneC7Fo"
}

export function Mint() {
    const [ loading, setLoading ] = useState(false);
    const { pinJSONToIPFS, pinList } = pinataSDK(minting.PINATA_KEY, minting.PINATA_SECRET);
    const Alchemy = createAlchemyWeb3(minting.ALCHEMY_KEY);

    function onMint() {
        setLoading(true);

        // !! filter only png's
        pinList({ status: "pinned", pinSizeMin: 150000 }).then(x => {
            pinJSONToIPFS({ image: `https://gateway.pinata.cloud/ipfs/${x.rows[randomorg(0, x.count - 1)].ipfs_pin_hash}`, name: "Crypto Frying Pans", description: "CFP - definitely should be in your collection. Take one and please Mom with a new frying pan." })
                .then(async (rx: any) => {
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
                });
        });
    }

    return <Button onClick={onMint}>{loading ? <Spinner color={colors.lighter} /> : "Mint"}</Button>;
}