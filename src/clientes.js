export let clients = [
  {
    id: 1,
    name: 'Joao Paulo da Silva',
    idade: '20',
    telefone: '51987654321',
    sexo: 'Masculino'
},
  {
    id: 2,
    name: 'Maria',
    idade: '19',
    telefone: '52332231967',
    sexo: 'Feminino'
  },
  {
    id: 3,
    name: 'Pedro',
    idade: '22',
    telefone: '53989898989',
    sexo: 'Masculino'
  },
  {
    id: 4,
    name: 'Apollo',
    idade: '51',
    telefone: '21987678987',
    sexo: 'Masculino'
  }
];

export const updateClients = (newList) => clients = newList;

export const updateClientInfo = (index, name, idade, telefone, sexo, id) => {
  clients[index] = {
    id,
    name,
    idade,
    telefone,
    sexo,
};
};