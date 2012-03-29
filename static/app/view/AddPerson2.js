Ext.define('AM.view.AddPerson' ,{
    extend: 'Ext.form.Panel',
    alias : 'widget.addperson',
    title : 'Добавить',
    frame : true,
    bodyStyle:'padding:5px 5px 0',
    width: 350,
    fieldDefaults: {
        msgTarget: 'side',
        labelWidth: 75
    },
    defaultType: 'textfield',
    defaults: {
        anchor: '100%'
    },

    items: [{
        fieldLabel: 'Предприятие',
        name: 'company',
        allowBlank:false
    },{
        fieldLabel: 'Отдел',
        name: 'department',
        allowBlank:false
    },{
        fieldLabel: 'Табельный номер',
        name: 'tubNum',
        allowBlank:false
    },{
        fieldLabel: 'Фамилия',
        name: 'lastName',
        allowBlank:false
    },{
        fieldLabel: 'Имя',
        name: 'firstName',
        allowBlank:false
    },{
        fieldLabel: 'Отчество',
        name: 'middleName',
        allowBlank:false
    },{
        fieldLabel: 'Паспорт',
        name: 'passport',
        allowBlank:false
    },{
        fieldLabel: 'Серия и номер паспорта',
        name: 'numberPassport',
        allowBlank:false
    },{
        fieldLabel: 'Дата выдачи паспорта',
        xtype : 'datefield',
        name: 'datePassport',
        allowBlank:false
    },{
        fieldLabel: 'Адрес',
        name: 'address',
        allowBlank:false
    },{
        fieldLabel: 'Номер телефона',
        name: 'phone',
        allowBlank:false
    }],

    buttons: [{
        text: 'Сохранить',
        handler: function() {
            Ext.Msg.alert('Сохранить','Сохранить');
        }
    },{
        text: 'Отмена',
        handler: function(){
            Ext.Msg.alert('...',this.up.alias);

        }

    }]
});

