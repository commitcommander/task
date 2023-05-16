import { INote } from "../../models/INote";

export interface IEditNoteFormProps {
  isOpened: boolean;
  setIsOpened: () => void;
  note: INote;
}
