import React from 'react'
import { HexColorPicker } from "react-colorful";
import '../components/style/draw.css'

const DrawControls = ({ settings, handleUpdateSettings }) => {
  return (
    <div>
      <label htmlFor="brushColor" > Brush Color</label>
      <div  className="react-colorful-div">
      <HexColorPicker 
        name="brushColor"
        color={settings.brushColor} 
        onChange={newColor => handleUpdateSettings('brushColor', newColor)}
        className="react-colorful"
      />
      </div>
      <br/>
      <label htmlFor="brushRadius">Brush Radius</label>
      <input
        name="brushRadius"
        type="range"
        value={settings.brushRadius}
        min={1}
        max={60}
        onChange={e => handleUpdateSettings(e.target.name, e.target.value)}
        className="form-range"
      />
    </div>
  )
}

export default DrawControls 
