import pinataSDK from '@pinata/sdk';
import contractABI from "./contract-abi";
import { useGasPrice } from "@usedapp/core";
import { createAlchemyWeb3 } from "@alch/alchemy-web3";
import { Button, Spinner } from "@chakra-ui/react";
import { useState } from "react";
import { colors } from "../../../config";

const minting = {
    PINATA_KEY: "4aed00c527e48881b09b",
    PINATA_SECRET: "545a3ab04c9bf420ed24435150f4c2ad13b5014bbe06cf68c6ede7e8fe178a13",
    ALCHEMY_KEY: "https://eth-ropsten.alchemyapi.io/v2/uMnfAGW5bD8JCiHxzXpyENtBJao_AjHe",
    CONTRACT_ADDRESS: "0x9Fb8e4Ce6b7A223aeEAE31d5c8c0F1101C5023c6"
}

export function Mint() {
    const [ loading, setLoading ] = useState(false);
    const { pinJSONToIPFS } = pinataSDK(minting.PINATA_KEY, minting.PINATA_SECRET);
    const gasPrice = useGasPrice();
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
            // @ts-ignore
            const nonce = await Alchemy.eth.getTransactionCount(window.ethereum.selectedAddress, 'latest');

            const rawTx = {
                nonce: nonce,
                gas: '30000', // @ts-ignore
                from: window.ethereum.selectedAddress, // @ts-ignore
                to: minting.CONTRACT_ADDRESS, // @ts-ignore
                data: window.contract.methods.mintNFT(window.ethereum.selectedAddress, tokenURI).encodeABI()
            };

            try {
                Alchemy.eth.sendTransaction(rawTx);
                // window.open(`https://ropsten.etherscan.io/tx/${txHash}`);
            } catch (error) {
                alert(`😥 Something went wrong: ${error.message}`);
            }
        }
    };

    const onMint = () => mint("https://gateway.pinata.cloud/ipfs/QmTjNeHXgXTLL5J3w19Mz7VM83PRC2zpeenjySYgneC7Fo", "test1name", "test1desc");

    return <Button onClick={onMint}>
        {
            loading
                ? <Spinner color={colors.lighter} />
                : `Mint (Gas: ${gasPrice ? `${Number(gasPrice) * 0.000000001} gwei` : "Unknown"})`
        }
    </Button>;
}