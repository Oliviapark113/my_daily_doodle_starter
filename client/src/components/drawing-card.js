import React, { useRef, useState, useEffect } from 'react'
import CanvasDraw from 'react-canvas-draw'
import Button from './button'
import {useHistory} from 'react-router-dom'



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
        <Button onClick={()=>handleDelete(_id)} className="btn-light">Delete</Button>
        <Button onClick={()=> history.push('/draw')} className="btn-light">Draw</Button>
      </div>
    </div>
  )
}

export default DrawingCard