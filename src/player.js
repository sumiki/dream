window.SoundPlayer = function(){
    var sounds_path = [];
    var played_number = [];
    var playing_number = null;
    var audio = null;
    return {
        add_sounds: function(path){
            sounds_path.push(path)
        },
        pause: function(){
            audio.pause()
        },
        play: function(arg){
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
            $('#loader').show()
            audio.addEventListener('canplaythrough', function() {
                $('#loader').hide()
            }, false);

            var count = 1;
            audio.onended = function(){
                playing_number = null
                if( sounds_path[playing_number].indexOf('loop') !== -1 && count < 3 ){
                    count = count + 1;
                    audio.play()
                } else {
                    if( arg.callback && typeof(arg.callback) === 'function' ){
                        arg.callback()
                    }
                }
            }
            audio.play()

        },
        getPlayingNumber: function(){
            return playing_number
        },
        getPlayedNumber: function(){
            return played_number.length
        },
        getTotalNumber: function(){
            return sounds_path.length
        },
        getLatest: function(){
            return playing_number !== null ?  sounds_path[playing_number] : ''
        }
    }
}

// 全部再生したらどうする？
//