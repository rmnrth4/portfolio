"use strict";

const e = React.createElement;

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      return "Anfrage wurde gesendet.";
    }

    return e(
      "button",
      { onClick: () => this.setState({ liked: true }) },
      "Anfrage senden"
    );
  }
}

const domContainer = document.querySelector("#like_button_container");
const root = ReactDOM.createRoot(domContainer);
root.render(e(LikeButton));
