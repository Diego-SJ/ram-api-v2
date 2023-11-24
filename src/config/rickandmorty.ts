import axios from 'axios'

const ramAPI = axios.create({
	baseURL: 'https://rickandmortyapi.com/api'
})

export default ramAPI
