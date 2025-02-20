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

