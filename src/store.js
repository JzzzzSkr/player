// store.js
import create from "zustand";

const useStore = create((set) => ({
  isPlaying: false,
  currentSong: null,
  togglePlay: () => set((state) => ({ isPlaying: !state.isPlaying })),
  setCurrentSong: (song) => set({ currentSong: song, isPlaying: true }),
}));

export default useStore;
