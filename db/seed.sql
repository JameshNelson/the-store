create table project_customer(
customer_id serial primary key,
email varchar(100),
password varchar(250),
admin boolean
);


create table project_products (
product_id serial primary key,
product_name varchar(50),
product_image varchar(250),
price decimal,
product_description text,
qty int
);