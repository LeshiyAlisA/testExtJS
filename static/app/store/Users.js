Ext.define('AM.store.Users', {
    extend: 'Ext.data.Store',
    model: 'AM.model.User',
    pageSize: 200,
    autoLoad: true,
    proxy: {
        type: 'ajax',
        url: 'http://localhost:8000/api/tasks',
        reader: {
            type: 'json',
            root: 'data'
        }
    }
});