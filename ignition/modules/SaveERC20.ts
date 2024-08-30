import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const tokenAddress = "0x17aB05351fC94a1a67Bf3f56DdbB941aE6c63E25";

const SaveERC20Module = buildModule("SaveERC20Module", (m) => {
  const save = m.contract("SaveERC20", [tokenAddress]);

  return { save };
});

export default SaveERC20Module;

// Deployed SaveERC20: 0x52C84043CD9c865236f11d9Fc9F56aa003c1f922
