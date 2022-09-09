import './style.css'


const Button = ({text, morePosts, quandoClica}) => (
    <button className="button"
        disabled={morePosts}
        onClick={quandoClica}>
        {text}
    </button>
)

export default Button;
