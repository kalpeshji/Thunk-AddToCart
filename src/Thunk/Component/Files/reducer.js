import Img1 from '.././../Assets/Image/p1.webp'
import Img2 from '.././../Assets/Image/p2.webp'
import Img3 from '.././../Assets/Image/p3.webp'
import Img4 from '.././../Assets/Image/p4.webp'

const initialState = {
    product: [
        { id: 0, name: "GUESS", image: Img1, price: '89.00', qty: 1, info: 'GUESS Mens Dress Multifunction 44mm Watch' },
        { id: 1, name: "FOSSILE", image: Img2, price: '119.00', qty: 1, info: 'Fossil Analog Black men Watch FS5164' },
        { id: 2, name: "CASIO", image: Img3, price: '99.00', qty: 1, info: 'Casio Edifice Analog Blue Dial Men EFR-556PC-2AVUDF ( EX386 )' },
        { id: 3, name: "EMPORIO ARMANI", image: Img4, price: '199.00', qty: 1, info: 'Emporio Armani Renato Analog Blue Dial Men s Watch-AR2448' },
    ],
    cart: [],
    count: 0,
    total: 0,
};

const reducer = (state = initialState, action) => {
    if (action.type === "AddToCart") {
        const itemExist = state.cart.some((item) => item.id === state.product[action.payload].id);
        if (!itemExist) {
            return {
                ...state, cart: [...state.cart, { ...state.product[action.payload] }],
                total: state.total + parseFloat(state.product[action.payload].price),
            };
        } else {
            return {
                ...state, cart: state.cart.map((item) => item.id === state.product[action.payload].id ? { ...item, qty: item.qty + 1 } : item),
                total: state.total + parseFloat(state.product[action.payload].price),
            };
        }
    }
    if (action.type === 'DeleteItem') {
        const deletedItem = state.cart[action.payload];
        return {
            ...state,
            cart: state.cart.filter((item, id) => id !== action.payload),
            total: state.total - parseFloat(deletedItem.price * deletedItem.qty),
        };
    }

    if (action.type === 'Count') {
        return { ...state, count: state.cart.length };
    }
    if (action.type === 'Increment') {
        var itemIndex = action.payload
        return {
            ...state, cart: state.cart.map((item, id) => id === itemIndex ? { ...item, qty: item.qty + 1 } : item),
            total: state.total + parseFloat(state.cart[itemIndex].price),
        };
    }
    if (action.type === 'Decrement') {
        var itemIndex = action.payload
        const deletedItem = state.cart[itemIndex];
        if (state.cart[itemIndex].qty > 1) {
            return {
                ...state, cart: state.cart.map((item, id) => id === itemIndex ? { ...item, qty: item.qty - 1 } : item),
                total: state.total - parseFloat(state.cart[itemIndex].price),
            };

        }
        return {
            ...state,
            cart: state.cart.filter((item, id) => id !== action.payload),
            total: state.total - parseFloat(deletedItem.price * deletedItem.qty),
        };
    }
    if (action.type === 'DeleteAll') {
        console.log({...state, cart: []})
        return { ...state, cart: [] , count: 0, total: 0};

    }
    return state;
}

export default reducer