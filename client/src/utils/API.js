import axios from "axios"

export default {
    getDrawings : function (){
      return axios("/api/drawings")
    },

    saveDrawing : function (data){
       return axios.post("/api/drawings", data)
    },

    deleteDrawing : function (data, id){
      return axios.delete("/api/drawings/"+id, data)
    }

}