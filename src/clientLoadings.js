import { clients } from "./clientes";
const clientList = document.querySelector('.client-list')

export const sortClients = () => clients.sort((a, b) => a.name.localeCompare(b.name));

const selectClientAction = (event) => {
  const allClients = document.querySelectorAll('option');
  allClients.forEach((client) => {
    client.classList.remove('selected');
  });
  event.target.classList.add('selected');
}

export const loadClients = () => {
  clientList.innerHTML = '';
  sortClients(clients);
  clients.forEach(({ name, id }) => {
    const client = document.createElement('option');
    client.id = id;
    client.value = id;
    client.innerHTML = name;
    client.addEventListener('click', selectClientAction);
    clientList.appendChild(client);
  });
};