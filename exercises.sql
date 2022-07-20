-- LESSON: SECTION 9 MAGIC OF AGGREGATE FUNCTIONS
-- min max usage
-- SELECT min(released_year)
-- FROM books;
-- min max usage with group by

-- SELECT author_fname,
--          author_lname,
--          MIN(released_year)
-- FROM books
-- GROUP BY  author_lname, author_fname ORDER BY author_lname, author_fname ASC;

-- SELECT author_fname,
--          author_lname,
--          MAX(pages)
-- FROM books
-- GROUP BY  author_lname, author_fname;

-- SELECT CONCAT(author_fname,
--          ' ', author_lname) AS author, MAX(pages) AS 'longest book'
-- FROM books
-- GROUP BY  author_lname, author_fname;
-- SELECT CONCAT(author_fname,
--          ' ', author_lname) AS author, MAX(pages) AS 'longest book'
-- FROM books
-- GROUP BY  author_lname, author_fname ORDER BY MAX(pages) DESC;

-- SUM FUNCTION

-- SELECT sum(pages)
-- FROM books;

-- SELECT sum(released_year)
-- FROM books;

-- SELECT author_fname,
--          author_lname,
--          sum(pages)
-- FROM books
-- GROUP BY  author_lname, author_fname
-- ORDER BY  author_lname, author_fname;

-- THE AVG FUNCTION

-- SELECT avg(released_year)
-- FROM books;
-- SELECT avg(pages)
-- FROM books;

-- SELECT released_year,
--          AVG(stock_quantity)
-- FROM books GROUP BY  released_year
-- ORDER BY  released_year;

-- Coding Challenge: LECTURE 150 QUIZ

-- SELECT count(*)
-- FROM books; 

-- SELECT released_year,
--         COUNT(*)
-- FROM books
-- GROUP BY  released_year
-- ORDER BY  released_year;

-- SELECT SUM(stock_quantity) FROM books;

-- SELECT CONCAT(author_fname,
--         " ",
--         author_lname) AS author,
--          AVG(released_year)
-- FROM books
-- GROUP BY  author_lname, author_fname
-- ORDER BY  author_lname, author_fname;

-- SELECT CONCAT(author_fname,
--          " ",
--          author_lname) AS author,
--          pages AS "longest book"
-- FROM books GROUP BY author_fname, author_lname
-- ORDER BY  pages DESC LIMIT 1;

-- SELECT CONCAT(author_fname,
--          " ",
--          author_lname) AS author,
--          MAX(pages) AS "longest book"
-- FROM books GROUP BY author_fname, author_lname
-- ORDER BY  MAX(pages) DESC LIMIT 1;

-- SELECT released_year AS "year",
--          COUNT(DISTINCT title) AS "# books",
--          AVG(pages) AS "avg pages"
-- FROM books
-- GROUP BY  released_year
-- ORDER BY  released_year;
-- SELECT released_year AS "year",
--          COUNT(*) AS "# books",
--          AVG(pages) AS "avg pages"
-- FROM books
-- GROUP BY  released_year
-- ORDER BY  released_year;

-- LESSON: SECTION 10 REVISITING DATA TYPES

-- CREATE TABLE dogs (name char(5), breed varchar(10));

-- INSERT INTO dogs (name,breed) VALUES('bob','beagle');
-- INSERT INTO dogs (name,breed) VALUES('robby','corgi');
-- INSERT INTO dogs (name,breed) VALUES('Princess Jane','retriever');

-- NOTE: unless shell opened in non-strict mode char(xxx) dictates how long would be the string and would throw error if not fixed.

-- CREATE TABLE items (price DECIMAL(5,2));
-- INSERT INTO items(price) VALUES(7);
-- INSERT INTO items(price) VALUES(7987654);
-- INSERT INTO items(price) VALUES(34.88);
-- INSERT INTO items(price) VALUES(298.9999);
-- INSERT INTO items(price) VALUES(1.9999);

-- CREATE TABLE thingies (price FLOAT);
-- INSERT INTO thingies(price) VALUES (88.45);
-- INSERT INTO thingies(price) VALUES (8887.47);
-- INSERT INTO thingies(price) VALUES (8898778776687.47);

-- CREATE TABLE people (name VARCHAR(100), birthdate DATE, birthtime TIME, birthdt DATETIME);

-- INSERT INTO people (name, birthdate,birthtime,birthdt) VALUES ("Padma", '1983-11-11', "10:07:35", "1983-11-11 10:07:35");
-- INSERT INTO people (name, birthdate,birthtime,birthdt) VALUES ("Larry", '1943-12-25', "04:10:42", "1943-12-25 04:10:42");

-- SELECT CURDATE();
-- SELECT CURTIME();
-- SELECT NOW();

-- INSERT INTO people(name,birthdate,birthtime,birthdt) VALUES("Microwave", CURDATE(), CURTIME(), NOW());

-- SELECT name,
--         birthdate,
--         DAYNAME(birthdate)
-- FROM PEOPLE;

-- SELECT DATE_FORMAT(birthdt,"%m/%d/%Y at %h:%m") FROM people;

-- SELECT name, birthdate, DATEDIFF(NOW(),
--         birthdate) AS "encompassed time"
-- FROM people;

-- SELECT birthdt,
--          date_add(birthdt,
--          interval 1 month)
-- FROM people;

-- SELECT birthdt,
--          birthdt + interval 1 month
-- FROM people; 
-- -- date_add alternate
-- SELECT birthdt,
--          birthdt - interval 1 month
-- FROM people; 
-- -- datediff alternate

-- CREATE TABLE comment2 (content VARCHAR(100), changed_at TIMESTAMP DEFAULT NOW() ON UPDATE NOW());
-- INSERT INTO comment2 (content) VALUES("I may abondon!");
-- INSERT INTO comment2 (content) VALUES("susysysysys");
-- INSERT INTO comment2 (content) VALUES("I have to clear this!");
-- UPDATE comment2 SET content="This is not going to be a giberish comment" WHERE content="susysysysys";
-- SELECT content, changed_at FROM comment2 ORDER BY changed_at;

-- Coding Challenge: LECTURE 173 QUIZ

-- SELECT CURDATE();
-- SELECT CURTIME();
-- SELECT NOW();
-- SELECT DAYOFWEEK(NOW())-1;
-- -- dayofweek takes sunday as 1
-- SELECT DATE_FORMAT(NOW(), "%w");
-- -- date_format takes sunday as 0
-- SELECT DATE_FORMAT(NOW(), "%W");
-- SELECT DAYNAME(NOW());
-- SELECT DATE_FORMAT(NOW(), "%m/%d/%Y");
-- SELECT DATE_FORMAT(NOW(), "%M %D at %h:%i %p");

-- CREATE TABLE tweets (tweet_content VARCHAR(140), tweet_username VARCHAR(20), tweet_created_at TIMESTAMP DEFAULT NOW());

-- INSERT INTO tweets (tweet_content,tweet_username) VALUES("this is my first tweet","coltscat");
-- INSERT INTO tweets (tweet_content,tweet_username) VALUES("this is my second tweet","coltscat");

-- LESSON: SECTION 11 THE POWER OF LOGICAL OPERATORS

-- NOT EQUAL
-- SELECT title, released_year FROM books WHERE released_year != 2017;
-- SELECT title,author_lname FROM books;
-- SELECT title,author_lname FROM books WHERE author_lname != "Carver";

-- NOT LIKE
-- SELECT title FROM books WHERE title LIKE "W%";
-- SELECT title FROM books WHERE title NOT LIKE "W%";

-- GREATER THAN
-- SELECT * FROM books WHERE released_year > 2000 ORDER BY released_year;
-- SELECT * FROM books WHERE released_year >= 2000 ORDER BY released_year;

-- LESS THAN
-- SELECT * FROM books WHERE released_year < 2000 ORDER BY released_year;
-- SELECT * FROM books WHERE released_year <= 2000 ORDER BY released_year;

-- AND &&
-- SELECT title,author_lname,released_year FROM books WHERE author_lname="Eggers" AND released_year>2010;
-- SELECT title,author_lname,released_year FROM books WHERE author_lname="Eggers" AND released_year>=2010 AND title LIKE "%novel%";

-- OR ||
-- SELECT title,author_lname,released_year FROM books WHERE author_lname="Eggers" || released_year>2010 &&author_lname !="Saunders";

-- BETWEEN
-- SELECT title, released_year FROM books WHERE released_year>=2004 && released_year<=2015;
-- SELECT title, released_year FROM books WHERE released_year BETWEEN 2004 AND 2015;
-- SELECT name, birthdt FROM people WHERE birthdt BETWEEN CAST('1980-01-01' AS DATETIME) AND CAST('2000-01-01' AS DATETIME);
-- NOTE: When working with informal date strings, they need tobe casted as datetime to fullfill proper date conversion before proceeding with before operation

-- IN 
-- SELECT title, author_lname FROM books WHERE author_lname="Carver" || author_lname="Lahiri" || author_lname="Smith";
-- SELECT title, author_lname FROM books WHERE author_lname IN ("Carver","Lahiri","Smith");
-- SELECT title, author_lname, released_year FROM books WHERE released_year IN (2001,1985);

-- NOT IN
-- SELECT  title
--        ,author_lname
--        ,released_year
-- FROM books
-- WHERE released_year NOT IN (2001, 2003, 1985);

-- SELECT  title
--        ,author_lname
--        ,released_year
-- FROM books
-- WHERE released_year != 2001
-- AND released_year != 2003
-- AND released_year != 1985);
-- SELECT  title
--        ,released_year
-- FROM books
-- WHERE released_year >= 2000
-- AND released_year % 2 != 0;

-- CASE STATEMENTS
-- SELECT  title
--        ,released_year
--        ,CASE WHEN released_year >= 2000 THEN "Modern Lit"  ELSE "20th Century Lit" END AS genre
-- FROM books;

-- SELECT  title
--        ,stock_quantity
--        ,CASE WHEN stock_quantity BETWEEN 0 AND 50 THEN "*"
--              WHEN stock_quantity BETWEEN 51 AND 100 THEN "**"  ELSE "***" END AS stock
-- FROM books;

-- Coding Challenge: LECTURE 195 QUIZ

-- SELECT  10 != 10;
-- SELECT  15 > 15 && 99-5 <= 94;
-- SELECT  1 IN (5,3) || 9 BETWEEN 8 AND 10;

SELECT  title, released_year
FROM books
WHERE released_year < 1980;

SELECT  title, author_lname
FROM books
WHERE author_lname IN ("Eggers", "Chabon");

SELECT  title
       ,author_lname
FROM books
WHERE author_lname = "Lahiri" && released_year > 2000;

SELECT  title
       ,pages
FROM books
WHERE pages BETWEEN 100 AND 200;

SELECT  author_lname
FROM books
WHERE author_lname LIKE "C%" || author_lname LIKE "S%";

SELECT  title
       ,author_lname
       ,CASE WHEN title LIKE "%Stories%" THEN "Short Stories"
             WHEN title IN ("Just Kids","A Heartbreaking Work of Staggering Genius") THEN "Memoir" 
             ELSE "Novel" END AS type
FROM books;

SELECT  title
       ,author_lname
       ,CASE WHEN COUNT(*) < 2 THEN CONCAT(COUNT(*)," book")  ELSE CONCAT(COUNT(*)," books") END AS count
FROM books
GROUP BY  author_lname
         ,author_fname
ORDER BY author_lname;