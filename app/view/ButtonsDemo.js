/**
 * @class BBPrototype.view.ButtonsDemo
 * @extends Ext.Panel
 * Buttons demo
 */
Ext.define('BBPrototype.view.ButtonsDemo', {
    extend: 'Ext.Panel',
    xtype: 'buttonsDemo',
	
    requires: [

    ],
	
    config: {
    	title: 'Buttons',
    	
        defaults: {
            style: 'margin:10px',
        },

        items: [
            {
                html: 'Buttons panel',
                style: 'text-align: center',
            },

            {
                xtype: 'button',
                text: 'Button 1',
                ui: 'secondary',
                action: 'btnAction1'
            },
            {
                xtype: 'button',
                text: 'Button 2',
                action: 'btnAction2',
                ui: 'back'
            },
            {
                xtype: 'button',
                text: 'Button 3',
                action: 'btnAction3',
                ui: 'forward',
            },
            {
                xtype: 'button',
                text: 'Button 4',
                action: 'btnAction4',
                ui: 'confirm',
            },
        ]
    }

});