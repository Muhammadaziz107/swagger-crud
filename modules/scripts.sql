create database swagger;

create table users(
	id serial primary key,
	name varchar(100) not null,
	password varchar(100) not null,
	isStudent boolean default true,
	isAdmin boolean default false,
	isSuperAdmin boolean default false
);


create table courses(
	id serial primary key,
	name varchar(100) not null,
	description text
);


create table lessons(
	id serial primary key,
	name varchar(100) not null,
	photo text not null,
	description text not null,
	course_id int references courses(id)
);

create table library(
	id serial primary key,
	name varchar(150) not null
);

create table library_branch(
	id serial primary key,
	name varchar(120) not null,
	library_id int references library(id)
);

create table books(
	id serial primary key,
	name varchar(150) not null,
	photo text not null,
	description text not null,
	library_branch_id int references library_branch(id)
);