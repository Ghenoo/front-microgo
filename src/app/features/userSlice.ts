import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getUsers } from "../services/userService";

export const fetchUsers = createAsyncThunk("user/fetchUsers", async () => {
  const response = await getUsers();
  return response;
});

const userSlice = createSlice({
  name: "user",
  initialState: {
    users: [] as any[],
    loading: false,
    error: null as string | null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.loading = false;
      state.users = action.payload;
    });
    builder.addCase(fetchUsers.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || "An error occurred";
    });
  },
});

export default userSlice.reducer;
