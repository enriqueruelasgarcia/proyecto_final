create database proyectofinal;

CREATE TABLE productos(
nombre varchar(255) not null,
precio int(10) not null,
cantidad int(10) not null,
codigo int (10) primary KEY not null
)

CREATE TABLE clientes(
id_cliente int not null AUTO_INCREMENT PRIMARY KEY,
nombre varchar(255) not null,
celular varchar(20) not null,
edad int(3) not null,
correo varchar(40) not null
)

create table vendedores(
id varchar(255) PRIMARY KEY,
username varchar(255),
password varchar(255),
registered datetime,
last_login datetime
)

CREATE TABLE facturas(
    id_factura int not null AUTO_INCREMENT PRIMARY key,
fecha datetime,
productos varchar(500) not null,
    monto int(100)
)