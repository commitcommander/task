import { useState } from "react";
import { AddNoteButton } from "../AddNoteButton";
import { setBodyOverflow } from "../../utils/setBodyOverflow";
import { AddNoteForm } from "../AddNoteForm";

export const NotesList = () => {
  const [isAddModalOpened, setIsModalOpened] = useState<boolean>(false);

  const setModalHandler = () => {
    setBodyOverflow();
    setIsModalOpened((prev) => !prev);
  };
  return (
    <>
      <AddNoteButton onClick={setModalHandler} />
      <AddNoteForm isOpened={isAddModalOpened} setIsOpened={setModalHandler} />
    </>
  );
};
