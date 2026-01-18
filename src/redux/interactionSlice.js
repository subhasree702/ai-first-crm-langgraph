import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { logInteractionAPI } from "../api";


export const logInteraction = createAsyncThunk(
  "interactions/logInteraction",
  async (payload, { rejectWithValue }) => {
    try {
      const data = await logInteractionAPI(payload);
      return data;
    } catch (err) {
      return rejectWithValue(err.message || "Network error");
    }
  }
);

const interactionSlice = createSlice({
  name: "interactions",
  initialState: { loading: false, error: null, success: false },
  reducers: {
    resetStatus: (state) => {
      state.loading = false;
      state.error = null;
      state.success = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(logInteraction.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.success = false;
      })
      .addCase(logInteraction.fulfilled, (state) => {
        state.loading = false;
        state.success = true;
      })
      .addCase(logInteraction.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Something went wrong";
      });
  },
});

export const { resetStatus } = interactionSlice.actions;
export default interactionSlice.reducer;
