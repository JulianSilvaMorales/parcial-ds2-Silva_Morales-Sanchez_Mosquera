import os
import sys
sys.path.insert(0, os.path.join(os.path.dirname(__file__), "..", "src"))
from modelo import CampanaPruebas

defectos = [28, 23, 22, 17, 16, 12, 12, 9]

def test_goel_en_cero():
    campana = CampanaPruebas (defectos)
    assert campana.goel(0, 200, 0.15) == 0
    
    
def test_acumulados():
    campana = CampanaPruebas (defectos)
    assert campana.acumulados[-1] == 139