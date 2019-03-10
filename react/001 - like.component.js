import React, { Component } from 'react';
import './App.css';

const LIKED = 'liked';
const DISLIKED = 'disliked';

class App extends Component {
  constructor(props) {
    super(props);
    this.initialState = { liked: 100, disliked: 25, userDecision: undefined };
    this.state = {
      ...this.initialState
    };
  }

  userRateHandler(decision) {
    if (this.resetUserDecision(decision)) {
      return;
    }
    this.setLikeState(decision);
  }

  setLikeState(decision) {
    this.setState(({ liked, disliked }) => ({
      liked: decision === LIKED ? liked + 1 : liked,
      disliked: decision === DISLIKED ? disliked + 1 : disliked,
      userDecision: decision
    }));
  }

  resetUserDecision(decision) {
    const decisionMade = this.hasUserMadeDecision();
    if (!decisionMade) return false;

    const hasUserChangedMind = decisionMade && this.state.userDecision !== decision;
    this.setState(() => ({ ...this.initialState }));

    return !hasUserChangedMind;
  }

  hasUserMadeDecision() {
    return typeof this.state.userDecision !== 'undefined';
  }

  render() {
    const dislikeButtonStyle = this.state.userDecision === LIKED ? 'liked' : '';
    const likeButtonStyle = this.state.userDecision === DISLIKED ? 'disliked' : '';

    return (
      <>
        <div>
          <h2>
            <button
              type="button"
              className={ `like-button ${ dislikeButtonStyle }` }
              onClick={ this.userRateHandler.bind(this, LIKED) }>
              Like | <span className="likes-counter">{ this.state.liked }</span>
            </button>
            <button
              type="button"
              className={ `dislike-button ${ likeButtonStyle }` }
              onClick={ this.userRateHandler.bind(this, DISLIKED) }>
              Dislike | <span className="dislikes-counter">{ this.state.disliked }</span>
            </button>
          </h2>
        </div>
        <style>{ `
                    .like-button, .dislike-button {
                        font-size: 1rem;
                        padding: 5px 10px;
                        color:   #585858;
                    }

                    .liked, .disliked {
                        font-weight: bold;
                        color: #1565c0;
                    }
                ` }</style>
      </>
    );
  }
}

export default App;
