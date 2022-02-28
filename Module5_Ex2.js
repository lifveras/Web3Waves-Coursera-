const seedPhrase = "trash grow give six zebra sport place walnut lecture glow ivory connect demise empower timber" 
//const seed2 = "piano hand trash advice boring race food cinnamon above average hybrid cake fat dove media"
const dappAddres = "3N6TkxQffijkgpH9xMeT5qVUEmDPX6Ne1Jj"

it('Send Mitok Token to dApp', async () => {
    const assinedMiktokTx = invokeScript({
        dApp: dappAddres,
        call: {
            function: "operationWithTokenMitok",
            args: [ ]
        },
        payment: [{assetId:"BbQo2pnYbeYW6rXPYUL3J2oEYYKh8fJ1pJjMCCzDtaSv", amount: 2}]
    }, seedPhrase);
    const tx = await broadcast(assinedMiktokTx)
    await waitForTx(tx.id);
})
