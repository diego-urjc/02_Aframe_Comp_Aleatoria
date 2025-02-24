AFRAME.registerComponent('creador', {
    schema: {
        max: { type: 'number', default: 10 },   // Número máximo de objetos a crear
        eliminar: { type: 'number', default: 5 } // Cuántos objetos eliminar después de crearlos
    },
    
    init: function () {
        let self = this;
        this.contador = 0; 
        this.entidades = []; 

        this.intervalo = setInterval(function () {
            if (self.contador >= self.data.max) {
                console.log('Máximo alcanzado, deteniendo creación');
                clearInterval(self.intervalo);
                return; 
            }

            // Crear nueva entidad
            let entidad = document.createElement('a-entity');
            entidad.setAttribute('objeto', 'esfera');  
            entidad.setAttribute('modulador', 'posicion');

            // Posición aleatoria
            let x = (Math.random() - 0.5) * 6;
            let y = Math.random() * 3 + 1;
            let z = (Math.random() - 0.5) * 6;
            entidad.setAttribute('position', { x: x, y: y, z: z });

            // Agregar la entidad a la escena
            self.el.appendChild(entidad);
            self.entidades.push(entidad); // Guardar referencia de la entidad

            self.contador++;

            if (self.entidades.length > self.data.eliminar) {
                let entidadEliminar = self.entidades.shift(); // Elimina el primer elemento del array
                entidadEliminar.parentNode.removeChild(entidadEliminar);
                console.log('Entidad eliminada');
            }

        }, 1000); // un segundo
    }
});
