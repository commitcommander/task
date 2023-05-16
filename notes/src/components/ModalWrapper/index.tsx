import { Modal } from "../Modal";
import "./styles.scss";
import { IModalWrapperProps } from "./types";

export const ModalWrapper: React.FC<IModalWrapperProps> = ({
  children,
  isOpened,
  outerClick,
}) => {
  const outerClickHandler = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.currentTarget !== e.target) return;
    outerClick();
  };

  return isOpened ? (
    <Modal>
      <div className="modal-wrapper" onClick={outerClickHandler}>
        {children}
      </div>
    </Modal>
  ) : null;
};
