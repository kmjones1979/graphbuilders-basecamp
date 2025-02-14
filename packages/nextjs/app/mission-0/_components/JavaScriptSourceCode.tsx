const javaScriptSourceCode = `
const graphRequest = Functions.makeHttpRequest({
  url: args[1],
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  data: {
    query: \`{
      welcomeMessageChangeds(first: 1) {
        newMessage
      }
    }\`
  },
})

const CHECK = "Welcome to The Graph Builders Basecamp!"

try {
  const [graphResponse] = await Promise.all([graphRequest])
  const message = graphResponse.data.data.welcomeMessageChangeds[0].newMessage
  
  return Functions.encodeUint256(
    message === CHECK ? 1 : 0
  )
} catch (error) {
  return Functions.encodeUint256(0)
}`;

export default javaScriptSourceCode;
