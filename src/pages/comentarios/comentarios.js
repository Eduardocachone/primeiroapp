import React from "react";
import './comentarios.css'
import Footer from "../../componet/footer/footer";
import Header from "../../componet/header/header";


function Comentarios(){
    return(
        <div>
            <Header/>

            <div className="comentarios">
                <div className="fotocomentario">
                </div>

                <form className="formcoment">
                    <label>
                        Deixe seu comentario aqui
                        <input type='text' />

                        <button>Enviar</button>
                    </label>
                </form>
            </div>

            <Footer/>
        </div>
    );
}

export default Comentarios;