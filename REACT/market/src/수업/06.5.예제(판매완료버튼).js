/*
    1) '수정' 옆에 '완료' 버튼 추가
        누르면 '(판매완료)' 계속 들어가기
*/
import React, {useState} from "react";
import './css/뒝근.css'

function Ex06_5() {
    
    let [title, setTitle] = useState(['팝니다3','팝니다2','팝니다1']);
    let [likeCount, setLikeCount] = useState([0,3,9]);
    let [newTitle, setNewTitle] = useState(['맥북 나눔', '포켓몬 띠부띠부씰 팜', '마우스 팜']);


    // 좋아요 카운트 업
    function like_count_up(index) {
        /* - 바꾸는 방법
                1) 원본을 바꾸는게 아니라 원본의 복사본을 별도로 만들어서 저장                
                2) 별도로 만든걸 우리가 원래 하던 방식으로 바꾸면 됨.
                3) 바꾼걸 원본에 덮어씀(setTitle 이용) */

         let new_count = [...likeCount];
         new_count[index]=likeCount[index]+1;
         setLikeCount(new_count)
    }

    // 제목 변경
    function chg_title(index) {
        /* 주의: useState 안에 있는 내용물을 그대로 가져와서 바꿔야 함.
                title[0]="맥북 나눔" 이런거 이제 안됨

            - 바꾸는 방법
                1) 원본을 바꾸는게 아니라 원본의 복사본을 별도로 만들어서 저장                
                2) 별도로 만든걸 우리가 원래 하던 방식으로 바꾸면 됨.
                3) 바꾼걸 원본에 덮어씀(setTitle 이용)
        */

        // let tmp_title = [title]; // 이렇게 하면 복사 안됨. 이건 주소값 공유이기 떄문에 같은거 건드리는거나 마찬가지임. 이럴땐 새로나온 문법인 deep copy 방식을 써야함. 그냥 변수 앞에 ... 붙이면 됨

        let tmp_title = [...title]; //['팝니다3','팝니다2','팝니다1']
        tmp_title[index] = newTitle[index]; //['맥북 나눔','팝니다2','팝니다1']
        setTitle(tmp_title)
    }
    
    // 판매완료 넣기
    function title_chg(index) {
        let tmp_title = [...title]; //['팝니다3','팝니다2','팝니다1']
        tmp_title[index] = tmp_title[index] + " (판매완료)"; //['팝니다3 (판매완료)','팝니다2','팝니다1']
        setTitle(tmp_title)
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
                <div className="list">
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
                </div>
            </div>
        </div>
    );
}
export default Ex06_5;
