import { defineStore } from 'pinia'
import { getAllPlayers } from '@/services/index.js'

export const usePlayersStore = defineStore({
  id: 'players',
  state: () => ({
    playersList: [],
    searchInput: ''
  }),
  getters: {
    players: (state) => state.playersList
  },
  actions: {
    getPlayers() {
      getAllPlayers().then((response) => {
        this.setState({
          playersList: response.data.json()
        })
      })
    }
  }
})
