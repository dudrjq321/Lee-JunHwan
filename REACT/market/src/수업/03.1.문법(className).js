import React from "react";
/*
- 리액트의 js 파일들에서 html 자동완성 기능 되게 하는법
    1. 설정(ctrl + ,) 에서 emmet > include Languages 에
    2. 항목추가에서 javascript 랑 javascriptreact 입력
--------------------------------------------------------------

= JSX 문법(js + XML)
    JSX 문법은 자바스크립트의 확장 문법이지만, 리액트에서만 사용되기 때문에 공식적인 js 문법은 아님.
    기본적인건 자바스크립트 문법과 동일하지만 몇개만 다름

    1) **중요** return 안에 무조건 한 박스로만 구성

    2) **중요** JSX 는 class 를 className 이라고 한다.
        이유는 JS에서도 class 를 이미 쓰고 있기 때문에 예약어 처리가 되어있다.
    
        * css 적용시
            1) 인라인 방식으로 style 줄때
            2) 변수에 style 정보를 넣어놓고(데이터바인딩), 해당 태그에서 불러다 쓰기
 
*/

function Ex03_1() {
    // 2) 변수에 style 정보를 넣어놓고(데이터바인딩), 해당 태그에서 불러다 쓰기
    let tmp_style = {
        color: 'red',
        backgroundColor: 'orange'
    }

    return (
        <div className="box1" style={tmp_style}>
            {/* css */}
            <div style={{color:'blue', fontSize: '40px'}}>헬로월드</div>
            <div style={tmp_style}>헬로월드2</div>
        </div>
    );
}
export default Ex03_1;