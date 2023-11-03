import { configureStore, createSlice } from "@reduxjs/toolkit";

// to-do 항목 관리를 위한 슬라이스 생성
const toDos = createSlice({
  name: "toDosReducer",
  initialState: [],
  reducers: {
    // 상태에 to-do 항목을 추가합니다
    add: (state, action) => {
      state.push({ text: action.payload, id: Date.now() });
    },
    // 상태에서 to-do 항목을 제거합니다
    remove: (state, action) =>
      state.filter((toDo) => toDo.id !== action.payload),
  },
});

// "add"와 "remove" 액션 생성자를 내보냅니다
export const { add, remove } = toDos.actions;

// "toDos" 리듀서를 사용하여 Redux 스토어를 생성하고 내보냅니다
export default configureStore({ reducer: toDos.reducer });
