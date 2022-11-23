import { saveClient, deleteClient } from "./clientManagement";
import Swal from 'sweetalert2'

export const alertConfirmation = (message, buttonConfirmation, option) =>
  Swal.fire({
    title: 'Atenção!',
    text: message,
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: buttonConfirmation,
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire(
        'Sucesso',
        'A lista de clientes foi atualizada',
        'success'
      )
      if (option === 'atualizar')    return saveClient();
        return deleteClient();
      }
  })

export const noClientSelected = () => 
  Swal.fire({
    icon: 'error',
    title: 'Erro!',
    text: 'Nenhum cliente selecionado!',
  })