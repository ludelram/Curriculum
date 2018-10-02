
<h2 class="sub">Proyecto\Curriculum Vitae</h2>  

> Plantilla [jekyll]([https://jekyllrb.com/]) diseñada para la publicación del Curriculum Vitae en el host de [Github Pages](https://pages.github.com/).
 
> Ha sido elaborado en base a la plantilla previamente desarrollada por [agusmakmun.](https://github.com/agusmakmun/agusmakmun.github.io)

### Demo
* [https://ludelram.github.io](https://ludelram.github.io)

### Características

* Uso de Font awesome
* Responsive Bootstrap Layout
* Composición de Sticky headers vía CSS
* Presentación de datos a partir de archivos .json mediante Liquid ( sistema de templates usado en [jekyll](https://jekyllrb.com/) )
* Filtrado de Cursos y Proyectos por etiquetas mediante jQuery

### Screenshot 1

><img src="/static/img/Captura(iPad).png" title="Inicio" width="100%"/>

### Screenshot 2
><img src="/static/img/Captura(Galaxy S5).png" title="Baja resolución" width="50%"/>

### Instalación & Configuración

1. Hacer un Fork del repositorio
2. Editar la configuración del site en el fichero `_config.yml`
3. Editar proyectos, cursos, estudios, etiquetas y experiencia en los ficheros `_data/projects.json`, `_data/cursos.json`, `_data/estudios.json`, `_data/etiquetas.json` y `_data/experiencia.json` .


### Cómo usar la plantilla?

**Añadir un nuevo proyecto**

* Dentro del directorio `_project/`, crear un archivo `nombre-proyecto.md`
* en el archivo `_data/projects.json` añadir el campo `"url":"project/nombre-proyecto/"`
* Utilizar sintaxis markdown para elaborar el contenido.
* ejemplo:

```
---
layout: default                          # (require) default post layout
name: "Nombre del Proyecto"              # (require) a string title
---

# El contenido del proyecto con sintaxis markdown aquí...
```

