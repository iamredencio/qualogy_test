from flask import Flask, request
from qualogy import *

# from requests import request;

app = Flask(__name__)


@app.route("/svm")
def svm():
    best_parameters = {"C": "100", "gamma": "scale", "kernel": "poly"}
    best_parameters = "_".join(map("-".join, best_parameters.items()))
    return {
        "accuracy": ["0.74"],
        "best_parameters": best_parameters,
        "test_score": ["0.75"],
        "train_score": ["0.75"],
    }


"""#Logistic regression"""


@app.route("/logreg")
def logreg():
    best_parameters = {"C": "0.001", "solver": "newton-cg"}
    best_parameters = "_".join(map("-".join, best_parameters.items()))
    return {
        "accuracy": ["0.56"],
        "best_parameters": best_parameters,
        "test_score": ["0.57"],
        "train_score": ["0.57"],
    }


"""#RandomForestClassifier"""


@app.route("/rf")
def rf():
    best_parameters = {"criterion": "gini", "max_depth": "10", "max_features": "log2"}
    best_parameters = "_".join(map("-".join, best_parameters.items()))
    return {
        "accuracy": ["0.76"],
        "best_parameters": best_parameters,
        "test_score": ["0.77"],
        "train_score": ["0.81"],
    }


@app.route("/recommendations", methods=["POST"])
def recommendations():
    # svm_results = ""
    print("HI=====>>>>\n\n", request.json)

    # if request.method == 'POST':
    #     print('post app')
    #     req = request.json
    #     # recommendation = svm_results.predict(req)
    #     print(req)
    return {"recommendation": [svm_results]}  # jsonify(name='john')


@app.route("/algorithms")
def members():
    return {"algorithms": ["SVM", "RF", "LogReg"]}


@app.route("/load_data")
def load_data():
    svm_results = support_vector_machine(
        X_train_scaled,
        y_train,
        X_valid_scaled,
        y_valid,
        X_trainval_scaled,
        y_trainval,
        X_test_scaled,
        y_test,
    )
    return {"success": True}


if __name__ == "__main__":
    app.run(debug=True)
