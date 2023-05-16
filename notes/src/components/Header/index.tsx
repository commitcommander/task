import { TbNotes } from "react-icons/tb";
import { useStoreState } from "../../store/hooks";
import "./styles.scss";

export const Header = () => {
  const { notes } = useStoreState((state) => state);
  const { length } = notes;
  return (
    <header className="header">
      <div className="header__content-wrapper">
        <TbNotes color="#5E5E5E" size={50} />
        <span className="header__logo-text">React Notes</span>
      </div>
      <div className="header__content-wrapper">
        <span className="header__notes-count">
          {length ? `${length} notes created` : "No notes yet"}
        </span>
      </div>
    </header>
  );
};
