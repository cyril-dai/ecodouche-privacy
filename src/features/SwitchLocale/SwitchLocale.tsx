import { useTranslation } from 'react-i18next';
import { Menu, MenuButton, MenuItem, MenuItems, Transition } from '@headlessui/react';
import { AiOutlineGlobal } from "react-icons/ai";

import { supportedLngs } from '@i18n/i18n';

import styles from './SwitchLocale.module.scss';

const SwitchLocale = () => {
  const { t, i18n } = useTranslation();

  return (
    <Menu>
      <MenuButton className={styles['menu-btn']}>
        <AiOutlineGlobal size={30} />
      </MenuButton>
      <Transition
        enter="duration-200 ease-out"
        enterFrom="scale-95 opacity-0"
        enterTo="scale-100 opacity-100"
        leave="duration-300 ease-out"
        leaveFrom="scale-100 opacity-100"
        leaveTo="scale-95 opacity-0"
      >
        <MenuItems anchor="bottom end" className={styles['menu']}>
          {supportedLngs.map((item) => (
            <MenuItem key={item}>
              <button className={styles['item']} onClick={() => i18n.changeLanguage(item)}>
                {t(item)}
              </button>
            </MenuItem>
          ))}
        </MenuItems>
      </Transition>
    </Menu>
  );
};

export default SwitchLocale;
