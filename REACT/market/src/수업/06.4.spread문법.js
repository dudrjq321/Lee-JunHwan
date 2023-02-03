import React from "react";

/*
=spread 문법
    ES6 에서 추가된 문법
    ... 을 이용해서 주소 공유가 아닌 실제 값을 복사한다
*/

function Ex06_4() {

    const slime ={
        name: '슬라임'
    };
    const cuteSlime ={
        name: '슬라임',
        attribute: 'cute'        
    };
    const purpleCuteSlime ={
        name: '슬라임',
        attribute: 'cute',
        color: 'purple'
    };

    console.log(slime);
    console.log(cuteSlime);
    console.log(purpleCuteSlime);
// --------------------------------------------------------
    const slime2 ={
        name: '슬라임'
    };
    const cuteSlime2 ={
        ...slime2,
        attribute: 'cute'        
    };
    const purpleCuteSlime2 ={
        ...cuteSlime2,
        color: 'purple'
    };

    console.log(slime2);
    console.log(cuteSlime2);
    console.log(purpleCuteSlime2);


    return (
        <></>

    );
}
export default Ex06_4;



