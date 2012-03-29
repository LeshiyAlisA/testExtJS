Ext.application({

    name: 'AM',
    appFolder: '/static/app',

    controllers: [
        'Buttons',
        'Users',
        'AddPeople'],

    launch: function() {
        Ext.create('Ext.container.Viewport', {
            layout: 'column',
            items: [{
                xtype: 'userlist',
                width: 1024,
                height:'100%'
            },{ 
                xtype: 'buttonlist',
                width: 200,
                height:'100%'
            }]
        });    
    }
});