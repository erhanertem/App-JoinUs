-- SECTION 9 MAGIC OF AGGREGATE FUNCTIONS
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

-- LECTURE 150 QUIZ

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