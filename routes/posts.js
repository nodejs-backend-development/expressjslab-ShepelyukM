const express = require('express');
const { getPosts, createPosts} = require('../controllers/posts.controllers');

const router = express.Router();

router.get('/:userID', getPosts); // Retrieves post comments GET

router.post('/', createPosts); // Creates a post comment POST

module.exports = router; 

