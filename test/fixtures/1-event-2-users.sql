INSERT INTO
    `user` (
        `id`,
        `username`,
        `password`,
        `email`,
        `firstName`,
        `lastName`
    )
VALUES
    (
        NULL,
        'e2e-test',
        '$2b$10$5v5ZIVbPGXf0126yUiiys.z/POxSaus.iSbzXj7cTRW9KWGy5bfcq',
        'e2e@test.com',
        'End',
        'To End'
    );

INSERT INTO
    `user` (
        `id`,
        `username`,
        `password`,
        `email`,
        `firstName`,
        `lastName`
    )
VALUES
    (
        NULL,
        'nasty',
        '$2b$10$5v5ZIVbPGXf0126yUiiys.z/POxSaus.iSbzXj7cTRW9KWGy5bfcq',
        'nasty@test.com',
        'End',
        'To End'
    );

INSERT INTO
    `event` (
        `id`,
        `description`,
        `when`,
        `address`,
        `name`,
        `organizerId`
    )
VALUES
    (
        NULL,
        'That is a crazy event, must go there!',
        '2021-04-15 21:00:00',
        'Local St 101',
        'Interesting Party',
        1
    )