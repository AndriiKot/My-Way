select * from film f;
select * from "language" l ;

select 
	f.title,
	l."name" as language_name
from
	film f
	inner join "language" l 
		on f.language_id = l.language_id;
		
