import { INote } from "../../models/INote";

export interface IViewNoteProps {
  note: INote;
  isOpened: boolean;
  setIsOpened: () => void;
}
