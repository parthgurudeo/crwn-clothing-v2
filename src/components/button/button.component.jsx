// default , signin , inverted
import './button.styles.scss'
const BUTTON_TYPE_classes ={
    google :'google-sign-in',
    inverted:'inverted'
}
const Button =({children , buttonType,...otherProps})=>{



    return(
        <button className={`button-container ${BUTTON_TYPE_classes[buttonType]}`}{...otherProps}>
            {children}
        </button>
    )
}

export default Button