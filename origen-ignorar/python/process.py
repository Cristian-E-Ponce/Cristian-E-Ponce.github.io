import json
import requests

def create_json():
    data = {}
    data['clients'] = []
    data['clients'].append({
        'first_name': 'Sigrid',
        'last_name': 'Mannock',
        'age': 27,
        'amount': 7.17})
    data['clients'].append({
        'first_name': 'Joe',
        'last_name': 'Hinners',
        'age': 31,
        'amount': [1.90, 5.50]})
    data['clients'].append({
        'first_name': 'Theodoric',
        'last_name': 'Rivers',
        'age': 36,
        'amount': 1.11})
    with open('carp/data.json', 'w') as file:
        json.dump(data, file, indent=4)



def read_json():
    with open('carp/cartaSup.json') as file:
        data= json.load(file)

        for client in data['clients']:
            print('First name: ' + str(client['first_name']))
            print('')
        print(type(data))
        print("")       
        print(data)  

def read_cart():
    with open('carp/cartaSup.json') as file:
        data = json.load(file)
    print(data)



def request_json():
    resp = requests.get('http://ip-api.com/json/208.80.152.201')     
    data = json.loads(resp.content)
    print(data)  

if __name__ == '__main__':

    #create_json()
    #read_json()    
    #request_json()
    read_cart()