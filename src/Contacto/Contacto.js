import React from 'react'
import './Contacto.css'
import {SendForm} from '../Services/SendForm'

const Contacto = () => {
    
    const [ShowError, ChangeShowError] = React.useState("")
    const [MessageSent, ChangeMessageSent] = React.useState(false)

    const handleReset = () => { ChangeShowError("") ; ChangeMessageSent(false)}

    const handleSend = () => {
        let Nombre = document.getElementById("nombre-input");
        let Email = document.getElementById("email-input");
        let Mensaje = document.getElementById("mensaje-input");

        if ((Nombre.value.length >= 3) && (Email.value.length >= 5) && (Email.value.includes("@") && Mensaje.value.length >= 10) )  {

            SendForm(Nombre.value, Email.value ,Mensaje.value , (res, err) => {

               
    
                if (err) {
                    console.log(err)
                 
                    ChangeShowError("Hay problemas con el servidor. Por favor, intentelo en unos instantes.")

                }
                else {
                    if (res.status === 200) {

                        ChangeMessageSent(true)
                        Nombre.value = ""; Email.value = ""; Mensaje.value = ""; 
                    }
                }
    
            })

        }

        else ChangeShowError("Por favor, revise todos los campos") ;    ChangeMessageSent(false)

    }



    return (
        <form className="form-div">

      
                <label htmlFor="Nombre"> Nombre </label>
                <input type="text" name="Nombre" id="nombre-input" onChange={handleReset} />

                <label htmlFor="Email"> e-mail </label>
                <input  type="text" name="Email" id="email-input" onChange={handleReset}/>

                <label htmlFor="form-body"> Mensaje </label>
                <textarea name="form-body" rows="6" cols="40" id="mensaje-input" onChange={handleReset} />


                <button onClick={handleSend} type="button" className="send-button" > Enviar </button>


                <div className="feedback-div">

                    { ShowError !== "" ? <div className="error-div"> {ShowError} </div> : null}
                    
                    {MessageSent ? <div className="success-div"> Mensaje Enviado exitosamente! </div> : null}
                </div>
     
            

        </form>
    )
}

export default Contacto 