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
    const directoryPath = path.join(__dirname, "../images");

    const filePaths = fs
        .readdirSync(directoryPath)
        .filter((file) => /\.(png|jpg|jpeg|gif)$/.test(file))
        .map((file) => path.join(directoryPath, file));

    const cids = await uploadFilesToPinata(filePaths);

    // https://docs.opensea.io/docs/metadata-standards
    const metadataPromises = cids.map((cid, index) => {
        const metadata = {
            name: `NFT #${index}`,
            description: `Description for NFT #${index}`,
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

    // Create a nested log structure
    const logData = {
        timestamp: new Date().toISOString(),
        uploads: filePaths.map((filePath, index) => ({
            index: index,
            file: filePath,
            cid: cids[index],
            metadataCid: metadataCids[index],
        })),
    };

    const logFileName = `upload_log_${new Date()
        .toISOString()
        .replace(/[:.]/g, "-")}.json`;
    fs.writeFileSync(
        path.join(__dirname, logFileName),
        JSON.stringify(logData, null, 2)
    );
}

main().catch(console.error);
