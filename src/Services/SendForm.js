import axios from 'axios';

export const SendForm = (Nombre, Email, Mensaje, cb) =>{

    axios
        .post(`https://www.marianoram.com/api/mailservice`, {
            // .post(`api/mailservice`, {
            Nombre : Nombre,
            Email: Email,
            Mensaje: Mensaje,
            Source: "LanMar"
         
        })
            .then(function(res) {
                cb(res)
            })
            .catch(function(err) {
                cb(err)
            })


}