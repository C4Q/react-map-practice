import React from 'react';

const Home = React.createClass({
  getInitialState() {
    return {gifs: []}
  },
  componentDidMount() {
    this.setState({gifs: [
      {link: 'https://media.giphy.com/media/129NVCr1UfsGTS/giphy.gif', name: 'Lazy Cat'},
      {link: 'https://media.giphy.com/media/3oEjHIL2uLltynh960/giphy.gif', name: 'Lion Cub'},
      {link: 'https://media.giphy.com/media/l0K4ac9If5F5S462c/giphy.gif', name: 'Shark Jump'},
      {link: 'https://media.giphy.com/media/l0HlH51Dpq7tazkt2/source.gif', name: 'Elephant Swing'},
      {link: 'https://media.giphy.com/media/26gJyW8DprRP5Z5tu/source.gif', name: 'Hermit Crab'}
    ]})
  },
  // your code here:
  render() {
    return (
      <h1>GIFs + Names Coming Soon:</h1>
    )
  }
})

export default Home;
