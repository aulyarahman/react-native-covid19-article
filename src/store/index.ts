import create from "zustand";

interface TodoState {
  todos: number[];
  addTodo: (number: number) => void;
  removeTodo: (number: number) => void;
}

export const useStore = create<TodoState>((set) => ({
  // initial state
  todos: [],
  // methods for manipulating state
  addTodo: (number: number) => {
    set((state) => ({
      todos: [...state.todos, number],
    }));
  },
  removeTodo: (id) => {
    set((state) => ({
      todos: state.todos.filter((todo) => todo !== id),
    }));
  },
}));
