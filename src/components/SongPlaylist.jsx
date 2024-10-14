import { createRandomSong } from '../data'
import { useDispatch, useSelector } from 'react-redux'
import { addSong, removeSong } from '../features/songSlice'
function SongPlaylist() {
  const { list } = useSelector((state) => state.songs)
  const dispatch = useDispatch()

  const songPlaylist = [...list]



  const renderedSongs = songPlaylist.map((song) => {
    return (
      <li key={song}>
        {song}
        <button onClick={() => dispatch(removeSong(song))} className='button'>
          X
        </button>
      </li>
    )
  })

  return (
    <div className='content'>
      <div className='table-header'>
        <h3 className='subtitle'>Şarkı Listesi</h3>
        <div className='buttons'>
          <button
            onClick={() => dispatch(addSong(createRandomSong()))}
            className='button'
          >
            + Listeye Şarkı Ekle
          </button>
        </div>
      </div>
      <ul>{renderedSongs}</ul>
    </div>
  )
}

export default SongPlaylist
