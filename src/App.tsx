import { Container } from "components/Container";
import { Search } from "components/Search";
import { TheHeader } from "components/TheHeader";
import { UserCard } from "components/UserCard";
import { defaultUser } from "mock";
import { useState } from "react";
import { GithubError, GithubUser, LocalGithubUser } from "types";
import { extractLocalUser } from "utils/extract-local-user";
import { isGirHubUser } from "utils/typeguards";

const BASE_URL = "";

function App() {
  const [user, setUser] = useState<LocalGithubUser | null>(defaultUser);

  const fetchUser = async (username: string) => {
    const url = BASE_URL + username;
    const res = await fetch(url);
    const user = (await res.json()) as GithubUser | GithubError;
    {
      isGirHubUser(user) ? setUser(extractLocalUser(user)) : setUser(null);
    }
  };

  return (
    <Container>
      <TheHeader />
      <Search hasError={!user} onSubmit={fetchUser} />
      {user ? <UserCard {...user} /> : null}
    </Container>
  );
}

export default App;
