import React from 'react';

const ArtistDetails = ({ artist }) => {
  return (
    <div className="artist-card">
      <div className="artist-image">
        <img className="band-img" src={artist.photo_url} alt={artist.name}/>
      </div>
      <div className="details">
        <h2 className="artist-name">{artist.name}</h2>
        <p>
            <span className="artist-country">Country: {artist.country}</span>
        </p>
        <p>
            <span className="artist-years-active">Years Active: {artist.years_active}</span>
        </p>
      </div>
    </div>
  );
};

export default ArtistDetails;
