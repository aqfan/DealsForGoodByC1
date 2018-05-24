from os import environ
import json

import numpy as np
import pandas as pd
import requests


API_KEY = '6c8ac0ed9c3bdb249bbe32d61526f18a'
URL = 'http://api.reimaginebanking.com/enterprise/{request_type}key={api_key}'


if __name__ == "__main__":
    ##get all_customer data from Nessie API
    ALL_CUSTOMERS = json.loads(requests.get(URL.format(request_type="customers?", api_key=API_KEY)).text)["results"]
    if ALL_CUSTOMERS:
        N_CUSTOMERS = len(ALL_CUSTOMERS)


    ##Create customer np array with two columns, one for first name (all lowercase) and last name (all lowercase)
    ##concatenated together; the other column is the customer ID

    CUSTOMER_DICT = {}
    for customer_num in range(N_CUSTOMERS):
        FIRST_NAME = str(ALL_CUSTOMERS[customer_num]['first_name']).lower()
        LAST_NAME = str(ALL_CUSTOMERS[customer_num]['last_name']).lower()
        USERNAME = FIRST_NAME + LAST_NAME
        CUSTOMER_DICT[FIRST_NAME + LAST_NAME] =  ALL_CUSTOMERS[customer_num]['_id']



    with open("customerID.json", "w+") as outfile:
          json.dump(CUSTOMER_DICT, outfile)
