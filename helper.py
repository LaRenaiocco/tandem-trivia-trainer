"""Helper functions for flask server"""
import json
from random import randint

data = open('data/tandem_data.json')
trivia_data = json.loads(data.read())

def select_ten():
    """return a set of 10 random numbers for question selection"""
    random_10 = set([])
    while len(random_10) < 10:
        num = randint(0,20)
        random_10.add(num)
    
    return random_10

def generate_questions(random_10):
    """Parses 10 questions from trivia_data"""
    trivia_json = []
    for num in random_10:
        trivia_json.append(trivia_data[num])

    return trivia_json


