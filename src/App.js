import './App.css';
import NFTPreview from './components/nft-preview.jsx';

function App() {
  return (
      <NFTPreview img="./images/image-equilibrium.jpg"
        alt="nft-preview"
        title="Equilibrium #3429"
        desc="Our Equilibrium collection promotes balance and calm."
        price="0.041 ETH"
        time="3 days left"
        icon="./images/image-avatar.png"
        altIcon="artist-avatar"
        artistName="Jules Wyvern"
        />
  );
}

export default App;
