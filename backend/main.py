import time

import firebase_admin
from firebase_admin import firestore
import requests
import datetime

app = firebase_admin.initialize_app()
db = firestore.client()

endpoints = db.collection("Endpoints")

while True:
    docs = endpoints.stream()

    for doc in docs:
        id = doc.id
        data = doc.to_dict()

        new_data = []

        for point in data['endpoints']:
            code = 0
            try:
                response = requests.get(point)
                print(f'{point} -> {response.status_code}')
                code = response.status_code
            except:
                print(f'{point} -> Failed to connect')
                code = 400
            call_time = time.mktime(datetime.datetime.now().timetuple())
            new_data = {
                'time': call_time,
                'code': code,
                'endpoint': point,
            }

            query = db.collection("Response-Codes").where('endpoint', '==', point)
            results = query.stream()

            index = 0
            docTTemp = None
            for docT in results:
                print(docT.to_dict())
                docTTemp = docT
                index = index+1

            if index != 0:
                print("EXISTING")
                doc_ref = db.collection("Response-Codes").document(docTTemp.id).get()

                if doc_ref.exists:
                    data = doc_ref.to_dict()

                    data["requests"].append({
                        'time': call_time,
                        'code': code,
                    })

                    db.collection("Response-Codes").document(docTTemp.id).update(data)

            else:
                print("NEW")
                db.collection("Response-Codes").add({
                    "endpoint": point,
                    "requests": [
                        {
                            'time': call_time,
                            'code': code,
                        }
                    ]
                })

    time.sleep(50)
