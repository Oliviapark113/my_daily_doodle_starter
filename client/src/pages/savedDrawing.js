
import React, { useState, useRef, useEffect } from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import CanvasDraw from 'react-canvas-draw'
import Container from '../components/container'
import Row from '../components/row'
import Col from '../components/col'
import DrawControls from '../components/draw-controls'
import AddDrawingForm from '../components/add-drawing-form'
import Button from "../components/button"
import API from "../utils/API"
import { BsFillTrashFill } from "react-icons/bs";
import '../components/style/draw.css'

//import redirect from react router dom 

const SavedDrawing = () => {

  const history = useHistory()
  const location = useLocation()
  const canvasRef = useRef()

  const [savedDrawing, setSavedDrawing] = useState()

  console.log(location)

//   const fetchGetDrawing  = () => {
//       API.getDrawing(location.state._id)
//       .then(response=> setSavedDrawing(response.data))
//   }

  useEffect(() => {
    // fetchGetDrawing()
    canvasRef.current.loadSaveData(location.state.drawing)
  
  }, [])

//   console.log(savedDrawing)

  const [updateForm, setUpdateForm] = useState({
    title:location.state.title,
    body: location.state.body
  })



  const [updateSettings, setUpdateSettings] = useState({
    canvasWidth: 800,
    canvasHeight: 800,
    brushRadius: 12,
    brushColor: '#444'
  })


  const handleUpdateFormChange = e => {
    setUpdateForm({
      ...updateForm,
      [e.target.name]: e.target.value
    })
  }

  const handleUpdateSettings = (name, value) => {
    setUpdateSettings({
      ...updateSettings,
      [name]: value
    })
  }


const handleUpdate = id => {
    console.log(id)
    const finalDrawing = {
     ...updateForm,
     ...updateSettings,
     id:id,
     drawing: canvasRef.current.getSaveData(),
    //  date: savedDrawing.date
      
    }
 
   API.updateDrawing(finalDrawing.id, finalDrawing)
   .then(response => {
     console.log(response)
     history.push({
         pathname:"/",
        })
 })
   .catch(err => console.log(err))
 }



  const updateUndo = () => {
    canvasRef.current.undo()
  }


  
  const updateClear = () => {
    canvasRef.current.clear()

  }




  return (
    <Container>
      <Row className="draw-row">
        <Col className="col-lg-9 canvas">
          <div  className="canvas-draw">
          <CanvasDraw 
            ref={canvasRef} 
            brushColor={updateSettings.brushColor}
            brushRadius={updateSettings.brushRadius}
            canvasWidth={updateSettings.canvasWidth}
            canvasHeight={updateSettings.canvasHeight}
          />
           </div>
        </Col>
        <Col className="col-lg-3 controller">
          <AddDrawingForm 
            form={updateForm}
            handleFormChange={handleUpdateFormChange}
          />
          <DrawControls 
            settings={updateSettings} 
            handleUpdateSettings={handleUpdateSettings} 
          />
          <div className="d-grid gap-2">
          <Button onClick={updateUndo} className="btn-light button">Undo</Button>
          <Button onClick={updateClear} className="btn-light button">Clear <BsFillTrashFill className="icon"/> </Button>
          <Button onClick={()=>handleUpdate(location.state.id)} className="btn-primary button">Update</Button>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default SavedDrawing
