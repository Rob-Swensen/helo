select u.username, u.profile_pic, p.title
from users u
join posts p on u.user_id = p.author_id
where u.user_id = $1;