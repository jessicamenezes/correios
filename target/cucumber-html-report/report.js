$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("BuscaLogradouro.feature");
formatter.feature({
  "line": 1,
  "name": "Search for Zip Code on post office website",
  "description": "I want to find addresses using the post search form",
  "id": "search-for-zip-code-on-post-office-website",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "Search with valid data",
  "description": "",
  "id": "search-for-zip-code-on-post-office-website;search-with-valid-data",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "I want to find a Zip Code",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I select \u003cuf\u003e and \u003clocality\u003e and \u003cneighborhood\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user should be able to search sucessfully",
  "keyword": "Then "
});
formatter.examples({
  "line": 9,
  "name": "",
  "description": "",
  "id": "search-for-zip-code-on-post-office-website;search-with-valid-data;",
  "rows": [
    {
      "cells": [
        "uf",
        "locality",
        "neighborhood"
      ],
      "line": 10,
      "id": "search-for-zip-code-on-post-office-website;search-with-valid-data;;1"
    },
    {
      "cells": [
        "MG",
        "Belo Horizonte",
        "Vista Alegre"
      ],
      "line": 11,
      "id": "search-for-zip-code-on-post-office-website;search-with-valid-data;;2"
    },
    {
      "cells": [
        "MG",
        "Belo Horizonte",
        "Serra"
      ],
      "line": 12,
      "id": "search-for-zip-code-on-post-office-website;search-with-valid-data;;3"
    },
    {
      "cells": [
        "MG",
        "Belo Horizonte",
        "Betania"
      ],
      "line": 13,
      "id": "search-for-zip-code-on-post-office-website;search-with-valid-data;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 11,
  "name": "Search with valid data",
  "description": "",
  "id": "search-for-zip-code-on-post-office-website;search-with-valid-data;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "I want to find a Zip Code",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I select MG and Belo Horizonte and Vista Alegre",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user should be able to search sucessfully",
  "keyword": "Then "
});
formatter.match({
  "location": "SearchZipCode.iWantToFindAZipCode()"
});
formatter.result({
  "duration": 138870195,
  "error_message": "java.lang.NullPointerException\n\tat Pages.ZipCode.abreSite(ZipCode.java:49)\n\tat Steps.SearchZipCode.iWantToFindAZipCode(SearchZipCode.java:20)\n\tat ✽.Given I want to find a Zip Code(BuscaLogradouro.feature:5)\n",
  "status": "failed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "line": 12,
  "name": "Search with valid data",
  "description": "",
  "id": "search-for-zip-code-on-post-office-website;search-with-valid-data;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "I want to find a Zip Code",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I select MG and Belo Horizonte and Serra",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user should be able to search sucessfully",
  "keyword": "Then "
});
formatter.match({
  "location": "SearchZipCode.iWantToFindAZipCode()"
});
formatter.result({
  "duration": 191026,
  "error_message": "java.lang.NullPointerException\n\tat Pages.ZipCode.abreSite(ZipCode.java:49)\n\tat Steps.SearchZipCode.iWantToFindAZipCode(SearchZipCode.java:20)\n\tat ✽.Given I want to find a Zip Code(BuscaLogradouro.feature:5)\n",
  "status": "failed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "line": 13,
  "name": "Search with valid data",
  "description": "",
  "id": "search-for-zip-code-on-post-office-website;search-with-valid-data;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "I want to find a Zip Code",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I select MG and Belo Horizonte and Betania",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user should be able to search sucessfully",
  "keyword": "Then "
});
formatter.match({
  "location": "SearchZipCode.iWantToFindAZipCode()"
});
formatter.result({
  "duration": 171899,
  "error_message": "java.lang.NullPointerException\n\tat Pages.ZipCode.abreSite(ZipCode.java:49)\n\tat Steps.SearchZipCode.iWantToFindAZipCode(SearchZipCode.java:20)\n\tat ✽.Given I want to find a Zip Code(BuscaLogradouro.feature:5)\n",
  "status": "failed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
});