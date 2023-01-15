import { ReactComponent as CompanyIcon } from "assets/icon-company.svg";
import { ReactComponent as LocationIcon } from "assets/icon-location.svg";
import { ReactComponent as TwitterIcon } from "assets/icon-twitter.svg";
import { ReactComponent as WebsiteIcon } from "assets/icon-website.svg";
import { InfoItem, InfoItemProps } from "components/InfoItem";
import { LocalGithubUser } from "types";
import styles from "./UserInfo.module.scss";

interface UserInfoProps
  extends Pick<LocalGithubUser, "blog" | "company" | "location" | "twitter"> {}

export const UserInfo = ({
  blog,
  company,
  location,
  twitter,
}: UserInfoProps) => {
  const items: InfoItemProps[] = [
    {
      icon: <WebsiteIcon />,
      text: blog,
      isLink: true,
    },
    {
      icon: <CompanyIcon />,
      text: company,
      isLink: false,
    },
    {
      icon: <LocationIcon />,
      text: location,
      isLink: false,
    },
    {
      icon: <TwitterIcon />,
      text: twitter,
      isLink: false,
    },
  ];
  const data = items.map((item, index) => <InfoItem {...item} key={index} />);
  return <div className={styles.userInfo}>{data}</div>;
};
