
export const addCartItemUtil = (cart, newCartItem) => {

    const itemExists = cart.find(item => item.id === newCartItem.id);

    if (itemExists) {
        return cart.map(item => item.id === newCartItem.id ? { ...item, quantity: item.quantity + 1 } : item)
    } else {
        return [...cart, { ...newCartItem, quantity: 1 }]
    }

}

export const decreaseItemFromCart = (cart, itemTodecrease) => {

    if (itemTodecrease.quantity === 1) {
        return cart.filter(item => item.id !== itemTodecrease.id);
    }

    return cart.map(item => item.id === itemTodecrease.id ? { ...item, quantity: item.quantity - 1 } : item)
}