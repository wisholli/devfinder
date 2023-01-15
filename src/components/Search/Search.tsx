import { Button } from "components/Button";
import { ReactComponent as SearchIcon } from "./../../assets/icon-search.svg";
import styles from "./Search.module.scss";

interface SearchProps {
  hasError?: Error;
  onSubmit: (text: string) => void;
}

type FormFields = {
  username: HTMLInputElement;
};

export const Search = ({ hasError, onSubmit }: SearchProps) => {
  const handleSubmit = (
    event: React.FormEvent<HTMLFormElement & FormFields>
  ) => {
    event.preventDefault();
    const text = event.currentTarget.username.value;

    if (text) {
      onSubmit(text);
      event.currentTarget.reset();
    }
  };

  return (
    <form onSubmit={handleSubmit} autoComplete="off">
      <div className={styles.search}>
        <label htmlFor="search" className={styles.label}>
          <SearchIcon />
        </label>
        <input
          type="text"
          id="search"
          name="username"
          placeholder="Search GitHub username..."
          className={styles.textField}
        />
        {hasError && <div className={styles.error}>No result</div>}
        <Button>Search</Button>
      </div>
    </form>
  );
};
