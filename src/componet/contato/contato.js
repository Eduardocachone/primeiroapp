import './contato.css'
import React from "react";

function Contato(){
    return(
        <>
            <div className="contato">

                <div className="foto">.</div>

                <form className="form">
                    <label>
                        Nome:
                        <input  type='text' pleceholdee='nome do usuario' />                        
                    </label>
                    <label>
                        Email
                        <input  type='email' pleceholdee='email do usuario' />                        
                    </label>
                    <label>
                        Assunto
                        <input  type='text' pleceholdee='assunto' />                        
                    </label>

                    <button>ENVIAR</button>
                    
                    
                        <div className='texto'>
                            para mais informaçoes assece nossas redes <br/>
                            sociais @Jurassic-word<br/>
                            ou emtre em comtato com o telefone <br/>
                            (11) 984506070
                       </div>

                       <div className='texto2'>
                            Obrigado pelo seu fedbeck
                       </div>

                </form>
            </div>        
        </>
    )
}

export default Contato;