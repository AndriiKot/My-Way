CREATE FUNCTION increment(i integer) RETURNS integer
AS 'select $1 + 1;'
LANGUAGE sql;