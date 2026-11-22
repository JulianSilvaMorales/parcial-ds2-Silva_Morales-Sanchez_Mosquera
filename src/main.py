from pymongo import MongoClient
from modelo import CampanaPruebas

cliente = MongoClient ("mongodb://admin:123456@localhost:27017/?authSource=admin")
db = cliente ["MatriculaApp"]
documentos =  documentos = db ["defectos"].find().sort("semana",1)
defectos = [doc["defectos_encontrados"] for doc in documentos]

campana = CampanaPruebas(defectos)

a,b = campana.ajustar()

print("a (defectos totales estimados):", a)
print("b (velocidada la que se encuentran defectos):", b)
print("defectos sin descubrir si se libera hoy:", campana.restantes())
print("semana en que se llega al 95%:", campana.semana_95())

campana.graficar("graficas/resultado.png")