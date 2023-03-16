import styles from "./Button.module.css";

const Button = ({ isFollowing, handleFollowClick, handleUnfollowClick }) => {
  return (
    <button
      type="button"
      className={styles.btn}
      onClick={isFollowing ? handleUnfollowClick : handleFollowClick}
      style={{
        padding: isFollowing ? "14px 39px" : "14px 56px",
        backgroundColor: isFollowing ? "#5CD3A8" : "#EBD8FF",
      }}
    >
      {isFollowing ? "Following" : "Follow"}
    </button>
  );
};

export default Button;
