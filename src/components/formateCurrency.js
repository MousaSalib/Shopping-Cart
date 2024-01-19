const CURRENCY_FORMATTR = new Intl.NumberFormat(undefined, {
    currency: "USD",
    style: "currency"
});

const formateCurrency = (number) => {
  return CURRENCY_FORMATTR.format(number)
}

export default formateCurrency;