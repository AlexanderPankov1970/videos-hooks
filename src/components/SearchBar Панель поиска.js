import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };

  //VAR 1
  onInputChange = (event) => {
    this.setState({ term: event.target.value });
    // console.log(event.target.value);
    // console.log(this.state.term);
  };

  onFormSubmit = (event) => {
    event.preventDefault();

    //TODO: Make sure we call
    //callback from parent component
  };

  render() {
    return (
      <div className="search-bar ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Video Search</label>
            <input
              type="text"
              value={this.state.term}
              onChange={this.onInputChange}
              //   onChange={e=>this.setState({term:e.target.value})}// VAR 2
              placeholder="Input Text"
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
