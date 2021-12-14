import axios from 'axios';

export const api = axios.create({
    baseURL: 'https://pokeapi.co/api/v2/pokemon'
});

// Acesso à API e atribuimos os dados à constante BUsca
export const Busca = async(url, setDado)=>{
    const Resposta = await api.get(url)
    setDado(Resposta.data)
}
