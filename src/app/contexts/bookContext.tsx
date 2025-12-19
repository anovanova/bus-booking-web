"use client";

import { createContext, useReducer, useContext, type Dispatch } from "react";
export const BookContext = createContext(null);
export const BookDispatchContext = createContext(null);
export function BookProvider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [data, dispatch] = useReducer(bookReducer, {});
  return (
    <BookContext value={data}>
      <BookDispatchContext value={dispatch}>{children}</BookDispatchContext>
    </BookContext>
  );
}

function bookReducer(data, action) {
  switch (action.type) {
    case "added": {
      return { ...data, ...action.data };
    }
    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
}

export function useBookContext() {
  return useContext(BookContext);
}
