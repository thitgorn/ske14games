var verifyAdmin = {
    verify : (firebase,uid,setState) => {
        var isAdmin = false
        var db = firebase.database().ref('/powerUser');
        db.on('value', function(snapshot) {
            const keys = Object.keys(snapshot.val())
            keys.forEach( (key)=> {
                if(snapshot.val()[key].uid===uid) {
                    isAdmin = true
                }
            })
            setState({admin : isAdmin })
        });
    }
}


export default verifyAdmin