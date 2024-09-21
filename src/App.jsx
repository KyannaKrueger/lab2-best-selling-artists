import React from 'react';
import ArtistDetails from './components/ArtistDetails.jsx';
import { artists } from './best-selling-music-artists';
import Header from './components/Header';

function App() {
  const artistList = artists.map(artist => (
    <ArtistDetails key={artist.name} artist={artist} />
  ));

  return (
    <div className="app">
      <Header />

      <main>
        <section id="artists-list">
          {artistList}
        </section>
      </main>
    </div>
  );
}

export default App;
