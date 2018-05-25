import sys
from flask import render_template, Flask

# apiKey = '6c8ac0ed9c3bdb249bbe32d61526f18a'

dealInfo = { # mapping of ids to info about the deal
    'homeDepotWWF' : {
        'merchantName' : 'Home Depot',
        'merchantPictureURL' : 'https://s3.amazonaws.com/freebiesupply/large/2x/home-depot-logo-transparent.png',
        'charityPictureURL' : 'https://logos-download.com/wp-content/uploads/2016/11/WWF_logo_logotype.png',
        'charityDescription' : 'about the wwf',
        'merchantDescription' : 'about home depot I guess',
        'charityName' : 'World Wildlife Fund',
        'costOfCoupon' : 10,
        'dealTitle' : '20% Off Home Depot',
        'description' : 'longer description of the deal',
    }
}

app = Flask(__name__)

@app.route('/')
def homepage():
    
	return render_template("homepage.html")

@app.route('/<id>')
def dealpage(id):
    try:
        info = dealInfo[id]
    except KeyError:
        return '404'

    pageTitle = "Deals for Good: " + info['dealTitle']
    print(pageTitle, file=sys.stderr)
    print(pageTitle)

    return render_template('purchase.html', **info, pageTitle=pageTitle)

if __name__ == '__main__':
	app.run(debug=True)