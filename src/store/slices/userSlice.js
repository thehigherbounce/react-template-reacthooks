import { createSlice,createAsyncThunk } from "@reduxjs/toolkit"

const fetchUserById = createAsyncThunk(
    'USER_FETCH_USER_BY_ID',
    async (args, { dispatch, getState }) => {
        const response = await userAPI.fetchById(args.userId)
        return response.data
    }
)

const userSlice = createSlice({
    name: 'users',
    initialState: {users:[], isLoading: false},
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(fetchUserById.fulfilled, (state, action) => {
            state.users.push(action.payload);
            state.isLoading = false;
        })
        .addCase(fetchUserById.pending, (state, action) => {
            state.isLoading = true;
        })
        .addCase(fetchUserById.rejected, (state, action) => {
            state.isLoading = false;
        })
    }
});
export const { fetchById } = userSlice.actions

export default userSlice.reducer