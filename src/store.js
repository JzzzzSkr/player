import { create } from "zustand";
import { songsdata } from "./audio";

const useStore = create((set) => ({
  isPlaying: false,
  currentSong: null,
  songList: songsdata,
  togglePlay: () => set((state) => ({ isPlaying: !state.isPlaying })),
  setCurrentSong: (song) => set({ currentSong: song, isPlaying: true }),
  setSongList: (songList) => set({ songList: songList }),
}));

export default useStore;
