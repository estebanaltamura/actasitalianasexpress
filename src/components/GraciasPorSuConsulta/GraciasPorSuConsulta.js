import { useEffect, useRef } from "react"
import { Link, useNavigate } from "react-router-dom"
import { BsChevronLeft } from "react-icons/bs";
import { Header } from "../Header/Header"; 
import { FooterGracias } from "../Footer/FooterGracias";
import "./GraciasPorSuConsulta.css"

export const GraciasPorSuConsulta = ()=> {

    const history = useNavigate()
    const mensajeGraciasContainer = useRef()

    const height = document.documentElement.clientHeight
        const height2 = window.innerHeight
    useEffect(()=>{
        
        mensajeGraciasContainer.current.setAttribute("height", height)
        setTimeout(()=>{history("/")},135500)

    },[])

    return(
        <>
            
            <div ref={mensajeGraciasContainer} className="mensajeGraciasContainer">
            <Header />
                <div className="buttonsContainer">
                    <Link to="https://wa.me/+5491127704684?text=Hola!%20Estoy%20interesado%20en%20el%20servicio,%20por%20favor%20contactarse%20a%20la%20brevedad." className="chatButton">
                        Chatear ahora
                        <img className="chatAhoraIcon" src="https://i.postimg.cc/sgz0nSHy/icons8-whatsapp-96.png"/>
                    </Link>
                    <Link to="/home" className="volverButton">
                        Volver
                        <BsChevronLeft className="volverIcon" />
                    </Link>
                </div>
            </div>
            <FooterGracias />
            
        </>
    )
}