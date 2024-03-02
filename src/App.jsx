import './App.css';
import Grid from "./assets/components/Grid";
import musicImage from './images/background-image.jpg';


const App = () => {

  return (
    <div className="App">
      <img src={musicImage} alt="music-image" className='music-image-transform'/>
      <h1>🎵 Emily's Song Collections 🎵</h1>
      <h2>Welcome to Emily's page. Checkout her favorite songs to get to know her more!</h2>
      <Grid />
    </div>
  )
}

export default App
