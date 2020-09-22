'use strict'

const express = require('express'),
    router = express.Router();

router.get("/", async (req, res) => {
    res.render("template", {
        locals: {
            title: "Tasks",
            is_logged_in: req.session.is_logged_in
        },
        partials: {
            partial: "partial-task"
        }
    });
});

module.exports = router;