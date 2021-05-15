import React, { useRef, useState, useEffect } from 'react'
import CanvasDraw from 'react-canvas-draw'
import Button from './button'
import {useHistory} from 'react-router-dom'
import API from '../utils/API'


const DrawingCard = ({ title, date, drawing, body, _id }) => {
  const canvasRef = useRef()
  const history = useHistory()

  const [savedDrawings, setSavedDrawings] = useState([])

  const getSavedDrawings = ()=>{
     API.getDrawings()
     .then(storedDrawing => {
       setSavedDrawings(storedDrawing.data)
     })

  }


  useEffect(() => {
    getSavedDrawings()
    canvasRef.current.loadSaveData(drawing)
  }, [])



  const handleDelete = id => {

   
    console.log(id)
    const findDrawing = savedDrawings.find(drawing => drawing._id===id)
    console.log(findDrawing)

    API.deleteDrawing(findDrawing, id)
    .then(response => 
             {console.log(response)
           })
    .catch(err => console.log(err))

   }


  
  return (
    <div className="card">
      <CanvasDraw ref={canvasRef} disabled={true} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>

        <small> { date.split('T')[0] }</small>
        <p className="card-text">{body}</p>
        <Button onClick={()=>handleDelete(_id)} className="btn-light">Delete</Button>
        <Button onClick={() =>history.push('/draw')} className="btn-light">Draw</Button>
      </div>
    </div>
  )
}

export default DrawingCard