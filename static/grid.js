/*

 This file is part of Ext JS 4

 Copyright (c) 2011 Sencha Inc

 Contact:  http://www.sencha.com/contact

 Commercial Usage
 Licensees holding valid commercial licenses may use this file in accordance with the Commercial Software License Agreement provided with the Software or, alternatively, in accordance with the terms contained in a written agreement between you and Sencha.

 If you are unsure which license is appropriate for your use, please contact the sales department at http://www.sencha.com/contact.

 */
Ext.Loader.setConfig({enabled: true});

Ext.Loader.setPath('Ext.ux', '../ux/');
Ext.require([
    'Ext.grid.*',
    'Ext.data.*',
    'Ext.util.*',
    'Ext.grid.PagingScroller'
]);

Ext.onReady(function(){
    Ext.define('ForumThread', {
        extend: 'Ext.data.Model',
        fields: [
            'first_name', 'second_name']
    });

    // create the Data Store
    var store = Ext.create('Ext.data.Store', {
        id: 'store',
        pageSize: 200,
        model: 'ForumThread',
        // allow the grid to interact with the paging scroller by buffering
        buffered: true,

        proxy: {
            type: 'ajax',
            api: {
                read: 'http://localhost:8000/api/tasks'
            },
            reader: {
                type: 'json',
                root: 'data',
                successProperty: 'success',
                totalProperty: 'total'
            }
        }
    });

    var grid = Ext.create('Ext.grid.Panel', {
        width: 700,
        height: 500,
        title: 'ExtJS.com - Browse Forums',
        store: store,
        verticalScrollerType: 'paginggridscroller',
        loadMask: true,
        disableSelection: true,
        invalidateScrollerOnRefresh: false,
        viewConfig: {
            trackOver: false
        },
        // grid columns
        columns:[{
            xtype: 'rownumberer',
            width: 70,
            sortable: false
        },{
            text: "first_name",
            dataIndex: 'first_name',
            width: 200
        },{
            text: "second_name",
            dataIndex: 'second_name',
            width: 200
        }],
        renderTo: Ext.getBody()
    });

    // trigger the data store load
    store.guaranteeRange(0, 199);
});


