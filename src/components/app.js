import ReactDOM from "react-dom";
import React from "react";
import Waves from "@waves/signer";
import Provider from "@waves.exchange/provider-web";

class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {};
        /* Se o bind não for invocado aqui, quando for preciso chamar
        * this.authFunc, o js vai achar que isso está no escopo global
        * Com o Bind, o objeto this (o próprio APP) ficará vinculado com a
        * execução da função, fazendoá trabalhar no contexto correto.
        */
        this.authFunc = this.authFunc.bind(this);
        this.getAccountByWavesSigner = this.getAccountByWavesSigner.bind(this);
        this.doDataTransactionByWavesSigner = this.doDataTransactionByWavesSigner.bind(this);
        this.doTransactionByWavesSigner = this.doTransactionByWavesSigner.bind(this);
        this.doTransferByWavesSigner = this.doTransferByWavesSigner.bind(this);
    }
    authFunc(){
        const authData = {data: "Auth on my site"};
        if(WavesKeeper){
            WavesKeeper.auth(authData)
                    .then(auth => {
                        console.log(auth);
                    })
                    .catch(error=>{
                        console.error(error);
                    })
        } else{
            alert("To Auth WavesKeeper should be installed.");
        }
    }

    getAccountByWavesSigner(){
        console.log("Entrou!");
        waves.login()
        .then(userData =>{
            console.log(userData);
            document.querySelector("result-waves")
            .innerHTML = `authorized as <br> ${userData.address}`;  
        })
        .catch(error =>{
            console.error(error);
        })
    }

    doTransactionByWavesSigner(){
        waves.invoke({
            dApp: "3MuN7D8r19zdvSpAd1L91Gs88bcgwUFy2mn",
            call: {
                function: "faucet"
            }
        })
        .broadcast()
        .then(console.log)
        .catch(error =>{
            console.error(error);
        })
    }

    doDataTransactionByWavesSigner(){
        waves.data({
            data: [
                {key: "lastCall", value: String(new Date()), type: 'string'}
            ]
        })
        .broadcast()
        .then(console.log)
        .catch(error => {
            console.error(error);
        })
    }

    doTransferByWavesSigner(){
        waves.transfer({
            recipient: "3MuN7D8r19zdvSpAd1L91Gs88bcgwUFy2mn",
            amount: 1,
            attachment: base58("Happy New Year!")
        })
        .broadcast()
        .then(console.log)
        .catch(error =>{
            console.error(error);
        })
    }

    render(){
        return (
            <div className = "container">
                <input className = "btn btn-primary" type="submit" values="Alert" onClick={this.authFunc}/>
                <input className = "btn btn-primary" type="submit" values="Alert" onClick={this.getAccountByWavesSigner}/>
                <input className = "btn btn-primary" type="submit" values="Alert" onClick={this.doTransactionByWavesSigner}/>
                <input className = "btn btn-primary" type="submit" values="Alert" onClick={this.doDataTransactionByWavesSigner}/>
                <input className = "btn btn-primary" type="submit" values="Alert" onClick={this.doTransferByWavesSigner}/>
                <div class="result-waves"></div>
            </div>
        )
    }
}

 //Configuration of TestNet Signer and Waves.Exchange provider
const waves = new Waves({NODE_URL: 'https://nodes-testnet.wavesnodes.com'});
const provider = new Provider('https://testnet.waves.exchange/signer/');
waves.setProvider(provider);

const app = document.getElementById('app');

if(app){
    ReactDOM.render(<App/>, app);
}
