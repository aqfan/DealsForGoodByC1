from app import app
import requests
from random import choice
from string import ascii_uppercase
import json
from decimal import Decimal



customerId = 'your customerId here' #TODO have customer input their id onto the page
apiKey = '6c8ac0ed9c3bdb249bbe32d61526f18a'

dealInfo = { # mapping of ids to info about the deal
    'homeDepotWWF' : {
        'merchantID' : 'homeDepot',
        'charityID' : 'wwf',
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

    # generate and return html+css+javascript based on deal info



@app.route('/')
def homepage():
	return 'various deals are linked to here'

@app.route('/merchants')
def merchantpage():
	return 'the merchant pages are linked to here'

@app.route('/charities')
def charitypage():
	return 'the charity pages are linked to here'

#TODO: /merchants/merchantID
"""
describes the merchant and links the deals offered by the merchant
"""

#TODO: /charities/charityID
"""
describes the charity and links the deals associated with the charity
"""

if __name__ == '__main__':
	app.run(debug=True)
