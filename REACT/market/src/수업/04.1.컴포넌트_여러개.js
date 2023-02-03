import React from "react";


/*
    컴포넌트 여러개일땐 어떻게 불러오나?
    04.2, 04.3 두개 만들어서 각각의 컴포넌트를 가지고 있게 한 후에 여기서 연결해보기
*/
import Wrapper from "./04.3.Wrapper";
import Hello from "./04.2.Hello";

function Ex04_1() {
    return (
        <>
        {/* 컴포넌트 안에 또다른 컴포넌트를 넣을거라면, 부모컴포넌트에 props 를 받게 해줘야 한다. (04.3 번 가보면 {children} 이라고 있음) */}
        <Wrapper>
            <Hello name="홍길동2" color="#000" />
        </Wrapper>


        {/* 컴포넌트는 아래 두 방식으로 명시 가능. 둘이 똑같은거임. */}
        <Hello />
        <Hello></Hello>
        
        </>
    );


}

export default Ex04_1;