function Game(id,title,description,url,img,enable) {
    this.id = id
    this.title =  title
    this.description = description
    this.url = url
    this.img = img
    this.enable = enable

    this.toJSON = () => {
        const json = {
            id : this.id,
            title : this.title,
            description : this.description,
            url : this.url,
            img : this.img,
            enable : this.enable
        }
        return json
    }
}

export default Game