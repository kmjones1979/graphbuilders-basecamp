// packages/ipfs/scripts/upload.ts
import * as fs from "fs";
import * as path from "path";
import pinataSDK from "@pinata/sdk";
import dotenv from "dotenv";

dotenv.config();

const pinata = new pinataSDK(
    process.env.PINATA_API_KEY || "",
    process.env.PINATA_API_SECRET || ""
);

interface NFTMetadata {
    name: string;
    description: string;
    image: string;
    attributes: { trait_type: string; value: string }[];
}

async function uploadFilesToPinata(filePaths: string[]): Promise<string[]> {
    const uploadedFiles: string[] = [];

    for (const filePath of filePaths) {
        const readableStreamForFile = fs.createReadStream(filePath);
        const options = {
            pinataMetadata: {
                name: path.basename(filePath),
            },
        };

        const result = await pinata.pinFileToIPFS(
            readableStreamForFile,
            options
        );
        uploadedFiles.push(result.IpfsHash);
    }

    return uploadedFiles;
}

async function uploadMetadataToPinata(metadata: NFTMetadata): Promise<string> {
    const options = {
        pinataMetadata: {
            name: metadata.name,
        },
    };

    const result = await pinata.pinJSONToIPFS(metadata, options);
    return result.IpfsHash;
}

async function main() {
    const directoryPath = path.join(__dirname, "../images"); // Adjust the path as needed

    const filePaths = fs
        .readdirSync(directoryPath)
        .filter((file) => /\.(png|jpg|jpeg|gif)$/.test(file)) // Filter for image files
        .map((file) => path.join(directoryPath, file)); // Create full paths

    const cids = await uploadFilesToPinata(filePaths);

    const metadataPromises = cids.map((cid, index) => {
        const metadata = {
            name: `NFT #${index + 1}`,
            description: `Description for NFT #${index + 1}`,
            image: `ipfs://${cid}`,
            attributes: [
                {
                    trait_type: "Type",
                    value: "Art",
                },
            ],
        };

        return uploadMetadataToPinata(metadata);
    });

    const metadataCids = await Promise.all(metadataPromises);

    console.log("Uploaded and pinned files:", cids);
    console.log("Uploaded and pinned metadata:", metadataCids);
}

main().catch(console.error);
