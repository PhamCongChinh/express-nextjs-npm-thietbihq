import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getCategories } from '../../services/category'
export const listCategories = createAsyncThunk(
    'category/listCategories',
    async () => {
        const response = await getCategories()
        return response
    }
)

const categorySlice = createSlice({
    name: 'category',
    initialState: {
        categories: [],
        loading: '',
    },
    reducers:{},
    extraReducers: {
        [listCategories.pending]: (state) => {
            state.loading = 'pending'
        },
        [listCategories.fulfilled]: (state, action) => {
            state.loading = 'success'
            state.categories = action.payload
        },
        [listCategories.rejected]: (state, action) => {
            state.loading = 'error'
            state.error = action.error
        }
    }
})
export const { actionGetCategories } = categorySlice.actions
export default categorySlice.reducer