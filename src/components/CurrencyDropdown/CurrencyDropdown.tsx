import React from 'react';
import { useGetCurrencyQuery } from '../../redux/slices/apiSlice';
import { DropdownComponent } from '../DropdownComponent/DropdownComponent';
import { ICurrencies } from '../../redux/slices/interfaces';
import styles from './CurrencyDropdown.module.css';

export interface ICurrencyData {
  currencyId: string;
  currencyName: string;
}

export const CurrencyDropdown = () => {
  const { data, isSuccess, isLoading, isError, error } = useGetCurrencyQuery();

  if (isError) throw error;

  const currencyData: ICurrencyData[] = data?.data?.map((item: ICurrencies) => ({
    currencyId: item.id,
    currencyName: item.name,
  }));

  return (
    <>
      {isLoading && <span className={styles.loading}>LOADING...</span>}
      {isSuccess && <DropdownComponent data={currencyData} />}
    </>
  );
};
