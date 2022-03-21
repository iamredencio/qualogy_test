# -*- coding: utf-8 -*-
"""Kopie van Qualogy.ipynb

Automatically generated by Colaboratory.

Original file is located at
    https://colab.research.google.com/drive/14z_xXzKVvJazbOtQz7jNADaZnNBoq9mH
"""
from sklearn.utils._testing import ignore_warnings
from sklearn.exceptions import ConvergenceWarning
from sklearn.preprocessing import MinMaxScaler
from sklearn.model_selection import train_test_split

from sklearn.linear_model import LogisticRegression
from sklearn.ensemble import RandomForestClassifier
from sklearn.svm import SVC

import pandas as pd 
import numpy as np

from pandas.core.reshape.reshape import get_dummies


data_proc = pd.read_csv("data/train_data.csv", index_col=0)

# Open file in notepad, to eliminate error 0x83 utf
test_data = pd.read_csv("data/TestDataAccomodation.csv", encoding="utf-8", index_col=0)

#Random Sampling missing values
data_proc = data_proc.apply(lambda x: np.where(x.isnull(), x.dropna().sample(len(x), replace=True), x))

#Random Sampling missing values
test_data = test_data.apply(lambda x: np.where(x.isnull(), x.dropna().sample(len(x), replace=True), x))

"""#Split data into train, test and validation sets
## prepare for cross validation to accommodate skewed data.
"""

data = pd.get_dummies(data_proc.drop('AcomType', axis=1))
data["AcomType"] = data_proc["AcomType"]

feature = data.drop('AcomType', axis=1)
target = data['AcomType']

X = feature.values
y = target.values

X_trainval, X_test, y_trainval, y_test = train_test_split(X, y, random_state=41)
X_train, X_valid, y_train, y_valid = train_test_split(X_trainval, y_trainval, random_state=3)

scaler = MinMaxScaler()
scaler.fit(X_trainval)

X_trainval_scaled = scaler.transform(X_trainval)
X_test_scaled = scaler.transform(X_test)
X_train_scaled = scaler.transform(X_train)
X_valid_scaled = scaler.transform(X_valid)

test_data = pd.get_dummies(test_data)

scaler = MinMaxScaler()
scaler.fit(test_data)

test_data_scaled = scaler.transform(test_data)


def cleanup_results(best_score, best_parameters, train_score, test_score, clf):
  best_parameters = '_'.join(map('-'.join, best_parameters.items()))
  return {'accuracy': ["{:.2f}".format(best_score)], 
          'best_parameters': [best_parameters],
          'train_score': ["{:.2f}".format(train_score)], 
          'test_score': ["{:.2f}".format(test_score)],
          'algorithm_predict': [clf]}

@ignore_warnings(category=ConvergenceWarning)
def support_vector_machine(X_train_scaled,  y_train, X_valid_scaled, y_valid, X_trainval_scaled,  y_trainval, X_test_scaled, y_test):
    best_score = 0

    for C in [0.0001, 0.001, 0.01, 0.1, 1, 10, 100]:
      for gamma in ["auto", "scale"]:
        for kernel in ["linear", "poly", "rbf", "sigmoid"]:
          svc = SVC(kernel=kernel, C=C, gamma=gamma)
          svc.fit(X_train_scaled,  y_train)
          score = svc.score(X_valid_scaled, y_valid)

          if score > best_score:
            best_score = score
            best_parameters = {"C":C,
                              'gamma': gamma,
                              'kernel': kernel}

    svc = SVC(**best_parameters)
    clf = svc.fit(X_trainval_scaled,  y_trainval)
    train_score = svc.score(X_trainval_scaled,  y_trainval)
    test_score = svc.score(X_test_scaled, y_test)

    return cleanup_results(best_score, best_parameters, train_score, test_score, clf)

@ignore_warnings(category=ConvergenceWarning)
def logistic_regression(X_train_scaled,  y_train, X_valid_scaled, y_valid, X_trainval_scaled,  y_trainval, X_test_scaled, y_test):
    best_score = 0

    for C in [0.001, 0.01, 0.1, 1, 10, 100]:
      for solver in ["newton-cg", "sag", "saga", "lbfgs"]:
          logreg = LogisticRegression(max_iter=5000, multi_class='multinomial', C=C,
                                      solver=solver, penalty='l2')
          logreg.fit(X_train_scaled,  y_train)
          score = logreg.score(X_valid_scaled, y_valid)

          if score > best_score:
            best_score = score
            best_parameters = {"C":C,
                              'solver': solver}

    logreg = LogisticRegression(**best_parameters)
    clf = logreg.fit(X_trainval_scaled,  y_trainval)
    train_score = logreg.score(X_trainval_scaled,  y_trainval)
    test_score = logreg.score(X_test_scaled, y_test)

    return cleanup_results(best_score, best_parameters, train_score, test_score, clf)

@ignore_warnings(category=ConvergenceWarning)
def random_forest_classifier(X_train_scaled,  y_train, X_valid_scaled, y_valid, X_trainval_scaled,  y_trainval, X_test_scaled, y_test):
    best_score = 0

    for criterion in ['gini', 'entropy']:
      for max_depth in range(1,11):
        for max_features in ["auto", "sqrt", "log2"]:
          rf = RandomForestClassifier(criterion=criterion, max_features=max_features, max_depth=max_depth)
          rf.fit(X_train_scaled,  y_train)
          score = rf.score(X_valid_scaled, y_valid)

          if score > best_score:
            best_score = score
            best_parameters = {"max_features":max_features,
                              'max_depth': max_depth,
                              'criterion': criterion}

    rf = RandomForestClassifier(**best_parameters)
    clf = rf.fit(X_trainval_scaled,  y_trainval)
    train_score = rf.score(X_trainval_scaled,  y_trainval)
    test_score = rf.score(X_test_scaled, y_test)

    return cleanup_results(best_score, best_parameters, train_score, test_score, clf)

def get_recommendation(clf, profiles):
    np_profiles = np.array(profiles) 
    print(np_profiles)

    test ={
    'durationOfStay': np_profiles[:, 0],
    'gender': np_profiles[:, 1], 
    'Age': np_profiles[:, 2],
    'kids': np_profiles[:, 3], 
    'destinationCode': np_profiles[:, 4]
    }

    test = get_dummies(pd.DataFrame(test), columns =['destinationCode', 'gender'] )

    empty_df = get_dummies(data_proc.drop("AcomType", axis=1)).reset_index().drop([x for x in range(len(data_proc))], axis=0)

    new_test = pd.concat([empty_df, test], sort=False).fillna(0).drop("Id", axis=1)

    test = list(new_test.values)
        
    return clf.predict(test)

# svm_results = support_vector_machine(X_train_scaled,  y_train, X_valid_scaled, 
#         y_valid, X_trainval_scaled,  y_trainval, X_test_scaled, y_test)

# logreg_results = logistic_regression(X_train_scaled,  y_train, X_valid_scaled, 
#     y_valid, X_trainval_scaled,  y_trainval, X_test_scaled, y_test)

# rf_results = random_forest_classifier(X_train_scaled,  y_train, X_valid_scaled, 
#     y_valid, X_trainval_scaled,  y_trainval, X_test_scaled, y_test)

# print(svm_results)
