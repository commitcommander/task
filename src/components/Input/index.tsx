import { InputProps } from "./types";
import "./styles.scss";
import { conditionClass } from "../../utils/conditionClass";
import { forwardRef, ForwardRefRenderFunction } from "react";

const Input: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { label, error, ...rest },
  ref
) => {
  return (
    <div className="input-wrapper">
      <label className="input-wrapper__label">{label}</label>
      <input
        ref={ref}
        className={[
          "input-wrapper__input",
          conditionClass(!!error, "input-wrapper__input_error"),
        ].join(" ")}
        {...rest}
      />
      <span className="input-wrapper__error">{error}</span>
    </div>
  );
};

export const InputRef = forwardRef(Input);
