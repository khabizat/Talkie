INSERT INTO users (name, email, password, photo_url)
VALUES
('Eva Edison', 'test@test.com', '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.', 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg'),
('Daniel Smith', 'daniel@gmx.com', '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.', 'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg'), 
('Bella Scott', 'bellas@outlook.com', '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.', 'https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg'),
('Alice Jackson', 'alicejackson@gmx.com', '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.', 'https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg'),
('Anthony Marlou', 'marlou@gmx.com', '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.', 'https://images.pexels.com/photos/428333/pexels-photo-428333.jpeg'),
('Katia Cheng', 'katiacheng@gmx.com', '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.', 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg'),
('Michael Weiss', 'michaelweiss@gmx.com', '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.', 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg'),
('Laura Reynolds', 'laurareynolds@inbox.com', '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.', 'https://images.pexels.com/photos/948873/pexels-photo-948873.jpeg');

INSERT INTO tags (name)
VALUES
('Data Structures and Algorithms'),
('JavaScript'),
('HTML'),
('CSS'),
('Ruby'),
('Ruby on Rails'),
('SQL'),
('NodeJS'),
('ReactJS'),
('Express'),
('JQuery'),
('Ajax'),
('Python'), 
('C'),
('C++'),
('C#'),
('R'),
('Go'),
('PHP'),
('Java'),
('APIs'),
('System Design'),
('Behavioural');

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
('What is a stack? What are the applications of stack?', '2022-07-02', 3, 1);

INSERT INTO answers (audio_url, user_id, question_id, date)
VALUES

('Because... reasons', 1, 1, '2022-07-11'),
('I would approach this...', 2, 2, '2022-07-01'),
('Because reasons!', 3, 3, '2022-11-01'),
('Because reasons', 4, 4, '2022-04-21'),
('I have no idea! However I would still like to try...', 5, 4, '2022-07-01'),
('Sorry, I forgot to do my brain stretches.', 5, 5, '2022-04-30'),
('erm, maybe?!', 6, 6, '2022-06-26'),
('First I would create an object containing key value 🍐s', 7, 6, '2022-07-01'),
('Do not ask me, I am just here for the free coffee... wait, there is free coffee right?', 7, 3, '2022-07-01'),
('Because reasons', 8, 1, '2022-07-01');

INSERT INTO comments (user_id, name,  answer_id, comment, timestamp)
VALUES

(2, 'Daniel Smith', 4, 'I think this is the best answer of all time! You are a genius', '1995-01-01'),
(3, 'Bella Scott', 3, 'This has truly inspired me!', '1995-01-01'),
(4, 'Alice Jackson', 6, 'I have no clue what you are saying?', '1995-01-01'),
(5, 'Anthony Marlou', 8, 'I think this is the best answer of all time! You are a genius', '2021-10-03'),
(6, 'Katia Cheng', 10, 'Whuuuuuut!', '2022-05-03'),
(7, 'Michael Weiss', 2, '🤔🤔', '2022-05-03'),
(8, 'Laura Reynolds', 1, 'I think this is the best answer of all time! You are a genius', '2021-10-03'),
(8, 'Michael Weiss', 7, '🤯🤯🤯', '2022-08-2'),
(2, 'Daniel Smith', 5, 'I think this is the best answer of all time! You are a genius', '2022-05-03');

INSERT INTO liked (user_id, question_name, tag_name)
VALUES

(1, 'How are linked lists more efficient than arrays?', 'Data Structures and Algorithms'),
(1, 'What is a doubly-linked list (DLL)? What are its applications?', 'Data Structures and Algorithms'),
(1, 'Explain how this works in JavaScript', 'JavaScript'),
(2, 'How are linked lists more efficient than arrays?', 'Data Structures and Algorithms'),
(2, 'What is a closure, and how/why would you use one?', 'JavaScript'),
(2, 'What is the difference between .call and .apply?', 'JavaScript'),
(3, 'What is a closure, and how/why would you use one?', 'JavaScript'),
(3, 'Explain how this works in JavaScript', 'JavaScript'),
(3, 'What is a doubly-linked list (DLL)? What are its applications?', 'Data Structures and Algorithms'),
(4, 'What is the difference between .call and .apply?', 'JavaScript'),
(4, 'What is a closure, and how/why would you use one?', 'JavaScript'),
(4, 'How are linked lists more efficient than arrays?', 'Data Structures and Algorithms'),
(5, 'What is the difference between .call and .apply?', 'JavaScript'),
(5, 'What is a closure, and how/why would you use one?', 'JavaScript'),
(5, 'How is responsive design different from adaptive design?', 'CSS'),
(6, 'What is a stack? What are the applications of stack?', 'Data Structures and Algorithms'),
(6, 'What is a stack? What are the applications of stack?', 'Data Structures and Algorithms'),
(6, 'Explain how this works in JavaScript', 'JavaScript'),
(7, 'What is a doubly-linked list (DLL)? What are its applications?', 'Data Structures and Algorithms');