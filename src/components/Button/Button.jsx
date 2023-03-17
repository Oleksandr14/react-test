import styles from "./Button.module.css";

const Button = ({ id, isFollow, handleFollowClick, handleUnfollowClick }) => {
  const buttonText = isFollow ? "Following" : "Follow";
  const buttonColor = isFollow ? styles.follow : styles.following;

  const handleClick = isFollow ? handleUnfollowClick : handleFollowClick;

  return (
    <button
      type="button"
      className={`${styles.btn} ${buttonColor}`}
      onClick={() => {
        handleClick(id);
      }}
      style={{
        padding: isFollow ? "14px 39px" : "14px 56px",
      }}
    >
      {buttonText}
    </button>
  );
};

export default Button;
