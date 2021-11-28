import pinataSDK from '@pinata/sdk';
import contractABI from "./contract-abi";
import { useSendTransaction } from "@usedapp/core";
import { createAlchemyWeb3 } from "@alch/alchemy-web3";
import { Button, Spinner } from "@chakra-ui/react";
import { useState } from "react";
import { colors } from "../../../config";

const minting = {
    PINATA_KEY: "4aed00c527e48881b09b",
    PINATA_SECRET: "545a3ab04c9bf420ed24435150f4c2ad13b5014bbe06cf68c6ede7e8fe178a13",
    ALCHEMY_KEY: "https://eth-mainnet.alchemyapi.io/v2/uMnfAGW5bD8JCiHxzXpyENtBJao_AjHe",
    CONTRACT_ADDRESS: "0x078f063eBB4A43C818CBDBFaF59f6023bB9ec927"
}

export function Mint() {
    const [loading, setLoading] = useState(false);
    const { sendTransaction } = useSendTransaction();
    const { pinJSONToIPFS } = pinataSDK(minting.PINATA_KEY, minting.PINATA_SECRET);
    const Alchemy = createAlchemyWeb3(minting.ALCHEMY_KEY);

    async function mint(url: string, name: string, description: string) {
        setLoading(true);

        pinJSONToIPFS({ image: url, name: name, description: description })
            .then((rx: any) => next(`https://gateway.pinata.cloud/ipfs/${rx.IpfsHash}`))
            .catch((err: any) => alert(err))
            .finally(() => setLoading(false));

        async function next(tokenURI: string) {
            // @ts-ignore
            window.contract = await new Alchemy.eth.Contract(contractABI, minting.CONTRACT_ADDRESS);

            try {
                sendTransaction({
                    to: minting.CONTRACT_ADDRESS, // @ts-ignore
                    data: window.contract.methods.mintNFT(window.ethereum.selectedAddress, tokenURI).encodeABI()
                }).then(tx => {
                    if (tx !== undefined) alert(`✅ Check out your transaction on Etherscan: https://mainnet.etherscan.io/tx/${tx}`);
                });
            } catch (error) {
                alert(`😥 Something went wrong: ${error.message}`);
            }
        }
    };

    return <Button onClick={() => mint("https://gateway.pinata.cloud/ipfs/QmTjNeHXgXTLL5J3w19Mz7VM83PRC2zpeenjySYgneC7Fo", "test1name", "test1desc")}>{loading ? <Spinner color={colors.lighter} /> : "Mint"}</Button>;
}