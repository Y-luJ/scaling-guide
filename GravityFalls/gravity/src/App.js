import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMeteor} from '@fortawesome/free-solid-svg-icons'
import cover from './images/Cover2.jpg'
import './App.css';
import Carousel from './components/Carousel'
import Contacts from './components/Contacts'
import Dipper from './components/Characters/Dipper'
import Mabel from './components/Characters/Mabel'
import Stan from './components/Characters/Stan'
import Ford from './components/Characters/Ford'
import Soos from './components/Characters/Soos'
import Wendy from './components/Characters/Wendy'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink
} from 'react-router-dom';

export default class App extends React.Component {
  
  constructor(props) {
    super(props);
    
    this.state={
      
      
      error: null,
      isLoaded: false,
      characters: {}
    }
  }
  componentDidMount() {
    fetch('http://localhost:3100/characters') 
      .then (res => res.json())
      .then (
        (result)=> {
          this.setState({
            isLoaded: true,
            characters: result
          });
          },
          (error)=> {
            this.setState({
              isLoaded: true,
              error
            });
          }
      )
  }
  
  
  render() {
    let activeClass= 'active';
    let slides= [
        {img: 'https://vignette.wikia.nocookie.net/gravityfalls/images/2/2c/S1e12_celebrate_pure_evil.png/revision/latest?cb=20130508073420', className: 'slide showing'},
        {img: 'https://kto-ozvuchivaet.ru/wp-content/uploads/2018/08/the-falls.jpg', className: 'slide'},
        {img: 'https://sun9-18.userapi.com/c855216/v855216633/2144b/5uEAfUHr9Mg.jpg', className: 'slide'},
        {img: 'https://images2.minutemediacdn.com/image/upload/c_fill,g_auto,h_1248,w_2220/f_auto,q_auto,w_1100/v1555353911/shape/mentalfloss/gravity_hed.jpg.png', className: 'slide'},
    ];
    const {error, isLoaded, characters} = this.state;
    if (error) {
    return <p>Error {error.message}</p>
    } else if (!isLoaded) {
      return <p>Loading...</p>
    } else {
      
      return (
        
        <Router>  
        <div className="App">

        <header className="App-header"> 
          <div><FontAwesomeIcon icon={faMeteor} /></div>
          <div>welcome to</div>
          <div><img src={cover} className="App-cover" alt="cover" /></div>
        </header>

        <ul className='Characters'>
            <li><NavLink exact={true} className='nav-link' activeClassName={activeClass} to='/'>Home</NavLink></li>
            <li><NavLink className='nav-link' activeClassName={activeClass} to='/Dipper'>Dipper</NavLink></li>
            <li><NavLink className='nav-link' activeClassName={activeClass} to='/Mabel'>Mabel</NavLink></li>
            <li><NavLink className='nav-link' activeClassName={activeClass} to='/Stan'>Gruncle Stan</NavLink></li>
            <li><NavLink className='nav-link' activeClassName={activeClass} to='/Ford'>Gruncle Ford</NavLink></li>
            <li><NavLink className='nav-link' activeClassName={activeClass} to='/Soos'>Soos</NavLink></li>
            <li><NavLink className='nav-link' activeClassName={activeClass} to='/Wendy'>Wendy</NavLink></li>
        </ul> 
        <Switch>
              <Route path='/Dipper'>
                <Dipper  characters={characters} />
              </Route>
              <Route path='/Mabel'>
                <Mabel characters={characters} />
              </Route>
              <Route path='/Stan'>
                <Stan characters={characters} />
              </Route>
              <Route path='/Ford'>
                <Ford characters={characters} />
              </Route>
              <Route path='/Soos'>
                <Soos characters={characters} />
              </Route>
              <Route path='/Wendy'>
                <Wendy characters={characters} />
              </Route>
              <Route path='/'>
                <Carousel slides={slides} />
                <Contacts />
              </Route>
          
          </Switch> 
        </div>
      </Router>
      
    );
    }      
    }
    }


