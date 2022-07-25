# Dev enviroment

Copy images folder into project
 ```
 cp <path_to_images_folder> <path_to_git_local_repository>\<project_name>\images
            (Origin path)   (destiny path)

 cp "C:\Users\Administrador\Desktop\FullStack Python\ProyectoEducativo\images" "C:\Users\Administrador\DesarrolloFullStackPython"
 ```

Modify src/app.py line 9  Adding login Data Base
  ```
  app.config['SQLALCHEMY_DATABASE_URI']='mysql+pymysql://<Database_user>:<Database_password>@<Database_host>/<Database_name>' 

  app.config['SQLALCHEMY_DATABASE_URI']='mysql+pymysql://sql10511805:<password>@sql10.freesqldatabase.com/sql10511805' 
  ```
  
Run app, write in terminal:
  ```
  cd <path_to_git_local_repository>\<project_name>
  PS <path_to_git_local_repository>\<project_name> > python src/<python_file>

  cd C:\Users\Administrador\DesarrolloFullStackPython  
  PS C:\Users\Administrador\DesarrolloFullStackPython> python src/app.py
  ```
Open home.html
On Visual Studio Code, home.html: Right click >> Open live server

