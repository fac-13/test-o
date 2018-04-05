BEGIN;

DROP TABLE IF EXISTS spaces, reviews CASCADE;

CREATE TABLE spaces (
    id VARCHAR(100) NOT NULL,
    name VARCHAR(255) NOT NULL,
    latitude DECIMAL(10,8) NOT NULL,
    longitude DECIMAL(10,8) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE reviews (
    id SERIAL PRIMARY KEY NOT NULL,
    rating INT NOT NULL,
    spacesid VARCHAR(100) REFERENCES spaces(id)
);

-- INSERT INTO spaces (id, name, latitude, longitude) VALUES ();

COMMIT;
