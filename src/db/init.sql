DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS friends;

CREATE TABLE users (
  id VARCHAR(40) ,
  name VARCHAR(40),
  icon VARCHAR(40),
  address VARCHAR(40),
  phone_number VARCHAR(40),
  email VARCHAR(40),
  birthday Date,
  PRIMARY KEY (id)
);

CREATE TABLE friends (
  user_id VARCHAR(40),
  friend_id VARCHAR(40),
  PRIMARY KEY (user_id, friend_id),
  FOREIGN KEY (user_id) REFERENCES users(id),
  FOREIGN KEY (friend_id) REFERENCES users(id) ON DELETE CASCADE
);


INSERT INTO users
VALUES
  ('1', 'John Doe', 'icon1.jpg', '123 Main St', '1234567890', 'johndoe@example.com', '1990-01-01'),
  ('2', 'Jane Smith', 'icon2.jpg', '456 Elm St', '9876543210', 'janesmith@example.com', '1985-03-15');
