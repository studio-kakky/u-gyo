import styles from './index.module.scss';

interface Props {
  setSearchWords: (words: string[]) => void;
}

export const Header = ({ setSearchWords }: Props) => {
  return (
    <header className={styles.Header}>
      <h1 className={styles.Header_h}>U魚</h1>
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
    </header>
  );
};
