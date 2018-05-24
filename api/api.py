
from flask import Flask
from flask_restful import Api, Resource, reqparse
import string
import random



# function makeid() {
#   var text = "";
#   var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
#
#   for (var i = 0; i < 5; i++)
#     text += possible.charAt(Math.floor(Math.random() * possible.length));
#
#   return text;
# }

def id_generator(size=6, chars=string.ascii_uppercase + string.digits):
     return ''.join(random.choice(chars) for _ in range(size))

app2 = Flask(__name__)
api = Api(app2)

deals = [
{
    "store": "ae",
    "percent_off" : 15,
    "charity": "doctorswithoutborders",
    "code" : id_generator()

},
{
    "store" : "amazon",
    "percent_off": 10,
    "charity" : "theamericanredcross",
    "code" : id_generator()

},
{
    "store": "target",
    "percent_off" : 20,
    "charity" : "thesalvationarmy",
    "code" : id_generator()

}

]

class Deal(Resource):





    def get(self, store):
        for deal in deals:
            if (store== deal["store"]):
                return deal, 200
        return "User not found", 404

    def post(self, store):
        parser = reqparse.RequestParser()
        parser.add_argument("percent_off")
        parser.add_argument("charity")
        parser.add_argument("code")
        args = parser.parse_args()

        for deal in deals:
            if (store == deal["store"]):
                return "Deal with store {} already exists".format(store), 400

        deal = {
            "store" : store,
            "percent_off" : args["percent_off"],
            "charity" : args["charity"],
            "code" : args["code"]
        }
        deals.append(deal)
        return deal, 201

    def put(self, store):
        parser = reqparse.RequestParser()
        parser.add_argument("percent_off")
        parser.add_argument("charity")
        args = parser.parse_args()

        for deal in deals:
            if (store == deal["store"]):
                deal["percent_off"] = args["percent_off"]
                deal["charity"] = args["charity"]
                return deal, 200

        deal = {
            "store" : store,
            "percent_off" : args["percent_off"],
            "charity" : args["charity"],
            "code" : args["code"]
        }

        deals.append(deal)
        return deal,201

    def delete(self, store):
        global deals
        deals = [deal for deal in deals if deal["store"] != "store"]
        return "{} is deleted.". format(store), 200

api.add_resource(Deal, "/deal/<string:store>")
app2.run(debug=True)
