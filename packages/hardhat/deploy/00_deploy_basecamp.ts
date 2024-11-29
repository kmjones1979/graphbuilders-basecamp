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

  const owner = "0x007E483Cf6Df009Db5Ec571270b454764d954d95";
  const minter = "0x007E483Cf6Df009Db5Ec571270b454764d954d95";

  console.log("Deploying Basecamp...");
  await deploy("Basecamp", {
    from: deployer,
    args: [owner, minter],
    log: true,
    autoMine: true,
  });

  const Basecamp = await hre.ethers.getContract<Contract>("Basecamp", deployer);
  console.log("Basecamp deployed at", await Basecamp.getAddress());

  // console.log("Adding credentials...");
  // await Basecamp.addCredential(true, 0, "ORIENTATION");
  // await Basecamp.addCredential(true, 1, "ENLIST");
  // await Basecamp.addCredential(true, 2, "COMMS");
  // await Basecamp.addCredential(true, 3, "MOON");
};

export default deployBasecamp;

deployBasecamp.tags = ["Basecamp"];
