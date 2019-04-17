var casual = require('casual');

module.exports = () => {
    const data = { posts : []};

    for(let i =0; i < 3; i++){
        data.posts.push({id:i, title: casual.title, content: casual.sentences(n=50)})
    }

    return data;
}