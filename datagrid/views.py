from django.shortcuts import render_to_response
from datagrid.models import People
import simplejson as json

def list(request):
    print 'OK'

    return render_to_response('index.html',locals())

def returnJSON(request):
    print "OK"
    return json.dumps(People.objects.all())

