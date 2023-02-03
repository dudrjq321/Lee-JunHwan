import React, { useRef, useState } from "react";
/*
    자바스크립트에서 getElement~ 로 요소를 잡던방식을,
    리액트 방식인 useRef 라는 Hook 함수를 사용해서 간단하게 요소를 잡을수 있다.

    - 사용법
        1) HTML 태그에 ref={속성값} 속성을 넣고
        2) function 안에서 'const 속성값 = useRef()' 라고 명시한다.
        3) 특정 이벤트에서 '속성값.current.focus()' 라고 하면 포커스 잡힘
            ('속성값.current' 가 요소잡기 한거임)
*/

function Ex09_1() {

    // const [name, setName] = useState("");         // const name = ""
    // const [nickname, setNickname] = useState(""); // const nickname =""

    const [inputs, setInputs] = useState({
        name: "",
        nickname: ""
    })
    const { name, nickname } = inputs; // 비구조화 할당을 통해 값을 넣어준다(추출한다)
    // 위에서 추출한거를 아래꺼처럼 할수동 있다.
    // let name = inputs.name;
    // let nickname = inputs.nickname;

    const nameInput = useRef();

    const onChange = (e) => {
        const { value, name } = e.target; // 
        setInputs({
            ...inputs, // 딥카피 
            [name] : value, // [키]: 값 // name 키를 가진 값을 value로 설정한다.
        })
    }

    const onReset = ()=> {
        setInputs({
            name: "",
            nickname: ""
        })
        nameInput.current.focus();
    }
    return (
        <div>
            <input name="name" placeholder="이름" value={ name } id= "txt_name" ref={nameInput} onChange={onChange} />
            <input name="nickname" placeholder="닉네임" value={ nickname } id= "txt_name" onChange={onChange} />

            <button onClick={onReset} >초기화</button>

            <div>
                <b>값: </b>
                {name} ({nickname})
            </div>
        </div>
    );
}
export default Ex09_1;