import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import * as client from "./napster-service";
function NapsterSearch() {
  const [searchResults, setSearchResults] = useState(null);
  const [searchText, setSearchText] = useState("beatles");

  const searchForAlbums = async (text) => {
    const results = await client.fullTextSearch(text);
    setSearchResults(results.search.data.albums);
  };

  useEffect(() => {
    searchForAlbums("beatles");
  }, []);

  return (
    <div>
      <h1>Project</h1>
      <button
        className="btn btn-primary float-end"
        onClick={() => searchForAlbums(searchText)}
      >
        Search
      </button>
      <input
        value={searchText}
        className="form-control w-50"
        onChange={(e) => setSearchText(e.target.value)}
      />
      {searchResults &&
        searchResults.map((album) => (
          <div>
            <Link to={`/project/napster-album/${album.id}`}>
              <img src={client.albumImageUrl(album)} />
              <h3>{album.name}</h3>
            </Link>
          </div>
        ))}
      <pre>{JSON.stringify(searchResults, null, 2)}</pre>
    </div>
  );
}

export default NapsterSearch;
