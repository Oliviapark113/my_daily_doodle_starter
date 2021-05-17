import axios from "axios"

export default {
    getDrawings : function (){
      return axios.get("/api/drawings")
    },

    getDrawing : function (id){
      return axios.get("/api/drawings/"+id)
    },

    saveDrawing : function (data){
       return axios.post("/api/drawings", data)
    },

    updateDrawing : function (id, data){
      return axios.put("/api/drawings/"+id, data)
   },

    deleteDrawing : function (data, id){
      return axios.delete("/api/drawings/"+id, data)
    }

}