import React, { Component } from 'react';
import axios from 'axios';
import './App.css'
import Songdata from './components/Songdata'
import Toolbar from './components/Toolbar/Toolbar';
import SideDrawer from './components/SideDrawer/SideDrawer';
import Backdrop from './components/Backdrop/BackDrop';
//  rel="stylesheet" href="https://use.fontawesome.com/releases/v5.5.0/css/all.css" integrity="sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU" crossorigin="anonymous">
// import "https://use.fontawesome.com/releases/v5.5.0/css/all.css" integrity="sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU" crossorigin="anonymous"



class App extends Component {




  constructor(props) {
    super();
    this.state = {

      input: '',
      songData: {},
      sideDrawerOpen: false

    }
  }


  componentDidMount() {
    axios.get('/api/songs').then((res) => {
      console.log(res.data)
      this.setState({ songData: res.data })
    })
  }

  handleChange(val) {
    console.log(val.charCode)
    this.setState({ input: val.target.value })
  }

  handleClick(val) {


    axios.post('/api/rate', { trackName: this.state.songData.track, userRating: this.state.input })
      .then(res => {

        this.setState({ songData: res.data, input: '' })

      }

      )
  }
  handleUpdate(val) {

    axios.put('/api/change', { trackName: this.state.songData.track, userRating: this.state.input })
      .then(res => {
        console.log(res.data)
        this.setState({ songData: res.data, input: '' })
      }
      )
  }

  handleDelete() {
    axios.delete(`/api/delete/${this.state.songData.track}`)
      .then(res => {

        this.setState({ songData: res.data })

      }
      )
  }

  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    });
  };

  backdropClickHandler = () => {
    this.setState({ sideDrawerOpen: false });
  };

  render() {

    let backdrop;

    if (this.state.sideDrawerOpen) {

      backdrop = <Backdrop click={this.backdropClickHandler} />
    }

    return (
      <div style={{ height: '100%' }}>
        <Toolbar drawerClickHandler={this.drawerToggleClickHandler} />
        <SideDrawer show={this.state.sideDrawerOpen} />
        {backdrop}

        <main style={{ marginTop: '56px' }} className="Main">
          <header>



            <div id="left-bar">
              
            </div>
            <div id="middle-box">

                <h1>
                  RATE THAT TUNE 🎵
                </h1>
                <Songdata songData={this.state.songData} className="songInfo"/>
                <input value={this.state.input} onChange={e => this.handleChange(e)} onKeyDown={e => {
                  if (e.keyCode === 13) {
                    this.handleClick()
                  }
                }} />
                
                <button onClick={() => this.handleClick()}>Rate</button>
                <button onClick={() => this.handleDelete()}>Delete</button>
                <button onClick={() => this.handleUpdate()}>Re-rate</button>
                <div className="social-media-container">

                </div>
            </div>
            <div id="right-bar">
              
            </div>


          </header>


        </main>
      </div>
    );
  }
}

export default App;
