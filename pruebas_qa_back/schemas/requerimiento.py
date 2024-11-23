# pruebas_qa_back/schemas/requerimiento.py
from pydantic import BaseModel
from typing import Optional
from datetime import datetime

class RequerimientoBase(BaseModel):
    
    numero_requerimiento: str
    nombre_requerimiento: str
    id_estado_requerimiento: int
    usuario_modifico_estado: int
    fecha_registro_requerimiento: datetime
    fecha_finalizacion_requerimiento: Optional[datetime] = None
    requerimiento_creado_por: int

class RequerimientoCreate(RequerimientoBase):
    pass

class Requerimiento(RequerimientoBase):
    id_requerimiento: int

    class Config:
        from_attributes = True
