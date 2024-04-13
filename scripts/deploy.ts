import { ethers } from "hardhat";

async function main() {
  const currentTimestampInSeconds = Math.round(Date.now() / 1000);
  const unlockTime = currentTimestampInSeconds + 60;

  const lockedAmount = ethers.parseEther("0.001");

  const lock = await ethers.deployContract("Lock", [unlockTime], {
    value: lockedAmount,
  });

  await lock.waitForDeployment();

  console.log(
    `Lock with ${ethers.formatEther(
      lockedAmount
    )}ETH and unlock timestamp ${unlockTime} deployed to ${lock.target}`
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

// 0x678901Bb3Cc4Dd5Ee6Ff7Aa8BbCcdDeEfF123456, 37373, 501
// 0x789012Bb3Cc4Dd5Ee6Ff7Aa8BbCcdDeEfF123456, 37474, 502
// 0x890123Bb3Cc4Dd5Ee6Ff7Aa8BbCcdDeEfF123456, 37575, 503
// 0x901234Bb3Cc4Dd5Ee6Ff7Aa8BbCcdDeEfF123456, 37676, 504
// 0x012345Bb3Cc4Dd5Ee6Ff7Aa8BbCcdDeEfF123456, 37777, 505
// 0x123456Bb3Cc4Dd5Ee6Ff7Aa8BbCcdDeEfF123456, 37878, 506
// 0x234567Bb3Cc4Dd5Ee6Ff7Aa8BbCcdDeEfF123456, 37979, 507
// 0x345678Bb3Cc4Dd5Ee6Ff7Aa8BbCcdDeEfF123456, 38080, 508
// 0x456789Bb3Cc4Dd5Ee6Ff7Aa8BbCcdDeEfF123456, 38181, 509
// 0x567890Bb3Cc4Dd5Ee6Ff7Aa8BbCcdDeEfF123456, 38282, 510
// 0x678901Bb3Cc4Dd5Ee6Ff7Aa8BbCcdDeEfF123456, 38383, 511
