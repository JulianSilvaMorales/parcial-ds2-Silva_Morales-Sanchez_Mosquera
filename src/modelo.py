import numpy as np
from scipy.optimize import curve_fit
import matplotlib.pyplot as plt

class CampanaPruebas:

            def __init__(self, defectos):
                    self.defectos = defectos
                    self.semanas = np.arange(1, len(defectos)+1)
                    self.acumulados = np.cumsum(defectos)
                    # Aqui se guardan los paraetros ya ajustados
                    self.a = None
                    self.b = None
                    
                    
            def goel(self, t, a, b):
                return a * (1 - np.exp(-b * t))
                
            def ajustar(self):
                semilla = [max(self.acumulados) * 1.5, 0.1]
                parametros, _ = curve_fit(self.goel, self.semanas, self.acumulados, p0=semilla,
                                        maxfev=50000)
                self.a, self.b = parametros
                
                return (self.a, self.b)
            
            def restantes(self):
                return ((self.a-(self.goel(self.semanas[-1], self.a, self.b))))
            
            def semana_95(self):
                return(np.log(20)/self.b)
            
            def graficar(self, ruta):
            
                t = np.linspace(0, 25, 100)
                
                plt.figure()
                
                plt.scatter(self.semanas, self.acumulados, label="acumuladores reales")
                
                plt.plot (t, self.goel(t, self.a, self.b), label="goel-Okumoto")
                
                plt.title ("Defectos acumulados")
                
                plt.xlabel("semana")
                plt.ylabel("defectos acumulados")
                plt.legend()
                plt.savefig(ruta)
                plt.show()