import React, { useState } from "react";
import { AddNoteButton } from "../AddNoteButton";
import { setBodyOverflow } from "../../utils/setBodyOverflow";
import { AddNoteForm } from "../AddNoteForm";
import { useStoreActions, useStoreState } from "../../store/hooks";
import SwipeToDelete from "react-swipe-to-delete-ios";
import { NotePreview } from "../NotePreview";
import { DeleteNote } from "../DeleteNote";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import "./styles.scss";
import { InputRef } from "../Input";
import { INote } from "../../models/INote";
import { SortNotes } from "../SortNotes";
import { SortVars } from "../SortNotes/types";

export const NotesList = () => {
  const [isAddModalOpened, setIsModalOpened] = useState<boolean>(false);
  const { notes } = useStoreState((state) => state);
  const { deleteNote } = useStoreActions((state) => state);
  const [searchNoteStr, setSearchNoteStr] = useState<string>("");
  const [sortBy, setSortBy] = useState<SortVars>("title");

  const setModalHandler = () => {
    setBodyOverflow();
    setIsModalOpened((prev) => !prev);
  };

  const searchNotesHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchNoteStr(e.target.value);
  };

  const filterNotes = (note: INote) => {
    return (
      note.body.includes(searchNoteStr) || note.title.includes(searchNoteStr)
    );
  };

  const sortFunc = (note1: INote, note2: INote): number => {
    switch (sortBy) {
      case "title":
        if (note1.title < note2.title) {
          return -1;
        } else if (note1.title > note2.title) {
          return 1;
        } else {
          return 0;
        }
      case "dateCreated":
        return note1.dateCreated.getTime() - note2.dateCreated.getTime();
      case "dateModified":
        return note1.dateModified.getTime() - note2.dateModified.getTime();
    }
  };
  return (
    <div className="note-list">
      <div className="note-list__header">
        <AddNoteButton onClick={setModalHandler} />
        <InputRef
          placeholder="Search note"
          error={null}
          value={searchNoteStr}
          onChange={searchNotesHandler}
        />
        <div className="note-list__header-sort">
          <SortNotes value={sortBy} setValue={setSortBy} />
        </div>
      </div>
      <AddNoteForm isOpened={isAddModalOpened} setIsOpened={setModalHandler} />
      <TransitionGroup className="note-list__items-wrapper">
        {notes
          .filter(filterNotes)
          .sort(sortFunc)
          .map((note) => {
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
    </div>
  );
};
