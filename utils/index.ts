export const formatMoney = function(money: number) {
  return new Intl.NumberFormat().format(money);
}
