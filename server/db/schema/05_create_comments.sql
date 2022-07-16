DROP TABLE IF EXISTS comments CASCADE;

CREATE TABLE comments (
  id SERIAL PRIMARY KEY NOT NULL,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  name VARCHAR(255) NOT NULL,
  answer_id  INTEGER REFERENCES answers(id) ON DELETE CASCADE,
  comment VARCHAR(255),
  timestamp TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);