import React from "react";
 
/*
    - 배열 내장함수

    1) forEach 는 가장 쉬운 배열 내장함수
        기존에 배웠던 for 문을 대체할 수 있음.
        배열 할때만 사용가능


    2) map은 배열 안의 각 원소를 변환할때 사용되며, 이 과정에서 새롭게 배열이 만들어진다.
        - 배열.map((요소,인덱스) => { return })
        

*/

function Ex03_5() {  
    let array = ["웹퍼블리셔", "프론트엔드", "백엔드"];

    // for(let i=0; i< array.length; i++) {
    //     console.log(i+": " + array[i])
    // }
    ////////////////////////////////////////////////////////////////
    // array.forEach((item) => {
    //     console.log("forEach: " + item)
    // })
    ////////////////////////////////////////////////////////////////
    // let tmp_map = array.map((value, index) => {
    //     // 화면에 찍어줄때는 변수에 담아서 return으로 반환한다.
    //     let tmp =  <div>{index} : {value}</div>
    //     console.log("map : " + tmp);
    //     return tmp;
    // })
    // console.log(tmp_map);


    let item_list = [
        {
            id: 5,
            text: 'a'
        },
        {
            id: 15,
            text: 'b'
        },
        {
            id: 21,
            text: 'c'
        },
    ];


    return (
        <div>   
        {
            item_list.map((v, i) => {
                console.log(v.id, v.text)
                console.log(`${v.id}, ${v.text}`)

                return <div key={i}> {`${v.id}, ${v.text}`}</div>
            })
        }

        </div>
    );
}
export default Ex03_5;