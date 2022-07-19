INSERT INTO questions (name, date, user_id, tag_id)
VALUES

-- Seed Eva (user #1) / tag #1 Data Structures and Algorithms
('How are linked lists more efficient than arrays?', '2022-07-05', 1, 1),
('What is a doubly-linked list (DLL)? What are its applications?', '2022-07-08', 1, 1),

-- Seed Daniel (user #2) / tag #2 JavaScript
('Explain how this works in JavaScript', '2022-07-08', 2, 2),
('Describe event bubbling', '2022-07-08', 2, 2),

-- Seed Bella (user #3) / tag #2 JavaScript / tag #4 CSS / tag#1 Data Structures and Algorithms
('What is a closure, and how/why would you use one?', '2022-07-07', 3, 2),
('What is the difference between .call and .apply?', '2022-07-01', 3, 2),
('How is responsive design different from adaptive design?', '2022-07-03', 3, 4),
('What is a stack? What are the applications of stack?', '2022-07-02', 3, 1),

-- tag #3 HTML => everyone
('What is a Tag in HTML?', '2021-10-17', 1, 3),
('What are Attributes in HTML?', '2020-10-19', 2, 3),
('What is the Use of Comments in HTML?', '2019-08-18', 3, 3),

-- tag #4 CSS => Jeongmin, Kabby
('Explain a few advantages of CSS', '2018-10-18', 2, 4),
('How can CSS be integrated into an HTML page?', '2022-01-23, 1, 4'),

-- tag #5 Ruby => Kabby
('Why Ruby is known as a language of flexibility?', '2021-10-23', 2, 5),

--tag #6 Ruby on Rails => Jeongmin, Muhammad
('What is the Rails Controller?', '2017-10-17', 1, 6),
('What are the advantages of using Ruby on Rails?', '2021-02-02', 3, 6);