const seedPhase = "piano hand trash advice boring race food cinnamon above average hybrid cake fat dove media"
const issuerAddress = address(seedPhase);

   
it('Issue "Mitok" tokens', async () => {
   const customTokenParams = {
       name: 'Mitok',
       quantity: 100, //total euros to issue (in cents)
       decimals: 0, // eurocents
       reissuable: true, // total amount of euros will never changed
       script: "base64:AwZd0cYf",
       description: "Simple example of 'custom token' for 'Mastering Web3 with Waves'" // we can write here anything up to 1000 characters
   }

   const signedIssueTx = issue(customTokenParams, seedPhase);
   let tx = await broadcast(signedIssueTx);
   await waitForTx(tx.id);

   console.log("Token was successfully issued: " + tx.id);
});

it('Re-issue "Mitok" token', async () => {
    const reissueTokenParams = {
       quantity: 100, //10 new coupons, we will have 110 in total
       assetId: "BbQo2pnYbeYW6rXPYUL3J2oEYYKh8fJ1pJjMCCzDtaSv", // put an assetId here
       reissuable: true, // keep it reissuable
   }

   const signedIssueTx = reissue(reissueTokenParams, seedPhase);
   let tx = await broadcast(signedIssueTx);
   await waitForTx(tx.id);

   console.log("Token was successfully reissued: " + tx.id);
});

it('Transfer 50 Mitokens', async () => {
   const ttx = transfer({assetId:"BbQo2pnYbeYW6rXPYUL3J2oEYYKh8fJ1pJjMCCzDtaSv", amount: 50, recipient: "3MwrbksXinhUhJ9ewTxuxiPfKVsTx9GCbYC"})

   let tx = await broadcast(ttx);
   await waitForTx(tx.id);

   console.log("Token was successfully transfered: " + tx.id);
});

it('Update "Mitok" token', async () => {
    const updateTokenParams = {
       name: 'Mitok',
       assetId: "BbQo2pnYbeYW6rXPYUL3J2oEYYKh8fJ1pJjMCCzDtaSv",
       script:  "base64:AwQAAAAHJG1hdGNoMAUAAAACdHgDCQAAAQAAAAIFAAAAByRtYXRjaDACAAAAF0ludm9rZVNjcmlwdFRyYW5zYWN0aW9uBAAAAAFpBQAAAAckbWF0Y2gwCQAAAAAAAAIIBQAAAAFpAAAABGRBcHAJAQAAABxAZXh0clVzZXIoYWRkcmVzc0Zyb21TdHJpbmcpAAAAAQIAAAAjM044MURrMVd1VXY3VUt0M2lucVdWWU44MUo4Vkhqb1YzTUMHjM/SZQ==",
       reissuable: true,
      description: "Token Mitok updated" 
   }

   const signedIssueTx = updateAssetInfo(updateTokenParams, seedPhase);
   let tx = await broadcast(signedIssueTx);
   await waitForTx(tx.id);

   console.log("Token was successfully reissued: " + tx.id);
});
