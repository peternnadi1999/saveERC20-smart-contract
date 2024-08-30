import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const tokenAddress = "0xe336d36FacA76840407e6836d26119E1EcE0A2b4";

const SaveERC20Module = buildModule("SaveERC20Module", (m) => {
  const save = m.contract("SaveERC20", [tokenAddress]);

  return { save };
});

export default SaveERC20Module;

// Deployed SaveERC20: 0x95CA0a568236fC7413Cd2b794A7da24422c2BBb6
