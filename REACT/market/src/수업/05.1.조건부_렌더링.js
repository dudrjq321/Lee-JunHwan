import React from "react";

/* 
    조건부 렌더링이란 자바스크립트의 if문 할때랑 비슷하다.
    특정 조건을 만들고 그게 true 또는 false 일때
    같은 컴포넌트더라도 특정 컴포넌트만 렌더링 되거나 안되거나를 결정하는 거
*/
import Hello from "./05.2.Hello";
import Wrapper from "./05.3.Wrapper";

function Ex05_1() {
    return (
        <>
        <Wrapper>
            <Hello name="홍길동" color="#000" myCondition={true}/>
            <Hello name="김개똥" color="blue" myCondition={false}/>
            <Hello name="박말순" color="hotpink" myCondition/>
            {/* true false 아무것도 안쓰면 기본값 true 가 적용된다. */}
        </Wrapper>
        </>
    );


}

export default Ex05_1;