from flask import Flask;
from qualogy import *;

app = Flask(__name__)

@app.route("/svm")
def svm():
    clf, best_score, best_parameters, train_score, test_score = support_vector_machine(X_train_scaled,  y_train, X_valid_scaled, 
    y_valid, X_trainval_scaled,  y_trainval, X_test_scaled, y_test)
    return clf, best_score, best_parameters, train_score, test_score 

"""#Logistic regression"""
@app.route("/logreg")
def logreg():
    clf, best_score, best_parameters, train_score, test_score = logistic_regression(X_train_scaled,  y_train, X_valid_scaled, 
    y_valid, X_trainval_scaled,  y_trainval, X_test_scaled, y_test)

    return clf, best_score, best_parameters, train_score, test_score

"""#RandomForestClassifier"""
@app.route("/rf")
def rf():
    clf, best_score, best_parameters, train_score, test_score = random_forest_classifier(X_train_scaled,  y_train, X_valid_scaled, 
    y_valid, X_trainval_scaled,  y_trainval, X_test_scaled, y_test)
    return {"results": best_parameters}


@app.route("/algorithms")
def members():
    return {"algorithms": ["SVM", "RF", "LogReg"]}

if __name__ == "__main__":
    app.run(debug=True)