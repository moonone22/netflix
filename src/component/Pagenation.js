import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { movieAction } from '../redux/action/action';
import { reduxActions } from '../redux/reduce/reduce';

const Pagenation = ({page}) => {
    const [nowPage,setNowpage] = useState(1); //현재 페이지  1
    const[minPageNumber, setminPageNumber] = useState(1); //현재 최소 페이지 1
    const[maxPageNumber, setmaxPageNumber] = useState(5); //현재 최대 페이지 5
    console.log("page",page)
    const dispatch = useDispatch()
    const {text} = useSelector(state => state.state1.nowInnerText)

    useEffect (()=>{
    dispatch(reduxActions.getPage(nowPage))
    dispatch(movieAction.getVote(text))
    },[nowPage,page])


    const pageNum = page > 500 ? 500 : page 

    const pages = []; //500개 요소 생성
    for(let i=1 ; i<=page ; i++){
        pages.push(i)
    }

    let resultPage = pages.filter((item) => {
        return item > minPageNumber -1 && item < maxPageNumber + 1   //item > 0  그리고 item < 6  => [1,2,3,4,5] 배열출력
      })


      const handleClick = (event) => {
        setNowpage(Number(event.target.id));
        
     }
     
     const handlePrevClick = () => {
        
    if(nowPage - 1 < minPageNumber){
            setminPageNumber(minPageNumber-5)
            setmaxPageNumber(nowPage-1)
            
        }
        setNowpage(nowPage - 1); 
    }

    const handleNextClick = () => {
        
        if(nowPage + 1 > maxPageNumber){
            setminPageNumber(nowPage+1)
            setmaxPageNumber(maxPageNumber+5)
        }
        
        setNowpage(nowPage + 1);
    }

    const handleNextPullClick = () => {
        setNowpage(pageNum);
        setmaxPageNumber(pageNum);
        setminPageNumber(pageNum-4);
    }
    
    
    
    const handlePrevPullClick = () => {
        setNowpage(1);
        setmaxPageNumber(5);
        setminPageNumber(1);
    }



    return (
        <div>
            <ul className='pageNumber'>
            
            <li><button onClick={handlePrevPullClick}>1</button></li>
    
            <li><button disabled={nowPage == 1 ? true :false} onClick={handlePrevClick}>{"<"}</button></li>
    
            {resultPage.map((item) => {    
            return (
            <li onClick={handleClick} key={item}  id={item}  className={item == nowPage ? "avtive" : null}>{item}</li>
                )
            })}

    
            <li><button disabled={nowPage == pageNum ? true :false}  onClick={handleNextClick}>{">"}</button></li>
            <li><button onClick={handleNextPullClick}>{pageNum}</button></li>
            </ul>
            
        </div>
      )
}

export default Pagenation