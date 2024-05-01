import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tasks: [],
  numberOfDoneTasks: 0,
  numberOfUndoneTasks: 0,
  lastState: null,
  sortTasks: false,
};

const tasksSlice = createSlice({
  name: "tasks",
  initialState: initialState,
  reducers: {
    ADD_TASK: (state, action) => {
      const { payload } = action;
      state.lastState = { ...state, lastState: null };
      state.tasks = [...state.tasks, payload];
      state.numberOfUndoneTasks++;
    },
    REMOVE_TASK: (state, action) => {
      const { payload } = action;
      state.lastState = { ...state, lastState: null };
      state.tasks = state.tasks.filter((elem) => elem.name !== payload.name);
      if (payload.isDone) {
        state.numberOfDoneTasks--;
      } else {
        state.numberOfUndoneTasks--;
      }
    },
    TOGGLE_TASK: (state, action) => {
      const { task, index } = action.payload;

      state.lastState = { ...state, lastState: null };
      state.tasks[index].isDone = !state.tasks[index].isDone;

      if (task.isDone) {
        state.numberOfDoneTasks--;
        state.numberOfUndoneTasks++;
      } else {
        state.numberOfDoneTasks++;
        state.numberOfUndoneTasks--;
      }
    },
    RESET: (state, action) => {
      return initialState;
    },
    TOGGLE_SORT_TASKS: (state, action) => {
      state.lastState = { ...state, lastState: null };
      state.sortTasks = !state.sortTasks;
    },
    UNDO_LAST_EVENT: (state, action) => {
      const {
        tasks,
        numberOfDoneTasks,
        numberOfUndoneTasks,
        lastState,
        sortTasks,
      } = state.lastState;
      state.tasks = tasks;
      state.numberOfDoneTasks = numberOfDoneTasks;
      state.numberOfUndoneTasks = numberOfUndoneTasks;
      state.lastState = lastState;
      state.sortTasks = sortTasks;
    },
  },
});

export default tasksSlice.reducer;

export const {
  ADD_TASK,
  REMOVE_TASK,
  TOGGLE_TASK,
  RESET,
  TOGGLE_SORT_TASKS,
  UNDO_LAST_EVENT,
} = tasksSlice.actions;
