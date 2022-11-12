class Story {
    constructor(title, creator) {
        this.title = title;
        this.creator = creator;
        this._comments = [];
        this._likes = [];
    }
    get likes() {
        if (this._likes.length < 1) {
            return `${this.title} has 0 likes`
        } else if (this._likes.length === 1) {
            return `${this._likes[0]} likes this story!`
        }
        return `${this._likes[0]} and ${this._likes.length - 1} others like this story!`
    }
    like(username) {
        let isitLiked = this._likes.find(element => element === username);
        if (isitLiked) {
            throw new Error("You can't like the same story twice!");
        }
        if (username === this.creator) {
            throw new Error("You can't like your own story!");
        }
        this._likes.push(username);
        return `${username} liked ${this.title}!`;
    }
    dislike(username) {
        let isitLiked = this._likes.find(element => element === username);
        if (!isitLiked) {
            throw new Error("You can't dislike this story!")
        }
        this._likes = this._likes.filter(element => element !== username)
        return `${username} disliked ${this.title}`
    }
    comment(username, content, id) {
        let findId = this._comments.find(element => element.Id === id);
        if (!findId) {
            this._comments.push({
                Id: this._comments.length + 1,
                Username: username,
                Content: content,
                Replies: []
            })
            return `${username} commented on ${this.title}`
        } else {
            findId.Replies.push({
                Id: findId.Id + "." + (findId.Replies.length + 1),
                Username: username,
                Content: content
            })
            return "You replied successfully"
        }
    }
    toString(sortingType) {
        let buffer = ""
        if (sortingType === "desc") {
            this._comments.sort((a, b) => b.Id - a.Id);
            for (let comment of this._comments) {
                if (comment.Replies.length > 0) {
                    comment.Replies.sort((a, b) => b.Id - a.Id)
                }
            }
        } else if (sortingType === "asc") {
            this._comments.sort((a, b) => a.Id - b.Id);
            for (let comment of this._comments) {
                if (comment.Replies.length > 0) {
                    comment.Replies.sort((a, b) => a.Id - b.Id)
                }
            }
        } else if (sortingType === "username") {
            this._comments.sort((a, b) => a.Username.localeCompare(b.Username))
            for (let comment of this._comments) {
                if (comment.Replies.length > 0) {
                    comment.Replies.sort((a, b) => a.Username.localeCompare(b.Username))
                }
            }
        }
        buffer += `Title: ${this.title}\nCreator: ${this.creator}\nLikes: ${this._likes.length}\n`
        buffer += `Comments:\n`
        for (let index of this._comments) {
            buffer += `-- ${index.Id}. ${index.Username}: ${index.Content}\n`
            if (index.Replies.length > 0) {
                for (let reply of index.Replies) {
                    buffer += `--- ${reply.Id}. ${reply.Username}: ${reply.Content}\n`
                }
            }
        }
        return buffer.substring(0, buffer.length - 1)
    }
}
const art = new Story("My Story", "Anny");
art.like("John")
art.like("Ivan")
art.like("Steven")
console.log(art.likes)
art.comment("Anny", "Some Content")
art.comment("Ammy", "New Content", 1)
art.comment("Zane", "Reply", 2)
art.comment("Jessy", "Nice :)")
art.comment("SAmmy", "Reply@", 2);



