import React from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";

function Detail({ toDos }) {
  // URL 파라미터에서 "id" 값을 가져옵니다.
  const myId = useParams().id;

  // "toDos" 배열에서 해당 "id"에 맞는 to-do 항목을 찾습니다.
  const toDo = toDos.find((toDo) => toDo.id === parseInt(myId));

  return (
    <>
      {/* 해당 to-do 항목의 텍스트와 작성 시간을 표시합니다. */}
      {toDo?.text}
      Created at: {toDo?.id}
    </>
  );
}

// Redux 상태를 해당 컴포넌트의 프로퍼티로 매핑하는 mapStateToProps 함수
function mapStateToProps(state) {
  return { toDos: state };
}

// React 컴포넌트를 Redux 스토어와 연결하여 내보냅니다.
export default connect(mapStateToProps)(Detail);
