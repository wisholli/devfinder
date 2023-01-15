import { GithubUser } from "types";

export const isGirHubUser = (user: any): user is GithubUser => "id" in user;
