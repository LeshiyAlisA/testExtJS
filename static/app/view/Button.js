Ext.define('AM.view.Button' ,{
    extend: 'Ext.panel.Panel',
    alias : 'widget.buttonlist',
    
    
    width: 300,
    title: 'Меню',
    layout: {
        type: 'vbox',
        align: 'stretch',
        padding: 5
    },

    items: [{
        xtype: 'button',
        text: "Новый",


        listeners: {
        click: function() {


            var win1 = Ext.create('Ext.window.Window', {
                title: 'Hello',
                height: 200,
                width: 400,
                layout: 'fit',
                height: 450,
                width: 400,
                layout: 'fit',

                items: {
                    xtype: 'addperson'
                },

                buttons: [{
                    text: 'Сохранить',
                    handler: function() {
                        Ext.Msg.alert('Сохранить','Сохранить');
                        win1.close();
                    }
                },{
                    text: 'Отмена',
                    handler: function(){
                        win1.close();

                    }

                }]

            }).show();


            }
        }
    },{
        xtype: 'splitter'
    },{
        xtype: 'button',
        text: "Изменить",

    },{
        xtype: 'splitter'   // A splitter between the two child items
    },{
        xtype: 'button',
        text: "Удалить"}],
    renderTo: Ext.getBody()      
    
});