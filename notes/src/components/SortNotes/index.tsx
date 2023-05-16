import React, { useEffect, useRef, useState } from "react";
import { ISortNotesProps, SortVars } from "./types";
import lodash from "lodash";
import "./styles.scss";
import { conditionClass } from "../../utils/conditionClass";

export const SortNotes: React.FC<ISortNotesProps> = ({ value, setValue }) => {
  const variants = ["title", "dateCreated", "dateModified"];
  const [isOpened, setIsOpened] = useState<boolean>(false);

  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const closeMenu = (e: Event) => {
    if (!dropdownRef.current?.contains(e.target as Document)) {
      setIsOpened(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", closeMenu);

    return () => {
      document.removeEventListener("click", closeMenu);
    };
  }, []);

  const buttonClickHandler = (variant: string) => {
    setValue(variant as SortVars);
    setIsOpened(false);
  };

  return (
    <div className="sort-by">
      <span className="sort-by__title">Sort by</span>
      <div className="sort-by__button-bg" ref={dropdownRef}>
        <button
          className="sort-by__button"
          onClick={() => setIsOpened((prev) => !prev)}
        >
          <span>{lodash.startCase(value)}</span>
        </button>

        <ul
          className={[
            "sort-by__variants-wrapper",
            conditionClass(!isOpened, "sort-by__variants-wrapper_closed"),
          ].join(" ")}
        >
          {variants.map((variant) => {
            return (
              <button
                key={variant}
                className="sort-by__button"
                onClick={() => buttonClickHandler(variant)}
              >
                <li>{lodash.startCase(variant)}</li>
              </button>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
