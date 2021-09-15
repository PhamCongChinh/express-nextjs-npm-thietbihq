import { configureStore } from '@reduxjs/toolkit'
import cartReducer from '../features/cart/cartSlice'
import categorySlice from '../features/category/categorySlice'
const rootReducer = {
    cart: cartReducer,
    category: categorySlice,
}
const store = configureStore({
    reducer: rootReducer,
})
export default store