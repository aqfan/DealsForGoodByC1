from app import app
from app import api
import requests
from random import choice
from string import ascii_uppercase
import json
from decimal import Decimal
from flask import render_template


apiKey = '6c8ac0ed9c3bdb249bbe32d61526f18a'

dealInfo = { # mapping of ids to info about the deal
    'homeDepotWWF' : {
        'merchantID' : 'homeDepot',
        'charityNessieID' : '5b06fa43f0cec56abfa40c84',
        'charityName' : 'World Wildlife Fund',
        'amount' : Decimal(10.00) ,
        'title' : '20% off Home Depot',
        'description' : 'longer description of the deal',
    }
}

@app.route('/<id>')
def dealpage(id):

    # get info about deal
    try:
        info = dealInfo[id]
    except KeyError:
        return '404!!!!!!!!!!!!!!!!! this deal dont exist'


@app.route('/')
def homepage():
	return 'various deals are provided here'

# @app.route('/deals)
# def merchantpage():
# 	return 'the merchant pages are linked to here'
#
# @app.route('/charities')
# def charitypage():
# 	return 'the charity pages are linked to here'
#
# #TODO: /merchants/<id>
# """
# describes the merchant and links the deals offered by the merchant
# """
#
# #TODO: /charities/<id>
# """
# describes the charity and links the deals associated with the charity
# """

if __name__ == '__main__':
	app.run(debug=True)
