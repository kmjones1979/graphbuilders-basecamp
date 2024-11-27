import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";
import { Contract } from "ethers";

/**
 * Deploys a contract named "Basecamp" using the deployer account and
 * constructor arguments set to the deployer address
 *
 * @param hre HardhatRuntimeEnvironment object.
 */
const deployBasecamp: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployer } = await hre.getNamedAccounts();
  const { deploy } = hre.deployments;

  const owner = "0x417E6D64F28bd6FA5D00D757976c9bCF87D0cC3E";
  const minter = "0x417E6D64F28bd6FA5D00D757976c9bCF87D0cC3E"; // Chainlink ->"0x27D9D879A919C06d18d3B63031F4DE45da0C12A8";

  await deploy("Basecamp", {
    from: deployer,
    args: [owner, minter],
    log: true,
    autoMine: true,
  });

  // Get the deployed contract to interact with it after deploying.
  const Basecamp = await hre.ethers.getContract<Contract>("Basecamp", deployer);
  // await Basecamp.addCredential(0, "https://example.com/Mission0");
  // await Basecamp.addCredential(1, "https://example.com/Mission1");
  // await Basecamp.addCredential(2, "https://example.com/Mission2");
  // await Basecamp.addCredential(3, "https://example.com/Mission3");
};

export default deployBasecamp;

deployBasecamp.tags = ["Basecamp"];
