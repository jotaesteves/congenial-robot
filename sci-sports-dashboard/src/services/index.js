import axios from 'axios'
const API_URL =
  'https://raw.githubusercontent.com/vgshenoy/football-players/master'

export const getAllPlayers = () => {
  return axios.get(`${API_URL}/players.json`)
}
