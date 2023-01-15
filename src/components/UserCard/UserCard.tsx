import { UserStat, UserStatProps } from "components/UserStat";
import styles from "./UserCard.module.scss";

interface UserCardProps extends UserStatProps {}

export const UserCard = (props: UserCardProps) => {
  const { repos, followers, following } = props;
  return (
    <div className={styles.userCard}>
      <UserStat followers={followers} following={following} repos={repos} />
    </div>
  );
};
