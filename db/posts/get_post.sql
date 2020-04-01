select * from posts p 
join users u on u.user_id = p.author_id
where p.post_id = $1;