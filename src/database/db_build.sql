BEGIN;
    DROP TABLE IF EXISTS spaces, reviews
    CASCADE;
-- To create a database locally or on the server--
CREATE TABLE spaces
(
    id VARCHAR(100) NOT NULL,
    name VARCHAR(255) NOT NULL,
    latitude DECIMAL(10,7) NOT NULL,
    longitude DECIMAL(10,7) NOT NULL,
    PRIMARY KEY (id)
);
CREATE TABLE reviews
(
    id SERIAL PRIMARY KEY NOT NULL,
    rating INT NOT NULL,
    spacesid VARCHAR(100) REFERENCES spaces(id)
);
-- Please uncomment the following if you are using a local database and would like to populate it with dummy data --
INSERT INTO spaces
    (id, name, latitude, longitude)
VALUES
    ('ChIJnX2njGIPdkgRJSUCk-BqQsk', 'Chit Chaat Chai', 51.4600145, -0.1890872),
    ('ChIJrXOlLNYadkgRiohqRNt8BSY', 'Oriental Dragon', 51.5154956, -0.1493805),
    ('ChIJ-TGDfdQdkgRIZht1FeEQeg', 'WorkSpace Design', 51.5175847, -0.146326);
COMMIT;
