CREATE TABLE houses (
  id serial PRIMARY KEY,
  name varchar(50),
  address varchar(50),
  city varchar(50),
  state varchar(2),
  zipcode varchar(5),
  mortgage float,
  rec_rent float,
  des_rent float);