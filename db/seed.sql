CREATE TABLE users (
    user_id SERIAL PRIMARY KEY,
    username VARCHAR(50),
    password TEXT,
    profile_pic TEXT
);

CREATE TABLE posts (
    post_id SERIAL PRIMARY KEY,
    title VARCHAR(45),
    img TEXT,
    content TEXT,
    author_id INT REFERENCES USERS(USER_ID)
);