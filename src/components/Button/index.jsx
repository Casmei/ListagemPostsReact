import { Component } from "react";

export class Button extends Component {
    render() {
        const {text, quandoClica} = this.props;
        return (
            <button onClick={quandoClica}>
                {text}
            </button>

        )
    }
}
