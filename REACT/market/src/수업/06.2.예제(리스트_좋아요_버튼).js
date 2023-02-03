/*
    - 리스트 만들고 하트 누르면 숫자 변경
        (이번 예제에서는 리스트 하나만 만들어서 숫자 변경)
*/
import React, {useState} from "react";
import './css/뒝근.css'

function Ex06_2() {

    let [likeCount, setLikeCount] = useState(0);

    // function setLikeCount(tmp) {
    //     likeCount = tmp;
    // }

    return (
        <div className="wrap">
            <div className="header">
                <div className="logo">뒝근마켓</div>

                <div className="hamberger">
                    <div className="line"></div>
                    <div className="line"></div>
                    <div className="line"></div>
                </div>
            </div>

            <div className="main">
                <div className="list">
                    <h3>팝니다1</h3>
                    <div className="like_count">
                        { likeCount }
                        <span className="btn_like" onClick={()=>{ setLikeCount(likeCount+1)}}>🤍</span>
                    </div>
                    <div className="upload_time">1시간 전</div>
                </div>
            </div>
        </div>
    );
}
export default Ex06_2;
