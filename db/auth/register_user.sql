INSERT INTO users (
    username,
    password,
    profile_pic
) VALUES (
    ${username},
    ${password},
    ${profile_pic}
)
returning user_id, username, profile_pic;