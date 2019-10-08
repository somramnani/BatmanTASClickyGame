import React from "react";
import MakeCards from "./Components/Cards";
import cards from "./data/Cards.json";
import Grid from "@material-ui/core/Grid/Grid";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography/Typography";
import Box from "@material-ui/core/Box";

class App extends React.Component {
  state = {
    score: 0,
    currentScore: 0,
    display: "",
    highScore: 0,
    clicked: [],
    gameOver: false,
    cards
  };

  componentDidMount() {
    this.setState({ display: "Click a Card to begin!" });
  }

  // Resets the Game
  resetGame() {
    this.setState({
      clicked: [],
      gameOver: false,
      cards
    });
  }

  shuffleCard = id => {
    if (!this.state.clicked.includes(id)) {
      this.setState({ score: this.state.score + 1 });
    } else {
      alert("Oh no, you lost! Try again!");
      this.setState({
        highScore: this.state.score,
        score: 0
      });
      // When lost resets the game
      this.resetGame();
    }

    const sort = this.state.cards.sort(() => Math.random() - 0.5);
    this.setState({ cards: sort });
    this.state.clicked.push(id);
  };

  render() {
    return (
      <>
        <Box style={{ backgroundColor: "black", padding: 35 }}>
          <Typography
            style={{
              color: "goldenrod",
              fontWeight: "700",
              textAlign: "center"
            }}
            variant="h2"
            component="h2"
          >
            Batman: The Animated Series Clicky Game!
          </Typography>
          <Typography
            variant="h6"
            component="h6"
            style={{ color: "goldenrod", textAlign: "center" }}
          >
            Click a card to begin! If you click the same card twice you lose!
          </Typography>
          <Typography
            variant="h6"
            component="h6"
            style={{ color: "goldenrod", textAlign: "center" }}
          >
            Current Score: {this.state.score}
          </Typography>
          <Typography
            variant="h6"
            component="h6"
            style={{ color: "goldenrod", textAlign: "center" }}
          >
            High Score: {this.state.highScore}
          </Typography>
        </Box>
        <Grid container style={{ margin: 15 }}>
          {this.state.cards.map(BatmanCharacters => (
            <Grid item xs onClick={() => this.shuffleCard(BatmanCharacters.id)}>
              <MakeCards
                key={BatmanCharacters.id}
                id={BatmanCharacters.id}
                name={BatmanCharacters.name}
                img={BatmanCharacters.img}
              />
            </Grid>
          ))}
        </Grid>
      </>
    );
  }
}

export default App;
