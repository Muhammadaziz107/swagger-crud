create database swagger;

create table users(
	id serial primary key,
	name varchar(100) not null,
	isStudent boolean default true,
	isAdmin boolean default false,
	isSuperAdmin boolean default false
);
