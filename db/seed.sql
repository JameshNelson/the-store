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


create table project_customer_order(
customer_order_id serial primary key,
customer_id int references project_customer(customer_id),
paid boolean
)


create table project_order_items(
order_item_id serial primary key
,customer_order_id int references project_customer_order(customer_order_id)
,product_id int references project_products(product_id)
,qty int
)