import multiprocessing
import os

from flask_migrate import upgrade
from waitress import serve
from rdltr import create_app


def number_of_workers():
    return (multiprocessing.cpu_count() * 2) + 1


if not os.getenv('RDLTR_SETTINGS'):
    os.environ['RDLTR_SETTINGS'] = 'rdltr.config.ProductionConfig'
HOST = os.getenv('RDLTR_HOST', '0.0.0.0')
PORT = os.getenv('RDLTR_PORT', '5000')
WORKERS = os.getenv('RDLTR_WORKERS', number_of_workers())
BASEDIR = os.path.abspath(os.path.dirname(__file__))
app = create_app()


def upgrade_db():
    with app.app_context():
        upgrade(directory=BASEDIR + '/migrations')


def main():
    serve(app, listen=f"{HOST}:{PORT}", threads=WORKERS)


if __name__ == '__main__':
    main()
