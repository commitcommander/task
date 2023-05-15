import { INote } from "../../models/INote";
import { MdDragIndicator } from "react-icons/md";
import "./styles.scss";

export const NotePreview: React.FC<INote> = ({ title }) => {
  return (
    <div className="note">
      <span className="note__text">{title}</span>
      <MdDragIndicator size={40} color="#5E5E5E" />
    </div>
  );
};
