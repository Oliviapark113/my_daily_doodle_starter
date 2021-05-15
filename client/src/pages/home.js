import React, {useState, useEffect} from "react"
import API from "../utils/API"
import Container from "../components/container"
import Row from "../components/row"
import Col from "../components/col"
import DrawingCard from "../components/drawing-card"

const og_date = "2021-04-06T18:28:47.287Z";
console.log(og_date); // => "2012-10-01"
console.log(og_date.split('T'))
console.log(og_date.split('T')[0]); // => [ '2012', '10', '01' ]



const Home = () =>{
   
    const[drawings, setDrawings] = useState([])
    console.log(drawings)

    const fetchDrawings = () =>{
      API.getDrawings()
      .then(response => setDrawings(response.data))
      .catch(err=> console.log(err))
    }
   

    useEffect(()=>{
      fetchDrawings()
    }
    ,[])


    const handleDelete = id => {
   
      console.log(id)
      const findDrawing = drawings.find(drawing => drawing._id===id)
      console.log(findDrawing)
      console.log(findDrawing._id)
  
      API.deleteDrawing(findDrawing, findDrawing._id)
      .then(response =>{
        console.log(response)

        fetchDrawings()
      }
      )
      .catch(err => console.log(err))
  
     }
    

    return (
        <Container>
          <Row>
            { drawings.map(drawing => (
              <Col className="col-md-4" key={drawing._id}>
                <DrawingCard {...drawing}  handleDelete={handleDelete}/>
              </Col>
            )) }
          </Row>
        </Container>
      )
    }
export default Home 