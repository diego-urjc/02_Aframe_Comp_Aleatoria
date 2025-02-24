AFRAME.registerComponent('modulador', {
    dependencies: ['objeto'],
    schema: {type: 'string', default: 'color'},
    init: function () {
        console.log('modulador (init)');
        let self = this;
        let data = this.data;

        this.hijo = this.el.querySelector('a-entity');

        setInterval( function () {    
            console.log('modulador (interval)');
            let componente, props;

            if (data == 'color') {
                componente = 'material';
                let color_aleat = '#' + Math.floor(Math.random() * 0x1000000)
                    .toString(16).padStart(6, '0');
                props = {color: color_aleat};
            }

            if (data == 'tamano') {
                componente = 'geometry';
                let scale_aleat = Math.random() * 1.5 + 0.5; // Escala entre 0.5 y 2
                let primitive = self.hijo.getAttribute('geometry').primitive; 
                props = {primitive: primitive, height: scale_aleat, radius: scale_aleat};
            }

            if (data == 'posicion') {
                componente = 'position';
                let x = (Math.random() - 0.5) * 4; // Rango entre -2 y 2
                let y = (Math.random() - 0.5) * 4 + 1; // Rango entre -1 y 3
                let z = (Math.random() - 0.5) * 4 - 3; // Rango entre -5 y -1
                props = {x: x, y: y, z: z};
            }
            
            if (componente && props) {
                self.hijo.setAttribute(componente, props);
            }
        }, 3000);
    }
});
