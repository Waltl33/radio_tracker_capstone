import axios from "axios"

export class deputyService{

static serverUrl = "http://127.0.0.1:3000/deputies"

static getAllDeputies(){
    return axios.get(this.serverUrl)
}
}