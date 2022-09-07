import { Component } from "react";
import './style.css'


export class Button extends Component {
    render() {
        const {text, quandoClica, morePosts} = this.props;
        return (
            <button className="button"
                disabled={morePosts}
                onClick={quandoClica}>
                {text}
            </button>

        )
    }
}
