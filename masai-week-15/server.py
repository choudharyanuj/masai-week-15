from flask import Flask
from flask import request
import json
import csv
app = Flask(__name__)
def read_csv():
    arr_id = []
    arr_img = []
    arr_name = []
    arr_price = []
    arr_quantity=[]
    with open('data/stock.csv') as csvfile:
        reader = csv.DictReader(csvfile)
        for row in reader:
            arr_id.append(row["id"])
            arr_img.append(row["img"])
            arr_name.append(row['name'])
            arr_price.append(row['price'])
            arr_quantity.append(row["quantity"])
        return arr_id, arr_img, arr_name, arr_price, arr_quantity

@app.route('/create', methods=["POST"])
def add_csv():
    img = request.json['img']
    name = request.json['name']
    price = request.json['price']
    quantity = request.json['quantity']
    count = 1
    # id = len(arr_id) + 1
    arr_id, arr_img, arr_name, arr_price, arr_quantity = read_csv()
    arr_id.append(id)
    arr_img.append(img)
    arr_name.append(name)
    arr_price.append(price)
    arr_quantity.append(quantity)
    with open ('data/stock.csv', 'w') as csvfile:
        fieldnames = ['id','img', 'name', 'price','quantity']
        writer = csv.DictWriter(csvfile,fieldnames = fieldnames)
        writer.writeheader()
        for i in range(len(arr_id)):
            writer.writerow({'id' : count , 'img': arr_img[i], 'name' : arr_name[i], 'price' : arr_price[i], 'quantity': arr_quantity[i]})
            count = count+1
        return json.dumps({"response": "Item addes successfully with id " + str(count-1)})

@app.route('/show/<int:id>')
def show_user(id):
    arr_show = list()
    with open('data/stock.csv') as csvfile:
        reader = csv.DictReader(csvfile)
        for row in reader:
            if int(row["id"]) == id:
                arr_show.append(row)
        response = dict(data = arr_show)   
    return json.dumps(response)

@app.route('/home')
def show_users():
    users_data = list()
    with open('data/stock.csv') as csvfile:
        reader = csv.DictReader(csvfile)
        for row in reader:
            users_data.append(row)
        response = dict(data = users_data)
    return json.dumps(response)

@app.route('/edit/<int:id>', methods=['POST'])
def edit(id):
    arr_price = []
    price = request.json["price"]
    arr_quantity = []
    quantity=request.json["quantity"]
    arr_id, arr_img, arr_name, arr_price ,arr_quantity= read_csv()
    edited_arr_id= []
    edited_arr_img = []
    edited_arr_name=[]
    edited_arr_price = []
    edited_arr_quantity = []
    with open('data/stock.csv') as csvfile:
        reader = csv.DictReader(csvfile)
        for row in reader:
            if int(row['id']) == id:
                edited_arr_id.append(row["id"])
                edited_arr_img.append(row["img"])
                edited_arr_name.append(row["name"])
                edited_arr_price.append(price)
                edited_arr_quantity.append(quantity)
            else:
                edited_arr_id.append(row["id"])
                edited_arr_img.append(row["img"])
                edited_arr_name.append(row["name"])
                edited_arr_price.append(row['price'])
                edited_arr_quantity.append(row['quantity'])
    with open('data/stock.csv', 'w') as csvfile:
        fieldnames = ['id', 'img', 'name','price', 'quantity']
        writer = csv.DictWriter(csvfile,fieldnames = fieldnames)
        writer.writeheader()
        for i in range(len(arr_id)):
            writer.writerow({'id' : edited_arr_id[i], 'img': edited_arr_img[i], 'name' : edited_arr_name[i], 'price' :edited_arr_price[i], 'quantity':edited_arr_quantity[i]})
        return json.dumps({'response':"Item Successfully Modified"})

@app.route('/delete/<int:id>', methods=['POST'])
def delete(id):
    arr_id = list()
    arr_img = list()
    arr_name = list()
    arr_price = list()
    arr_quantity = list()
    with open('data/stock.csv') as csvfile:
        reader = csv.DictReader(csvfile)
        for row in reader:
            if int(row['id']) != id:
                arr_id.append(row['id'])
                arr_img.append(row['img'])
                arr_name.append(row['name'])
                arr_price.append(row["price"])
                arr_quantity.append(row["quantity"])
    with open('data/stock.csv', 'w') as csvfile:
        fieldnames = ['id','img','name','price', 'quantity']
        writer = csv.DictWriter(csvfile, fieldnames = fieldnames)
        writer.writeheader()
        for j in range(len(arr_id)):
            writer.writerow({'id': arr_id[j],'img':arr_img[j],'name': arr_name[j] ,'price':arr_price[j], 'quantity': arr_quantity[j]})
    return json.dumps({'response':"User Deleted Successfully"})