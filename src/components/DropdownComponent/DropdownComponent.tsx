import React, { useState, useEffect } from 'react';
import { TextBanner } from '../TextBanner/TextBanner';
import { chevron } from '../../assets';
import { ICurrencies } from '../../redux/slices/interfaces';
import styles from './DropdownComponent.module.css';
import { ICurrencyData } from '../CurrencyDropdown/CurrencyDropdown';

export const DropdownComponent = ({ data }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [itemTitle, setItemTitle] = useState<string>(data[0].currencyName);
  const [selectedItem, setSelectedItem] = useState<string>(data[0].currencyId);

  const onChange = (value: string) => {
    setItemTitle(value);
  };

  const handleToggleOpen = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (optionValue) => {
    if (onChange) {
      setSelectedItem(optionValue.currencyId);
      onChange(optionValue.currencyName);
      setIsOpen(false);
    } else {
      setSelectedItem(optionValue.currencyId);
      setIsOpen(false);
    }
  };

  const itemLabel = selectedItem
    ? data?.find((option: ICurrencyData) => option.currencyId === selectedItem)?.currencyId
    : data[0].currencyId;

  return (
    <div className={styles.wrapper}>
      <div className={styles.label} onClick={handleToggleOpen}>
        {itemLabel}
        <img className={styles.chevron} src={chevron} />
      </div>
      {isOpen && (
        <div className={styles.options}>
          {data.map((item) => (
            <li
              key={item.currencyId}
              className={
                item.currencyId === selectedItem
                  ? `${styles.option} ${styles.selected}`
                  : styles.option
              }
              onClick={() => handleOptionClick(item)}
            >
              {item.currencyId}
            </li>
          ))}
        </div>
      )}
      {itemTitle && <TextBanner text={itemTitle} />}
    </div>
  );
};
