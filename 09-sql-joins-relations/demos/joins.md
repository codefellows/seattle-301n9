# SQL Relationships

## 1 to 1
In a one-to-one relationship, a row in `table A` can have no more than one matching row in `table B`, and vice versa. A one-to-one relationship is created if both of the related columns are primary keys or have unique constraints.

This type of relationship is less common because most information related in this way would be all in one table. You might use a one-to-one relationship to:

- Divide a table with many columns.
- Isolate part of a table for security reasons.
- Store data that is short-lived and could be easily deleted by simply deleting the table.
- Store information that applies only to a subset of the main table.

Person table

person_id (pk) | first_name | last_name | ssn | date_of_birth
--- | --- | --- | --- | ---
1 | Scott | Schmidt | 12312123 | 01-12-1983
2 | Dan | Schwartz | 45645456 | 04-16-1981
3 | Sam | Hamm | 98798987 | 12-12-1965

Contact Info table

contact_id (pk) | person_id (fk) | street | city | state | zip
--- | --- | --- | --- | --- | ---
1 | 3 | 1234 Harrison | Seattle | WA | 98109
2 | 1 | 432 3rd Ave | Seattle | WA | 98102
3 | 2 | 2424 62nd Ave | Maple Valley | WA | 98038

```sql
-- This table must be created first (for now) in order to create the contact_info table with a Foreign Key
CREATE table person(
  person_id SERIAL PRIMARY KEY,
  first_name VARCHAR(64),
  last_name VARCHAR(64),
  ssn INTEGER,
  date_of_birth VARCHAR(25)
);

-- Creates the contact_info table with a foreign key reference to the persons table
CREATE table contact_info(
  contact_id SERIAL PRIMARY KEY,
  person_id INTEGER REFERENCES person(person_id),
  street VARCHAR(255),
  city VARCHAR(255),
  state VARCHAR(2),
  zip INTEGER(5)
);
```

```sql
-- This is our join statement which takes select data from both tables and returns a new tables
-- ordered by the `person.last_name`
SELECT person.first_name, person.last_name, contact_info.city, contact_info.state
FROM person
INNER JOIN contact_info
  ON person.person_id=contact_info.person_id
ORDER BY person.last_name;
```

person.first_name | ^person.last_name | contact_info.city | contact_info.state
---- | ---- | ---- | ----
Sam | Hamm | Seattle | WA
Scott | Schmidt | Maple Valley | WA
Dan | Schwartz | Seattle | WA

## 1 to Many / Many to 1
A one-to-many relationship is the most common type of relationship. In this type of relationship, a row in `table A` can have many matching rows in `table B`, but a row in `table B` can have only one matching row in `table A`.

For example, the `author` and `book` tables have a one-to-many relationship: each author produces many books, but each book comes from only one author.

Make a one-to-many relationship if only one of the related columns is a primary key or has a unique constraint.

Authors Table

author_id (pk) | author_name
--- | ---
1 | Issac Asimov
2 | Arthur C. Clark
3 | Frank Herbert
4 | Ursula K. Le Guin

Books Table

book_id (pk) | author_id (fk) | title
--- | --- | ---
1 | 4 | Left Hand of Darkness
2 | 3 | Dune
3 | 3 | Children of Dune
4 | 1 | Foundation
5 | 1 | I, Robot
6 | 2 | Rendezvous with Rama

```sql
-- Create both tables and mark the foreign key for reference in our join
CREATE table author(
  author_id SERIAL PRIMARY KEY,
  author_name VARCHAR(64)
);

CREATE table book(
  book_id SERIAL PRIMARY KEY,
  author_id INTEGER REFERENCES author(author_id),
  title VARCHAR(256)
);
```

```sql
-- This is our join statement which takes all data from both tables and returns a new tables
-- ordered by the `author.author_name`
SELECT *
FROM author
INNER JOIN book
  ON book.author_id=author.author_id
ORDER BY author.author_name;
```

author.author_id | ^author.author_name | book.book_id | book.author_id | book.title
---- | ---- | ---- | ---- | ----
2 | Arthur C. Clark | 6 | 6 | Rendezvous with Rama
3 | Frank Herbert | 2 | 3 | Dune
3 | Frank Herbert | 3 | 3 | Children of Dune
1 | Issac Asimov | 4 | 1 | Foundation
1 | Issac Asimov | 5 | 1 | I, Robot
4 | Ursula K. Le Guin | 1 | 4 | Left Hand of Darkness

## Many to Many
In a many-to-many relationship, a row in `table A` can have many matching rows in `table B`, and vice versa. You create such a relationship by defining a third table, called a junction table, whose primary key consists of the foreign keys from both `table A` and `table B`.

<!-- For example, the `authors` table and the `books` table have a many-to-many relationship that is defined by a one-to-many relationship from each of these tables to the `bookauthors` table. The primary key of the `bookauthors` table is the combination of the `au_id` column (the authors table's primary key) and the `book_id` column (the books table's primary key). -->

Order Table

order_id (pk) | order_name | ship_address | ship_city | ship_state
--- | --- | --- | --- | ---
1 | New computers | 1234 Harry St | Bellevue | WA
2 | Upgrade iPads | 342 Bell Ave | Boston | MA
3 | Hard Drive | 999 Whiskey Ave | New York | NY

Order Detail Table (Junction)

detail_id (pk) | order_id (fk) | product_id (fk) | unit_price | qty
--- | --- | --- | --- | ---
1 | 1 | 1 | 1299.00 | 2
2 | 1 | 4 | 99.00 | 2
3 | 1 | 5 | 99.00 | 2
4 | 1 | 2 | 899.00 | 4
5 | 1 | 6 | 45.99 | 4
6 | 2 | 2 | 899.00 | 10
7 | 2 | 6 | 45.99 | 10
8 | 3 | 3 | 655.45 | 1


Product Table

product_id (pk) | product_name | qty_per_unit | supplier_id (fk)
--- | --- | --- | ---
1 | Macbook Pro | 1 | 1225
2 | iPad Air 2 | 1 | 1225
3 | 1TB SSD | 1 | 2539
4 | Magic Mouse | 1 | 1225
5 | Magic Keyboard | 1 | 1225
6 | iPad Case | 1 | 1225

``` sql
SELECT o.order_id, p.product_name, (od.qty * od.unit_price) as total
FROM orders AS o
-- Note that we're aliasing orders to `o`, likewise below products as `p`, and orderDetail as `od`
INNER JOIN order_detail AS od
  ON o.order_id=od.order_id
INNER JOIN products AS p
  ON p.product_id=od.product_id
ORDER BY total
WHERE o.order_id=1;
```

o.order_id | p.product_name | ^total
---- | ---- | ----
1 | iPad Case | 183.96
1 | Magic Mouse | 198.00
1 | Magic Keyboard | 198.00
1 | Macbook Pro | 2598.00
1 | iPad Air 2 | 3596.00

## Self-referencing
This is used when a table needs to have a relationship with itself. For example, let's say you have a referral program. Customers can refer other customers to your shopping website.

The table may look like this:

customer_id (pk) | customer_name | referrer_id (fk)
--- | --- | ---
1 | Dan Schwatz | null
2 | Scott Schmidt | 1
3 | Jessica Vasquez-Soltero | 1

If you would like to create a self referencing "many to many" relationship, you would need an extra table like just like the many-to-many example.

``` sql
CREATE table customer(
  customer_id INTEGER PRIMARY KEY,
  customer_name VARCHAR(256),
  referrer_id INTEGER REFERENCES customer(customer_id);
)
```
