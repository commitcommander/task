import Lottie from "lottie-react";
import "./styles.scss";
import notFoundAnimation from "../../animations/empty-list.json";

export const EmptyListAnimation = () => {
  return (
    <div className="empty-list">
      <Lottie
        animationData={notFoundAnimation}
        loop={false}
        className="empty-list__animation"
      />
    </div>
  );
};
