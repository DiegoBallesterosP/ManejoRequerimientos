# pruebas_qa_back/routers/requerimientos.py
from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from ..database import get_db
from ..models import Requerimiento
from ..schemas.requerimiento import RequerimientoCreate, Requerimiento
from ..services.manejo_requerimiento.requerimientos_service import create_requerimiento, update_requerimiento, delete_requerimiento

router = APIRouter()

#Encargado de registrar los requerimientos
@router.post("/createrequerimientos/", response_model=Requerimiento)
def create_requerimiento_endpoint(requerimiento: RequerimientoCreate, db: Session = Depends(get_db)):
    try:
        return create_requerimiento(db, requerimiento)
    except ValueError as e:
        raise HTTPException(status_code=400, detail=str(e))

@router.put("/updaterequerimientos/{id}")
def update_requerimiento_endpoint(id: int, requerimiento_update: RequerimientoCreate, db: Session = Depends(get_db)):
    try:
        # Llamar al método que edita el requerimiento
        requerimiento_actualizado = update_requerimiento(db, id, requerimiento_update)
        return requerimiento_actualizado
    except ValueError as e:
        raise HTTPException(status_code=404, detail=str(e))

@router.delete("/deleterequerimientos/{id}")
def delete_requerimiento_endpoint(id: int, db: Session = Depends(get_db)):
    try:
        return delete_requerimiento(db, id)
    except ValueError as e:
        raise HTTPException(status_code=404, detail=str(e))


