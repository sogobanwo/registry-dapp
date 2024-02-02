import contractABI from "../abi.json";
const { ethers} = require("ethers");

export async function requestAccount() {
  await window.ethereum.request({ method: "eth_requestAccounts" });
}

export async function getDetails() {

  if (typeof window.ethereum !== "undefined") {
    await requestAccount();
    const provider = new ethers.BrowserProvider(window.ethereum);
    const signer = await provider.getSigner();
    const contract = new ethers.Contract(
      "0x5FbDB2315678afecb367f032d93F642f64180aa3",
      contractABI,
      signer
    );
    console.log("clicked")
    try {
      const data = await contract.getEntityDetails();
      const [entityName, entityAge] = data;
      console.log("details gotten");
      // console.log(transaction.wait)
      console.log(entityName, entityAge)
    } catch (err) {
      console.log(err);
    }
  }
}

export async function updateDetailsAge(age) {
  if (typeof window.ethereum !== "undefined") {
    await requestAccount();
    const provider = new ethers.BrowserProvider(window.ethereum);
    const signer = await provider.getSigner();
    const contract = new ethers.Contract(
      "0x5FbDB2315678afecb367f032d93F642f64180aa3",
      contractABI,
      signer
    );
    try {
      const transaction = await contract.updateAge(age);
      console.log("Age updated");
      console.log(transaction.wait)
      return transaction;
    } catch (err) {
      console.log(err);
    }
  }
}

export async function updateDetailsName(name) {
  if (typeof window.ethereum !== "undefined") {
    await requestAccount();
    const provider = new ethers.BrowserProvider(window.ethereum);
    const signer = await provider.getSigner();
    const contract = new ethers.Contract(
      "0x5FbDB2315678afecb367f032d93F642f64180aa3",
      contractABI,
      signer
    );
    try {
      const transaction = await contract.updateName(name);
      console.log("Name Updated");
      console.log(transaction.wait)
      return transaction;
    } catch (err) {
      console.log(err);
    }
  }
}
