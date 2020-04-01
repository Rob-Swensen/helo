select u.username, u.profile_pic, p.title 
from posts p
join users u on u.user_id = p.author_id
where u.user_id <> $1;