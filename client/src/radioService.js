import axios from "axios"

export class radioService{

static serverUrl = "http://127.0.0.1:3000/radios"

static getAllRadios(){
    return axios.get(this.serverUrl)
}
}