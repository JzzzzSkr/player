import { create } from "zustand";
import { songsdata } from "./pages/Home/MainContent/SongList/audio";
import { moviesdata } from "./pages/Home/MainContent/MovieList/movies";

const useStore = create((set) => ({
  isPlaying: false,
  currentSong: null,
  songList: songsdata,
  movieList: moviesdata,
  activeKey: "1",
  currentMovie: null,
  setCurrentMovie: (movie) => set({ currentMovie: movie }),
  setActiveKey: (key) => set({ activeKey: key }),
  togglePlay: () => set((state) => ({ isPlaying: !state.isPlaying })),
  setCurrentSong: (song) => set({ currentSong: song, isPlaying: true }),
  setSongList: (songList) => set({ songList: songList }),
  setMovieList: (movieList) => set({ movieList: movieList }),
}));

export default useStore;
