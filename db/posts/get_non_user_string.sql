select *
from users u
join posts p on u.user_id = p.author_id
where u.user_id <> $1
and p.title ilike '%'|| $2 ||'%';

