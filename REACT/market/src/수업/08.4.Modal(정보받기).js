import React from "react";
import './css/뒝근_modal.css';

function Ex08_2({openModal, title, uploadTime}) {
    return (
        <div className="modal_wrap">
            <div className="modal">
                <h2 className="modal_title">{title}</h2>
                <p className="modal_upload_time">{uploadTime}</p>
                <div className="modal_content">내용</div>

                <div className="btn_area">
                    <button className="modal_close modal_btn" onClick={()=> { openModal(false, -1) }}>닫기</button>
                </div>
            </div>
        </div>
    );
}

export default Ex08_2;