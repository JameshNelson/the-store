create table project_customer(
customer_id serial primary key,
email varchar(100),
password varchar(250),
admin boolean
);