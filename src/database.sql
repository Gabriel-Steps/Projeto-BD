CREATE schema Hospital;
use Hospital;
CREATE TABLE especialidades(
	id int PRIMARY KEY AUTO_INCREMENT,
    nome varchar(30) NOT NULL,
    descricao varchar(255) NOT NULL UNIQUE
);
INSERT INTO especialidades (nome, descricao) VALUES 
('Cardiologia', 'Especialidade médica que trata dos problemas relacionados ao coração e ao sistema cardiovascular.'),
('Ortopedia', 'Especialidade médica que cuida das doenças e lesões do sistema musculoesquelético, incluindo ossos, articulações e ligamentos.'),
('Pediatria', 'Área da medicina dedicada ao atendimento de crianças e adolescentes, desde o nascimento até a adolescência.'),
('Dermatologia', 'Especialidade que trata de doenças e condições relacionadas à pele, cabelos e unhas.'),
('Ginecologia', 'Área da medicina que cuida da saúde do sistema reprodutor feminino, incluindo diagnóstico e tratamento de doenças e acompanhamento de gravidez.');

CREATE TABLE pacientes(
	id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL,
    cpf VARCHAR(12) NOT NULL UNIQUE,
    telefone VARCHAR(15) NOT NULL UNIQUE,
    email VARCHAR(255) NOT NULL UNIQUE,
    senha VARCHAR(25) NOT NULL
);

INSERT INTO pacientes (nome, cpf, telefone, email, senha) VALUES
('João da Silva', '12345678901', '11987654321', 'joao.silva@email.com', 'senha123'),
('Maria Oliveira', '98765432100', '11876543210', 'maria.oliveira@email.com', 'senha456');


CREATE TABLE medicos(
	id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL, 
    id_especialidade INT NOT NULL,
    telefone VARCHAR(15) NOT NULL UNIQUE,
    email VARCHAR(255) NOT NULL UNIQUE,
    senha VARCHAR(25) NOT NULL,
    foreign key (id_especialidade) REFERENCES especialidades(id)
);

INSERT INTO medicos (nome, id_especialidade, telefone, email, senha) VALUES
('Dr. Carlos Pereira', 1, '11912345678', 'carlos.pereira@hospital.com', 'medico123'),
('Dra. Ana Souza', 2, '11987654321', 'ana.souza@hospital.com', 'medico456');

CREATE TABLE secretarios(
	id INT PRIMARY KEY auto_increment,
    nome VARCHAR(100) NOT NULL,
	email VARCHAR(255) NOT NULL UNIQUE,
    senha VARCHAR(25) NOT NULL
);

INSERT INTO secretarios (nome, email, senha) VALUES
('Fernanda Lima', 'fernanda.lima@hospital.com', 'senha789'),
('Ricardo Santos', 'ricardo.santos@hospital.com', 'senha101');

CREATE TABLE consultas(
	id INT PRIMARY KEY AUTO_INCREMENT,
    id_medico int NOT NULL,
    id_paciente INT NOT NULL,
    data_realizacao DATE,
    FOREIGN KEY (id_medico) REFERENCES medicos(id),
    FOREIGN KEY (id_paciente) REFERENCES pacientes(id)
);

INSERT INTO `hospital`.`consultas` (`id_medico`, `id_paciente`, `data_realizacao`) VALUES ('1', '1', '2024-12-04'),('2', '2', '2024-12-04');

CREATE TABLE prontuarios (
    id INT PRIMARY KEY AUTO_INCREMENT,
    id_consulta INT,
    diagnostico VARCHAR(100) NOT NULL,
    prescricao VARCHAR(100) NOT NULL,
    observacao VARCHAR(100) NOT NULL,
    FOREIGN KEY (id_consulta) 
        REFERENCES consultas(id)
        ON DELETE SET NULL
);

INSERT INTO prontuarios (id_consulta, diagnostico, prescricao, observacao)
VALUES 
(1, 'Infecção Respiratória Aguda', 'Amoxicilina 500mg, 3x ao dia por 7 dias', 'Paciente apresenta tosse seca e febre leve'), (2, 'Hipertensão Arterial', 'Losartana 50mg, 1x ao dia', 'Paciente apresenta pressão arterial elevada durante o check-up');
