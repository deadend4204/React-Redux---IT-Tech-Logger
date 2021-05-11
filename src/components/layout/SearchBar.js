import React, { useRef } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { searchLogs } from "../../actions/logActions";

const SearchBar = ({ searchLogs }) => {
  const text = useRef("");

  const onChange = (e) => {
    searchLogs(text.current.value);
  };
  const onClose = () => {
    text.current.value = "";
    searchLogs(text.current.value);
  };

  return (
    <nav style={{ marginBottom: "30px" }} className="purple">
      <div className="nav-wrapper">
        <form>
          <div className="input-field">
            <input
              id="search"
              type="search"
              placeholder="Search logs..."
              ref={text}
              onChange={onChange}
            />
            <label className="label-icon" for="search">
              <i className="material-icons">search</i>
            </label>
            <i onClick={onClose} className="material-icons">
              close
            </i>
          </div>
        </form>
      </div>
    </nav>
  );
};
SearchBar.propTypes = {
  searchLogs: PropTypes.func.isRequired,
};
export default connect(null, { searchLogs })(SearchBar);
