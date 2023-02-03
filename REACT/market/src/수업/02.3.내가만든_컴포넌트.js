import React  from "react";

function Hello() {
    return (
        <>
            <h1>안녕하세유</h1>
            <h1>반가워유</h1>
        </>
        /*함수형 컴포넌트의 return 은 딱 하나의 박스만 리턴할 수 있다.
        (제일 바깥쪽에 div 던 다른 태그던 하나로 다 감싸놔야 함)*/
    )
}

// 컴포넌트를 XXX 이름으로 내보내겠다
export default Hello;