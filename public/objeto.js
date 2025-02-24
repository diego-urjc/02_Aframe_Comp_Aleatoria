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

            let props;

            if (data == 'color') {
                let color_aleat = '#' + Math.floor(Math.random() * 0x1000000)
                    .toString(16).padStart(6, '0');
                props = {
                    property: 'material.color',
                    to: color_aleat,
                    dur: 3000
                };
                self.hijo.setAttribute('animation', props);
            }

            if (data == 'tamano') {
                let scale_aleat = Math.random() * 1.5 + 0.5; // Escala entre 0.5 y 2
                props = {
                    property: 'geometry.radius', // Cambia esto si no es una esfera
                    to: scale_aleat,
                    dur: 3000
                };
                self.hijo.setAttribute('animation', props);
            }

            if (data == 'posicion') {
                let x = (Math.random() - 0.5) * 4; // Rango entre -2 y 3
                let y = (Math.random() - 0.5) * 4 + 1; // Rango entre -1 y 4
                let z = (Math.random() - 0.5) * 4 - 3; // Rango entre -5 y -1
                
                self.hijo.setAttribute('animation__x', {
                    property: 'position.x',
                    to: x,
                    dur: 30
                });

                self.hijo.setAttribute('animation__y', {
                    property: 'position.y',
                    to: y,
                    dur: 30
                });

                self.hijo.setAttribute('animation__z', {
                    property: 'position.z',
                    to: z,
                    dur: 3000
                });
            }
            
        }, 3000);
    }
});



