export interface ISortNotesProps {
  value: SortVars;
  setValue: React.Dispatch<React.SetStateAction<SortVars>>;
}

export type SortVars = "title" | "dateCreated" | "dateModified";
