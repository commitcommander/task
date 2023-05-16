import { useForm } from "react-hook-form";
import { ModalWrapper } from "../ModalWrapper";
import "./styles.scss";
import { InputRef } from "../Input";
import { TextAreaRef } from "../TextArea";
import { Button } from "../Button";
import { IEditNoteFormProps } from "./types";
import { useStoreActions } from "../../store/hooks";

export const EditNoteForm: React.FC<IEditNoteFormProps> = ({
  isOpened,
  setIsOpened,
  note,
}) => {
  const { editNote } = useStoreActions((actions) => actions);
  const { title, body } = note;
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
    defaultValues: {
      title,
      body,
    },
  });

  const submitForm = handleSubmit((data) => {
    const currentDate = new Date();
    editNote({
      ...note,
      ...data,
      dateModified: currentDate,
    });
    reset();
    setIsOpened();
  });

  const outerClickHandler = () => {
    reset();
    setIsOpened();
  };

  return (
    <ModalWrapper isOpened={isOpened} outerClick={outerClickHandler}>
      <div className="edit-note-form">
        <form onSubmit={submitForm} className="edit-note-form__form">
          <InputRef
            error={errors.title?.message}
            label="Title"
            {...register("title", { required: "Title is required" })}
          />
          <TextAreaRef
            label="Body"
            error={errors.body?.message}
            {...register("body", { required: "Body is required" })}
          />
          <Button label="Create note" />
        </form>
      </div>
    </ModalWrapper>
  );
};
