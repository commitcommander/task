import { INote } from "../../models/INote";
import { MdDragIndicator } from "react-icons/md";
import "./styles.scss";
import { cutStr } from "../../utils/cutStr";
import { ViewNote } from "../ViewNote";
import { useState } from "react";
import { AiOutlineEye } from "react-icons/ai";
import { AiOutlineEdit } from "react-icons/ai";
import { EditNoteForm } from "../EditNoteForm";

export const NotePreview: React.FC<INote> = (note) => {
  const { title, body } = note;
  const [isViewNoteModalOpened, setIsViewNoteModalOpened] =
    useState<boolean>(false);
  const [isEditNoteModalOpened, setIsEditNoteModalOpened] =
    useState<boolean>(false);
  return (
    <>
      <div className="note">
        <div className="note__text-wrapper">
          <span className="note__title" title={title}>
            {cutStr(title, 20)}
          </span>
          <span className="note__body">{cutStr(body, 50)}</span>
        </div>
        <div className="note__buttons-wrapper">
          <button
            className="note__button"
            onClick={() => setIsEditNoteModalOpened(true)}
          >
            <AiOutlineEdit size={40} color="#5E5E5E" />
          </button>
          <button
            className="note__button"
            onClick={() => setIsViewNoteModalOpened(true)}
          >
            <AiOutlineEye size={40} color="#5E5E5E" />
          </button>
          <MdDragIndicator size={40} color="#5E5E5E" />
        </div>
      </div>
      <ViewNote
        note={note}
        setIsOpened={() => setIsViewNoteModalOpened(false)}
        isOpened={isViewNoteModalOpened}
      />
      <EditNoteForm
        note={note}
        setIsOpened={() => setIsEditNoteModalOpened(false)}
        isOpened={isEditNoteModalOpened}
      />
    </>
  );
};
