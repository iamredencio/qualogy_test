from flask import Flask;
from qualogy import *;

app = Flask(__name__)

@app.route("/svm")
def svm():
    # results = support_vector_machine(X_train_scaled,  y_train, X_valid_scaled, 
    # y_valid, X_trainval_scaled,  y_trainval, X_test_scaled, y_test)
    best_parameters = {'C': '100', 'gamma': 'scale', 'kernel': 'poly'}
    best_parameters = '_'.join(map('-'.join, best_parameters.items()))
    return {'accuracy': ['0.74'],
            'best_parameters': best_parameters,
            'test_score': ['0.75'],
            'train_score': ['0.75']}

"""#Logistic regression"""
@app.route("/logreg")
def logreg():
    # results = logistic_regression(X_train_scaled,  y_train, X_valid_scaled, 
    # y_valid, X_trainval_scaled,  y_trainval, X_test_scaled, y_test)
    best_parameters = {'C': '0.001', 'solver': 'newton-cg'}
    best_parameters = '_'.join(map('-'.join, best_parameters.items()))
    return {'accuracy': ['0.56'],
                'best_parameters': best_parameters,
                'test_score': ['0.57'],
                'train_score': ['0.57']}

"""#RandomForestClassifier"""
@app.route("/rf")
def rf():
    # results = random_forest_classifier(X_train_scaled,  y_train, X_valid_scaled, 
    # y_valid, X_trainval_scaled,  y_trainval, X_test_scaled, y_test)
    best_parameters = {'criterion': 'gini',
            'max_depth': '10',
            'max_features': 'log2'}
    best_parameters = '_'.join(map('-'.join, best_parameters.items()))
    return {'accuracy': ['0.76'],
            'best_parameters': best_parameters,
            'test_score': ['0.77'],
            'train_score': ['0.81']}


@app.route("/algorithms")
def members():
    return {"algorithms": ["SVM", "RF", "LogReg"]}

if __name__ == "__main__":
    app.run(debug=True)