import React, { Component } from 'react';

export default class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="header">
          <h1 className="display-4 text-center">Find your Singer!</h1>
        </div>
        <div className="body">
          <div className="questions">
            <div className="question">
              <p>
                What are you waiting for?
              </p>
              <button className="button-play pointer">Play</button>
              {/* <p>
                ¿ Are you Singer 25 years old ?
              </p>
              <div class="switch">
                <input type="radio" name="choice" id="yes" checked />
                <label for="yes">Yes</label>
                <input type="radio" name="choice" id="no" />
                <label for="no">No</label>
                <span class="switchFilter"></span>
              </div> */}
            </div>
            <div className="info">
              <img src="./../../assets/fortuneTeller.png" alt="fortune-teller" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
