-- items table schema
CREATE TABLE item (
    id SERIAL PRIMARY KEY,
    item_name VARCHAR(50),
    last_seen_location VARCHAR(100),
    last_seen_time VARCHAR(100)
);

-- smrt data
INSERT INTO item 
(item_name,last_seen_location, last_seen_time)
VALUES ('keys','on my desk','yesterday'),
('wallet', 'on the couch', '3 months ago'),
('phone', 'in my car', '5 min ago');