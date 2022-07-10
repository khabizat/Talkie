INSERT INTO questions (name, date, user_id, tag_id)
VALUES

-- Seed Eva (user #1) / tag #1 Data Structures and Algorithms
('How are linked lists more efficient than arrays?', '2022-07-05', 1, 1),
('What is a doubly-linked list (DLL)? What are its applications?', '2022-07-08', 1, 1),

-- Seed Daniel (user #2) / tag #2 JavaScript
('Explain how this works in JavaScript', '2022-07-08', 2, 2 ),
('Describe event bubbling', '2022-07-08', 2, 2),

-- Seed Bella (user #3) / tag #2 JavaScript / tag #4 CSS / tag#1 Data Structures and Algorithms
('What is a closure, and how/why would you use one?', '2022-07-07', 3, 2 ),
('What is the difference between .call and .apply?', '2022-07-01', 3, 2 ),
('How is responsive design different from adaptive design?', '2022-07-03', 3, 4),
('What is a stack? What are the applications of stack?', '2022-07-02', 3, 1);
