const db = require('better-sqlite3')('real-star.db');

// Add Rating
const addRating = (userId, rating) => {
    var stmt = db.prepare("INSERT INTO real_star (user_id, rating) VALUES (?, ?)");
    stmt.run(userId, rating);
}

const getAllRatings = () => {
    var stmt = db.prepare("SELECT * FROM real_star");
    var result = stmt.run();

    console.log('Result: ', result);
}

// Reset Rating
const reset = () => {
    var stmt = db.prepare("DELETE FROM real_star");
    stmt.run();
}

module.exports = {addRating, getAllRatings, reset};