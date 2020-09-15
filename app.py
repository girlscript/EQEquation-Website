from flask import Flask
from flask import render_template
app = Flask(__name__)

@app.route('/')
def content():
    return render_template('index.html')

@app.route('/content')
def index():
    return render_template('content.html')

if __name__ == '__main__':
	app.run(debug = True)