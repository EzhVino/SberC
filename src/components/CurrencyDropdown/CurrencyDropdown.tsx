import React from 'react';
import { useGetCurrencyQuery } from '../../redux/slices/apiSlice';
import DropdownComponent from '../DropdownComponent/DropdownComponent';

const CurrencyDropdown = () => {
  const { data, isSuccess, isLoading, isError, error } = useGetCurrencyQuery();

  if (isError) throw error;

  const currencyData = data?.data?.map((item) => ({
    currencyId: item.id,
    currencyName: item.name,
  }));

  return (
    <>
      {isLoading && <span>ЗАГРУЗКА...</span>}
      {isSuccess && <DropdownComponent data={currencyData} />}
    </>
  );
};

export default CurrencyDropdown;
