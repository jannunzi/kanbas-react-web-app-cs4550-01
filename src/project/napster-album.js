import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import * as client from "./napster-service";
import * as likesClient from "./likes/client";
import * as userService from "./users/client";
import { useState } from "react";
import ProtectedContent from "./users/protectedContent";
function AlbumDetails() {
  const [album, setAlbum] = useState(null);
  const [tracks, setTracks] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);
  const { id } = useParams();

  const fetchAlbum = async (id) => {
    const result = await client.fetchAlbumById(id);
    setAlbum(result.albums[0]);
  };

  const fetchTracks = async (id) => {
    const result = await client.fetchTracksByAlbumId(id);
    setTracks(result.tracks);
  };

  const like = async () => {
    await likesClient.createUserLikesAlbum(currentUser._id, id);
  };
  const fetchCurrentUser = async () => {
    const user = await userService.account();
    setCurrentUser(user);
  };

  useEffect(() => {
    fetchAlbum(id);
    fetchTracks(id);
    fetchCurrentUser();
  }, [id]);

  return (
    <div>
      {album && (
        <>
          <ProtectedContent>
            <button onClick={like} className="btn btn-primary float-end">
              Like
            </button>
            <button className="btn btn-danger float-end">Unlike</button>
          </ProtectedContent>
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
