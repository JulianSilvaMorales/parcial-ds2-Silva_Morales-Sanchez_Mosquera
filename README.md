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

# Parte 2: Clase en python 

**ópcion escogida:** Opción B · Evolución del software: clase CampanaPruebas

**src/modelo.py** recibe los defectos por semana que lee directamente desde la base de datos de MongoDB, acumula los defectos, ajusta el modelo goel-okumoto con un **curve_fit** y calcula los defectos restantes y la semana en la que se alcanzara el 95%, **src/main.py** lee la coleccion **defectos**, crea el objeto y general la grafica en **graficas/resultado.png**.

**Ejecucion:** 

```
pip install -r requirements.txt
python src/main.py
pytest

```

# Parte 3: Interpretacion 

De acuerdo al modelo de goael-okumoto ajustado, la plataforma que mantiene HuilaSoft tendria en total unos 198 defectos (a ≈ 198,06) y en las ochos semanas reportadas en la campaña de pruebas se encontraron en total 139 defectos, si se decidiera liberar hoy, tal como esta quedarian 59 defectos sin descubrir (alrededor de 58,77), la grafica nos muestra que los puntos reales siguen muy cerca de la curva ajustada y que poco a poco se va aplanado la curva, cada semana que pasa se encuentran menos defectos y la curva se acerca a su asintota cerca de 198. Con b ≈ 0,152 se llegaria al 95% de los defectos en la semana 19,7, es decir que la platafroma aun debe de seguir con unas 12 semanas mas de pruebas. La recomendacion para HuilaSoft es que no liberen aun la version 11.0, se debe seguir probando al menos hasta la semana 20, pero si hay presion de tiempo pueden liberar la version 11.0 solo despues de haber corregido los defectos mas criticos. 