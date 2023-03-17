import UserList from "../UserList/UserList";
import Button from "../Button/Button";

import styles from "./UserCard.module.css";

const UserCard = ({ member, increaseFollowers, decreaseFollowers }) => {
  const handleFollowClick = (id) => {
    increaseFollowers(id);
  };

  const handleUnfollowClick = (id) => {
    decreaseFollowers(id);
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <img src={member.avatar} alt="Boy" width="62" />
        <div className={styles.userInfo}>
          <h2 className={styles.title}>{member.user}</h2>
          <UserList followersCount={member.followers} tweets={member.tweets} />
          <Button
            handleFollowClick={handleFollowClick}
            handleUnfollowClick={handleUnfollowClick}
            isFollow={member.isFollow}
            id={member.id}
          />
        </div>
      </div>
    </div>
  );
};

export default UserCard;
