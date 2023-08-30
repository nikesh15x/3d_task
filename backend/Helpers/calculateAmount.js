exports.calculateTotal = (cart_items) => cart_items.reduce((accumulator, currentValue) => {
  return accumulator + (currentValue.price * currentValue.quantity)
}, 0);