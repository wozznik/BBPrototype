/**
 * @class BBPrototype.controller.ButtonsDemoController
 * @extends Ext.app.Controller
 * Description
 */
Ext.define('BBPrototype.controller.ButtonsDemoController', {
    extend: 'Ext.app.Controller',
    
	
    requires: [
    ],
	
    config: {
    	refs: {
    		btn1: 'button[action=btnAction1]',
    		btn2: 'button[action=btnAction2]',
            list: 'listDemo',
    	},

    	control: {
    		btn1: {
    			tap: 'onTapBtn1',
    		},
    		btn2: {
    			tap: 'onTapBtn2',
    		},
            list:{
                select: 'onSelectListItem',
            }
    	}
    
    },

    onTapBtn1: function() {
    	console.log('Btn 1 action event');
    },

    onTapBtn2: function() {
    	console.log('Btn 2 action event');
    },

    onSelectListItem: function(list, record, opts){
        var main = list.up('maincard');

        var newView = Ext.create('Ext.Panel',{
            html: 'You selected: '+record.data.name,
            title: record.data.name,
        });

        main.push(newView);
    }
});