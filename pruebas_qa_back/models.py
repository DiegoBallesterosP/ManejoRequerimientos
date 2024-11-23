# pruebas_qa_back/models.py
from sqlalchemy import Column, Integer, String, ForeignKey, TIMESTAMP
from sqlalchemy.orm import relationship
from .database import Base

class Desarrollador(Base):
    __tablename__ = 'desarrolladores'

    id_desarrollador = Column(Integer, primary_key=True, index=True)
    nombre_desarrollador = Column(String(100), nullable=False)
    estado_desarrollador = Column(Integer, nullable=False)
    correo_desarrollador = Column(String(150), nullable=False)

class Tester(Base):
    __tablename__ = 'tester'

    id_tester = Column(Integer, primary_key=True, index=True)
    nombre_tester = Column(String(100), nullable=False)
    estado_tester = Column(Integer, nullable=False)
    correo_tester = Column(String(150), nullable=False)

class EstadoRequerimiento(Base):
    __tablename__ = 'estado_requerimiento'

    id_estado_requerimiento = Column(Integer, primary_key=True, index=True)
    nombre_estado = Column(String(80), nullable=False)
    estado_visible = Column(Integer, nullable=False)

class Equipo(Base):
    __tablename__ = 'equipo'

    id_equipo = Column(Integer, primary_key=True, index=True)
    nombre_equipo = Column(String(100), nullable=False)
    estado_equipo = Column(Integer, nullable=False)

class Requerimiento(Base):
    __tablename__ = 'requerimiento'

    id_requerimiento = Column(Integer, primary_key=True, index=True)
    numero_requerimiento = Column(String(100), nullable=False)
    nombre_requerimiento = Column(String(1000), nullable=False)
    id_estado_requerimiento = Column(Integer, ForeignKey('estado_requerimiento.id_estado_requerimiento'), nullable=False)
    usuario_modifico_estado = Column(Integer, nullable=False)
    fecha_registro_requerimiento = Column(TIMESTAMP, nullable=False)
    fecha_finalizacion_requerimiento = Column(TIMESTAMP, nullable=True)
    requerimiento_creado_por = Column(Integer, nullable=False)

    estado = relationship('EstadoRequerimiento')

class DetalleRequerimiento(Base):
    __tablename__ = 'detalle_requerimiento'

    id_detalle_requerimiento = Column(Integer, primary_key=True, index=True)
    id_requerimiento = Column(Integer, ForeignKey('requerimiento.id_requerimiento'), nullable=False)
    id_desarrollador = Column(Integer, ForeignKey('desarrolladores.id_desarrollador'), nullable=True)
    id_tester = Column(Integer, ForeignKey('tester.id_tester'), nullable=True)
    id_equipo = Column(Integer, ForeignKey('equipo.id_equipo'), nullable=False)
    id_estado_requerimiento = Column(Integer, ForeignKey('estado_requerimiento.id_estado_requerimiento'), nullable=False)
    ruta_evidencia = Column(String(1500), nullable=True)
    observacion = Column(String(4000), nullable=False)
    fecha_modificacion = Column(TIMESTAMP, nullable=False)

    requerimiento = relationship('Requerimiento')
    desarrollador = relationship('Desarrollador')
    tester = relationship('Tester')
    equipo = relationship('Equipo')
    estado = relationship('EstadoRequerimiento')
