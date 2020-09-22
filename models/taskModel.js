'use strict'
const db = require('./conn');

class TaskList {
    constructor(task_title, task_details, category, due_date) {
        this.task_title = task_title;
        this.task_details = task_details;
        this.category = category;
        this.due_date = due_date;
    }
    static async getAll() {
        try {
            const response = await db.any(`SELECT * FROM task ORDER BY task.id;`);
            console.log(response);
            return response;
        } catch (error) {
            return error.message;
        }
    }
}

module.exports = TaskList;