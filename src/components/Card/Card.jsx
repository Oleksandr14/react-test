import UserCard from "../UserCard/UserCard";

import styles from "./Card.module.css";

const Card = () => {
  return (
    <div className={styles.container}>
      <UserCard />
    </div>
  );
};

export default Card;
