
#import firebase_admin
#from firebase_admin import credentials
#from firebase_admin import db

## Fetch the service account key JSON file contents
#cred = credentials.Certificate('python/dina-723d7-firebase-adminsdk-k2ugx-8933232ee8.json')
# Initialize the app with a service account, granting admin privileges
#firebase_admin.initialize_app(cred, {
#    'databaseURL': "https://dina-723d7.firebaseapp.com/"
#})

#ref = db.reference('/')
#print(ref.get())

import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore
#from firebase_admin import auth
from firebase_admin import db

cred = credentials.Certificate("python/fir-crud-33132-firebase-adminsdk-eqg09-ba5c1529d4.json")
app = firebase_admin.initialize_app(cred, {
    'databaseURL' : 'https://fir-crud-33132.firebaseio.com'
})
#print(app.name) 
db = firestore.client()
#print(type(db))

#-------------------------------[ START GET ]---------------------------------------------
query = db.collection('Dinamometrias')
query.get()


for eco in query.stream():
    print('ID : {} --> {} '.format(eco.id , eco.to_dict()))

#-------------------------------[ END GET ]---------------------------------------------    





   