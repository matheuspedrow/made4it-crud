import { updateClients, clients, updateClientInfo } from "./clientes";
import { loadClients, sortClients } from './clientLoadings';
import { alertConfirmation, noClientSelected } from './alert'

const editClientButton = document.querySelector('.edit-button');
const deleteClientButton = document.querySelector('.delete-button');
const saveClientButton = document.querySelector('.save-input');
const nameInput = document.querySelector('#name-input');
const ageInput = document.querySelector('#age-input');
const phoneInput = document.querySelector('#phone-input');

const cleanForm = () => {
	nameInput.value = '';
	ageInput.value = '';
	phoneInput.value = '';
};

const findClient = (clientId) => 
	clients.find(({ id }) => id === clientId);

export const deleteClient = () => {
	const selectedClient = document.querySelector('.selected');
	updateClients(clients.filter(({ id }) => id !== parseInt(selectedClient.id)));
	loadClients();
	cleanForm();
};

const editClient = () => {
	const selectedClient = document.querySelector('.selected');
	if (!selectedClient) return;
	const client = findClient((parseInt(selectedClient.id)));
	const { name, idade, telefone, sexo } = client;
	nameInput.value = name;
	ageInput.value = idade;
	phoneInput.value = telefone;
	const genderInput = document.querySelector(`#${sexo}`);
	genderInput.selected = true;
};

export const saveClient = () => {
	const nameInput = document.querySelector('#name-input').value;
	const ageInput = document.querySelector('#age-input').value;
	const phoneInput = document.querySelector('#phone-input').value;
	const selectedClient = document.querySelector('.selected');
	const clientId = (parseInt(selectedClient.id));
	let clientIndex;
	const client = clients.filter(({ id }, index) => {
		if (id === clientId) {
			clientIndex = index;
			return true
		};
		return false;
	});

	updateClientInfo(
		clientIndex,
		nameInput,
		ageInput,
		phoneInput,
		client[0].sexo,
		client[0].id
	);
	loadClients();
	sortClients();
};

const saveButtonFunction = (message, button, option) => { 
	const selectedClient = document.querySelector('.selected');
	if (!selectedClient) return noClientSelected();	
	alertConfirmation(
		message,
		button, 
		option
	);
}

export const addConfigFunctions = () => {
	deleteClientButton.addEventListener("click", () =>
    saveButtonFunction(
      "Você tem certeza de que deseja excluir este cliente?",
      "Deletar",
      "deletar"
    )
  );
	editClientButton.addEventListener('click', editClient);
	saveClientButton.addEventListener("click", () =>
    saveButtonFunction(
      "Você tem certeza de que deseja atualizar os dados deste cliente?",
      "Atualizar",
      "atualizar"
    )
  );
};