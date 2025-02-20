AFRAME.registerComponent('objeto', {
    schema: {type: 'string', default: 'cubo'},
    init: function () {
        console.log('objeto (init)');

        this.primitives = {'cubo': 'box', 'cilindro': 'cylinder', 'esfera': 'sphere'};
        let primitive = this.primitives[this.data];      

        this.hijo = document.createElement('a-entity');
        this.hijo.setAttribute('geometry', {primitive: primitive});
        this.hijo.setAttribute('material', {});
        this.el.appendChild(this.hijo);
    },

    update: function () {
        console.log('objeto (update)');
        let primitive = this.primitives[this.data];      
        this.hijo.setAttribute('geometry', {primitive: primitive});
    }

    
});


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
                props = {primitive: primitive, radius: scale_aleat};
            }

            if (data == 'posición') {
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
