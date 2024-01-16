CREATE TABLE public.users (
    userid SERIAL PRIMARY KEY,
    password VARCHAR(255) NOT NULL,
    email VARCHAR(100) NOT NULL,
    fullname VARCHAR(100),
    otp INTEGER
);


CREATE TABLE public.programs (
    programid SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    price INTEGER NOT NULL,
    domain VARCHAR(50) NOT NULL,
    program_type VARCHAR(45) NOT NULL,
    registrations_status VARCHAR(50) NOT NULL,
    description TEXT,
    placement_assurance VARCHAR(5) NOT NULL,
    image_url VARCHAR(255),
    university_name VARCHAR(100),
    faculty_profile VARCHAR(255),
    learning_hours INTEGER,
    certificate_diploma VARCHAR(20),
    eligibility_criteria VARCHAR(255),
    userid INTEGER REFERENCES public.users(userid)
);

INSERT INTO users (username, email, password)
VALUES
  ('user1', 'user1@example.com', 'hashed_password_1'),
  ('user2', 'user2@example.com', 'hashed_password_2'),
  ('user3', 'user3@example.com', 'hashed_password_3'),
  ('user4', 'user4@example.com', 'hashed_password_4'),
  ('user5', 'user5@example.com', 'hashed_password_5');

INSERT INTO programs (name, price, domain, program_type, registrations_status, description, placement_assurance, image_url, university_name, faculty_profile, learning_hours, certificate_diploma, eligibility_criteria)
VALUES
  ('Program 1', 500, 'Tech', 'FT', 'Open', 'Description 1', true, 'https://example.com/image1.jpg', 'University 1', 'Faculty 1', 40, 'Diploma', 'Eligibility 1'),
  ('Program 2', 700, 'Data', 'PT', 'Closed', 'Description 2', false, 'https://example.com/image2.jpg', 'University 2', 'Faculty 2', 30, 'Certificate', 'Eligibility 2'),
  ('Program 3', 600, 'Finance', 'FT', 'Open', 'Description 3', true, 'https://example.com/image3.jpg', 'University 3', 'Faculty 3', 35, 'Diploma', 'Eligibility 3'),
  ('Program 4', 800, 'Tech', 'PT', 'Open', 'Description 4', true, 'https://example.com/image4.jpg', 'University 4', 'Faculty 4', 45, 'Certificate', 'Eligibility 4'),
  ('Program 5', 550, 'Data', 'FT', 'Closed', 'Description 5', false, 'https://example.com/image5.jpg', 'University 5', 'Faculty 5', 38, 'Diploma', 'Eligibility 5');


-- DUMMY DATA
INSERT INTO programs (
    "Name",
    "Price",
    "Domain",
    "Program_Type",
    "Registrations",
    "Description",
    "Placement_Assurance",
    "Image_url",
    "University_Name",
    "Faculty_Profile",
    "Learning_Hours_and_Duration",
    "Certificate_or_Diploma",
    "Eligibility_Criteria"
) VALUES
    ('Program 1', 500, 'Science', 'Online', 'Open', 'Introduction to Science', true, 'image1.jpg', 'University A', 'Professor X', '50 hours', 'Certificate', 'Bachelor degree in Science'),
    ('Program 2', 700, 'Technology', 'In-person', 'Closed', 'Advanced Technology', false, 'image2.jpg', 'University B', 'Professor Y', '60 hours', 'Diploma', 'Master degree in Technology'),
    ('Program 3', 600, 'Arts', 'Online', 'Open', 'Creative Arts Workshop', true, 'image3.jpg', 'University C', 'Professor Z', '40 hours', 'Certificate', 'Bachelor degree in Arts'),
    ('Program 4', 800, 'Business', 'In-person', 'Closed', 'MBA in Business Administration', false, 'image4.jpg', 'University D', 'Professor W', '80 hours', 'Diploma', 'Bachelor degree in Business'),
    ('Program 5', 450, 'Engineering', 'Online', 'Open', 'Introduction to Engineering', true, 'image5.jpg', 'University E', 'Professor V', '30 hours', 'Certificate', 'Bachelor degree in Engineering'),
    ('Program 6', 550, 'Health', 'In-person', 'Closed', 'Medical Sciences Workshop', false, 'image6.jpg', 'University F', 'Professor U', '45 hours', 'Diploma', 'Bachelor degree in Health Sciences'),
    ('Program 7', 900, 'Computer Science', 'Online', 'Open', 'Advanced Computer Science', true, 'image7.jpg', 'University G', 'Professor T', '70 hours', 'Certificate', 'Bachelor degree in Computer Science'),
    ('Program 8', 750, 'Social Sciences', 'In-person', 'Closed', 'Social Sciences Symposium', false, 'image8.jpg', 'University H', 'Professor S', '55 hours', 'Diploma', 'Bachelor degree in Social Sciences'),
    ('Program 9', 680, 'Environment', 'Online', 'Open', 'Environmental Studies', true, 'image9.jpg', 'University I', 'Professor R', '65 hours', 'Certificate', 'Bachelor degree in Environmental Studies'),
    ('Program 10', 720, 'Law', 'In-person', 'Closed', 'Legal Studies Workshop', false, 'image10.jpg', 'University J', 'Professor Q', '75 hours', 'Diploma', 'Bachelor degree in Law');

