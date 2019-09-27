import "./AlbumList.css";
import React from "react";
import Album from "./Album";

const AlbumList = props => {
  const albums = props.albums.map(album => {
    return <Album key={album.trackId} album={album} />;
  });

  return <div className="album-list">{albums}</div>;
};

export default AlbumList;
