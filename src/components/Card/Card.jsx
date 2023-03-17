import { useEffect, useState } from "react";

import UserCard from "../UserCard/UserCard";

import styles from "./Card.module.css";

import users from "../../data/users.json";

const initialMembers = JSON.parse(localStorage.getItem("members")) || users;

const Card = () => {
  const [members, setMembers] = useState(initialMembers);

  useEffect(() => {
    localStorage.setItem("members", JSON.stringify(members));
  }, [members]);

  const increaseFollowers = (id) => {
    setMembers(
      members.map((member) =>
        member.id !== id
          ? member
          : {
              ...member,
              followers: member.followers + 1,
              isFollow: !member.isFollow,
            }
      )
    );
  };

  const decreaseFollowers = (id) => {
    setMembers(
      members.map((member) =>
        member.id !== id
          ? member
          : {
              ...member,
              followers: member.followers - 1,
              isFollow: !member.isFollow,
            }
      )
    );
  };

  return (
    <div className={styles.container}>
      <ul className={styles.cardList}>
        {members.map((member) => (
          <li key={member.id}>
            <UserCard
              member={member}
              increaseFollowers={increaseFollowers}
              decreaseFollowers={decreaseFollowers}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Card;
