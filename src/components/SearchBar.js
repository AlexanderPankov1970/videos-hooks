import React, { useState } from "react";

const SearchBar = ({ onFormSubmit }) => {
  const [term, setTerm] = useState("");

  const onInputChange = (event) => {
    setTerm(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();

    onFormSubmit(term);
  };
  return (
    <div className="search-bar ui segment">
      <form onSubmit={onSubmit} className="ui form">
        <div className="field">
          <label>Video Search</label>
          <input
            type="text"
            value={term}
            onChange={onInputChange}
            placeholder="Input Text"
          />
        </div>
      </form>
    </div>
  );
};
export default SearchBar;
//Class Component
/*
class SearchBar extends React.Component {
  state = { term: "" };

  //VAR 1
  onInputChange = (event) => {
    // this.setState({ term: event.target.value });
    //console.log(event.target.value);
    // console.log(this.state.term);
  };

  onFormSubmit = (event) => {
    event.preventDefault();

    this.props.onFormSubmit(this.state.term);
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
*/
