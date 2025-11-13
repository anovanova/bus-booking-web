"use client";

import { createContext, useReducer, useContext } from "react";
export const BookContext = createContext(0);
export const BookDispatchContext = createContext(0);
export function BookProvider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  //const [tasks, dispatch] = useReducer(tasksReducer, initialTasks);
  return (
    <BookContext value={1}>
      <BookDispatchContext value={1}>{children}</BookDispatchContext>
    </BookContext>
  );
}

export function useBookContext() {
  return useContext(BookContext);
}
