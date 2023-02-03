import React from "react";
/*
- 리액트의 js 파일들에서 html 자동완성 기능 되게 하는법
    1. 설정(ctrl + ,) 에서 emmet > include Languages 에
    2. 항목추가에서 javascript 랑 javascriptreact 입력
--------------------------------------------------------------

3) js 표현식
    JSX 내부에서 자바스크립트를 사용할때는 {} (데이터 바인딩) 로 감싸면 된다.
        - 바인딩: js 에서 데이터를 받아와서 저장한 후 HTML 에 넣어주는거
        * 함수, 변수, src 등 어디든 {} 만 이용하면 다 됨.
         근데 style 속성은 일반 텍스 안되고 무조건 {} 안에 객체처럼 넣어줘야 함.(이중괄호로 넣어야 한다.)

4) 닫는태그가 없는 경우 / 로 끝내야 한다. ex) <태그명 />
*/
import logo from '../logo.svg';


function Ex03_2() { 

    let name="홍길동";
    let c_name = "tmp_box"

    return (
        <>
        <img src={logo} />
        <div className="box1">{name}</div>
        <div className={c_name}>box2</div>
        <div className="box3">box3</div>
        <div style={{color:'blue', fontSize: '40px'}}>헬로월드</div>
        </>
    );
}
export default Ex03_2;