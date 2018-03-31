import firebase from 'firebase'
import Game from '../model/Game'

export var readGames = {
    getData : function(setState) {
        var db = firebase.database().ref('/games');
        db.on('value' , (snapshot) => {
            var games = []
            if(!!snapshot.val()){
                const keys = Object.keys(snapshot.val())
                keys.forEach( (key)=> {
                    var data = snapshot.val()[key]
                    var game = new Game(data.id , data.title , data.description , data.url , data.img , data.enable)
                    games.push( { key : key , game : game} )
                })
                setState({games : games})
            }
        })
    }
}

export var editGame = {
    edit : function(key , game) {
        var tempGame = new Game(game.id , game.title , game.description , game.url , game.img , game.enable)

        firebase.database().ref('/games/' + key).set(tempGame.toJSON())
    }
}

export var addGame = {
    add : function(game) {
        var tempGame = new Game(game.id , game.title , game.description , game.url , game.img , game.enable)

        firebase.database().ref('/games').push(tempGame.toJSON())
    }
}

export var deleteGame = {
    delete : function(game) {
        firebase.database().ref('/games/' + game.key).remove();
    }
}