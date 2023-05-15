import { useForm } from "react-hook-form";
import { ModalWrapper } from "../ModalWrapper";
import "./styles.scss";
import { InputRef } from "../Input";
import { TextAreaRef } from "../TextArea";
import { Button } from "../Button";
import { IAddNoteFormProps } from "./types";
import { useStoreActions } from "../../store/hooks";
import { v4 as uuidv4 } from "uuid";

export const AddNoteForm: React.FC<IAddNoteFormProps> = ({
  isOpened,
  setIsOpened,
}) => {
  const { addNote } = useStoreActions((actions) => actions);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
    defaultValues: {
      title: "",
      body: "",
    },
  });

  const submitForm = handleSubmit((data) => {
    const currentDate = new Date();
    addNote({
      ...data,
      id: uuidv4(),
      dateCreated: currentDate,
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
      <div className="add-note-form">
        <form onSubmit={submitForm} className="add-note-form__form">
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
