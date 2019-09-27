import "./Album.css";
import React, { Component } from "react";

export default class Album extends Component {
  render() {
    return (
      <div className="card">
        <a
          target="_blank"
          className="album-container"
          href={this.props.album.collectionViewUrl}
        >
          <img
            className="img"
            src={this.props.album.artworkUrl100}
            alt={this.props.album.artistName}
          />
          <div className="album-text">
            <h5 className="name">{this.props.album.artistName}</h5>
            <p className="description">{this.props.album.trackName}</p>
          </div>
        </a>
      </div>
    );
  }
}
