import React, {useState } from 'react'
import {getLogin} from '../../backend/controllers/loginDb.js'
import './CampoLoginStyle.css';
import CampoTexto from '../CampoTexto/CampoTexto';
import { setCadastro } from '../../backend/controllers/inserirBD.js';
import { useNavigate } from 'react-router-dom';

export default function CampoLogin({categoria}) {
    const navigate = useNavigate();
    const escolherRota = (categoriaEfetuada) => {
          navigate(`/Sistema/${categoriaEfetuada}`, { state: {email}});
      }
    const [entrada,setEntrada] = useState(false);
    const [acessoEstado, setAcessoEstado] = useState("login");
    const [email,setEmail] = useState("");
    const [senha,setSenha] = useState("");
    const [nome,setNome] = useState("");
    const [telefone,setTelefone] = useState("");
    const [cpf,setCpf] = useState("");
    const [especialidade,setEspecialidade] = useState("");
    const mensagem = entrada ? "Já possui login? Entre!" : "Não possui Login? Cadastre-se!";
    const salvarDados = async (evento) => {
        evento.preventDefault();
        if(acessoEstado === "login"){
            if(getLogin({email, senha, categoria})){
                escolherRota(categoria)
            }
        }else if(acessoEstado === "cadastro"){
            if(setCadastro({categoria, email, senha, nome, telefone, cpf, especialidade})){
                escolherRota(categoria)
            }
        }
    }
    const alterarCamposAcesso = () => {
        setEntrada(!entrada);
        if(!entrada){
            setAcessoEstado("cadastro");
        }else{
            setAcessoEstado("login");
        }
    }
    const camposPersonalizados = (cate) => {
        if(cate === "Medico" && acessoEstado === "cadastro"){
            return (<>
                <CampoTexto label={"Nome"} aoAlterar={(valor) => setNome(valor)} placeholder={"Digite o seu Nome"} tipo={"text"}/>
                <CampoTexto label={"Telefone"} aoAlterar={(valor) => setTelefone(valor)} placeholder={"(99) 99999-9999"} tipo={"text"}/>
                <CampoTexto label={"Especialidade"} aoAlterar={(valor) => setEspecialidade(valor)} selecionar={true}/>
            </>)
        }else if(cate === "Secretario" && acessoEstado === "cadastro"){
            return (<>
            <CampoTexto label={"Nome"} aoAlterar={(valor) => setNome(valor)} placeholder={"Digite o seu Nome"} tipo={"text"}/>
            </>)
        }else if(cate === "Paciente" && acessoEstado === "cadastro"){
            return (<>
                <CampoTexto label={"Nome"} aoAlterar={(valor) => setNome(valor)} placeholder={"Digite o seu Nome"} tipo={"text"}/>
                <CampoTexto label={"Telefone"} aoAlterar={(valor) => setTelefone(valor)} placeholder={"(99) 99999-9999"} tipo={"text"}/>
                <CampoTexto label={"CPF"} aoAlterar={(valor) => setCpf(valor)} placeholder={"Digite o seu Cpf"} tipo={"text"}/>
            </>)
        }
    }
  return (
    <div className='ContainerLogin'>
        <h1 categoriaTitulo={categoria}>{entrada ? "Cadastro" : "Login"}</h1>
        <div className='ContainerCampos'>
            {camposPersonalizados(categoria)}
            <form className='camposForm' onSubmit={salvarDados}>
                <CampoTexto label={"E-mail"} aoAlterar={(valor) => setEmail(valor)} placeholder={"Digite o seu E-mail"} tipo={"e-mail"}/>
                <CampoTexto label={"Senha"} aoAlterar={(valor) => setSenha(valor)} placeholder={"Digite a sua Senha"} tipo={"password"}/>
                <hr />
                <button categoriaBotao={categoria} className='Acesso'>{entrada ? "Cadastro" : "Login"}</button>
            </form>
            <button onClick={alterarCamposAcesso}  className='trocarTipoAcesso'>{mensagem}</button>
        </div>
        <div className='ContainerImagem' categoriaImagem={categoria} />
    </div>
  )
}
