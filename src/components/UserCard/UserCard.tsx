import { Avatar } from "components/Avatar";
import { Bio } from "components/Bio";
import { UserInfo } from "components/UserInfo";
import { UserStat } from "components/UserStat";
import { UserTitle } from "components/UserTitle";
import { LocalGithubUser } from "types";
import styles from "./UserCard.module.scss";

interface UserCardProps extends LocalGithubUser {}

export const UserCard = (props: UserCardProps) => {
  const {
    repos,
    followers,
    following,
    created,
    login,
    name,
    avatar,
    bio,
    blog,
    company,
    location,
    twitter,
  } = props;

  return (
    <div className={styles.userCard}>
      <Avatar avatar={avatar} login={login} />
      <UserTitle created={created} login={login} name={name} />
      <Bio bio={bio} />
      <UserStat followers={followers} following={following} repos={repos} />
      <UserInfo
        blog={blog}
        company={company}
        location={location}
        twitter={twitter}
      />
    </div>
  );
};
