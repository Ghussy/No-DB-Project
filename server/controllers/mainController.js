const songs = [
    {
        track: "1997 DIANA",
        artist: "BROCK HAMPTON",
        rating: [],
        coverArt: 'https://images.genius.com/c909555f44ede44437636b7ce11b6c62.1000x1000x1.jpg'
    },
    {
        track: "TOKYO",
        artist: "BROCK HAMPTON",
        rating: [],
        coverArt: 'https://images.genius.com/c909555f44ede44437636b7ce11b6c62.1000x1000x1.jpg'
    },
    {
        track: "QUEER",
        artist: "BROCK HAMPTON",
        rating: [],
        coverArt: 'https://images.genius.com/c909555f44ede44437636b7ce11b6c62.1000x1000x1.jpg'
    },
    {
        track: "BLEACH",
        artist: "BROCK HAMPTON",
        rating: [],
        coverArt: 'https://images.genius.com/c909555f44ede44437636b7ce11b6c62.1000x1000x1.jpg'
    }
];

// let randomSong = songs[Math.floor(Math.random() * songs.length)];

Array.prototype.randomElement = function () {
    return this[Math.floor(Math.random() * this.length)]
}




module.exports = {
    
    getSong: (req, res) => { 
        res.status(200).send(songs.randomElement())
     },
    
   
    
     rateSong: (req, res) => {
        let songIndex=-1
       songs.forEach( (song, i) => {

            if(song.track === req.body.trackName) {songIndex= i}
        })

        songs[songIndex].rating.push(req.body.userRating)

        let returnRating= songs[songIndex].rating;
        

        res.status(200).send(songs[songIndex]);
     },


    
     changeRating: (req, res) => { 
         let songIndex = -1;
         
        songs.forEach( (song, i) => {

            if(song.track === req.body.trackName) {songIndex= i}
        })
        songs[songIndex].rating.splice(0, 1, req.body.userRating);
        console.log(songs[songIndex]);

        res.status(200).send(songs[songIndex])

            

        },

        delete: (req, res) => {
            let songIndex = -1 ;
            songs.forEach( (song, i) => {
        
                if(song.track === req.params.track) {songIndex= i}
            })
            songs[songIndex].rating = [];
            
            res.status(200).send(songs[songIndex])
        },


        // addSong: (req, res) => {
        //     let newSong = req.body.songInfo;
        //      

        //     res.status(200).send(songs.req.body.songInfo.track)
        // }



}
