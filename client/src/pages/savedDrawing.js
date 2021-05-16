
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

  console.log(location)
  console.log(location.state)
  

//   const fetchGetDrawing = ()=>{
//       API.getDrawing(location.id)
//       .then(response=> console.log(response))
//   }


  useEffect(() => {
    // fetchGetDrawing()
  
  }, [])


  const [form, setForm] = useState({
    title: 'New Drawing',
    body: '',
  })

  const [settings, setSettings] = useState({
    canvasWidth: 800,
    canvasHeight: 800,
    brushRadius: 12,
    brushColor: '#444'
  })

  const canvasRef = useRef()
  console.log(canvasRef)
  const handleFormChange = e => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const handleUpdateSettings = (name, value) => {
    setSettings({
      ...settings,
      [name]: value
    })
  }

  const save = () => {
    // console.log(canvasRef.current)
    const postData = {
      ...form,
      drawing: canvasRef.current.getSaveData()
    }
    API.saveDrawing(postData)
      .then(response => history.push('/'))
      .catch(err => console.log(err))
  }
  const undo = () => {
    canvasRef.current.undo()
  }
  const clear = () => {
    canvasRef.current.clear()

  }




  return (
    <Container>
      <Row className="draw-row">
        <Col className="col-lg-9 canvas">
          <div  className="canvas-draw">
          <CanvasDraw 
            ref={canvasRef} 
            brushColor={settings.brushColor}
            brushRadius={settings.brushRadius}
            canvasWidth={settings.canvasWidth}
            canvasHeight={settings.canvasHeight}
          />
           </div>
        </Col>
        <Col className="col-lg-3 controller">
          <AddDrawingForm 
            form={form}
            handleFormChange={handleFormChange}
          />
          <DrawControls 
            settings={settings} 
            handleUpdateSettings={handleUpdateSettings} 
          />
          <div className="d-grid gap-2">
          <Button onClick={undo} className="btn-light button">Undo</Button>
          <Button onClick={clear} className="btn-light button">Clear <BsFillTrashFill className="icon"/> </Button>
          <Button onClick={save}className="btn-primary button">Update</Button>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default SavedDrawing
