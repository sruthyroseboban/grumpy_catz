export const truncateAddress = (
  address: string,
  separator: string = "••••"
) => {
  if (!address) return "";
  const match = address.match(truncateRegex);
  if (!match) return address;

  let shrank = `${match[1]}${separator}${match[2]}`;
  return String.fromCharCode(parseInt("0x" + shrank, 16));
};

export const toHex = (num: any) => {
  const val = Number(num);
  return "0x" + val.toString(16);
};

export const stringifyAddress = (address: any) => {
  return address?.toString();
};

export const truncateRegex = /^(0x[a-zA-Z0-9]{7})[a-zA-Z0-9]+([a-zA-Z0-9]{4})$/;

export const truncateEthAddress = (
  address?: string,
  separator: string = "••••"
) => {
  if (!address) return "";
  const match = address.match(truncateRegex);
  if (!match) return address;
  return `${match[1]}${separator}${match[2]}`;
};

export const truncateENSAddress = (ensName: string, maxLength: number) => {
  if (ensName.length > maxLength) {
    return ensName.replace(".eth", "").slice(0, maxLength) + "...";
  } else {
    return ensName;
  }
};

export const nFormatter = (num: number, digits: number = 2) => {
  if (num < 10000) return num.toFixed(2);
  const lookup = [
    { value: 1, symbol: "" },
    { value: 1e3, symbol: "k" },
    { value: 1e6, symbol: "m" },
    { value: 1e9, symbol: "g" },
    { value: 1e12, symbol: "t" },
    { value: 1e15, symbol: "p" },
    { value: 1e18, symbol: "e" },
  ];

  const rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
  var item = lookup
    .slice()
    .reverse()
    .find(function (item) {
      return num >= item.value;
    });
  return item
    ? (num / item.value).toFixed(digits).replace(rx, "$1") + item.symbol
    : "0";
};

// export function getExplorerLinkForNft(
//   collectionAddress: string,
//   tokenId: string
// ): string {
//   return `${eth.blockExplorers.default.url}/token/${collectionAddress}?a=${tokenId}`;
// }
