select * from project_products pp 
join project_order_items poi on poi.product_id = pp.product_id
where paid = false;