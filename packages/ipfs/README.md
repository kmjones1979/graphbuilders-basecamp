# IPFS Upload Script

This script uploads image files to IPFS using Pinata and associates metadata with each uploaded image. It is designed to facilitate the process of uploading NFTs (Non-Fungible Tokens) to IPFS.

## Prerequisites

Before running the script, ensure you have the following:

-   Node.js installed on your machine.
-   An account with Pinata (https://pinata.cloud/) and your API key and secret.
-   A directory containing the image files you want to upload.

## Installation

1. Clone the repository or download the script file.
2. Navigate to the project directory.
3. Install the required dependencies:

    ```bash
    npm install
    ```

## Configuration

1. Create a `.env` file in the root of the project directory.
2. Add your Pinata API key and secret to the `.env` file:

    ```plaintext
    PINATA_API_KEY=your_api_key
    PINATA_API_SECRET=your_api_secret
    ```

## Usage

1. Place your image files (PNG, JPG, JPEG, GIF) in the `images` directory located in the `packages/ipfs/scripts/` folder.
2. Run the script using Node.js:

    ```bash
    node packages/ipfs/scripts/upload.ts
    ```

3. The script will upload the images to IPFS and print the uploaded file CIDs and metadata CIDs to the console.

## Output

After running the script, you will see output similar to the following:
