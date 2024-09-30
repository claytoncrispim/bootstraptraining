// Formats the amount to display the currency symbols accordingly
const formatter = (locale, currency, value) => {
    let formattedValue = new Intl.NumberFormat(locale, {
      style: "currency",
      currency: currency,
    }).format(value);
  
    return formattedValue;
};

export default formatter;