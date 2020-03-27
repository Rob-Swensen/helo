CREATE TABLE users (
    user_id SERIAL PRIMARY KEY,
    username VARCHAR(50),
    password TEXT
);

CREATE TABLE posts (
    post_id SERIAL PRIMARY KEY,
    post text
)