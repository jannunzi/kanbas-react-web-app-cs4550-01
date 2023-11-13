import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import * as client from "./napster-service";
import { useState } from "react";
function AlbumDetails() {
  const [album, setAlbum] = useState(null);
  const [tracks, setTracks] = useState([]);
  const { id } = useParams();

  const fetchAlbum = async (id) => {
    const result = await client.fetchAlbumById(id);
    setAlbum(result.albums[0]);
  };

  const fetchTracks = async (id) => {
    const result = await client.fetchTracksByAlbumId(id);
    setTracks(result.tracks);
  };

  useEffect(() => {
    fetchAlbum(id);
    fetchTracks(id);
  }, [id]);

  return (
    <div>
      {album && (
        <>
          <h1>{album.name}</h1>
          <img src={client.albumImageUrl(album)} />
          <p>Released: {album.released}</p>
          <h2>Tracks</h2>
          <ul className="list-group">
            {tracks.map((track) => (
              <li className="list-group-item">
                {track.name}
                {/* {track.previewURL} */}
                <audio controls>
                  <source src={track.previewURL} type="audio/mpeg" />
                  Your browser does not support the audio element.
                </audio>
              </li>
            ))}
          </ul>

          <pre>{JSON.stringify(tracks, null, 2)}</pre>
        </>
      )}
    </div>
  );
}

export default AlbumDetails;
