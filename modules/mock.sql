insert into users(name, password) values('Aziz', '123');
insert into users(name,password, isAdmin) values('Aziz', '1234' , true);
insert into users(name,password, isSuperAdmin) values('Aziz', '123123' , true);

insert into courses(name, description) values('IELTS', 'You can learn general English');
insert into courses(name, description) values('Math', 'about math');

insert into lessons(name, photo, description, course_id) values('English Beginner', 'https://bizimages.withfloats.com/actual/5b5eb988f72a930501b1f6be.jpg', 'To prepare general english', 1);
insert into lessons(name, photo, description, course_id) values('English Intermidiate', 'https://heritageinstitute.in/wp-content/uploads/2019/01/Intermediate-English-1.png', 'Intermidiate level of general english', 1);
insert into lessons(name, photo, description, course_id) values('Math basics', 'https://images-na.ssl-images-amazon.com/images/I/51qNrWIKqcL._SX359_BO1,204,203,200_.jpg', 'To prepare math basics', 2);
insert into lessons(name, photo, description, course_id) values('Math algorithm', 'https://image.shutterstock.com/image-illustration/algorithm-chalkboard-learn-math-equation-600w-633148376.jpg', 'To prepare math algorithm', 2);

insert into library(name) values('Amir Temur kutubxonasi');
insert into library(name) values('Milliy kutubxonasi');

insert into library_branch(name, library_id) values('Historical books', 1);
insert into library_branch(name, library_id) values('Literary books', 1);
insert into library_branch(name, library_id) values('Psychological books', 2);
insert into library_branch(name, library_id) values('Business books', 2);

insert into books(name, photo, description, library_branch_id) values('Oq kema', 'https://kitobxon.com/img_knigi/s4114.jpg', 'Chingiz Aytmatovning Oq kema asari', 2);
insert into books(name, photo, description, library_branch_id) values('Temur tuzuklari', 'http://nammqi.uz/rasm/yangilik/kitob-nammqi-1576728175.jpg', 'Amir Temurning Temur Tuzuklari asari', 1);
insert into books(name, photo, description, library_branch_id) values('Fact fullness', 'https://images-na.ssl-images-amazon.com/images/I/51DhvV6a3mL._SX321_BO1,204,203,200_.jpg', 'Hans Roslingning Fact fullness asari', 3);
insert into books(name, photo, description, library_branch_id) values('Stiv Jobs', 'https://images-na.ssl-images-amazon.com/images/I/81VStYnDGrL.jpg', 'Stiv Jobsning hayoti haqida asari', 4);
