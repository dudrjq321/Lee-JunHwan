/*
    1) 각 리스트 주석처리하고, for 문으로 한방에 찍기
*/
import React, {useState} from "react";
import './css/뒝근.css'

function Ex06_5() {
    
    let [title, setTitle] = useState(['팝니다3','팝니다2','팝니다1']);
    let [likeCount, setLikeCount] = useState([0,3,9]);
    let [newTitle, setNewTitle] = useState(['맥북 나눔', '포켓몬 띠부띠부씰 팜', '마우스 팜']);


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

    // 리스트 한방에 찍기
    function make_list() {
        let tmp_list = [];

        for(let i=0; i<title.length; i++) {
            tmp_list.push(
                <div className="list">
                    <h3>{title[i]}</h3>
                    <div className="like_count">
                        { likeCount[i] }
                        <span className="btn_like" onClick={()=>{ like_count_up(i)}}>🤍</span>
                    </div>
                    <div className="upload_time">방금</div>
                    <button className="list_btn btn_chg_title" onClick={()=> {chg_title(i)}}>수정</button>
                    <button className="list_btn btn_complete" onClick={()=> {title_chg(i)}}>완료</button>
                </div>
            )
        } 
        return tmp_list;
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
                { make_list() }

                {/* <div className="list">
                    <h3>{title[0]}</h3>
                    <div className="like_count">
                        { likeCount[0] }
                        <span className="btn_like" onClick={()=>{ like_count_up(0)}}>🤍</span>
                    </div>
                    <div className="upload_time">방금</div>
                    <button className="list_btn btn_chg_title" onClick={()=> {chg_title(0)}}>수정</button>
                    <button className="list_btn btn_complete" onClick={()=> {title_chg(0)}}>완료</button>
                </div>
                <div className="list">
                    <h3>{title[1]}</h3>
                    <div className="like_count">
                        { likeCount[1] }
                        <span className="btn_like" onClick={()=>{ like_count_up(1)}}>🤍</span>
                    </div>
                    <div className="upload_time">1시간 전</div>
                    <button className="list_btn btn_chg_title" onClick={()=> {chg_title(1)}}>수정</button>
                    <button className="list_btn btn_complete" onClick={()=> {title_chg(1)}}>완료</button>
                </div>
                <div className="list">
                    <h3>{title[2]}</h3>
                    <div className="like_count">
                        { likeCount[2] }
                        <span className="btn_like" onClick={()=>{ like_count_up(2)}}>🤍</span>
                    </div>
                    <div className="upload_time">2시간 전</div>
                    <button className="list_btn btn_chg_title" onClick={()=> {chg_title(2)}}>수정</button>
                    <button className="list_btn btn_complete" onClick={()=> {title_chg(2)}}>완료</button>
                </div> */}
            </div>
        </div>
    );
}
export default Ex06_5;
