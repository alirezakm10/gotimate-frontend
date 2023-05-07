import { useState, useEffect } from 'react';

const usePriceFormat = (price) => {
  const [formattedPrice, setFormattedPrice] = useState('');

  const formatPrice = (price) => {
    const priceString = price.toString();
    let formattedPriceString = '';
    let i = priceString.length - 1;
    let count = 0;
    while (i >= 0) {
      if (count === 3) {
        formattedPriceString = ',' + formattedPriceString;
        count = 0;
      }
      formattedPriceString = priceString[i] + formattedPriceString;
      i--;
      count++;
    }
    return typeof price !== "string" ? formattedPriceString : price;
  };

  useEffect(() => {
    setFormattedPrice(formatPrice(price));
  }, [price]);

  return formattedPrice;
};

export default usePriceFormat;