import { faker } from "@faker-js/faker";

// Função para gerar um único hotel com estrutura mockada
export const generateHotelMock = () => ({
  id: faker.number.int(),
  nome: faker.company.name(),
  valorDiaria: faker.commerce.price(50, 500, 2), // Valor entre 50 e 500 com duas casas decimais
  cidade: faker.location.city(),
  endereco: faker.location.streetAddress(),
  numero: faker.number.int({ min: 1, max: 1000 }),
  imagens: Array.from({
    length: faker.number.int({ min: 1, max: 5 }),
  }).map(() => ({
    id: faker.number.int(),
    hotelId: faker.number.int(),
    nomeArquivo: faker.system.fileName(),
    guidArquivo: faker.string.alphanumeric(20), // Exemplo de string alfanumérica
    base64: faker.string.alphanumeric(20), // Exemplo de string em base64
  })),
});

// Função para gerar uma lista de mocks
export const generateHotelsList = (count = 10) => {
  const hoteis = Array.from({ length: count }, generateHotelMock);
  return hoteis;
};

// Função para gerar um mock de usuário agendamento
export const generateUsuarioAgendamentoMock = () => {
  return {
    id: faker.number.int(),
    checkIn: faker.date.future().toISOString().split("T")[0], // Formato de data "YYYY-MM-DD"
    checkOut: faker.date.future().toISOString().split("T")[0],
    hotelId: faker.number.int(),
    hotelNome: faker.company.name(),
    hotelEndereco: faker.location.streetAddress(),
    hotelQuartoId: faker.number.int(),
    hotelQuartoNumero: faker.number.int({ min: 1, max: 500 }), // Exemplo de número de quarto
    usuarioId: faker.number.int(),
  };
};

// Função para gerar uma lista de mocks
export const generateUserReservesList = (count = 10) => {
  const hoteis = Array.from({ length: count }, generateUsuarioAgendamentoMock);
  return hoteis;
};
