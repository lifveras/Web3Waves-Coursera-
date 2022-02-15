//const accountCooperAdress = '3P_...';
const accountCooperAdress = '3MscT5zsfJmCxHeeUxr4nHVWScPeTuLwpdV';
const accountAliceAdress = '3N2pV6jPT2bdk2JNSchy3hgNfxhTm1gqhhu';
const accountBobAdress = '3NA85nf2yUvKz45TW9GL6t4WEnrguXKtat2';

const accountAliceSeed = 'system evil flag chair drive picture bar deny supply attitude toast toss cargo equip awesome';
const accountBobSeed = 'crawl manual raise save visa rather spice split still unique coffee wash forest wear earth';

describe('multi-signature test suite', () => {
    const wvs = 10 **8;
    // before(async() => {
    //      await setupAccounts({alice: 1 * wvs, bob: 2 * wvs, cooper: 3 * wvs})
    //      console.log("Alice generated seed: " + accounts.alice);
    //      console.log("Bob generated seed: " + accounts.bob);
    // })      
    
    it('multi-signature sign', async () => {
        let txObjectSignedAlice = transfer(
            {
                amount: 2,
                recipient: accountCooperAdress
            },
            accountAliceSeed
        );

        let txObjectSignedAliceBob = transfer(txObjectSignedAlice, accountBobSeed);

        let tx = await broadcast(txObjectSignedAliceBob);

        await waitForTx(tx.id)
        console.log(JSON.stringify(tx));
    })

    //Will fail because has just one signature
    it('multi-signature sign - FAILURE', async () => {
         let txObjectSignedAlice = transfer(
            {
                amount: 1,
                recipient: accountCooperAdress
            }, 
            accountAliceSeed
        );

        //let txObjectSignedAliceBob(txObjectSignedAlice, accountBobSeed)

        let tx = await broadcast(txObjectSignedAlice);
        await waitForTx(tx.id)

        console.log(JSON.stringify(tx));
    })
})
