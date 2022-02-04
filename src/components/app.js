import ReactDOM from "react-dom";
import React from "react";

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
    render(){
        return (
            <div className = "container">
                <input className = "btn btn-primary" type="submit" values="Alert" onClick={this.authFunc}/>
            </div>
        )
    }
}

const app = document.getElementById('app');

if(app){
    ReactDOM.render(<App/>, app);
}

