import time

from django.db import connection
from django.db.utils import OperationalError
from django.core.management.base import BaseCommand


class Command(BaseCommand):
    """Waits for database to be available"""

    def handle(self, *args, **options):
        self.stdout.write("Waiting for database...")
        t = time.time()
        db_conn = None
        while not db_conn:
            try:
                connection.ensure_connection()
                db_conn = True
            except OperationalError:
                time.sleep(0.25)

        self.stdout.write(self.style.SUCCESS(f"Database available after {time.time()-t:.1f}s!"))