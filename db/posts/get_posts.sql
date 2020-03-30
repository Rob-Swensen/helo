select u.username, u.profile_pic, p.img, p.content
from users u
join posts on p u.user_id = p.author_id
where u.user_id = $1
returning u.username, u.profile_pic, p.img, p.content;