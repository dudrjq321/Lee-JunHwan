import React from "react";
import './css/뒝근_modal.css';

function Ex08_2({ttt}) {
    return (
        <div className="modal_wrap">
            <div className="modal">
                <h2 className="modal_title">제목</h2>
                <p className="modal_upload_time">날짜</p>
                <div className="modal_content">내용</div>

                <div className="btn_area">
                    <button className="modal_close modal_btn" onClick={()=> { ttt(false) }}>닫기</button>
                </div>
            </div>
        </div>
    );
}

export default Ex08_2;