import axios from "axios"

export default {
    getDrawings : function (){
      return axios("/api/drawings")
    },

    getDrawing : function (id){
      return axios("/api/drawings/"+id)
    },

    saveDrawing : function (data){
       return axios.post("/api/drawings", data)
    },

    updateDrawing : function (data, id){
      return axios.post("/api/drawings/"+id, data)
   },

    deleteDrawing : function (data, id){
      return axios.delete("/api/drawings/"+id, data)
    }

}