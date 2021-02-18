from django.test import TestCase

# Create your tests here.
from .models import Caso

class CasoModelTests(TestCase):
    def test_negative_magnitude(self):
        '''
        Returns False if it finds negative magnitudes.
        '''
        caso = Caso.objects.filter(mag__lte=0)
        self.assertIs(not caso, True)
