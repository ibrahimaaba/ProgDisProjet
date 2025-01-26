CREATE TABLE IF NOT EXISTS courses (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    price DECIMAL(10, 2) NOT NULL
);

CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL
);

INSERT INTO courses (title, description, price) VALUES
('React for Beginners', 'Learn the basics of React.js', 19.99),
('Java for Beginners', 'Learn the basics of Java', 13.99),
('JavaScript Mastery', 'Become a backend expert with JS', 29.99);

INSERT INTO users (name, email, password) VALUES
('Jon Jones', 'jonbonesjones@gmail.com', 'heavyweightchamp'),
('Amanda Nunes', 'amanda.nunes@gmail.com', 'doublechamp'),
('Khabib Nurmagomedov', 'knurmagomedov@hotmail.com', 'lightweightchamp');
