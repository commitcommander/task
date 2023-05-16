import { INote } from "../models/INote";
import { Action } from "easy-peasy";

export interface IStore {
  notes: INote[];
  addNote: Action<IStore, INote>;
  deleteNote: Action<IStore, string>;
  editNote: Action<IStore, INote>;
}
