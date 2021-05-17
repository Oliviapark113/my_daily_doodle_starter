import React, { useRef,  useEffect } from 'react'
import CanvasDraw from 'react-canvas-draw'
import Button from './button'
import { BsFillTrashFill } from "react-icons/bs";
import './style/draw.css'



const DrawingCard = ({ title, date, drawing, body, _id , handleDelete, children}) => {

  const canvasRef = useRef()



 
  useEffect(() => {
    canvasRef.current.loadSaveData(drawing)
  
  }, [])



  
  
  return (
    <div className="card">
      <div className="card-canvas">
      <CanvasDraw 
      ref={canvasRef} 
      disabled={true}
      canvasWidth={380}
      canvasHeight={380} />
      </div>
 
      <div className="card-body">
        <h5 className="card-title">{title}</h5>

        <small> { date.split('T')[0] }</small>
        <p className="card-text">{body}</p>
        <div className="card-btn-container">
        <Button onClick={()=>handleDelete(_id)} className="btn-light"><BsFillTrashFill className="icon"/></Button>
        {/* <Button onClick={() => handleView(_id)} className="btn-primary">Edit</Button> */}
        {children}
        </div>
      </div>
    </div>
  )
}

export default DrawingCard