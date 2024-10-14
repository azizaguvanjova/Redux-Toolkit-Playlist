import { useDispatch } from 'react-redux'
import MoviePlaylist from './components/MoviePlaylist'
import SongPlaylist from './components/SongPlaylist'
import { clearListMovie } from './features/movieSlice'
import { clearListSong } from './features/songSlice'


export default function App() {
  const dispatch = useDispatch()

  const handleResetClick = () => {
    dispatch(clearListMovie())
    dispatch(clearListSong())
  }

  return (
    <div className='container'>
      <button onClick={() => handleResetClick()} className='border border-black '>
        Listeleri Sil
      </button>
      <hr />
      <MoviePlaylist />
      <hr />
      <SongPlaylist />
    </div>
  )
}
