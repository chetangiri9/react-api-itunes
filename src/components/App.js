import React from "react";
import SearchBar from "./Search";
import AlbumList from "./AlbumList";
import itunes from "../api/itunes";

class App extends React.Component {
  state = { albums: [] };

  onSearchSubmit = async term => {
    const response = await itunes.get("/search?", {
      params: { term: term }
    });

    this.setState({ albums: response.data.results });
  };

  render() {
    return (
      <div>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <AlbumList albums={this.state.albums} />
      </div>
    );
  }
}

export default App;
