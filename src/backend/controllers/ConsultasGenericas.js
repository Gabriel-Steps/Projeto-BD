import axios from "axios";
export const retornarUsuarioId = async ({tipoPessoa, id}) => {
    const res = await axios.get(`http://localhost:3005/${tipoPessoa}/get${tipoPessoa}`);
    let users = res.data;
    users.forEach(usuario => {
      if(usuario.id === id){
        return usuario
      }
    })
}

export const retornarEspecialidadeId = async ({id}) => {
    const res = await axios.get(`http://localhost:3005/especialidades/getEspecialidades`);
    let especialidades = res.data;
    especialidades.forEach(esp => {
      if(esp.id === id){
        return esp
      }
    })
}