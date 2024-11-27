import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";
import { Contract } from "ethers";

/**
 * Deploys a contract named "ValidatorM0" using the deployer account and
 * constructor arguments set to the deployer address
 *
 * @param hre HardhatRuntimeEnvironment object.
 */
const deployValidatorM0: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployer } = await hre.getNamedAccounts();
  const { deploy } = hre.deployments;

  const basecamp = await hre.ethers.getContract<Contract>("Basecamp", deployer);
  const basecampAddress = await basecamp.getAddress();

  const owner = "0x007e483cf6df009db5ec571270b454764d954d95";

  await deploy("ValidatorM0", {
    from: deployer,
    args: [owner, basecampAddress, 0],
    log: true,
    autoMine: true,
  });

  // Get the deployed contract to interact with it after deploying.
  //const ValidatorM0 = await hre.ethers.getContract<Contract>("ValidatorM0", deployer);
};

export default deployValidatorM0;

deployValidatorM0.tags = ["ValidatorM0"];
