import React from "react";
 
/*
    6) 반복문 - for 못씀. map 써야함


*/

function Ex03_4() {  
    let array = ["웹퍼블리셔", "프론트엔드", "백엔드"];

    return (
        <div>  
            {
                array.map(function(value, index) {
                    console.log("value: " + value);
                    console.log("index: " + index);

                    // 화면에 찍어줄때는 변수에 담아서 return으로 반환한다.
                    let tmp =  <div>{value}</div>
                    return tmp;
                })
            }
            <hr />

            {
                array.map((value, index) => {
                    console.log("value: " + value);
                    console.log("index: " + index);

                    // 화면에 찍어줄때는 변수에 담아서 return으로 반환한다.
                    let tmp =  <div>{value}</div>
                    return tmp;
                })
            }

        </div>
    );
}
export default Ex03_4;