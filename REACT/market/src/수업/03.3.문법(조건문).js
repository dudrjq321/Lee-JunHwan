import React from "react";
/*
    5) JSX의 if 문 - 기본적으로 삼항연산자를 쓴다.
                    (근데 원래 쓴던 if 문도 사용은 가능하다.)
*/
import logo from '../logo.svg';


function Ex03_3() { 
    let if_condition = true;

    function tmp_if(tmp) {
        if(tmp)
            return <h1>true일때 1</h1>
        else 
            return <h6>false일때 2</h6>
    }

    return (
        <div>   
            {/* 조건문 - 삼항연산자. (여기서 일반 if문 못씀) */}
            {/* {if_condition === true ? <h1>true일때</h1> : <h6>false일때</h6>} */}
            
            {/* if_condition 가 true 일때만 display:block 처럼 나타나게 하고 싶으면 이렇게 */}
            {/* {if_condition === true && <h1>true일때</h1>} */}

            {/* 그냥 if문 쓰고 싶으면??? */
                tmp_if(if_condition)
            }
            

            
        </div>
    );
}
export default Ex03_3;