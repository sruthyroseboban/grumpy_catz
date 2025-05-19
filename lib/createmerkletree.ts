import Papa from "papaparse";
const { MerkleTree } = require('merkletreejs')
const keccak256 = require('keccak256');
export default async function CreateMerkleTree(address: any) {
  const csvData: any[] | ((prevState: never[]) => never[]) = [];
  try {
  const res=await fetch('./abcd.csv')
    .then(response => response.text())
    .then(responseText => {              
        //@ts-ignore
        const csv = Papa.parse(responseText, { header: true });
        //@ts-ignore
        const parsedData = csv?.data;
        for (let i = 0; i < parsedData.length - 1; i++) {
          //@ts-ignore
          csvData.push(parsedData[i].Ethereum_Address)
        }
        const leafNodes = csvData.map((addr: any) => keccak256(addr));
        const merkleTree = new MerkleTree(leafNodes, keccak256, { sortPairs: true });
        const rootHash = merkleTree.getRoot();
        const claimingAddress = keccak256(address);
        const hexProof = merkleTree.getHexProof(claimingAddress);
        const verified=merkleTree.verify(hexProof, claimingAddress, rootHash);
        return verified
    })
    return res
  } catch (error) {
    console.log(error)
   }
}
