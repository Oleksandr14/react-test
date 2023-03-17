import styles from "./UserList.module.css";

const UserList = ({ followersCount, tweets }) => {
  return (
    <ul className={styles.list}>
      <li>
        <span>{tweets}</span> tweets
      </li>
      <li>
        <span>{followersCount.toLocaleString("en-US")}</span> Followers
      </li>
    </ul>
  );
};

export default UserList;
