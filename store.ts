import create from 'zustand'

type Username = string | null

type Store = {
  username: Username
  setUsername: (username: Username) => void
}

export const useStore = create<Store>(set => ({
  username: null,
  setUsername: (username: Username) => set({ username }),
}))
