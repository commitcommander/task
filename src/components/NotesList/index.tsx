import { useState } from "react";
import { AddNoteButton } from "../AddNoteButton";
import { setBodyOverflow } from "../../utils/setBodyOverflow";
import { AddNoteForm } from "../AddNoteForm";
import { useStoreActions, useStoreState } from "../../store/hooks";
import SwipeToDelete from "react-swipe-to-delete-ios";
import { NotePreview } from "../NotePreview";
import { DeleteNote } from "../DeleteNote";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import "./styles.scss";

export const NotesList = () => {
  const [isAddModalOpened, setIsModalOpened] = useState<boolean>(false);
  const { notes } = useStoreState((state) => state);
  const { deleteNote } = useStoreActions((state) => state);

  const setModalHandler = () => {
    setBodyOverflow();
    setIsModalOpened((prev) => !prev);
  };
  return (
    <>
      <AddNoteButton onClick={setModalHandler} />
      <AddNoteForm isOpened={isAddModalOpened} setIsOpened={setModalHandler} />
      <TransitionGroup className="note-list__items-wrapper">
        {notes.map((note) => {
          return (
            <CSSTransition
              key={note.id}
              timeout={500}
              classNames="note-list__item"
            >
              <SwipeToDelete
                height={70}
                deleteColor="#EF6161"
                onDelete={() => deleteNote(note.id)}
                className=""
                deleteComponent={<DeleteNote />}
              >
                <NotePreview {...note} />
              </SwipeToDelete>
            </CSSTransition>
          );
        })}
      </TransitionGroup>
    </>
  );
};
