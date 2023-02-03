/*
    제목 누르면 모달창 띄우고, 닫기 누르면 닫히게 하기
    (이번 예제에서는 정보는 넘기지 않고 모달창만 띄웠다 뺐다 하기)

    1) (외부 컴포넌트) 08.2.모달 컴포넌트 생성
    2) useState 만들기 => true false 전환해가면서 창 보였다 안보였다 하기
    
*/ 
import React, {useState} from "react";
import './css/뒝근.css'
import Modal from "./08.2.Modal"

function Ex08_1() {
    
    let [title, setTitle] = useState(['팝니다3','팝니다2','팝니다1']);
    let [likeCount, setLikeCount] = useState([0,3,9]);
    let [newTitle, setNewTitle] = useState(['맥북 나눔', '포켓몬 띠부띠부씰 팜', '마우스 팜']);
    let [uploadTime, setUploadTime] = useState(['방금','1시간 전', '3일 전']);


    // 좋아요 카운트 업
    function like_count_up(index) { 
         let new_count = [...likeCount];
         new_count[index]=likeCount[index]+1;
         setLikeCount(new_count)
    }

    // 제목 변경
    function chg_title(index) { 
        let tmp_title = [...title]; //['팝니다3','팝니다2','팝니다1']
        tmp_title[index] = newTitle[index]; //['맥북 나눔','팝니다2','팝니다1']
        setTitle(tmp_title)
    }
    
    // 판매완료 넣기
    let [completeChk, setCompleteChk] = useState([true, true, true]); 
    function title_chg(index) {
        if(completeChk[index] === true) {
            // (판매완료) 문구 넣는 부분
            let tmp_title = [...title]; //['팝니다3','팝니다2','팝니다1']
            tmp_title[index] = tmp_title[index] + " (판매완료)"; //['팝니다3 (판매완료)','팝니다2','팝니다1']
            setTitle(tmp_title)

            // true 를 false 로 변경
            let tmp_completeChk = [...completeChk]; // [true, true, true]
            tmp_completeChk[index] = false; // [false, true, true]
            setCompleteChk(tmp_completeChk);
        } 
        else {
            // (판매완료) 문구 빼는 부분
            let tmp_title = [...title];
            tmp_title[index] = tmp_title[index].replace(" (판매완료)","") // '팝니다3 (판매완료)'
            setTitle(tmp_title)

            // false 를 true 로 변경
            let tmp_completeChk = [...completeChk]; // [false, true, true]
            tmp_completeChk[index] = true; // [true, true, true]
            setCompleteChk(tmp_completeChk);
        }
    }

    let [addList, setAddList] = useState('');
    function add_list() {
        // 방법1: 자바스크립트 방식으로 값 가져오기
        // let tmp = document.getElementsByClassName('new_list')[0].value;

        // let tmp_title = [...title];
        // tmp_title.unshift(tmp); // //['unshift 자리','팝니다3','팝니다2','팝니다1']
        // setTitle(tmp_title);
        /*
            push: 배열 맨 끝에 추가
            pop: 배열 맨 끝에 제거
            unshift: 배열 맨 앞쪽에 추가 
            shift: 배열 맨 앞쪽꺼 제거
        */
        
        // 방법2: Deep Copy 방식으로 복사하기
        if(addList.length > 0) {
            let tmp_title = [...title];
            tmp_title.unshift(addList);
            setTitle(tmp_title);
            ////////////////////////////////////
            // 리스트를 추가하면 '좋아요', '업로드 시간' 들을 다 추가해줘야한다. 안그러면 기존에 3개인채로 리스트레 그려지기 때뭄ㄴ에 4번째 항목 부터는 좋아요나 업로드 시간이 찍히지 않는다.

            // 좋아요 개수 바꾸기
            let tmp_likeCount = [...likeCount];
            tmp_likeCount.unshift(0);
            setLikeCount(tmp_likeCount);

            // 업로드 시간 바꾸기
            let tmp_uploadTime = [...uploadTime];
            tmp_uploadTime.unshift('방금');
            setUploadTime(tmp_uploadTime);
            // uploadTime

            // 수정 누르면 바뀔 제목 리스트 바꾸기
            // newTitle
            let tmp_newTitle = [...newTitle];
            tmp_newTitle.unshift("초밥 쿠폰");
            setNewTitle(tmp_newTitle);

        }
    }


    let ttt = (tmp) => {
        setShowModal(tmp);
    }

    // 모달창 띄우기
    let [showModal, setShowModal] = useState(false);

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
                title.map((v, i) => {
                    return (
                        <div className="list" key={i}>
                            <h3 onClick={()=>{ setShowModal(true) }}>{title[i]}</h3>
                            <div className="like_count">
                                { likeCount[i] }
                                <span className="btn_like" onClick={()=>{ like_count_up(i)}}>🤍</span>
                            </div>
                            <div className="upload_time">{uploadTime[i]}</div>
                            <button className="list_btn btn_chg_title" onClick={()=> {chg_title(i)}}>수정</button>
                            <button className="list_btn btn_complete" onClick={()=> {title_chg(i)}}>완료</button>
                        </div>
                    )
                })
            
            } 
            </div>

            <div className="add_task">
                <input className="new_list" onChange={(e)=> {setAddList(e.target.value)}} />
                <button onClick={add_list}>내 물건 팔기</button>
            </div>

            {/* { showModal === true ? <Modal /> : null } */}
            { showModal && <Modal ttt = {ttt} /> }
                
        </div>
    );
}
export default Ex08_1;
