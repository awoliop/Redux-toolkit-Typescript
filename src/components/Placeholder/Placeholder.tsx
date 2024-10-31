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
    const sentFromUser = "Fuad";
    dispatch(displayAsyncFetch(sentFromUser));
  }, [dispatch]);
  return (
    <div className="w-full  text-black mx-auto space-y-3">
      <div className="w-[40%] mx-auto bg-white rounded h-14 flex items-center justify-center">
        {user.userId}
      </div>
      <div className="w-[40%] mx-auto bg-white rounded h-14 flex items-center justify-center">
        {user.title}
      </div>
      <div className="w-[40%] mx-auto bg-white rounded h-14 flex items-center justify-center">
        {user.id}
      </div>
      <div className="w-[40%] mx-auto bg-white rounded h-14 flex items-center justify-center">
        {user.completed ? "True to that" : "Not it!"}
      </div>
    </div>
  );
};

export default Placeholder;
