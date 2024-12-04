import axios from "axios";

export const deletarConsulta = async (idConsulta) => {
    try {
        console.log(idConsulta)
        const response = await axios.delete(`http://localhost:3005/consultas/deleteConsultas/${idConsulta}`);
        
        alert("Consulta deletado com sucesso!");
    } catch (error) {
        console.error("Erro ao deletar consulta:", error);
        alert("Ocorreu um erro ao deletar a consulta.");
    }
};