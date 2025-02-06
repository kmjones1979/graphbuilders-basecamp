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
        commsEstablisheds(first: 1) {
          account
          blockNumber
          blockTimestamp
          id
          isCommsEstablished
          transactionHash
        }
      }
    \`,
  },
})

const [graphResponse] = await Promise.all([graphRequest])
let subgraphData = []
if (!graphResponse.error) {
  for (let i = 0; i < 1; i++) {
    subgraphData.push(graphResponse.data.data.commsEstablisheds[i].account)
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
