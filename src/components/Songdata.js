import React, { Component } from 'react'

class Songdata extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>
                <li>{this.props.songData.track}</li>
                <li>{this.props.songData.artist}</li>
                <li>{this.props.songData.rating}</li>
                <img src={this.props.songData.coverArt} className="cover" />
            </div>
        )
    }

}

export default Songdata;