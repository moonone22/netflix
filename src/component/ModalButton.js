import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import YouTube from 'react-youtube';
import trailer from '../img/trailer.PNG'

function Example() {
  const values = [true, 'sm-down', 'md-down', 'lg-down', 'xl-down', 'xxl-down'];
  const [fullscreen, setFullscreen] = useState(true);
  const [show, setShow] = useState(false);

}

const ModalButton = ({video,title}) => {
    console.log("video.results",video)
    const [show, setShow] = useState(false);
  
  if(video.results.length == 0){
    return <h1>sorry... no video</h1>
  }
  return (
    <>
      <Button className='trailer' variant="light" onClick={() => setShow(true)}>
      <img width={25} src={trailer}/>
      <h3>예고편</h3>
      </Button>

      <Modal
        show={show}
        size="xl"
        onHide={() => setShow(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            {title}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <YouTube
//videoId : https://www.youtube.com/watch?v={videoId} 유튜브 링크의 끝부분에 있는 고유한 아이디
  videoId={video.results[0].key}
//opts(옵션들): 플레이어의 크기나 다양한 플레이어 매개 변수를 사용할 수 있음.
//밑에서 더 설명하겠습니다.
  opts={{
    width: "100%",
    height: "800px",
    playerVars: {
      autoplay: 1, //자동재생 O
      rel: 0, //관련 동영상 표시하지 않음 (근데 별로 쓸모 없는듯..)
      modestbranding:1, // 컨트롤 바에 youtube 로고를 표시하지 않음
      controls:0,
      showinfo:0,
      title:0,
      
    },
  }}
  //이벤트 리스너 
  onEnd={(e)=>{e.target.stopVideo(0);}}      
/>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default ModalButton