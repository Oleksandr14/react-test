import { useState, useEffect } from "react";

import UserList from "../UserList/UserList";
import Button from "../Button/Button";

import styles from "./UserCard.module.css";

import boy from "../../images/Hansel.png";

const KEY_FOLLOWER = "isFollowing";
const KEY_COUNT = "followersCount";

const UserCard = () => {
  const [isFollowing, setIsFollowing] = useState(false);
  const [followersCount, setFollowersCount] = useState(100500);

  useEffect(() => {
    if (localStorage.getItem(KEY_FOLLOWER) === "true") {
      setIsFollowing(true);
      setFollowersCount(JSON.parse(localStorage.getItem(KEY_COUNT)));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(KEY_FOLLOWER, isFollowing);
    localStorage.setItem(KEY_COUNT, followersCount);
  }, [isFollowing, followersCount]);

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
          <UserList followersCount={followersCount} />
          <Button
            isFollowing={isFollowing}
            handleFollowClick={handleFollowClick}
            handleUnfollowClick={handleUnfollowClick}
          />
        </div>
      </div>
    </div>
  );
};

export default UserCard;
