import React, { Component } from "react";
import M from "materialize-css";
import "materialize-css/dist/css/materialize.min.css";

class SubmitButton extends Component {

    componentDidMount =() => {
        const options = {
            onOpenStart: () => {
                console.log("Open Start")
            },
            onOpenEnd: () => {
                console.log("Open end");
            },
            onCloseStart: () => {
                console.log("close start")
            },
            onCloseEnd: () => {
                console.log("Close end")
            },
            inDuration: 250,
            outDuration: 250,
            opacity: 0.5,
            dismissible: false,
            startingTop: "4%",
            endingTop: "10%"
        };

        M.toast.init(this.Toast)
    }

    render(){
        return(
            <div>
                
            </div>
             
        )
    }
}

export default SubmitButton;