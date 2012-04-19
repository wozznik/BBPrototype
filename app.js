//<debug>
Ext.Loader.setPath({
    'Ext': 'sdk/src',
    'SliderMenu': 'slider_menu/'
});
//</debug>

Ext.application({
    name: 'BBPrototype',

    requires: [
        'Ext.MessageBox'
    ],

    views: [
        'BBPrototype.view.ButtonsDemo',
        'BBPrototype.view.CarrouselDemo',
        'SliderMenu.view.SliderMenuContainer',
    ],

    controllers:[
        'SliderMenu.controller.SliderMenuController',
    ],

    models:[
        'SliderMenu.model.MenuOption',
    ],

    stores:[
        'SliderMenu.store.MenuOptions',
    ],

    icon: {
        57: 'resources/icons/Icon.png',
        72: 'resources/icons/Icon~ipad.png',
        114: 'resources/icons/Icon@2x.png',
        144: 'resources/icons/Icon~ipad@2x.png'
    },
    
    phoneStartupScreen: 'resources/loading/Homescreen.jpg',
    tabletStartupScreen: 'resources/loading/Homescreen~ipad.jpg',

    launch: function() {
        // Destroy the #appLoadingIndicator element
        Ext.fly('appLoadingIndicator').destroy();

        // Initialize the main view
        var sliderMenu = Ext.create('SliderMenu.view.SliderMenuContainer');

        sliderMenu.setTitle('Beta Beers Options');
        Ext.Viewport.add(sliderMenu);
    },

    onUpdated: function() {
        Ext.Msg.confirm(
            "Application Update",
            "This application has just successfully been updated to the latest version. Reload now?",
            function() {
                window.location.reload();
            }
        );
    }
});
