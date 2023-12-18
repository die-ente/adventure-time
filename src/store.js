import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

export const usePlayerStore = create(
    persist(
        (set, get) => ({
            playerId: `p-${Math.random().toString(36).substr(2, 9)}-${Math.random().toString(36).substr(2, 9)}`,
            player: null,
            setPlayer: (player) => set({ player }),
        }),
        {
            name: 'player',
        },
    ),
)