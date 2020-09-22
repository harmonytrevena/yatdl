CREATE TABLE users (
    id serial primary key, 
    name text, 
    email varchar,
    password varchar
);

CREATE TABLE task (
    id serial primary key, 
    task_title text,
    task_details text,
    category text,
    due_date date,
    user_id integer,
    FOREIGN KEY (user_id) REFERENCES users (id)
);