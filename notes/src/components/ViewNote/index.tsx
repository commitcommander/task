import { ModalWrapper } from "../ModalWrapper";
import { IViewNoteProps } from "./types";
import "./styles.scss";
import { cutStr } from "../../utils/cutStr";

export const ViewNote: React.FC<IViewNoteProps> = ({
  isOpened,
  setIsOpened,
  note,
}) => {
  const { title, body, dateCreated, dateModified } = note;
  const isEdited = dateCreated.toString() !== dateModified.toString();
  return (
    <ModalWrapper isOpened={isOpened} outerClick={setIsOpened}>
      <div className="view-note">
        <div className="view-note__text">
          <h2 className="view-note__heading" title={title}>
            {cutStr(title, 20)}
          </h2>
          <span className="view-note__small-text">
            {dateCreated.toLocaleDateString("ru-RU")}
          </span>
        </div>
        <span className="view-note__body">{body}</span>
        {isEdited ? (
          <span className="view-note__small-text">(Edited)</span>
        ) : null}
      </div>
    </ModalWrapper>
  );
};
