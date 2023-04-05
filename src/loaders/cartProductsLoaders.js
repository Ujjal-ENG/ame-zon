import { getShoppingCart } from '../utilities/fakedb';

export const cartProductsLoader = async () => {
    const loadedProducts = await fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json');
    const products = await loadedProducts.json();

    const storedCart = getShoppingCart();
    const savedCart = [];
    for (const id in storedCart) {
        const addedProduct = products.find((pd) => pd.id === id);
        if (addedProduct) {
            const qunatity = storedCart[id];
            addedProduct.quantity = qunatity;
            savedCart.push(addedProduct);
        }
    }
    return savedCart;
};
