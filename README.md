# Parte 1: Base de Datos en MongoDB

## Nombre de la Base de Datos

**MatriculaApp**

## Colecciones dentro de la Base de Datos: 

## Colección Tickets

| Campo | Tipo de Datos | Descripción |
| --- | --- | --- |
| _id | ObjectId | identificador unico generado por mongo al insertar datos en una coleccion |
| numero_ticket | String | Identificador del Ticket (T1, T2, T3 ... T8) |
| llegada_min | Number | Minuto de llegada del Ticket |
| atencion_min | Number | Tiempo de atencion en minutos para el ticket |
| prioridad | String | Prioridad del ticket (Alta, Media, Baja) | 
| agente | String | Hace referencia al agente que atendio el Ticket |

## Colección Agentes 

| Campo | Tipo de dato | Descripción |
|---|---|---|
| _id | ObjectId | identificador unico generado por mongo al insertar datos en una coleccion |
| nombre | String | Nombre completo del agente |
| nivel | String | Nivel del agente (Senior o Junior) |
| tickets_hora | Number | Cantidad de tickets por hora que puede resolver |
| de_turno | Boolean | Informa si el agente estuvo de turno |

## Colección Defectos 

| Campo | Tipo de dato | Descripción |
|---|---|---|
| _id | ObjectId | identificador unico generado por mongo al insertar datos en una coleccion |
| semana | Number | Semana de pruebas |
| defectos_encontrados | Number | Cantidad de defectos hallados en la semana |

## Relación entre Colecciones 

- **tickets y  agentes:** Dentro de la coleccion ticket, el campo **agente** hace referencia al campo **nombre** dentro de la coleccion agentes, lo cual quiere decir que ambas colecciones tienen una relacion de uno a muchos, es decir un agente puede atender varios tickets y cada ticket es atendido por un solo agente, dentro del contexto del problema planteado todos los 8 tickets fueron atendidos por la agente **Laura Cerquera**; El agente Andrés Perdomo no estuvo de turno, por eso no tiene ningun ticket asociado.
- **defectos:** no referencia en  ninguna otra colección. Ya que es el encargado de guardar los datos de las pruebas de la versión 11.0 realizados en 8 semanas, debido a que es una coleccion independiente a la de los tickets.