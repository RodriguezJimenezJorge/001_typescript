Primero, para crear el repositorio usamos el comando 'git init'.

Después usamos 'tsc --init' para crear el proyecto de typescript.

En el fichero tsconfig.json debemos descomentar la línea '"outDir": "./dist",'. De esta forma los ejercicios que hagamos
se copiarán a la carpeta 'dist'.

Debemos crear el archivo '.gitignore' y dentro de él escribir 'dist' para que esta carpeta no se suba a GitHub.

Con el siguiente comando añadimos git remote add origin https://github.com/RodriguezJimenezJorge/001_typescript.git

Cada vez que queramos actualizar el repositorio debemos ejecutar los siguientes tres comandos:
git add .
git commit -m "Mi primer commit"
git push -u origin master

La primera vez que queramos hacer un commit además tendremos que ejecutar el comando 'git branch -M master'

Para compilar los ejercicios que hagamos tendremos que usar el comando 'tsc'.
