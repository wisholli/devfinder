import { LocalGithubUser } from "types";
import styles from "./Bio.module.scss";

interface BioProps extends Pick<LocalGithubUser, "bio"> {}

export const Bio = ({ bio }: BioProps) => (
  <div className={`${styles.bio}${bio ? "" : ` ${styles.empty}`}`}>
    {bio ? bio : "User hasn't bio"}
  </div>
);
