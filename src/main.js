import { loadClients } from './clientLoadings';
import { addConfigFunctions } from './clientManagement'
import '../styles/main.css'

window.onload = () => {
  loadClients()
  addConfigFunctions()
};