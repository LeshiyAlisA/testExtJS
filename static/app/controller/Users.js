Ext.define('AM.controller.Users', {
    extend: 'Ext.app.Controller',
    views: ['user.List'],
    stores: ['Users'],
    models: ['User']
});