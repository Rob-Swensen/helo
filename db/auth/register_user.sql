INSERT INTO users (
    username,
    password
) VALUES (
    ${username},
    ${password}
)
returning user_id, username;