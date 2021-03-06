DROP TABLE IF EXISTS users CASCADE;
CREATE TABLE users (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL,
  photo_url VARCHAR(255)
);

DROP TABLE IF EXISTS tags CASCADE;
CREATE TABLE tags (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(255) NOT NULL
);

DROP TABLE IF EXISTS questions CASCADE;
CREATE TABLE questions (
  id SERIAL PRIMARY KEY NOT NULL,
  name TEXT NOT NULL,
  date DATE NOT NULL DEFAULT CURRENT_DATE,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  tag_id INTEGER REFERENCES tags(id) ON DELETE CASCADE
);

DROP TABLE IF EXISTS answers CASCADE;
CREATE TABLE answers (
  id SERIAL PRIMARY KEY NOT NULL,
  audio_url VARCHAR(255), 
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  question_id  INTEGER REFERENCES questions(id) ON DELETE CASCADE,
  date DATE NOT NULL DEFAULT CURRENT_DATE
);

DROP TABLE IF EXISTS comments CASCADE;
CREATE TABLE comments (
  id SERIAL PRIMARY KEY NOT NULL,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  name VARCHAR(255) NOT NULL,
  answer_id  INTEGER REFERENCES answers(id) ON DELETE CASCADE,
  comment VARCHAR(255),
  date DATE NOT NULL DEFAULT CURRENT_DATE
);

DROP TABLE IF EXISTS liked CASCADE;
CREATE TABLE liked (
  id SERIAL PRIMARY KEY NOT NULL,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  question_name TEXT NOT NULL,
  tag_name TEXT NOT NULL
);