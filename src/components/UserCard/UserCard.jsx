import { useState } from "react";

import styles from "./UserCard.module.css";

import boy from "../../images/Hansel.png";

const UserCard = () => {
  const [isFollowing, setIsFollowing] = useState(false);
  const [followersCount, setFollowersCount] = useState(100500);

  const handleFollowClick = () => {
    setIsFollowing(true);
    setFollowersCount((prevCount) => prevCount + 1);
  };

  const handleUnfollowClick = () => {
    setIsFollowing(false);
    setFollowersCount((prevCount) => prevCount - 1);
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <img src={boy} alt="Boy" width="62" />
        <div className={styles.userInfo}>
          <ul className={styles.list}>
            <li>
              <span>777</span> tweets
            </li>
            <li>
              <span>{followersCount.toLocaleString("en-US")}</span> Followers
            </li>
          </ul>
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
        </div>
      </div>
    </div>
  );
};

export default UserCard;
