import React, { useRef, useState, useEffect } from 'react'
import CanvasDraw from 'react-canvas-draw'
import Button from './button'
import {useHistory} from 'react-router-dom'
import { BsFillTrashFill } from "react-icons/bs";
import './style/draw.css'



const DrawingCard = ({ title, date, drawing, body, _id , handleDelete}) => {

  const canvasRef = useRef()
  const history = useHistory()



 
  useEffect(() => {
    canvasRef.current.loadSaveData(drawing)
  
  }, [])



  
  
  return (
    <div className="card">
      <CanvasDraw ref={canvasRef} disabled={true} />
 
      <div className="card-body">
        <h5 className="card-title">{title}</h5>

        <small> { date.split('T')[0] }</small>
        <p className="card-text">{body}</p>
        <div className="card-btn-container">
        <Button onClick={()=>handleDelete(_id)} className="btn-light"><BsFillTrashFill className="icon"/></Button>
        <Button onClick={()=> history.push('/draw')} className="btn-primary">Edit</Button>
        </div>
      </div>
    </div>
  )
}

export default DrawingCard