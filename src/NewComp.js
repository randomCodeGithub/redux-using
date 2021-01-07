import React, { Component } from "react";
import { connect } from "react-redux";

class NewComp extends Component {
  styles = {
    fontStyle: "italic",
    color: "purple",
  };

  render() {
    return (
      <div className="App">
        <h3 style={this.styles}>{this.props.message}</h3>
        <button onClick={this.props.ButttonChange}>TEST</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    message: state.message,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    ButttonChange: () => dispatch({ type: "Change test" }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewComp);
