SELECT * FROM table
WHERE id IN (
  SELECT something_id
  FROM someTable
  WHERE something
);