INSERT INTO burgers (burger_name,devoured)
VALUES ("Classic Burger",false);

INSERT INTO burgers (burger_name, devoured)
VALUES ("Double Burger",false);

INSERT INTO burgers (burger_name, devoured)
VALUES ("Triple Burger", false);

INSERT INTO burgers (burger_name, devoured)
VALUES ("Mini burger" , true);

UPDATE burgers
SET devoured=false
WHERE id = 4;