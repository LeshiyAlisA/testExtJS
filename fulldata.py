# coding=utf-8
__author__ = 'leshiy'

import psycopg2
import random

conn = psycopg2.connect('host = localhost dbname = mydb user = postgres password = 1297536')

cur = conn.cursor()

last_name = ('Иванов', 'Васильев', 'Петров', 'Смирнов', 'Михайлов', 'Фёдоров', 'Соколов', 'Попов', 'Андреев', 'Яковлев')
first_name = ('Александр', 'Алексей', 'Сергей', 'Андрей', 'Дмитрий', 'Михаил', 'Павел', 'Илья', 'Константин', 'Виктор')
middle_name = ('Александрович', 'Алексеевич', 'Сергеевич', 'Андреевич', 'Дмитриевич', 'Михаилович', 'Павлович', 'Ильич',
               'Константинович', 'Викторович')

for i in range(1000):
    cur.execute(
        'INSERT INTO datagrid_people ("company", "department", "tubNum", "lastName", "firstName", "middleName", "passport", "numberPassport", "datePassport", "address", "phone") VALUES (%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s)'
        , ('Компания', 'Отдел', str(i), last_name[random.randrange(10)], first_name[random.randrange(10)],
           middle_name[random.randrange(10)], 'паспорт', 'номер паспорта', 'дата выдачи', 'адрес', 'телефон'))
    #cur.execute('INSERT INTO datagrid_people ("company", "department", "tubNum", "lastName", "firstName", "middleName", "passport", "numberPassport", "datePassport", "address", "phone") VALUES (%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s)',('Компания','Отдел',str(i),'last_name','first_name','middle_name','паспорт','номер паспорта','дата выдачи','адрес','телефон'))

conn.commit()
cur.close()
conn.close()