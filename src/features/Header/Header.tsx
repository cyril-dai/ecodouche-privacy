import SwitchLocale from '@features/SwitchLocale/SwitchLocale';

import styles from './Header.module.scss';

const Header = () => {
  return (
    <header className={styles['header']}>
      <SwitchLocale />
    </header>
  );
};

export default Header;
