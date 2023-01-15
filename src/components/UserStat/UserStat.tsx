import { LocalGithubUser } from "types";
import styles from "./UserStat.module.scss";

export interface UserStatProps
  extends Pick<LocalGithubUser, "repos" | "following" | "followers"> {}

const infoBlock = (text: string, props: string | number) => {
  return (
    <div className={styles.info}>
      <div className={styles.infoTitle}>{text}</div>
      <div className={styles.infoNumber}>{props}</div>
    </div>
  );
};

export const UserStat = ({ repos, following, followers }: UserStatProps) => {
  const publicRepos = infoBlock("Repos", repos);
  const followingNumber = infoBlock("Following", following);
  const followersNumber = infoBlock("Followers", followers);
  return (
    <div className={styles.userStat}>
      {publicRepos}
      {followingNumber}
      {followersNumber}
    </div>
  );
};
