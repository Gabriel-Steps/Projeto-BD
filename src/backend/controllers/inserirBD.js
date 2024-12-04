import axios from "axios"
export const setCadastro = async ({categoria, email, senha, nome, telefone, cpf, especialidade}) => {
    let tipoPessoa = ""
    let operacaoCadastro = ""
    switch(categoria){
        case "Paciente":
        tipoPessoa = "pacientes"
        operacaoCadastro = "setPacientes"
        break
        case "Medico":
        tipoPessoa = "medicos"
        operacaoCadastro = "setMedicos"
        break
        case "Secretario":
        tipoPessoa = "secretarios"
        operacaoCadastro = "setSecretarios"
        break
        default:
        console.log("Operação inválida")
    }
    try{
        if(categoria === "Paciente"){
            await axios.post(`http://localhost:3005/${tipoPessoa}/${operacaoCadastro}`, {
                nome: nome,
                cpf: cpf,
                telefone: telefone,
                email: email,
                senha: senha
            }).then(({data}) => console.log(data))
            .catch(({data}) => console.error(data));
            
        }else if(categoria === "Medico"){
            const res = await axios.get(`http://localhost:3005/especialidades/getEspecialidades`);
            let especialidades = res.data;
            let idEspecialidade = 0
            especialidades.forEach(esp => {
            if(esp.nome === especialidade){
                idEspecialidade = esp.id;
            }
            })
            await axios.post(`http://localhost:3005/${tipoPessoa}/${operacaoCadastro}`, {
                nome: nome,
                cpf: cpf,
                id_especialidade: idEspecialidade,
                telefone: telefone,
                email: email,
                senha: senha
            }).then(({data}) => console.log(data))
            .catch(({data}) => console.error(data));
        }else if(categoria === "Secretario"){
            await axios.post(`http://localhost:3005/${tipoPessoa}/${operacaoCadastro}`, {
                nome: nome,
                email: email,
                senha: senha
            }).then(({data}) => console.log(data))
            .catch(({data}) => console.error(data));
        }
        return true
    }catch(err){
        console.error(err)
        return false
    }
}

export const inserirProntuario = async ({idConsulta, diagnostico, prescricao, observacao}) => {
    console.log(idConsulta)
    await axios.post(`http://localhost:3005/prontuarios/setProntuarios`, {
        id_consulta: idConsulta,
        diagnostico: diagnostico,
        prescricao: prescricao,
        observacao: observacao
    }).then(({data}) => console.log(data))
    .catch(({data}) => console.error(data));
}

export const inserirConsulta = async ({idMedico, idPaciente, data}) => {
    await axios.post(`http://localhost:3005/consultas/setConsultas`, {
        id_medico: idMedico,
        id_paciente: idPaciente,
        data_realizacao: data
    }).then(({data}) => console.log(data))
    .catch(({data}) => console.error(data));
}