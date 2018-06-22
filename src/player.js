window.SoundPlayer = function(){
    var sounds_path = [];
    var played_number = [];
    var playing_number = null;
    var audio = null;
    return {
        add_sounds: function(path){
            sounds_path.push(path)
        },
        play: function(){
            if( audio && audio.played ){
                audio.pause()
            }
            if( played_number.length >= sounds_path.length ){
                alert('All the sounds played.')
                return
            }
            var next_number = Math.floor(Math.random()*(sounds_path.length));
            while (played_number.indexOf(next_number) !== -1 ) {
                next_number = Math.floor(Math.random()*(sounds_path.length));
            }
            played_number.push(next_number)
            playing_number = next_number
            audio = new Audio( sounds_path[playing_number] )
            audio.play()
        },
        getPlayingNumber: function(){
            return playing_number
        },
        getTotalNumber: function(){
            return sounds_path.length
        }
    }
}

// 全部再生したらどうする？
//