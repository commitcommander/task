import { AiFillPlusCircle } from "react-icons/ai";
import "./styles.scss";

export const AddNoteButton: React.FC<
  React.ComponentPropsWithoutRef<"button">
> = ({ ...rest }) => {
  return (
    <button className="add-note" {...rest}>
      <AiFillPlusCircle color="#b47aea" className="add-note__icon" size={30} />
      <span className="add-note__text">Add note</span>
    </button>
  );
};
