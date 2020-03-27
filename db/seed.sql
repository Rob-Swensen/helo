CREATE TABLE users (
    user_id SERIAL PRIMARY KEY,
    username VARCHAR(50),
    email VARCHAR(100),
    password TEXT
);

CREATE TABLE posts (
    post_id SERIAL PRIMARY KEY,
    post text
)