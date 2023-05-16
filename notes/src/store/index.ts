import { action, createStore } from "easy-peasy";
import { IStore } from "./types";

export const store = createStore<IStore>({
  notes: [],
  addNote: action((state, payload) => {
    state.notes.push(payload);
  }),
  deleteNote: action((state, payload) => {
    state.notes = state.notes.filter((note) => note.id !== payload);
  }),
  editNote: action((state, payload) => {
    let filteredNotes = state.notes.filter((note) => note.id !== payload.id);
    state.notes = [...filteredNotes, payload];
  }),
});
