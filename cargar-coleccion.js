fetch('./coleccion.yaml')
            .then(response => response.text())
            .then(yamlText => {
                const data = jsyaml.load(yamlText);
                const container = document.querySelector('#divColeccion');
                container.innerHTML = '';
                data.coleccion.articulos.forEach(item => {
                    const itemDiv = document.createElement('div');
                    itemDiv.innerHTML = `<h2>${item.codigo}</h2><p>${item.titulo}</p>`;
                    // agregar autorxs
                    item.autorxs.forEach(autor => {
                        itemDiv.innerHTML += `<p>${autor} </p>`;
                    });
                    // agregar editoriales
                    item.editoriales.forEach(editorial => {
                        itemDiv.innerHTML += `<p>${editorial} </p>`;
                    });
                    container.appendChild(itemDiv);
                    // agregar agno
                    itemDiv.innerHTML += `<p>${item.agno} </p>`;
                    // agregar estado
                    itemDiv.innerHTML += `<p>${item.estado} </p>`;
                });
            })
            .catch(error => console.error('Error al cargar el YAML:', error));