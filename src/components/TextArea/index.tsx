import { conditionClass } from "../../utils/conditionClass";
import { TextAreaProps } from "./types";
import "./styles.scss";
import { ForwardRefRenderFunction, forwardRef } from "react";

const TextArea: ForwardRefRenderFunction<HTMLTextAreaElement, TextAreaProps> = (
  { label, error, ...rest },
  ref
) => {
  return (
    <div className="textarea-wrapper">
      <label className="textarea-wrapper__label">{label}</label>
      <textarea
        ref={ref}
        className={[
          "textarea-wrapper__textarea",
          conditionClass(!!error, "textarea-wrapper__textarea_error"),
        ].join(" ")}
        {...rest}
      />
      <span className="textarea-wrapper__error">{error}</span>
    </div>
  );
};

export const TextAreaRef = forwardRef(TextArea);
