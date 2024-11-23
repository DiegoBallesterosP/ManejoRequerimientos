from sqlalchemy.orm import Session
from ...models import Requerimiento
from ...schemas.requerimiento import RequerimientoCreate

# Encargado de crear requerimientos
def create_requerimiento(db: Session, requerimiento: RequerimientoCreate):
    validar_numero_requerimiento_unico(db, requerimiento.numero_requerimiento)

    db_requerimiento = Requerimiento(**requerimiento.model_dump())
    db.add(db_requerimiento)
    db.commit()
    db.refresh(db_requerimiento)  # Esto asegura que `id` y otros campos generados se obtienen del objeto.
    return db_requerimiento

def validar_numero_requerimiento_unico(db: Session, numero_requerimiento: str):
    existeRequerimiento = db.query(Requerimiento).filter(Requerimiento.numero_requerimiento == numero_requerimiento).first()
    if existeRequerimiento:
        raise ValueError(f"El número de requerimiento {numero_requerimiento} ya existe")
    return True

# Encargado de actualizar requerimientos
def update_requerimiento(db: Session, id_requerimiento: int, requerimiento_update: RequerimientoCreate):
    db_requerimiento = db.query(Requerimiento).filter(Requerimiento.id_requerimiento == id_requerimiento).first()
    
    if not db_requerimiento:
         raise ValueError(f"El requerimiento con el id {id_requerimiento} no fue encontrado")
     
    for key, value in requerimiento_update.model_dump().items():
        setattr(db_requerimiento, key, value)

    db.commit()
    db.refresh(db_requerimiento)
    return db_requerimiento

# Encargado de eliminar requerimientos
def delete_requerimiento(db:Session, id_requerimiento: int):
    db_requerimiento = db.query(Requerimiento).filter(Requerimiento.id_estado_requerimiento == id_requerimiento).first()

    if not db_requerimiento:
        raise ValueError(f"El requerimiento con el id {id_requerimiento} no fue encontrado")
    
    db.delete()
    db.commit()

    return {"message": f"El requerimiento con id {id_requerimiento} eliminado satisfactoriamente"}

