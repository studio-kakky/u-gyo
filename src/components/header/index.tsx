import styles from './index.module.scss';

export const Header = () => {
  return (
    <header className={styles.Header}>
      <h1 className={styles.Header_h}>U魚</h1>
      <div className={styles.SearchBox}>
        <input className={styles.SearchBox_input} />
        <span className={`material-symbols-outlined ${styles.SearchBox_icon}`}>search</span>
      </div>
    </header>
  );
};
