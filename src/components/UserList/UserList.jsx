import styles from "./UserList.module.css";

const UserList = ({ followersCount }) => {
  return (
    <ul className={styles.list}>
      <li>
        <span>777</span> tweets
      </li>
      <li>
        <span>{followersCount.toLocaleString("en-US")}</span> Followers
      </li>
    </ul>
  );
};

export default UserList;
