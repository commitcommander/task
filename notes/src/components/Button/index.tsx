import { IButtonProps } from "./types";
import "./styles.scss";

export const Button: React.FC<IButtonProps> = ({ label, ...rest }) => {
  return (
    <button className="button" {...rest}>
      <span className="button__text">{label}</span>
    </button>
  );
};
