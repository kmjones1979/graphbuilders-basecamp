const javaScriptSourceCode = `
const account = args[0].toLowerCase()
const query_url = args[1]

const graphRequest = Functions.makeHttpRequest({
  url: \`\${query_url}\`,
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },

  data: {
    query: \`
    {
      holders(first: 1, orderDirection: desc, orderBy: blockTimestamp) {
        balance
        blockNumber
        blockTimestamp
        id
        transactionHash
        transfers(first: 1) {
          from
          to {
            id
          }
        }
      }
    }
    \`,
  },
})

const [graphResponse] = await Promise.all([graphRequest])
let subgraphData = []
if (!graphResponse.error) {
  for (let i = 0; i < 1; i++) {
    subgraphData.push(graphResponse.data.data.holders[i].transfers[0].to.id)
    console.log(i)
  }
} else {
  console.log("graphResponse Error, ", graphResponse)
}

if (subgraphData[0] === account) {
  return Functions.encodeUint256(1)
} else {
  return Functions.encodeUint256(0)
}`;

export default javaScriptSourceCode;
