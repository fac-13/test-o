BEGIN;

DROP TABLE IF EXISTS spaces, reviews CASCADE;

CREATE TABLE spaces (
    id SERIAL PRIMARY KEY NOT NULL,
    name VARCHAR(255) NOT NULL,
    latitude DECIMAL(10,8) NOT NULL,
    longitude DECIMAL(10,8) NOT NULL
);

CREATE TABLE reviews (
    id SERIAL PRIMARY KEY NOT NULL,
    rating INT NOT NULL,
    spacesid int FOREIGN KEY REFERENCES spaces(id)
);

INSERT INTO spaces (name, latitude, longitude) VALUES ();

COMMIT;