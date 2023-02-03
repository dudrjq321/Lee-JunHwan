/*
    제목 누르면 모달창 띄우고, 닫기 누르면 닫히게 하기
    (이번 예제에서는 정보는 넘기지 않고 모달창만 띄웠다 뺐다 하기)

    1) (외부 컴포넌트) 08.2.모달 컴포넌트 생성
    2) useState 만들기 => true false 전환해가면서 창 보였다 안보였다 하기
    
*/ 
import React, {useState} from "react";
import './css/뒝근.css'
import Modal from "./10.2.뒝근_Modal(정보받아서출력)";

function Ex08_1() {

    const [itemList, setItemList] = useState([
        {
            id: 3,
            title: '팝니다3',
            content: '내용3 이에유~',
            likeCount: 0,
            uploadTime: '1시간 전',
            completeChk: true,
        },
        {
            id: 2,
            title: '팝니다2',
            content: '내용2 이에유~',
            likeCount: 0,
            uploadTime: '2시간 전',
            completeChk: true,
        },
        {
            id: 1,
            title: '팝니다1',
            content: '내용1 이에유~',
            likeCount: 0,
            uploadTime: '3일 전',
            completeChk: true,
        },
    ]);


    function getFromChild(index, titleInput, contentInput) {
        console.log(index + " , " +titleInput + " , " +contentInput);

        let tmp_itemList = [...itemList];

        // 수정일때
        if(index >= 0) {
            tmp_itemList[index].title = titleInput;
            tmp_itemList[index].content = contentInput;
        }
        
        // 등록일때
        else if(index == -1) {
            let newInfo = {
                id: itemList.length + 1,
                title: titleInput,
                content: contentInput,
                likeCount: 0,
                uploadTime: '방금',
                completeChk: true,
            }

            tmp_itemList.unshift(newInfo)
        }

        setItemList(tmp_itemList);
    }
 

    // 좋아요 카운트 업
    function like_count_up(index) { 
         let tmp_itemList = [...itemList];
         tmp_itemList[index].likeCount = tmp_itemList[index].likeCount+1;
         setItemList(tmp_itemList)
    }
 
     
    
    // 판매완료 넣기
    // let [completeChk, setCompleteChk] = useState([true, true, true]); 
    function title_chg(index) {
        let tmp_itemList = [...itemList]; 

        if(tmp_itemList[index].completeChk === true) {
            // (판매완료) 문구 넣는 부분
            tmp_itemList[index].title = tmp_itemList[index].title + " (판매완료)";

            // true 를 false 로 변경
            tmp_itemList[index].completeChk = false;
        } 
        else {
            // (판매완료) 문구 빼는 부분
            tmp_itemList[index].title = tmp_itemList[index].title.replace(" (판매완료)","");

            // false 를 true 로 변경
            tmp_itemList[index].completeChk = true;
        }
        setItemList(tmp_itemList);
    }

    let [addList, setAddList] = useState('');
    function add_list() { 
    //     // 방법2: Deep Copy 방식으로 복사하기
    //     if(addList.length > 0) {
    //         let tmp_title = [...title];
    //         tmp_title.unshift(addList);
    //         setTitle(tmp_title);
    //         ////////////////////////////////////
    //         // 리스트를 추가하면 '좋아요', '업로드 시간' 들을 다 추가해줘야한다. 안그러면 기존에 3개인채로 리스트레 그려지기 때뭄ㄴ에 4번째 항목 부터는 좋아요나 업로드 시간이 찍히지 않는다.

    //         // 좋아요 개수 바꾸기
    //         let tmp_likeCount = [...likeCount];
    //         tmp_likeCount.unshift(0);
    //         setLikeCount(tmp_likeCount);

    //         // 업로드 시간 바꾸기
    //         let tmp_uploadTime = [...uploadTime];
    //         tmp_uploadTime.unshift('방금');
    //         setUploadTime(tmp_uploadTime);
    //         // uploadTime

    //         // 수정 누르면 바뀔 제목 리스트 바꾸기
    //         // newTitle
    //         let tmp_newTitle = [...newTitle];
    //         tmp_newTitle.unshift("초밥 쿠폰");
    //         setNewTitle(tmp_newTitle);
    //     }
    }

    // 삭제
    let del_list = (itemId) => {

        // filter => 기존 배열에서 조건에 일치하는 새 배열을 생성(반복문처럼 배열의 요소를 순회하면서 동작)

        setItemList(itemList.filter(  
            (item)=> item.id !== itemId)
        )

    }


    // **** 모달 관련 ***
    // 모달창 띄우기
    let [showModal, setShowModal] = useState(false);
    
    // 몇번째 제목 눌렀는지 index 번호 갱신
    let [selectedListIdx, setSelectedListIdx] = useState(-1);

    // '열기', '쓰기', 수정' 중에 뭐 넘길건지 저장
    let [modalType, setModalType] = useState('');

    let openModal = (tmp, index, type) => {
        setShowModal(tmp);
        setSelectedListIdx(index);
        setModalType(type)
    }


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

            { // title 배열 (['팝니다3','팝니다2','팝니다1']) 을 map 으로 돌려가면서 리스트 생성
                itemList.map((v, i) => {
                    return (
                        <div className="list" key={i}>
                            <h3 onClick={()=>{ openModal(true, i, "open") }}>{itemList[i].title}</h3>
                            <div className="like_count">
                                { itemList[i].likeCount }
                                <span className="btn_like" onClick={()=>{ like_count_up(i)}}>🤍</span>
                            </div>
                            <div className="upload_time">{itemList[i].uploadTime}</div>

                            <button className="list_btn btn_chg_title" onClick={()=> {openModal(true, i, "edit")}}>수정</button>
                                
                            <button className="list_btn btn_complete" onClick={()=> {title_chg(i)}}>
                            {
                                itemList[i].completeChk === true ? "완료":"취소"
                            }
                            </button> 

                            <button className="list_btn btn_complete" onClick={()=>{del_list(itemList[i].id)}}>삭줴</button>
                        </div>
                    )
                })

            } 
            </div>

            <div className="add_task"> 
                <button className="btn_newList" onClick={()=> {openModal(true, -1, "new")}}>내 물건 팔기</button>
            </div>

            {/* { showModal === true ? <Modal /> : null } */}
            { showModal && <Modal openModal={openModal} selectedListIdx={selectedListIdx} itemList={itemList[selectedListIdx]} modalType={modalType} getFromChild={getFromChild} /> }
        </div>
    );
}
export default Ex08_1;
