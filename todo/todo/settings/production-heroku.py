# Parse database configuration from $DATABASE_URL
import dj_database_url


DATABASES = {
'default': dj_database_url.config(default='sqlite:///db.sqlite')
}

DATABASES['default'] =  dj_database_url.config()

# Honor the 'X-Forwarded-Proto' header for request.is_secure()
SECURE_PROXY_SSL_HEADER = ('HTTP_X_FORWARDED_PROTO', 'https')

# Allow all host headers
ALLOWED_HOSTS = ['*']

# Static asset configuration
import os
BASE_DIR = os.path.abspath(os.path.join(os.path.dirname(__file__), os.path.pardir))#os.path.dirname(os.path.abspath(__file__))
STATIC_ROOT = 'staticfiles'
STATIC_URL = '/static/'

STATICFILES_DIRS = (
    os.path.join(BASE_DIR, 'static'),
)

SECRET_KEY = 'lg(sk)u*vp(3m12$+4*4q_8^-uc0v_y2wwnm5_v*_cil+n*_do'

ROOT_URLCONF = 'todo.urls'#'todo.todo.urls'