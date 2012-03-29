from django.conf.urls.defaults import patterns, include, url
from datagrid.views import list,returnJSON

# Uncomment the next two lines to enable the admin:
from django.contrib import admin
admin.autodiscover()

urlpatterns = patterns('',
    # Examples:
    # url(r'^$', 'testExtJS.views.home', name='home'),
    # url(r'^testExtJS/', include('testExtJS.foo.urls')),

    # Uncomment the admin/doc line below to enable admin documentation:
    url(r'^admin/doc/', include('django.contrib.admindocs.urls')),

    # Uncomment the next line to enable the admin:

)
