// Scripts empleados en mongo para la parte 1 del parcial

// Crear la Base de Datos 
db = db.getSiblingDB("MatriculaApp");

//Creacción de las Colecciones en la Base de Datos
db.createCollection("agentes")
db.createCollection("tickets")
db.createCollection("defectos")

//Insertar Datos en las Colecciones: Colección agentes
db.agentes.insertMany([{nombre: "Laura Cerquera", nivel: "Senior", tickets_hora: 10, de_turno: true},
                       {nombre: "Andres Perdomo", nivel: "Junior", tickets_hora: 6, de_turno: false}])

//Insertar Datos en las Colecciones: Colección tickets 
db.tickets.insertMany([{numero_ticket: "T1", llegada_min: 0,  atencion_min: 5, prioridad: "Alta",  agente: "Laura Cerquera"},
                       {numero_ticket: "T2", llegada_min: 3,  atencion_min: 7, prioridad: "Alta",  agente: "Laura Cerquera"},
                       {numero_ticket: "T3", llegada_min: 6,  atencion_min: 4, prioridad: "Media", agente: "Laura Cerquera"},
                       {numero_ticket: "T4", llegada_min: 14, atencion_min: 8, prioridad: "Baja",  agente: "Laura Cerquera"},
                       {numero_ticket: "T5", llegada_min: 25, atencion_min: 6, prioridad: "Alta",  agente: "Laura Cerquera"},
                       {numero_ticket: "T6", llegada_min: 28, atencion_min: 5, prioridad: "Media", agente: "Laura Cerquera"},
                       {numero_ticket: "T7", llegada_min: 40, atencion_min: 9, prioridad: "Baja",  agente: "Laura Cerquera"},
                       {numero_ticket: "T8", llegada_min: 52, atencion_min: 4, prioridad: "Alta",  agente: "Laura Cerquera"}])

//Insertar Datos en las Colecciones: Colección defectos
db.defectos.insertMany([{semana: 1, defectos_encontrados: 28},
                       {semana: 2, defectos_encontrados: 23},
                       {semana: 3, defectos_encontrados: 22},
                       {semana: 4, defectos_encontrados: 17},
                       {semana: 5, defectos_encontrados: 16},
                       {semana: 6, defectos_encontrados: 12},
                       {semana: 7, defectos_encontrados: 12},
                       {semana: 8, defectos_encontrados: 9}])

//Consultas en las Colecciones: Tickets con prioridad Alta
db.tickets.find({prioridad: "Alta"})

//Consultas en las Colecciones: Tickets con atencion mayor a 6 minutos
db.tickets.find({atencion_min: {$gt: 6}})

//Consultas en las Colecciones: Semanas con menos de 15 defectos
db.defectos.find({defectos_encontrados: {$lt: 15}})

//Actualizar Ticket T7, pasa de tener una prioridad Baja a Tener una prioridad Media
db.tickets.updateOne({numero_ticket: "T7"}, {$set: {prioridad: "Media"}})

// Verificar que si se aplico correctamente el updateOne
db.tickets.find({numero_ticket: "T7"})

//Contar la cantidad de documentos dentro de la colección Tickets
db.tickets.countDocuments()

//insertar Dato de Prueba para hacer DeleteOne dentro de la Coleccion Tickets
db.tickets.insertOne({numero_ticket: "T9", llegada_min: 60, atencion_min: 3, prioridad: "Baja", agente: "Laura Cerquera"})

//Verificar que se hayan agregado correctamente los datos de prueba para la eliminacion(deleteOne)
db.tickets.countDocuments()

//Eliminar Datos de Prueba
db.tickets.deleteOne({numero_ticket: "T9"})

//Verificar que se hayan eliminado correctamente los datos de prueba para la eliminacion(deleteOne)
db.tickets.countDocuments()