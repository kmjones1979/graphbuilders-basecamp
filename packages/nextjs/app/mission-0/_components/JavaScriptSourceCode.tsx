const javaScriptSourceCode = `const account = args[0].toLowerCase()
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
        welcomeMessageChangeds(first: 1) {
          id
          newMessage
          blockNumber
          blockTimestamp
          transactionHash
        }
      }
    \`,
  },
})

const check = "Welcome to The Graph Builders Basecamp!"

const [graphResponse] = await Promise.all([graphRequest])
let newMessage = []
if (!graphResponse.error) {
  for (let i = 0; i < 1; i++) {
    newMessage.push(graphResponse.data.data.welcomeMessageChangeds[i].newMessage)
    console.log(i)
  }
} else {
  console.log("graphResponse Error, ", graphResponse)
}

if (newMessage[0] === check) {
  console.log(newMessage[0])
  return Functions.encodeUint256(1)
} else {
  console.log(newMessage[0])
  return Functions.encodeUint256(0)
}`;

export default javaScriptSourceCode;
