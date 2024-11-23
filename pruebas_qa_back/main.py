# pruebas_qa_back/main.py
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from .database import Base, engine
from .routers import requerimientos

app = FastAPI()

# Agregar soporte para CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Considera especificar los orígenes permitidos en producción
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Crear las tablas en la base de datos
Base.metadata.create_all(bind=engine)

# Incluir el enrutador de requerimientos
app.include_router(requerimientos.router, prefix="/api", tags=["createrequerimientos"])
app.include_router(requerimientos.router, prefix="/api", tags=["/updaterequerimientos/{id}"])
app.include_router(requerimientos.router, prefix="/api", tags=["/deleterequerimientos/{id}"])


@app.get("/")
def read_root():
    return {"Hello": "World"}
