CREATE SCHEMA `react-node-mysql-crud`;
CREATE TABLE `react-node-mysql-crud`.`books` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(255) NULL,
    `description` VARCHAR(255) NULL,
    `cover` VARCHAR(255) NULL,
    PRIMARY KEY (`id`)
);
INSERT INTO `react-node-mysql-crud`.`books` (`title`, `description`, `cover`)
VALUES (
        'Madol Doova',
        'Madol Doova is a children novel and coming-of-age story written by Sri Lankan writer Martin Wickramasinghe',
        'https://upload.wikimedia.org/wikipedia/en/thumb/5/5c/MadolDoova.jpg/220px-MadolDoova.jpg'
    );
INSERT INTO `react-node-mysql-crud`.`books` (`title`, `description`, `cover`)
VALUES (
        'Magul Kema',
        'Magul Kema is a Child Story written by Sri Lankan writer Kumarathunga Minidasa',
        'https://www.sarasavi.lk/cache/large/product/Magul-Kema-10082155-0034.jpg'
    );
INSERT INTO `react-node-mysql-crud`.`books` (`title`, `description`, `cover`)
VALUES (
        'Hath Pana',
        'Hath Pana is a Child Story written by Sri Lankan writer Kumarathunga Minidasa',
        'https://images-na.ssl-images-amazon.com/images/I/51-QpMt9-xL.jpg'
    );
INSERT INTO `react-node-mysql-crud`.`books` (`title`, `description`, `cover`)
VALUES (
        'Kala Hada',
        'Kala Hada is novel written by Sri Lankan writer W.A. Silva',
        'https://www.kbooks.lk/image/cache/catalog/godage/kala_hada_w_a_silva-500x500.jpg'
    );