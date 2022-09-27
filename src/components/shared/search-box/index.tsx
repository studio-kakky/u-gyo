import styles from './index.module.scss';

interface Props {
  setSearchWords: (words: string[]) => void;
}

export const SearchBox = ({ setSearchWords }: Props): JSX.Element => {
  return (
    <div className={styles.SearchBox}>
      <input
        className={styles.SearchBox_input}
        onChange={(ev) => {
          const words = ev.currentTarget.value.split(' ');
          setSearchWords(words);
        }}
      />
      <span className={`material-symbols-outlined ${styles.SearchBox_icon}`}>search</span>
    </div>
  );
};
