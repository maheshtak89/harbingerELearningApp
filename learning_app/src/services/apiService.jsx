import axios from 'axios'
import config from './../config'

export function get (methodType, header, url, data) {
    let promise =  axios.get(config.api.apiUrl + url, {
            method:methodType,
            headers :{
                "Access-Control-Allow-Origin" : "*",
                header: header
            }
        }).then((response)=>{
            return response.data;
        }).catch(function(err) {
            console.log('Fetch Error :-S', err);
        })

        return promise;
}