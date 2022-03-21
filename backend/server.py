from flask import Flask;
from qualogy import *;

app = Flask(__name__)

@app.route("/svm")
def svm():
    results = support_vector_machine(X_train_scaled,  y_train, X_valid_scaled, 
    y_valid, X_trainval_scaled,  y_trainval, X_test_scaled, y_test)
    return results

"""#Logistic regression"""
@app.route("/logreg")
def logreg():
    results = logistic_regression(X_train_scaled,  y_train, X_valid_scaled, 
    y_valid, X_trainval_scaled,  y_trainval, X_test_scaled, y_test)

    return results

"""#RandomForestClassifier"""
@app.route("/rf")
def rf():
    results = random_forest_classifier(X_train_scaled,  y_train, X_valid_scaled, 
    y_valid, X_trainval_scaled,  y_trainval, X_test_scaled, y_test)
    return results


@app.route("/algorithms")
def members():
    return {"algorithms": ["SVM", "RF", "LogReg"]}

if __name__ == "__main__":
    app.run(debug=True)