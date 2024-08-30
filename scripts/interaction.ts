import { ethers } from "hardhat";

async function main() {
  const web3CXITokenAddress = "0xe336d36FacA76840407e6836d26119E1EcE0A2b4";
  const web3CXI = await ethers.getContractAt("IERC20", web3CXITokenAddress);

  const saveERC20ContractAddress = "0x95CA0a568236fC7413Cd2b794A7da24422c2BBb6";
  const saveERC20 = await ethers.getContractAt(
    "ISaveERC20",
    saveERC20ContractAddress
  );

  // Approve savings contract to spend token
  const approvalAmount = ethers.parseUnits("1000", 18);

  const approveTx = await web3CXI.approve(saveERC20, approvalAmount);
  approveTx.wait();

  const contractBalanceBeforeDeposit = await saveERC20.getContractBalance();
  console.log("Contract balance before :::", contractBalanceBeforeDeposit);

  const depositAmount = ethers.parseUnits("150", 18);
  const depositTx = await saveERC20.deposit(depositAmount);

//   console.log(depositTx);

  depositTx.wait();

  const contractBalanceAfterDeposit = await saveERC20.getContractBalance();

  console.log("Contract balance after :::", contractBalanceAfterDeposit);

  // Withdrawal Interaction
  const withdrawalAmount = ethers.parseUnits("30", 18);
  const withdrawalTx = await saveERC20.withdraw(withdrawalAmount);
  console.log(withdrawalTx);
  withdrawalTx.wait();

  const contractBalanceAfterWithdrawal = await saveERC20.getContractBalance();
  console.log(
    "Contract balance After withdraw",
    contractBalanceAfterWithdrawal
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
