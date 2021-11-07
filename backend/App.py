import time
from flask import Flask,request
from flask_cors import CORS , cross_origin
import json
import firebase_admin
from firebase_admin import credentials
from firebase_admin import db
import uuid
import Constants
import Config


# Fetch the service account key JSON file contents
cred = credentials.Certificate('bayers-farmbuddy-firebase-secret-key.json')
# Initialize the app with a service account, granting admin privileges
firebase_admin.initialize_app(cred, {
    'databaseURL': Config.DATABASE_URL
})


app = Flask(__name__)
app.config['CORS_HEADERS'] = 'Content-Type'
CORS(app, support_credentials=True)


@app.route('/')
@cross_origin(support_credentials=True)
def get_default_msg():
    return "Welcome to Bayers Hack!"


@app.route('/time')
@cross_origin(support_credentials=True)
def get_current_time():
    return {'time': time.time()}

@app.route('/product/', methods = ['GET'])
@cross_origin(support_credentials=True)
def getAllProducts():
    productRef = db.reference(Constants.PRODUCT_URL)
    return productRef.get()

# To get/update/delete product on product id
@app.route('/product/<id>', methods = ['GET', 'POST', 'DELETE'])
@cross_origin(support_credentials=True)
def product(id):
    productRef = db.reference(Constants.PRODUCT_URL+id)
    if productRef.get() is None:
        return 'No product with ID:'+ id+ ' found'
    if request.method == 'GET':
        return productRef.get()
    if request.method == 'POST':
        req = json.loads(request.data.decode(encoding='UTF-8'))
        productRef.set(req)
        productRef.update({"product_id":id})
        return productRef.get()
    if request.method == 'DELETE':
        productRef.set({})
        return 'Product deleted successfully!'
    
    return productRef.get()

# To add product 
@app.route('/product/', methods = ['POST'])
@cross_origin(support_credentials=True)
def add_product(): 
    req = json.loads(request.data.decode(encoding='UTF-8'))   
    productRef = db.reference(Constants.PRODUCT_URL)
    productKey = str(uuid.uuid4())[:8]
    productRef.child(productKey).set(req)
    productRef.child(productKey).update({Constants.PRODUCT_ID:productKey})
    return productRef.child(productKey).get()

app.run(port=5000, debug=True)