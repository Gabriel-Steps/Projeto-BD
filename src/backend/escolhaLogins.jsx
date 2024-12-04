import CampoLogin from "../componentes/CampoLogin/CampoLogin"

export const EscolhaLogin = (categoria) => {
    if(categoria === ""){
        return <h1>Selecione o seu tipo de login</h1>
    }else{
        return <CampoLogin categoria={categoria}/>
    }
}