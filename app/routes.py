from app import app
import requests
from random import choice
from string import ascii_uppercase
import json
from decimal import Decimal
from flask import render_template

apiKey = '6c8ac0ed9c3bdb249bbe32d61526f18a'

dealInfo = { # mapping of ids to info about the deal
    'homeDepotWWF' : {
        'merchantName' : 'Home Depot',
        'charityName' : 'World Wildlife Fund',
        'costOfCoupon' : 10,
        'dealTitle' : '20% off Home Depot',
        'description' : 'longer description of the deal',
    }
}

@app.route('/<id>')
def dealpage(id):
    try:
        info = dealInfo[id]
    except KeyError:
        return '404'

    return render_template('index.html', **info)

@app.route('/')
def homepage():
	return 'HOME PAGE' #TODO add home page

if __name__ == '__main__':
	app.run(debug=True)
