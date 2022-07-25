from flask import Flask ,jsonify,request
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy   
from flask_marshmallow import Marshmallow

app=Flask(__name__)
CORS(app)

app.config['SQLALCHEMY_DATABASE_URI']='mysql+pymysql://sql10511805:<password>@sql10.freesqldatabase.com/sql10511805'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS']=False
db= SQLAlchemy(app)
ma=Marshmallow(app)


class Curso(db.Model):                             
    id=db.Column(db.Integer, primary_key=True)   
    imagen=db.Column(db.String(300))
    nombre=db.Column(db.String(50))
    descripcion=db.Column(db.String(300))
    nivel=db.Column(db.String(10))
    duracion=db.Column(db.String(30))
    inicio=db.Column(db.String(10))             
    dias_horarios=db.Column(db.String(50))
    precio=db.Column(db.Integer)

    def __init__(self,imagen,nombre,descripcion,nivel,duracion,inicio,dias_horarios,precio):   
        self.imagen=imagen
        self.nombre=nombre    
        self.descripcion=descripcion
        self.nivel=nivel
        self.duracion=duracion
        self.inicio=inicio
        self.dias_horarios=dias_horarios                        
        self.precio=precio

db.create_all()  


class CursoSchema(ma.Schema):
    class Meta:                             
        fields=('id','imagen','nombre','descripcion','nivel','duracion','inicio','dias_horarios','precio')
curso_schema=CursoSchema()            
cursos_schema=CursoSchema(many=True)  



@app.route('/cursos',methods=['GET'])
def get_Cursos():
    all_cursos=Curso.query.all()           
    result=cursos_schema.dump(all_cursos)  
    return jsonify(result)                       


@app.route('/cursos/<id>',methods=['GET'])     
def get_curso(id):
    curso=Curso.query.get(id)
    return curso_schema.jsonify(curso)

@app.route('/curso/<id>',methods=['DELETE']) 
def delete_curso(id):
    curso=Curso.query.get(id)
    db.session.delete(curso)
    db.session.commit()
    return curso_schema.jsonify(curso)

@app.route('/cursos', methods=['POST'])   
def create_curso():
    print(request.json)     
    imagen=request.json['imagen']                 
    nombre=request.json['nombre']
    descripcion=request.json['descripcion']
    nivel=request.json['nivel']
    duracion=request.json['duracion']
    inicio=request.json['inicio']
    dias_horarios=request.json['dias_horarios']
    precio=request.json['precio']
    new_curso=Curso(imagen,nombre,descripcion,nivel,duracion,inicio,dias_horarios,precio)
    db.session.add(new_curso)
    db.session.commit()
    return curso_schema.jsonify(new_curso)

@app.route('/cursos/<id>' ,methods=['PUT'])  
def update_curso(id):
    curso=Curso.query.get(id)
    imagen=request.json['imagen']
    nombre=request.json['nombre']
    descripcion=request.json['descripcion']
    nivel=request.json['nivel']
    duracion=request.json['duracion']
    inicio=request.json['inicio']
    dias_horarios=request.json['dias_horarios']
    precio=request.json['precio']
    curso.imagen=imagen
    curso.nombre=nombre
    curso.descripcion=descripcion
    curso.nivel=nivel
    curso.duracion=duracion
    curso.inicio=inicio
    curso.dias_horarios=dias_horarios
    curso.precio=precio
    db.session.commit()
    return curso_schema.jsonify(curso)



if __name__=='__main__':  
    app.run(debug=True, port=5000)  

