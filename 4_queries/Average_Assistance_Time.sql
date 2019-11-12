SELECT avg(started_at-completed_at) AS average_assistance_request_duration
FROM assistance_requests
JOIN assignments ON assignments.id = assignment_id
