CREATE TABLE classes
(
  id          INT AUTO_INCREMENT
    PRIMARY KEY,
  day_id      INT NULL,
  time_id     INT NULL,
  group_id    INT NULL,
  lecturer_id INT NULL,
  room_id     INT NULL,
  subject_id  INT NULL,
  type_id     INT NULL
)
  ENGINE = InnoDB;

CREATE INDEX classes__unique
  ON classes (day_id, time_id, group_id, lecturer_id, room_id, subject_id);

CREATE INDEX classes_to_day_idx
  ON classes (day_id);

CREATE INDEX classes_to_time_idx
  ON classes (time_id);

CREATE INDEX classes_to_group_idx
  ON classes (group_id);

CREATE INDEX classes_to_lecturer_idx
  ON classes (lecturer_id);

CREATE INDEX classes_to_room_idx
  ON classes (room_id);

CREATE INDEX classes_to_subject_idx
  ON classes (subject_id);

CREATE INDEX classes_to_type_idx
  ON classes (type_id);

CREATE TABLE course
(
  id     INT AUTO_INCREMENT
    PRIMARY KEY,
  number INT NOT NULL,
  CONSTRAINT number_UNIQUE
  UNIQUE (number)
)
  ENGINE = InnoDB;

CREATE TABLE day
(
  id   INT AUTO_INCREMENT
    PRIMARY KEY,
  name VARCHAR(15) NOT NULL,
  CONSTRAINT name_UNIQUE
  UNIQUE (name)
)
  ENGINE = InnoDB;

ALTER TABLE classes
  ADD CONSTRAINT classes_to_day
FOREIGN KEY (day_id) REFERENCES day (id)
  ON UPDATE CASCADE
  ON DELETE SET NULL;

CREATE TABLE `group`
(
  id            INT AUTO_INCREMENT
    PRIMARY KEY,
  course_id     INT NULL,
  speciality_id INT NULL,
  number        INT NOT NULL,
  students      INT NOT NULL,
  CONSTRAINT id_UNIQUE
  UNIQUE (id),
  CONSTRAINT group__unique
  UNIQUE (course_id, speciality_id, number),
  CONSTRAINT group_to_course
  FOREIGN KEY (course_id) REFERENCES course (id)
    ON UPDATE CASCADE
    ON DELETE SET NULL
)
  ENGINE = InnoDB;

CREATE INDEX group_to_course_idx
  ON `group` (course_id);

CREATE INDEX group_to_speciality_idx
  ON `group` (speciality_id);

ALTER TABLE classes
  ADD CONSTRAINT classes_to_group
FOREIGN KEY (group_id) REFERENCES `group` (id)
  ON UPDATE CASCADE
  ON DELETE SET NULL;

CREATE TABLE lecturer
(
  id   INT AUTO_INCREMENT
    PRIMARY KEY,
  name VARCHAR(45) NOT NULL,
  CONSTRAINT lecturer_name_uindex
  UNIQUE (name)
)
  ENGINE = InnoDB;

ALTER TABLE classes
  ADD CONSTRAINT classes_to_lecturer
FOREIGN KEY (lecturer_id) REFERENCES lecturer (id)
  ON UPDATE CASCADE
  ON DELETE SET NULL;

CREATE TABLE room
(
  id      INT AUTO_INCREMENT
    PRIMARY KEY,
  number  CHAR(10) NOT NULL,
  type_id INT      NULL,
  CONSTRAINT number_UNIQUE
  UNIQUE (number)
)
  ENGINE = InnoDB;

CREATE INDEX room_to_type_idx
  ON room (type_id);

ALTER TABLE classes
  ADD CONSTRAINT classes_to_room
FOREIGN KEY (room_id) REFERENCES room (id)
  ON UPDATE CASCADE
  ON DELETE SET NULL;

CREATE TABLE speciality
(
  id   INT AUTO_INCREMENT
    PRIMARY KEY,
  name VARCHAR(40) NOT NULL,
  CONSTRAINT speciality_name_uindex
  UNIQUE (name)
)
  ENGINE = InnoDB;

ALTER TABLE `group`
  ADD CONSTRAINT group_to_speciality
FOREIGN KEY (speciality_id) REFERENCES speciality (id);

CREATE TABLE subject
(
  id   INT AUTO_INCREMENT
    PRIMARY KEY,
  name CHAR(80) NOT NULL,
  CONSTRAINT name_UNIQUE
  UNIQUE (name)
)
  ENGINE = InnoDB;

ALTER TABLE classes
  ADD CONSTRAINT classes_to_subject
FOREIGN KEY (subject_id) REFERENCES subject (id)
  ON UPDATE CASCADE
  ON DELETE SET NULL;

CREATE TABLE time
(
  id     INT AUTO_INCREMENT
    PRIMARY KEY,
  start  TIME(4) NOT NULL,
  end    TIME(4) NOT NULL,
  number INT     NOT NULL
)
  ENGINE = InnoDB;

ALTER TABLE classes
  ADD CONSTRAINT classes_to_time
FOREIGN KEY (time_id) REFERENCES time (id)
  ON UPDATE CASCADE
  ON DELETE SET NULL;

CREATE TABLE type
(
  id   INT AUTO_INCREMENT
    PRIMARY KEY,
  name VARCHAR(20) NOT NULL,
  CONSTRAINT name_UNIQUE
  UNIQUE (name)
)
  ENGINE = InnoDB;

ALTER TABLE classes
  ADD CONSTRAINT classes_to_type
FOREIGN KEY (type_id) REFERENCES type (id)
  ON UPDATE CASCADE
  ON DELETE SET NULL;

ALTER TABLE room
  ADD CONSTRAINT room_to_type
FOREIGN KEY (type_id) REFERENCES type (id)
  ON UPDATE CASCADE
  ON DELETE SET NULL;


