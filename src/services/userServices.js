import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { baseUrl } from "../utils/utils";

export const loginUser = createAsyncThunk(
  "users/loginUser",
  async (adminData, thunkAPI) => {
    try {
      const res = await axios({
        method: "POST",
        url: `${baseUrl}/api/v1/user/login`,
        data: adminData,
      });
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const registerUser = createAsyncThunk(
  "users/loginUser",
  async (adminData, thunkAPI) => {
    try {
      const res = await axios({
        method: "POST",
        url: `${baseUrl}/api/v1/user/register`,
        data: adminData,
      });
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const getUser = createAsyncThunk(
  "users/loginUser",
  async (_, thunkAPI) => {
    try {
      const res = axios.get(`${baseUrl}/api/v1/users/me`, {
        withCredentials: true,
      });
      console.log(res.data)
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);
