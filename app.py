# Import necessary modules from Flask framework
from flask import Flask, render_template, redirect

# Create a Flask application
app = Flask(__name__)

# Define a route for the index
@app.route('/', methods=['GET', 'POST'])
def index1():
    tag_page = 1
    return render_template('page/index.html', tag_page=tag_page)

# Define a route for the index
@app.route('/0', methods=['GET', 'POST'])
def index2():
    tag_page = 1
    return render_template('page/index.html', tag_page=tag_page)

# Define a route for the index
@app.route('/1', methods=['GET', 'POST'])
def index3():
    tag_page = 1
    return render_template('page/index.html', tag_page=tag_page)

# Define a route for the index
@app.route('/index', methods=['GET', 'POST'])
def index4():
    tag_page = 1
    return render_template('page/index.html', tag_page=tag_page)

# Define a route for the index
@app.route('/page1', methods=['GET', 'POST'])
def index5():
    tag_page = 1
    return render_template('page/index.html', tag_page=tag_page)

# Define a route for the doa section
@app.route('/doa', methods=['GET', 'POST'])
def doa_section():
    tag_page = 2
    return render_template('page/doa-section.html', tag_page=tag_page)

# Define a route for the istighfar section
@app.route('/istighfar', methods=['GET', 'POST'])
def istighfar_section():
    tag_page = 3
    return render_template('page/istighfar-section.html', tag_page=tag_page)

# Define a route for the selawat section
@app.route('/selawat', methods=['GET', 'POST'])
def selawat_section():
    tag_page = 4
    return render_template('page/selawat-section.html', tag_page=tag_page)

# Define a route for the surah section
@app.route('/surah', methods=['GET', 'POST'])
def surah_section():
    tag_page = 5
    return render_template('page/surah-section.html', tag_page=tag_page)

# Define a route for the zikir section
@app.route('/zikir', methods=['GET', 'POST'])
def zikir_section():
    tag_page = 6
    return render_template('page/zikir-section.html', tag_page=tag_page)

# Run the Flask application    
if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=True)
