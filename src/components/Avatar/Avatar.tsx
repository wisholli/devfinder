import { LocalGithubUser } from "types";
import styles from "./Avatar.module.scss";

interface AvatarProps extends Pick<LocalGithubUser, "avatar" | "login"> {}

export const Avatar = ({ avatar, login }: AvatarProps) => (
  <div className={styles.avatar}>
    <img src={avatar} alt={login} className={styles.avatar} />
  </div>
);
