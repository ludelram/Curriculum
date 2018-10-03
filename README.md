---
layout: default
name: Curriculum Vitae
permalink: /project/CVitae/
---

<h2 class="sub">Proyecto\Curriculum Vitae</h2>  

> Plantilla [jekyll](https://jekyllrb.com/) diseñada para alojar el Curriculum Vitae en el hosting de [Github Pages](https://pages.github.com/).
 
> Ha sido elaborado en base a la plantilla previamente desarrollada por [agusmakmun.](https://github.com/agusmakmun/agusmakmun.github.io)

### Demo
* [https://ludelram.github.io](https://ludelram.github.io)

### Características

* Uso de [Font awesome](https://fontawesome.com/)
* Responsive [Bootstrap](http://getbootstrap.com/) Layout
* Sticky headers vía CSS
* Presentación de datos a partir de archivos .json mediante Liquid ( sistema de templates usado en [jekyll](https://jekyllrb.com/) )
* Filtrado de Cursos y Proyectos por etiquetas mediante [jQuery](https://jquery.com/)

### Screenshot 1

><img src="/static/img/Captura(iPad).png" title="Inicio" width="100%"/>

### Screenshot 2
><img src="/static/img/Captura(Galaxy S5).png" title="Baja resolución" width="320px"/>

### Instalación & Configuración

1. Hacer un Fork del repositorio
2. Editar la configuración del site en el fichero `_config.yml`
3. Editar proyectos, cursos, estudios, etiquetas y experiencia en los ficheros `_data/projects.json`, `_data/cursos.json`, `_data/estudios.json`, `_data/etiquetas.json` y `_data/experiencia.json` respectivamente.


### Añadir un post para un proyecto

* Dentro del directorio `_project/`, crear un archivo `nombre-proyecto.md`
* Al archivo `_data/projects.json` añadir el campo `"url":"project/nombre-link-proyecto/"` en el registro del objeto proyecto correspondiente
* Utilizar sintaxis markdown para elaborar el contenido.
* Ejemplo:

```
---
layout: default                          # (require) 
name: "Nombre del Proyecto"              # (require) 
permalink: /project/nombre-link-proyecto/      # (require) 
---

# El contenido con sintaxis markdown aquí...
```

