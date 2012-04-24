/**
 * @class BBPrototype.view.CarrouselDemo
 * @extends Ext.Panel
 * Carrousel demo
 */
Ext.define('BBPrototype.view.ListDemo', {
    extend: 'Ext.List',
    xtype: 'listDemo',
	
    requires: [

    ],
	
    config: {
    	title: 'List',

        store: {
            fields: ['name'],
            data: [
                {name: 'Cowper'},
                {name: 'Everett'},
                {name: 'University'},
                {name: 'Forest'}
            ]
        },

        itemTpl: '{name}'

    },
});