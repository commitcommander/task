import { BsFillTrashFill } from "react-icons/bs";
import "./styles.scss";

export const DeleteNote = () => {
  return (
    <div className="delete-note">
      <BsFillTrashFill size={30} color="white" />
    </div>
  );
};
