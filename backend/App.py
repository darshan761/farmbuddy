import time
from flask import Flask,request
from flask_cors import CORS , cross_origin
from elasticsearch import Elasticsearch
import Config

app = Flask(__name__)
app.config['CORS_HEADERS'] = 'Content-Type'
CORS(app, support_credentials=True)

es = Elasticsearch(
    cloud_id=Config.CLOUD_ID,
    http_auth=(Config.USERNAME, Config.PASSWORD),
    ) 


@app.route('/')
@cross_origin(support_credentials=True)
def get_default_msg():
    return "Welcome to EY Hackpions 3"


@app.route('/time')
@cross_origin(support_credentials=True)
def get_current_time():
    return {'time': time.time()}

# @app.route('/employee/')
# def addEmployee():
#     doc1 = {
#        "Department": "IT", 
#         "Designation": "Software Engineer", 
#         "Email": "darshan.patil@toomuchwork.com", 
#         "FirstName": "Darshan", 
#         "LastName": "Patil", 
#         "password": "pass@123", 
#         "username": "darshpat",
#         "points":100,
#         "streak":5,
#         "goals_set":10
#     }

#     doc2 = {
#        "Department": "Innovation", 
#         "Designation": "Analyst", 
#         "Email": "bhavya.meghnani@toomuchwork.com", 
#         "FirstName": "Bhavya", 
#         "LastName": "Meghnani", 
#         "password": "pass@123", 
#         "username": "bhavmeg",
#          "points":100,
#         "streak":5,
#         "goals_set":10

#     }

#     doc3 = {
#         "Department": "IT", 
#         "Designation": "Technology Analyst", 
#         "Email": "aditi.anshu@toomuchwork.com", 
#         "FirstName": "Aditi", 
#         "LastName": "Anshu", 
#         "password": "pass@123", 
#         "username": "anshadi",
#         "points":100,
#         "streak":5,
#         "goals_set":10

#     }
#     res = es.index(index="employee", id=1, body=doc1)
#     es.index(index="employee", id=2, body=doc2)
#     es.index(index="employee", id=3, body=doc3)
#     return res['result']


# @app.route('/health')
# def addEmployeeHealth():
#     doc1 = {
#         "heart_rate": "70bpm",
#         "step_count": "1200",
#         "sleep": "7hrs 35m"
#     }
#     doc2 = {
#         "heart_rate": "90bpm",
#         "step_count": "1400",
#         "sleep": "8hrs 35m"
#         }

#     doc3 = {
#         "heart_rate": "65bpm",
#         "step_count": "1450",
#         "sleep": "7hrs 10m"
#         }

#     res = es.index(index="health", id=1, body=doc1)
#     es.index(index="health", id=2, body=doc2)
#     es.index(index="health", id=3, body=doc3)
#     return res['result']


# @app.route('/work')
# def addEmployeeWork():
#     doc1 = {
#         "meetings_attended": "8",
#         "mails_sent": "10",
#         "meetings_unattended": "10",
#         "chat_time": "35m",
#         "mail_read": "35"
#     }
#     doc2 = {
#         "meetings_attended": "5",
#         "mails_sent": "12",
#         "meetings_unattended": "4",
#         "chat_time": "45m",
#         "mail_read": "65"
#         }

#     doc3 = {
#         "meetings_attended": "7",
#         "mails_sent": "10",
#         "meetings_unattended": "2",
#         "chat_time": "20m",
#         "mail_read": "40"
#         }

#     res = es.index(index="work", id=1, body=doc1)
#     es.index(index="work", id=2, body=doc2)
#     es.index(index="work", id=3, body=doc3)
#     return res['result']

# @app.route('/course')
# def addEmployeeCourse():
#     doc1 = {
#         "courses_completed": 2,
#         "courses_in_progress": 1,
#         "badges_earned": 2,
#         "certfications": 2,
#         "courses": [{
#             "course_id":1,
#             "course_title":"Advanced Cloud Computing",
#             "course_completion":"100%",
#             "course_description":"NA",
#             "course_certification_link":"NA"
#         },
    #     {
    #         "course_id":2,
    #         "course_title":"Machine Learning",
    #         "course_completion":"100%",
    #         "course_description":"NA",
    #         "course_certification_link":"NA"
    #     },
    #     {
    #         "course_id":3,
    #         "course_title":"Blockchain",
    #         "course_completion":"70%",
    #         "course_description":"NA",
    #         "course_certification_link":"NA"
    #     }]
    # }
    # doc2 = {
    #    "courses_completed": 1,
    #     "courses_in_progress": 1,
    #     "badges_earned": 1,
    #     "certfications": 1,
    #     "courses": [{
    #         "course_id":1,
    #         "course_title":"Advanced Cloud Computing",
    #         "course_completion":"100%",
    #         "course_description":"NA",
    #         "course_certification_link":"NA"
    #     },
    #     {
    #         "course_id":2,
    #         "course_title":"Blockchain",
    #         "course_completion":"70%",
    #         "course_description":"NA",
    #         "course_certification_link":"NA"
    #     }]
    # }

    # doc3 = {
    #    "courses_completed": 1,
    #     "courses_in_progress": 1,
    #     "badges_earned": 1,
    #     "certfications": 1,
    #     "courses": [{
    #         "course_id":1,
    #         "course_title":"Advanced Cloud Computing",
    #         "course_completion":"100%",
    #         "course_description":"NA",
    #         "course_certification_link":"NA"
    #     },
    #     {
    #         "course_id":3,
    #         "course_title":"Blockchain",
    #         "course_completion":"70%",
    #         "course_description":"NA",
    #         "course_certification_link":"NA"
    #     }]
    # }

    # res = es.index(index="course", id=1, body=doc1)
    # es.index(index="course", id=2, body=doc2)
    # es.index(index="course", id=3, body=doc3)
    # return res['result']

@app.route('/employee/<empId>')
def getEmployee(empId):
    res = es.get(index="employee", id=empId)
    return res['_source']


@app.route('/employee/health/<empId>')
def getEmployeeHealth(empId):
    res = es.get(index="health", id=empId)
    return res['_source']

@app.route('/employee/work/<empId>')
def getEmployeeWork(empId):
    res = es.get(index="work", id=empId)
    return res['_source']

@app.route('/employee/course/<empId>')
def getEmployeeCourse(empId):
    res = es.get(index="course", id=empId)
    return res['_source']

app.run(port=5000, debug=True)