import React from "react";
import "./Search.css";

class SearchBar extends React.Component {
  state = { term: "" };

  onFormSubmit = event => {
    event.preventDefault();

    this.props.onSubmit(this.state.term);
  };

  render() {
    return (
      <form onSubmit={this.onFormSubmit}>
        <div className="input">
          <input
            type="text"
            value={this.state.term}
            onChange={e => this.setState({ term: e.target.value })}
            placeholder="Search Artist/Album/Track"
          />
        </div>
      </form>
    );
  }
}

export default SearchBar;
