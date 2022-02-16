const accountConsumerAddress = "3MwrbksXinhUhJ9ewTxuxiPfKVsTx9GCbYC";
const accountAliceAddress = '3N2pV6jPT2bdk2JNSchy3hgNfxhTm1gqhhu';
const accountAliceSeed = 'system evil flag chair drive picture bar deny supply attitude toast toss cargo equip awesome';
const accountBobAddress = '3N4MnQJWtixd7XMVtDSmWmfLj8M5PvLPHZo';
const accountBobSeed = 'crawl manual raise save visa rather spice split still unique coffee wash forest wear earth';

it('Buys item A from dApp', async () => {
    let txObjectSigned = invokeScript(
        {
            dApp: accountConsumerAddress,
            call:{
                "function": "customerBuyProduct",
                "args": [
                    {
                        "type": "string",
                        "value": "item_A"
                    }
                ]
            },
            payment: [
                {amount:200, assetId: null}
            ]
        },
        accountBobSeed
    )

    let tx = await broadcast(txObjectSigned);
    await waitForTx(tx);
})

it('Buys item B from dApp', async () => {
    let txObjectSigned = invokeScript(
        {
            dApp: accountConsumerAddress,
            call:{
                "function": "customerBuyProduct",
                "args": [
                    {
                        "type": "string",
                        "value": "item_B"
                    }
                ]
            },
            payment: [
                {amount:100, assetId: null}
            ]
        },
        accountAliceSeed
    )

    let tx = await broadcast(txObjectSigned);
    await waitForTx(tx);
})
