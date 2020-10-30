"""Flask Server for TTT - Tandem Trivia Trainer"""
from flask import (Flask, render_template, request, flash, session,
                redirect, jsonify)
import helper
from jinja2 import StrictUndefined

app = Flask(__name__)
app.secret_key = "dev"
app.jinja_env.undefined = StrictUndefined

@app.route('/')
def homepage():
    """Show Welcome Screen"""

    return render_template('homepage.html')

@app.route('/questions.json')
def get_trivia_data():
    """Return 10 random question on quiz start"""

    trivia = helper.generate_questions(helper.select_ten())
    return jsonify(trivia)


if __name__ == '__main__':
    # connect_to_db(app)
    app.run(host='0.0.0.0', debug=True)
