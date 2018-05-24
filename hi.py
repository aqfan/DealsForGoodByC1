import flask

app = flask.Flask(__name__)

@app.route('/')
def homepage():
	return '<h1>Hello, World!</h1>'

@app.route('/merchants')
def merchantpage():
	return '<h1>Hello, World!</h1>'

@app.route('/charities')
def charitypage():
	return '<h1>Hello, World!</h1>'

#TODO: /dealID

#TODO: /dealID/receiptID

#TODO: /merchants/merchantID

#TODO: /charities/charityID

if __name__ == '__main__':

	app.run(debug=True)
