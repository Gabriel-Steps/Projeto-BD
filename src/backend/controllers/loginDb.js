import axios from "axios";
export const getLogin = async ({email, senha, categoria}) => {
  let tipoPessoa = ""
  let operacao = ""
  switch(categoria){
    case "Paciente":
      tipoPessoa = "pacientes"
      operacao = "getPacientes"
      break
    case "Medico":
      tipoPessoa = "medicos"
      operacao = "getMedicos"
      break
    case "Secretario":
      tipoPessoa = "secretarios"
      operacao = "getSecretarios"
      break
    default:
      console.log("Operação inválida")
  }
  try{
    const res = await axios.get(`http://localhost:3005/${tipoPessoa}/${operacao}`);
    let pacientes = res.data;
    pacientes.forEach(usuario => {
      if(usuario.email === email && usuario.senha === senha){
        console.log(`Seja bem vindo ${tipoPessoa}: ${usuario.nome}`)
      }
    })
    return true
  } catch (error) {
    console.error(error);
    return false
  }
}
  