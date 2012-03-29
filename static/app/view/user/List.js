Ext.define('AM.view.user.List' ,{
    extend: 'Ext.grid.Panel',
    alias : 'widget.userlist',
    title : 'All Users',
    dockedItems: [{
        xtype: 'pagingtoolbar',
        store: 'Users',   // same store GridPanel is using
        dock: 'bottom',
        displayInfo: true
    }],
    store: 'Users',

    initComponent: function() {

        this.columns = [
            {header: 'Фамилия', dataIndex: 'lastName', flex: 1},
            {header: 'Имя',  dataIndex: 'firstName',  flex: 1},
            {header: 'Отчество', dataIndex: 'middleName', flex: 1},
            {header: 'Организация', dataIndex: 'company', flex: 1},
            {header: 'Подразделение', dataIndex: 'department', flex: 1},
            {header: 'Документ', dataIndex: 'passport', flex: 1},
            {header: 'Номер документа', dataIndex: 'numberPassport', flex: 1},
            {header: 'Дата выдачи документа', dataIndex: 'datePassport', flex: 1},
            {header: 'Адрес', dataIndex: 'address', flex: 1},
            {header: 'Телефон', dataIndex: 'phone', flex: 1}
        ];

        this.callParent(arguments);
    }
});