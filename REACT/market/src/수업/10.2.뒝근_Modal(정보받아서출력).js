import React, {useRef} from "react";
import './css/뒝근_modal.css';

function Ex08_2({openModal, selectedListIdx, itemList, modalType, getFromChild}) {

    const titleInput = useRef();
    const contentInput = useRef();

    function sendToParent(titleInput, contentInput) {

        getFromChild(
            selectedListIdx,
            titleInput.current.value,
            contentInput.current.value
        );
    }


    return (
        <div className="modal_wrap">
            <div className="modal">

                {
                    modalType==="open"?<h2 className="modal_title">{itemList.title}</h2>
                    :modalType==="new"?<input type="text"  className="edit_modal_title" name="title" ref={titleInput} autoFocus />
                    :<input type="text"  className="edit_modal_title" name="title" ref={titleInput} defaultValue={itemList.title} />
                
                }

                {
                    modalType==="open" && <p className="modal_upload_time">{itemList.uploadTime}</p>
                }

                {
                    modalType==="open"?<div className="modal_content">{itemList.content}</div>
                    :<textarea 
                        className="modal_content edit_modal_content" 
                        defaultValue={modalType==="new"?'':itemList.content}
                        ref={contentInput}
                     ></textarea>
                }
                
                


<div className="btn_area">
    <button className="modal_close modal_btn" onClick={()=> { openModal(false, -1,modalType) }}>닫기</button>
    { 
        modalType==="edit"?<button className="modal_btn modal_edit" onClick={()=> { sendToParent(titleInput, contentInput);  openModal(false, -1,modalType) }}>수정</button>
        :modalType==="new"&&
        <button 
            className=" modal_btn modal_new" 
            onClick={()=> { 
                sendToParent(titleInput, contentInput); 
                openModal(false, -1,modalType) }} 
        >
        등록
        </button>
    }
    </div>
            </div>
        </div>
    );
}

export default Ex08_2;