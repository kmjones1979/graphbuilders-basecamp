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
        enlisteds(
          first: 1
          orderBy: blockTimestamp
          orderDirection: desc
          where: { account: "\${account}" }
        ) {
          id
          account
          blockNumber
          blockTimestamp
          transactionHash
        }
      }
    \`,
  },
})

const [graphResponse] = await Promise.all([graphRequest])
let id = []
if (!graphResponse.error) {
  for (let i = 0; i < 1; i++) {
    id.push(graphResponse.data.data.enlisteds[i].account.toLowerCase())
  }
} else {
  console.log("graphResponse Error, ", graphResponse)
}

if (id[0] === account) {
  return Functions.encodeUint256(1)
} else {
  return Functions.encodeUint256(0)
}
`;

export default javaScriptSourceCode;
