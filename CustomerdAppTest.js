const accountConsumerAddress = "3MwrbksXinhUhJ9ewTxuxiPfKVsTx9GCbYC";
const accountAliceAddress = '3N2pV6jPT2bdk2JNSchy3hgNfxhTm1gqhhu';
const accountAliceSeed = 'system evil flag chair drive picture bar deny supply attitude toast toss cargo equip awesome';

it('Buys item A from dApp', async () => {
    let txObjectSigned = invokeScript(
        {
            dApp: accountConsumerAddress,
            call:{
                "function": "customerBuyA",
                "args": [
                    {
                        "type": "integer",
                        "value": 200
                    }
                ]
            },
            payment: [
                {amount:200, assetId: null}
            ]
        },
        accountAliceSeed
    )

    let tx = await broadcast(txObjectSigned);
    await waitForTx(tx);
})

it('Buys item B from dApp', async () => {
    let txObjectSigned = invokeScript(
        {
            dApp: accountConsumerAddress,
            call:{
                "function": "customerBuyB",
                "args": [
                    {
                        "type": "integer",
                        "value": 100
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
