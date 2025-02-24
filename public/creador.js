AFRAME.registerComponent('creador', {
    schema: { max: { type: 'number', default: 10 } },

    init: function () {
        let self = this; 
        let contador = 0;

        let intervalo = setInterval(function () {
            if (contador >= self.data.max) { 
                console.log('Máximo alcanzado, deteniendo creación.');
                clearInterval(intervalo);
                return;
            }
            // nueva entidad
            let entidad = document.createElement('a-entity');
            entidad.setAttribute('objeto', 'esfera');  // Añadir el componente objeto
            entidad.setAttribute('modulador', 'posicion');  // Añadir el componente modulador

            // Posición aleatoria en la escena
            let posX = (Math.random() - 0.5) * 10; // Rango -5 a 5
            let posY = Math.random() * 3 + 1; // Rango 1 a 4
            let posZ = (Math.random() - 0.5) * 10; // Rango -5 a 5
            entidad.setAttribute('position', `${posX} ${posY} ${posZ}`);

            // Agregar la entidad a la escena
            self.el.appendChild(entidad);

            contador++; // Incrementar el contador
   
        }, 1000);
    }
});
