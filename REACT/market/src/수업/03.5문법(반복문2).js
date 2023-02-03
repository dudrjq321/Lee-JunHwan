import React from "react";

/*
   -배열 내장함수

   1)forEach 는 가장 쉬운 배열 내장함수
     
   2)map

*/

function Ex03_5(){
    
    let array = ["웹퍼블리셔", "프론트엔드", "백엔드"];

    return (
        <div>
            {
                array.map(function(value, index){
                    console.log("value:" + value);
                    console.log("index:" + index);

                    let tmp = <div>{value}</div>
                    return tmp;
                })
            }
        </div>
    );
}
export default Ex03_5