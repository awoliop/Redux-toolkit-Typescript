"use client";
import { UseSelector, useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "@/state/store";
import { displayAsyncFetch } from "./PlaceholderSlice";
import { useEffect } from "react";

const Placeholder = () => {
  const user = useSelector((state: RootState) => state.user.value);
  const dispatch = useDispatch<AppDispatch>();
  console.log(user);
  useEffect(() => {
    dispatch(displayAsyncFetch());
  }, [dispatch]);
  return (
    <div>
      <div>{user.userId}</div>
      <div>{user.title}</div>
      <div>{user.id}</div>
    </div>
  );
};

export default Placeholder;
