import React from 'react';

const Home = React.createClass({
  getInitialState() {
    return {gifs: []};
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

  // Breakdown:
  //this.state= to change setState. While using the map function, set a paramater, create a list form to the paramter.
  //give it a key to use an id(postico option, assuming). Create a img link tag, set it to the object(parameter + setState, object(git.link)).
  //Place parameter + setState(gif.name) between <li> tags.

  render() {
    return (
      <div>
        <ul>
          <h1>Animals Gifs</h1>

            {this.state.gifs.map(function(gif){
              return <li gif={gif} key={gif.id}><img src={gif.link}/><br />{gif.name}</li>
            })}
        </ul>
      </div>

    )
  }
})

export default Home;
