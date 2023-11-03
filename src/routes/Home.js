import React, { useState } from "react";
import { connect } from "react-redux";
import { add } from "../store"; // Redux 액션 "add"를 불러옵니다.
import ToDo from "../components/ToDo";

function Home({ toDos, addToDo }) {
  const [text, setText] = useState("");

  // 입력 필드의 값이 변경될 때 호출되는 함수
  function onChange(e) {
    setText(e.target.value);
  }

  // 폼 제출 시 호출되는 함수
  function onSubmit(e) {
    e.preventDefault();
    addToDo(text); // Redux "add" 액션을 호출하여 to-do 항목을 추가합니다.
    setText(""); // 입력 필드를 초기화합니다.
  }

  return (
    <>
      <h1>To Do</h1>
      <form onSubmit={onSubmit}>
        <input type="text" value={text} onChange={onChange} />
        <button>Add</button>
      </form>
      <ul>
        {/* Redux 상태에서 to-do 항목을 매핑하고, ToDo 컴포넌트를 렌더링합니다. */}
        {toDos.map((toDo) => (
          <ToDo {...toDo} key={toDo.id} />
        ))}
      </ul>
    </>
  );
}

// Redux 상태를 해당 컴포넌트의 프로퍼티로 매핑하는 mapStateToProps 함수
function mapStateToProps(state) {
  return { toDos: state };
}

// Redux 액션을 해당 컴포넌트의 프로퍼티로 매핑하는 mapDispatchToProps 함수
function mapDispatchToProps(dispatch) {
  return {
    addToDo: (text) => dispatch(add(text)), // "addToDo" 프로퍼티를 통해 "add" 액션을 디스패치합니다.
  };
}

// React 컴포넌트를 Redux 스토어와 연결하여 내보냅니다.
export default connect(mapStateToProps, mapDispatchToProps)(Home);
