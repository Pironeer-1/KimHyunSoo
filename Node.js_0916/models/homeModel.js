const mysql = require('mysql2/promise');

// create the connection to database
const db = require('../config/db.js');

module.exports ={
    getPosts: async ()=> {
        const query = 'SELECT * FROM Posts;';
        const posts = await db.query(query);

        return posts[0];
    }
}
