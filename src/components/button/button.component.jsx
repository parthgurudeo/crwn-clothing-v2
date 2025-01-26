//  default button , inverted button, google sign in
import "./button.styles.scss";
const BUTTON_TYPE_CLASSES = {
  google: "google-sign-in",
  inverted: "inverted",
};

export const Button = ({ children, buttonType }) => {
  return (
    <button
      onClick={() => {}}
      className={`button-container ${BUTTON_TYPE_CLASSES[buttonType]} `}
    >
      {children}
    </button>
  );
};
