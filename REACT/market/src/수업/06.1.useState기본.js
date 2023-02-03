/*
    useState 는 데이터를 저장하고, 변수값을 변경하는데 사용됨
    뭔가 데이터(화면)가 바뀌는 부분 관련 된건 다 useState 사용한거임

    *그냥 변수 대신 useState 쓰는 이유
        변수를 쓰면 값이 변경될때 새로고침을 해야 하지만, useState 를 쓰면 알아서 재렌더링 된다.


    - 한마디로 값을 저장해서 사용하고 싶으면
        1) 변수에 넣거나
        2) State에 넣거나.

    useState 를 쓰려면 라이브러리 import 해와야함

    - 사용법
        1) 변수선언: 아래 코드처럼 state 생성하면서 초기값 넣고
                
            const [변수명, 변수재선언 함수] = useState(초기값)
            const [state, setState] = useState(0)

        2) 변수재선언: setState(변경값) 를 이용해서 state 의 값을 변경할 수 있다.
                      (setter 같은거임)
 

*/
import React, { useState }  from "react";

function Ex06_1() {

    const [state, setState] = useState(true)

    // setState 는 아래랑 같은거임
    // function setState(tmp) {
    //     state = tmp;
    // }

    
    const onClick = () => {
        console.log("눌림")

        setState(!state)
    }

    return (
    <>
        {/* boolean 값은 직접 화면에 출력 안됨  toString() 붙여줘야한다. */}
        <div>state 값: { state.toString() }</div>
        <button onClick={ onClick }>확인</button>
    </>
    );
}
export default Ex06_1;
