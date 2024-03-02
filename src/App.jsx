import './App.css';
import Grid from "./assets/components/Grid";
import musicImage from './images/background-image.jpg';


const App = () => {

  return (
    <div className="App">
      <img src={musicImage} alt="music-image" className='music-image-transform'/>
      <h1>🎵 Song Collections 🎵</h1>
      <h2>Welcome. Checkout some popular songs for fun!</h2>
      <Grid />
    </div>
  )
}

export default App
