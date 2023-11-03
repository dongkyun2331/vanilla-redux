import React from "react";
import { connect } from "react-redux";
import { remove } from "../store"; // Redux 액션 "remove"를 불러옵니다.
import { Link } from "react-router-dom";

function ToDo({ text, onBtnClick, id }) {
  return (
    <li>
      {/* to-do 항목의 텍스트를 표시하고 해당 to-do의 상세 페이지로 링크합니다. */}
      <Link to={`/${id}`}>{text}</Link>
      <button onClick={onBtnClick}>DEL</button>{" "}
      {/* "DEL" 버튼을 클릭할 때 "onBtnClick" 함수가 호출됩니다. */}
    </li>
  );
}

// Redux 액션을 해당 컴포넌트의 프로퍼티로 매핑하는 mapDispatchToProps 함수
function mapDispatchToProps(dispatch, ownProps) {
  return {
    onBtnClick: () => dispatch(remove(ownProps.id)), // "onBtnClick" 프로퍼티를 통해 "remove" 액션을 디스패치합니다.
  };
}

// React 컴포넌트를 Redux 스토어와 연결하여 내보냅니다.
export default connect(null, mapDispatchToProps)(ToDo);
