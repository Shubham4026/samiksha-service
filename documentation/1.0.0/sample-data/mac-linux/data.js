const { ObjectId } = require('mongodb');

const {
    entities,
    entityType,
    userRoleExtension
} = require('./data3');

let programData = [{
    "_id" : new ObjectId("66f3c3e13bda47893722b496"),
    "externalId" : "PGM_DIET_DARBHANGA_MIP_20-08-24_testing131",
    "name" : "DIET DARBHANGA _MIP_प्राथमिक कक्षाओं में चित्र-पठन कौशल_testing131",
    "description" : "शिक्षकों  में पाठयपुस्तकों दिए  गए चित्रों के पीछे छिपे संदेशों को पहचानने और उनका मूल्यांकन करने की क्षमता विकसित होगी |",
    "owner" : "162",
    "createdBy" : "162",
    "updatedBy" : "162",
    "status" : "active",
    "startDate" : new Date("2024-08-19T18:30:00.000Z"),
    "endDate" : new Date("2025-08-25T18:29:59.000Z"),
    "resourceType" : [ 
        "program"
    ],
    "language" : [ 
        "English"
    ],
    "keywords" : [ 
        "चित्र -पठन", 
        " शिक्षक", 
        " डायट", 
        " कौशल"
    ],
    "concepts" : [],
    "imageCompression" : {
        "quality" : 10
    },
    "components" : [ 
        new ObjectId("66f3c3e53bda47893722b4f2"), 
        new ObjectId("66f3c41cf4f6cfde2411623d"), 
        new ObjectId("66f3c4963bda47893722b63a")
    ],
    "isAPrivateProgram" : false,
    "isDeleted" : false,
    "requestForPIIConsent" : true,
    "metaInformation" : {
        "state" : [ 
            "Jayanagar", 
            "Indiranagar"
        ],
        "roles" : [ 
            "Teacher", 
            "HT ", 
            "district_education_officer& Officials"
        ]
    },
    "rootOrganisations" : [],
    "createdFor" : [],
    "deleted" : false,
    "updatedAt" : new Date("2024-09-25T08:06:47.048Z"),
    "createdAt" : new Date("2024-09-25T08:03:45.008Z"),
    "__v" : 0,
    "scope" : {
        "state" : [ 
            entities[0]._id
        ],
        "roles" : [ 
            "district_education_officer", 
            "TEACHER",
            "state_education_officer", 
        ],
        "entityType" : entityType[0].name
    }
}]


let solutionData = [
    {
        "_id" : new ObjectId("66f3dd81953231bda151086f"),
        "externalId" : "a383af8d-7e4e-4c3b-a79d-ccf2bd14de58-SURVEY-TEMPLATE",
        "isReusable" : true,
        "name" : "survey support test",
        "description" : "This is Testing for survey upload",
        "author" : "2",
        "resourceType" : [ 
            "Survey Solution"
        ],
        "language" : [ 
            "English"
        ],
        "keywords" : [ 
            "Survey"
        ],
        "concepts" : [],
        "themes" : [ 
            {
                "type" : "theme",
                "label" : "theme",
                "externalId" : "SF",
                "name" : "Survey and Feedback",
                "weightage" : 0,
                "criteria" : [ 
                    {
                        "criteriaId" : new ObjectId("66f3dd81953231bda151086d"),
                        "weightage" : 0
                    }
                ]
            }
        ],
        "flattenedThemes" : [],
        "type" : "survey",
        "subType" : "survey",
        "entities" : [],
        "startDate" : new Date("2022-04-29T13:57:28.259Z"),
        "endDate" : new Date("2026-05-02T12:00:00.259Z"),
        "status" : "active",
        "evidenceMethods" : {
            "SF" : {
                "externalId" : "SF",
                "name" : "Survey And Feedback",
                "description" : "Survey And Feedback",
                "modeOfCollection" : "",
                "canBeNotApplicable" : false,
                "notApplicable" : false,
                "canBeNotAllowed" : false,
                "remarks" : "",
                "isActive" : true
            }
        },
        "sections" : {
            "SQ" : "Survey Questions"
        },
        "registry" : [],
        "isRubricDriven" : false,
        "enableQuestionReadOut" : false,
        "captureGpsLocationAtQuestionLevel" : false,
        "linkTitle" : "",
        "linkUrl" : "",
        "isAPrivateProgram" : false,
        "allowMultipleAssessemts" : false,
        "isDeleted" : false,
        "pageHeading" : "Domains",
        "minNoOfSubmissionsRequired" : 1,
        "rootOrganisations" : [],
        "createdFor" : [],
        "deleted" : false,
        "updatedAt" : new Date("2024-09-25T09:53:05.235Z"),
        "createdAt" : new Date("2024-09-25T09:53:05.235Z"),
        "scope":{
            "state" : [ 
                entities[0]._id
            ],
            "roles" : [ 
                "district_education_officer", 
                "TEACHER",
                "state_education_officer", 
            ],
            "entityType" : entityType[0].name
        },
        "__v" : 0
    },
    {
        "_id" : new ObjectId("66f3de0c953231bda15108c6"),
        "externalId" : "a383af8d-7e4e-4c3b-a79d-ccf2bd14de58-1727258124738",
        "isReusable" : false,
        "name" : "survey support test",
        "description" : "This is Testing for survey upload",
        "author" : "2",
        "parentSolutionId" : new ObjectId("66f3dd81953231bda151086f"),
        "resourceType" : [ 
            "Survey Solution"
        ],
        "language" : [ 
            "English"
        ],
        "keywords" : [ 
            "Survey"
        ],
        "concepts" : [],
        "themes" : [ 
            {
                "type" : "theme",
                "label" : "theme",
                "externalId" : "SF",
                "name" : "Survey and Feedback",
                "weightage" : 0,
                "criteria" : [ 
                    {
                        "criteriaId" : new ObjectId("66f3de0c953231bda15108c2"),
                        "weightage" : 0
                    }
                ]
            }
        ],
        "flattenedThemes" : [],
        "type" : "survey",
        "subType" : "survey",
        "entities" : [],
        "startDate" : new Date("2022-04-29T13:57:28.259Z"),
        "endDate" : new Date("2026-05-02T12:00:00.259Z"),
        "status" : "active",
        "evidenceMethods" : {
            "SF" : {
                "externalId" : "SF",
                "name" : "Survey And Feedback",
                "description" : "Survey And Feedback",
                "modeOfCollection" : "",
                "canBeNotApplicable" : false,
                "notApplicable" : false,
                "canBeNotAllowed" : false,
                "remarks" : "",
                "isActive" : true
            }
        },
        "sections" : {
            "SQ" : "Survey Questions"
        },
        "registry" : [],
        "isRubricDriven" : false,
        "enableQuestionReadOut" : false,
        "captureGpsLocationAtQuestionLevel" : false,
        "linkTitle" : "",
        "linkUrl" : "",
        "isAPrivateProgram" : false,
        "allowMultipleAssessemts" : false,
        "isDeleted" : false,
        "pageHeading" : "Domains",
        "minNoOfSubmissionsRequired" : 1,
        "rootOrganisations" : [],
        "createdFor" : [],
        "updatedAt" : new Date("2024-09-25T09:55:24.781Z"),
        "createdAt" : new Date("2024-09-25T09:55:24.777Z"),
        "deleted" : false,
        "__v" : 0,
        "link" : "912444588cb29f78ad25b3c278f84b03",
        "scope":{
            "state" : [ 
                entities[0]._id
            ],
            "roles" : [ 
                "district_education_officer", 
                "TEACHER",
                "state_education_officer", 
            ],
            "entityType" : entityType[0].name
        }
    },
{
    "_id" : new ObjectId("66f401e7953231bda15108dd"),
    "externalId" : "606d92fa-42d8-11ec-ac61-23092024-1537-OBSERVATION-TEMPLATE",
    "isReusable" : true,
    "name" : "NISHTHA 2.0 Feedback Form",
    "description" : "NISHTHA 2.0 feedback form",
    "author" : "",
    "resourceType" : [ 
        "Observations Framework"
    ],
    "language" : [ 
        "English"
    ],
    "keywords" : [ 
        "Framework", 
        "Observation", 
        "Feedback form"
    ],
    "concepts" : [],
    "scoringSystem" : null,
    "levelToScoreMapping" : {
        "L1" : {
            "points" : 100,
            "label" : "Good"
        }
    },
    "themes" : [ 
        {
            "type" : "theme",
            "label" : "theme",
            "name" : "Observation Theme",
            "externalId" : "OB",
            "weightage" : 100,
            "criteria" : [ 
                {
                    "criteriaId" : new ObjectId("66f401e7953231bda15108db"),
                    "weightage" : 100
                }
            ]
        }
    ],
    "flattenedThemes" : [],
    "entityType" : "school",
    "type" : "observation",
    "subType" : "",
    "entities" : [],
    "registry" : [],
    "frameworkId" : new ObjectId("66f401cb953231bda15108d7"),
    "frameworkExternalId" : "606d92fa-42d8-11ec-ac61-23092024-1537",
    "noOfRatingLevels" : 1,
    "isRubricDriven" : false,
    "enableQuestionReadOut" : false,
    "updatedBy" : "2",
    "captureGpsLocationAtQuestionLevel" : false,
    "isAPrivateProgram" : false,
    "allowMultipleAssessemts" : false,
    "isDeleted" : false,
    "pageHeading" : "Domains",
    "minNoOfSubmissionsRequired" : 1,
    "rootOrganisations" : [],
    "createdFor" : [],
    "updatedAt" : new Date("2024-09-25T12:28:55.193Z"),
    "createdAt" : new Date("2021-11-11T10:16:02.564Z"),
    "deleted" : false,
    "__v" : 0,
    "evidenceMethods" : {
        "OB" : {
            "externalId" : "OB",
            "tip" : null,
            "name" : "Observation",
            "description" : null,
            "modeOfCollection" : "onfield",
            "canBeNotApplicable" : false,
            "notApplicable" : false,
            "canBeNotAllowed" : false,
            "remarks" : null
        }
    },
    "sections" : {
        "S1" : "Observation Question"
    },
    "status" : "active",
    "scope":{
        "state" : [ 
            entities[0]._id
        ],
        "roles" : [ 
            "district_education_officer", 
            "TEACHER",
            "state_education_officer", 
        ],
        "entityType" : entityType[0].name
    }
},
{
    "_id" : new ObjectId("66f40275953231bda151091c"),
    "externalId" : "606d92fa-42d8-11ec-ac61-23092024-1537-OBSERVATION-TEMPLATE-1727267445504",
    "isReusable" : false,
    "name" : "dev_testing",
    "description" : "dev testing",
    "author" : "2",
    "parentSolutionId" : new ObjectId("66f401e7953231bda15108dd"),
    "resourceType" : [ 
        "Observations Framework"
    ],
    "language" : [ 
        "English"
    ],
    "keywords" : [ 
        "Framework", 
        "Observation", 
        "Feedback form"
    ],
    "concepts" : [],
    "scoringSystem" : null,
    "levelToScoreMapping" : {
        "L1" : {
            "points" : 100,
            "label" : "Good"
        }
    },
    "themes" : [ 
        {
            "type" : "theme",
            "label" : "theme",
            "name" : "Observation Theme",
            "externalId" : "OB",
            "weightage" : 100,
            "criteria" : [ 
                {
                    "criteriaId" : new ObjectId("66f40275953231bda1510918"),
                    "weightage" : 100
                }
            ]
        }
    ],
    "flattenedThemes" : [],
    "entityType" : "school",
    "type" : "observation",
    "subType" : "",
    "entities" : [],
    "startDate" : new Date("2024-09-25T12:30:45.504Z"),
    "endDate" : new Date("2025-09-25T12:30:45.504Z"),
    "status" : "active",
    "evidenceMethods" : {
        "OB" : {
            "externalId" : "OB",
            "tip" : null,
            "name" : "Observation",
            "description" : null,
            "modeOfCollection" : "onfield",
            "canBeNotApplicable" : false,
            "notApplicable" : false,
            "canBeNotAllowed" : false,
            "remarks" : null
        }
    },
    "sections" : {
        "S1" : "Observation Question"
    },
    "registry" : [],
    "frameworkId" : new ObjectId("66f401cb953231bda15108d7"),
    "frameworkExternalId" : "606d92fa-42d8-11ec-ac61-23092024-1537",
    "noOfRatingLevels" : 1,
    "isRubricDriven" : false,
    "enableQuestionReadOut" : false,
    "updatedBy" : "2",
    "captureGpsLocationAtQuestionLevel" : false,
    "isAPrivateProgram" : false,
    "allowMultipleAssessemts" : false,
    "isDeleted" : false,
    "pageHeading" : "Domains",
    "minNoOfSubmissionsRequired" : 1,
    "rootOrganisations" : [],
    "createdFor" : [],
    "updatedAt" : new Date("2024-09-25T12:30:45.507Z"),
    "createdAt" : new Date("2024-09-25T12:30:45.504Z"),
    "deleted" : false,
    "__v" : 0,
    "link" : "dd92e92aa827554cfff6d86171976f51",
    "scope":{
        "state" : [ 
            entities[0]._id
        ],
        "roles" : [ 
            "district_education_officer", 
            "TEACHER",
            "state_education_officer", 
        ],
        "entityType" : entityType[0].name
    }
}



]

let surveysData = [{
    "_id" : new ObjectId("66f3de1f953231bda15108cc"),
    "name" : "survey support test",
    "description" : "This is Testing for survey upload",
    "createdBy" : "2",
    "solutionId" : new ObjectId("66f3de0c953231bda15108c6"),
    "solutionExternalId" : "a383af8d-7e4e-4c3b-a79d-ccf2bd14de58-1727258124738",
    "startDate" : new Date("2024-09-25T09:55:43.705Z"),
    "endDate" : new Date("2026-05-02T12:00:00.259Z"),
    "status" : "published",
    "createdFor" : [],
    "rootOrganisations" : [],
    "isDeleted" : false,
    "isAPrivateProgram" : false,
    "deleted" : false,
    "updatedAt" : new Date("2024-09-25T09:55:43.708Z"),
    "createdAt" : new Date("2024-09-25T09:55:43.708Z"),
    "__v" : 0
}]

let criteriaData = [
{
    "_id" : new ObjectId("66f3dd81953231bda151086d"),
    "externalId" : "a383af8d-7e4e-4c3b-a79d-ccf2bd14de58-SURVEY-TEMPLATE-SF",
    "owner" : "2",
    "name" : "Survey and Feedback",
    "description" : "Survey and Feedback",
    "resourceType" : [],
    "language" : [ 
        "English"
    ],
    "keywords" : [ 
        "Keyword 1", 
        "Keyword 2"
    ],
    "concepts" : [],
    "createdFor" : [],
    "evidences" : [ 
        {
            "code" : "SF",
            "sections" : [ 
                {
                    "code" : "SQ",
                    "questions" : [ 
                        new ObjectId("66f3ddf9953231bda1510879"), 
                        new ObjectId("66f3ddf9953231bda151087f"), 
                        new ObjectId("66f3ddf9953231bda1510885"), 
                        new ObjectId("66f3ddf9953231bda151088c"), 
                        new ObjectId("66f3ddf9953231bda1510892"), 
                        new ObjectId("66f3ddf9953231bda1510898"), 
                        new ObjectId("66f3ddf9953231bda151089e"), 
                        new ObjectId("66f3ddf9953231bda15108a5")
                    ]
                }
            ]
        }
    ],
    "criteriaType" : "manual",
    "frameworkCriteriaId" : null,
    "deleted" : false,
    "updatedAt" : new Date("2024-09-25T09:55:05.427Z"),
    "createdAt" : new Date("2024-09-25T09:53:05.219Z"),
    "__v" : 0
},
{
    "_id" : new ObjectId("66f3de0c953231bda15108c2"),
    "externalId" : "a383af8d-7e4e-4c3b-a79d-ccf2bd14de58-1727258124738-SF",
    "owner" : "2",
    "name" : "Survey and Feedback",
    "description" : "Survey and Feedback",
    "resourceType" : [],
    "language" : [ 
        "English"
    ],
    "keywords" : [ 
        "Keyword 1", 
        "Keyword 2"
    ],
    "concepts" : [],
    "createdFor" : [],
    "evidences" : [ 
        {
            "code" : "SF",
            "sections" : [ 
                {
                    "code" : "SQ",
                    "questions" : [ 
                        new ObjectId("66f3de0c953231bda15108b0"), 
                        new ObjectId("66f3de0c953231bda15108b2"), 
                        new ObjectId("66f3de0c953231bda15108b3"), 
                        new ObjectId("66f3de0c953231bda15108b4"), 
                        new ObjectId("66f3de0c953231bda15108b1"), 
                        new ObjectId("66f3de0c953231bda15108b5"), 
                        new ObjectId("66f3de0c953231bda15108b7"), 
                        new ObjectId("66f3de0c953231bda15108b6")
                    ]
                }
            ]
        }
    ],
    "criteriaType" : "manual",
    "frameworkCriteriaId" : null,
    "parentCriteriaId" : new ObjectId("66f3dd81953231bda151086d"),
    "updatedAt" : new Date("2024-09-25T09:55:24.767Z"),
    "createdAt" : new Date("2024-09-25T09:53:05.219Z"),
    "deleted" : false,
    "__v" : 0
},
{
    "_id" : new ObjectId("66f401a8953231bda15108d4"),
    "externalId" : "PRV_16_09_2024_13_05_163662571997",
    "timesUsed" : 12,
    "weightage" : 20,
    "name" : "Cleanliness",
    "score" : "",
    "remarks" : "",
    "description" : "Cleanliness",
    "resourceType" : [ 
        "Program", 
        "Framework", 
        "Criteria"
    ],
    "language" : [ 
        "English"
    ],
    "keywords" : [ 
        "Keyword 1", 
        "Keyword 2"
    ],
    "concepts" : [ 
        {
            "identifier" : "LPD20100",
            "name" : "Teacher_Performance",
            "objectType" : "Concept",
            "relation" : "associatedTo",
            "description" : null,
            "index" : null,
            "status" : null,
            "depth" : null,
            "mimeType" : null,
            "visibility" : null,
            "compatibilityLevel" : null
        }, 
        {
            "identifier" : "LPD20400",
            "name" : "Instructional_Programme",
            "objectType" : "Concept",
            "relation" : "associatedTo",
            "description" : null,
            "index" : null,
            "status" : null,
            "depth" : null,
            "mimeType" : null,
            "visibility" : null,
            "compatibilityLevel" : null
        }, 
        {
            "identifier" : "LPD20200",
            "name" : "Teacher_Empowerment",
            "objectType" : "Concept",
            "relation" : "associatedTo",
            "description" : null,
            "index" : null,
            "status" : null,
            "depth" : null,
            "mimeType" : null,
            "visibility" : null,
            "compatibilityLevel" : null
        }
    ],
    "createdFor" : [],
    "rubric" : {
        "name" : "Cleanliness",
        "description" : "Cleanliness",
        "type" : "auto",
        "levels" : {
            "L1" : {
                "level" : "L1",
                "label" : "Level 1",
                "description" : "NA",
                "expression" : ""
            }
        }
    },
    "evidences" : [],
    "flag" : "",
    "criteriaType" : "manual",
    "deleted" : false,
    "updatedAt" : new Date("2024-09-25T12:27:20.556Z"),
    "createdAt" : new Date("2024-09-25T12:27:20.556Z"),
    "__v" : 0
},
{
    "_id" : new ObjectId("66f401e7953231bda15108db"),
    "externalId" : "PRV_16_09_2024_13_05_163662571997",
    "timesUsed" : 12,
    "weightage" : 20,
    "name" : "Cleanliness",
    "score" : "",
    "remarks" : "",
    "description" : "Cleanliness",
    "resourceType" : [ 
        "Program", 
        "Framework", 
        "Criteria"
    ],
    "language" : [ 
        "English"
    ],
    "keywords" : [ 
        "Keyword 1", 
        "Keyword 2"
    ],
    "concepts" : [ 
        {
            "identifier" : "LPD20100",
            "name" : "Teacher_Performance",
            "objectType" : "Concept",
            "relation" : "associatedTo",
            "description" : null,
            "index" : null,
            "status" : null,
            "depth" : null,
            "mimeType" : null,
            "visibility" : null,
            "compatibilityLevel" : null
        }, 
        {
            "identifier" : "LPD20400",
            "name" : "Instructional_Programme",
            "objectType" : "Concept",
            "relation" : "associatedTo",
            "description" : null,
            "index" : null,
            "status" : null,
            "depth" : null,
            "mimeType" : null,
            "visibility" : null,
            "compatibilityLevel" : null
        }, 
        {
            "identifier" : "LPD20200",
            "name" : "Teacher_Empowerment",
            "objectType" : "Concept",
            "relation" : "associatedTo",
            "description" : null,
            "index" : null,
            "status" : null,
            "depth" : null,
            "mimeType" : null,
            "visibility" : null,
            "compatibilityLevel" : null
        }
    ],
    "createdFor" : [],
    "rubric" : {
        "name" : "Cleanliness",
        "description" : "Cleanliness",
        "type" : "auto",
        "levels" : {
            "L1" : {
                "level" : "L1",
                "label" : "Level 1",
                "description" : "NA",
                "expression" : ""
            }
        }
    },
    "evidences" : [ 
        {
            "code" : "OB",
            "sections" : [ 
                {
                    "code" : "S1",
                    "questions" : [ 
                        new ObjectId("66f40259953231bda15108e9"), 
                        new ObjectId("66f40259953231bda15108ef"), 
                        new ObjectId("66f40259953231bda15108f6"), 
                        new ObjectId("66f40259953231bda15108fc"), 
                        new ObjectId("66f40259953231bda1510902")
                    ]
                }
            ]
        }
    ],
    "flag" : "",
    "criteriaType" : "manual",
    "frameworkCriteriaId" : new ObjectId("66f401a8953231bda15108d4"),
    "updatedAt" : new Date("2024-09-25T12:30:17.689Z"),
    "createdAt" : new Date("2024-09-25T12:27:20.556Z"),
    "deleted" : false,
    "__v" : 0
},
{
    "_id" : new ObjectId("66f40275953231bda1510918"),
    "externalId" : "PRV_16_09_2024_13_05_163662571997-1727267445497",
    "timesUsed" : 12,
    "weightage" : 20,
    "name" : "Cleanliness",
    "score" : "",
    "remarks" : "",
    "description" : "Cleanliness",
    "resourceType" : [ 
        "Program", 
        "Framework", 
        "Criteria"
    ],
    "language" : [ 
        "English"
    ],
    "keywords" : [ 
        "Keyword 1", 
        "Keyword 2"
    ],
    "concepts" : [ 
        {
            "identifier" : "LPD20100",
            "name" : "Teacher_Performance",
            "objectType" : "Concept",
            "relation" : "associatedTo",
            "description" : null,
            "index" : null,
            "status" : null,
            "depth" : null,
            "mimeType" : null,
            "visibility" : null,
            "compatibilityLevel" : null
        }, 
        {
            "identifier" : "LPD20400",
            "name" : "Instructional_Programme",
            "objectType" : "Concept",
            "relation" : "associatedTo",
            "description" : null,
            "index" : null,
            "status" : null,
            "depth" : null,
            "mimeType" : null,
            "visibility" : null,
            "compatibilityLevel" : null
        }, 
        {
            "identifier" : "LPD20200",
            "name" : "Teacher_Empowerment",
            "objectType" : "Concept",
            "relation" : "associatedTo",
            "description" : null,
            "index" : null,
            "status" : null,
            "depth" : null,
            "mimeType" : null,
            "visibility" : null,
            "compatibilityLevel" : null
        }
    ],
    "createdFor" : [],
    "rubric" : {
        "name" : "Cleanliness",
        "description" : "Cleanliness",
        "type" : "auto",
        "levels" : {
            "L1" : {
                "level" : "L1",
                "label" : "Level 1",
                "description" : "NA",
                "expression" : ""
            }
        }
    },
    "evidences" : [ 
        {
            "code" : "OB",
            "sections" : [ 
                {
                    "code" : "S1",
                    "questions" : [ 
                        new ObjectId("66f40275953231bda151090c"), 
                        new ObjectId("66f40275953231bda151090d"), 
                        new ObjectId("66f40275953231bda151090e"), 
                        new ObjectId("66f40275953231bda151090f"), 
                        new ObjectId("66f40275953231bda1510910")
                    ]
                }
            ]
        }
    ],
    "flag" : "",
    "criteriaType" : "manual",
    "frameworkCriteriaId" : new ObjectId("66f401a8953231bda15108d4"),
    "parentCriteriaId" : new ObjectId("66f401e7953231bda15108db"),
    "updatedAt" : new Date("2024-09-25T12:30:45.497Z"),
    "createdAt" : new Date("2024-09-25T12:27:20.556Z"),
    "deleted" : false,
    "__v" : 0
}
]


let criteriaQuestionsData = [
    {
        "_id" : new ObjectId("66f3dd81953231bda151086d"),
        "__v" : 0,
        "concepts" : [],
        "createdAt" : new Date("2024-09-25T09:55:05.312Z"),
        "createdFor" : [],
        "criteriaType" : "manual",
        "deleted" : false,
        "description" : "Survey and Feedback",
        "evidences" : [ 
            {
                "code" : "SF",
                "sections" : [ 
                    {
                        "code" : "SQ",
                        "questions" : [ 
                            {
                                "_id" : new ObjectId("66f3ddf9953231bda1510879"),
                                "externalId" : "SUR_TEST_001_25_9_2024_15_0720240801165325",
                                "question" : [ 
                                    "Enter your First question no", 
                                    ""
                                ],
                                "tip" : "",
                                "hint" : "",
                                "responseType" : "text",
                                "value" : "",
                                "isCompleted" : false,
                                "showRemarks" : true,
                                "remarks" : "",
                                "visibleIf" : "",
                                "options" : [],
                                "sliderOptions" : [],
                                "children" : [ 
                                    new ObjectId("66f3ddf9953231bda1510885")
                                ],
                                "questionGroup" : [ 
                                    "A1"
                                ],
                                "questionType" : "auto",
                                "modeOfCollection" : "onfield",
                                "usedForScoring" : "",
                                "fileName" : [],
                                "validation" : {
                                    "required" : true
                                },
                                "accessibility" : "No",
                                "canBeNotApplicable" : "false",
                                "instanceQuestions" : [ 
                                    new ObjectId("66f3ddf9953231bda151089e"), 
                                    new ObjectId("66f3ddf9953231bda15108a5")
                                ],
                                "isAGeneralQuestion" : false,
                                "autoCapture" : false,
                                "rubricLevel" : "",
                                "sectionHeader" : "",
                                "allowAudioRecording" : false,
                                "page" : "p1",
                                "questionNumber" : "1",
                                "weightage" : 1,
                                "prefillFromEntityProfile" : false,
                                "entityFieldName" : "",
                                "isEditable" : true,
                                "showQuestionInPreview" : false,
                                "deleted" : false,
                                "updatedAt" : new Date("2024-09-25T09:55:05.422Z"),
                                "createdAt" : new Date("2024-09-25T09:55:05.277Z"),
                                "__v" : 0,
                                "criteriaId" : new ObjectId("66f3dd81953231bda151086d")
                            }, 
                            {
                                "_id" : new ObjectId("66f3ddf9953231bda151087f"),
                                "externalId" : "SUR_TEST_002_25_9_2024_15_0720240801165325",
                                "question" : [ 
                                    "Enter your First question no", 
                                    ""
                                ],
                                "tip" : "",
                                "hint" : "",
                                "responseType" : "radio",
                                "value" : "",
                                "isCompleted" : false,
                                "showRemarks" : false,
                                "remarks" : "",
                                "visibleIf" : "",
                                "options" : [ 
                                    {
                                        "value" : "R1",
                                        "label" : "Yes"
                                    }, 
                                    {
                                        "value" : "R2",
                                        "label" : "No"
                                    }
                                ],
                                "sliderOptions" : [],
                                "children" : [],
                                "questionGroup" : [ 
                                    "A1"
                                ],
                                "questionType" : "auto",
                                "modeOfCollection" : "onfield",
                                "usedForScoring" : "",
                                "file" : {
                                    "required" : true,
                                    "type" : [ 
                                        "image/jpeg", 
                                        "docx", 
                                        "pdf", 
                                        "ppt"
                                    ],
                                    "minCount" : 0,
                                    "maxCount" : 10,
                                    "caption" : "FALSE"
                                },
                                "fileName" : [],
                                "validation" : {
                                    "required" : true
                                },
                                "accessibility" : "No",
                                "canBeNotApplicable" : "false",
                                "instanceQuestions" : [],
                                "isAGeneralQuestion" : false,
                                "autoCapture" : false,
                                "rubricLevel" : "",
                                "sectionHeader" : "",
                                "allowAudioRecording" : false,
                                "page" : "p1",
                                "questionNumber" : "2",
                                "weightage" : 1,
                                "prefillFromEntityProfile" : false,
                                "entityFieldName" : "",
                                "isEditable" : true,
                                "showQuestionInPreview" : false,
                                "deleted" : false,
                                "updatedAt" : new Date("2024-09-25T09:55:05.318Z"),
                                "createdAt" : new Date("2024-09-25T09:55:05.318Z"),
                                "__v" : 0,
                                "criteriaId" : new ObjectId("66f3dd81953231bda151086d")
                            }, 
                            {
                                "_id" : new ObjectId("66f3ddf9953231bda1510885"),
                                "externalId" : "SUR_TEST_003_25_9_2024_15_0720240801165325",
                                "question" : [ 
                                    "Are you planning to come back?", 
                                    ""
                                ],
                                "tip" : "",
                                "hint" : "",
                                "responseType" : "multiselect",
                                "value" : "",
                                "isCompleted" : false,
                                "showRemarks" : false,
                                "remarks" : "",
                                "visibleIf" : [ 
                                    {
                                        "operator" : "===",
                                        "value" : [ 
                                            "R2"
                                        ],
                                        "_id" : new ObjectId("66f3ddf9953231bda1510879")
                                    }
                                ],
                                "options" : [ 
                                    {
                                        "value" : "R1",
                                        "label" : "Simple mobile phone without internet/data pack"
                                    }, 
                                    {
                                        "value" : "R2",
                                        "label" : "Smart phone with internet/data pack"
                                    }, 
                                    {
                                        "value" : "R3",
                                        "label" : "Smart phone without internet/data pack"
                                    }, 
                                    {
                                        "value" : "R4",
                                        "label" : "TV"
                                    }, 
                                    {
                                        "value" : "R5",
                                        "label" : "Radio"
                                    }
                                ],
                                "sliderOptions" : [],
                                "children" : [],
                                "questionGroup" : [ 
                                    "A1"
                                ],
                                "questionType" : "auto",
                                "modeOfCollection" : "onfield",
                                "usedForScoring" : "",
                                "file" : {
                                    "required" : true,
                                    "type" : [ 
                                        "image/jpeg", 
                                        "docx", 
                                        "pdf", 
                                        "ppt"
                                    ],
                                    "minCount" : 0,
                                    "maxCount" : 10,
                                    "caption" : "FALSE"
                                },
                                "fileName" : [],
                                "validation" : {
                                    "required" : true
                                },
                                "accessibility" : "No",
                                "canBeNotApplicable" : "false",
                                "instanceQuestions" : [],
                                "isAGeneralQuestion" : false,
                                "autoCapture" : false,
                                "rubricLevel" : "",
                                "sectionHeader" : "",
                                "allowAudioRecording" : false,
                                "page" : "p1",
                                "questionNumber" : "2.1",
                                "weightage" : 1,
                                "prefillFromEntityProfile" : false,
                                "entityFieldName" : "",
                                "isEditable" : true,
                                "showQuestionInPreview" : false,
                                "deleted" : false,
                                "updatedAt" : new Date("2024-09-25T09:55:05.332Z"),
                                "createdAt" : new Date("2024-09-25T09:55:05.332Z"),
                                "__v" : 0,
                                "criteriaId" : new ObjectId("66f3dd81953231bda151086d")
                            }, 
                            {
                                "_id" : new ObjectId("66f3ddf9953231bda151088c"),
                                "externalId" : "SUR_TEST_004_25_9_2024_15_0720240801165325",
                                "question" : [ 
                                    "How many devices are there in home/", 
                                    ""
                                ],
                                "tip" : "",
                                "hint" : "",
                                "responseType" : "number",
                                "value" : "",
                                "isCompleted" : false,
                                "showRemarks" : false,
                                "remarks" : "",
                                "visibleIf" : "",
                                "options" : [],
                                "sliderOptions" : [],
                                "children" : [],
                                "questionGroup" : [ 
                                    "A1"
                                ],
                                "questionType" : "auto",
                                "modeOfCollection" : "onfield",
                                "usedForScoring" : "",
                                "file" : {
                                    "required" : true,
                                    "type" : [ 
                                        "image/jpeg", 
                                        "docx", 
                                        "pdf", 
                                        "ppt"
                                    ],
                                    "minCount" : 0,
                                    "maxCount" : 10,
                                    "caption" : "FALSE"
                                },
                                "fileName" : [],
                                "validation" : {
                                    "required" : true,
                                    "IsNumber" : "true"
                                },
                                "accessibility" : "No",
                                "canBeNotApplicable" : "false",
                                "instanceQuestions" : [],
                                "isAGeneralQuestion" : false,
                                "autoCapture" : false,
                                "rubricLevel" : "",
                                "sectionHeader" : "",
                                "allowAudioRecording" : false,
                                "page" : "p1",
                                "questionNumber" : "3",
                                "weightage" : 1,
                                "prefillFromEntityProfile" : false,
                                "entityFieldName" : "",
                                "isEditable" : true,
                                "showQuestionInPreview" : false,
                                "deleted" : false,
                                "updatedAt" : new Date("2024-09-25T09:55:05.349Z"),
                                "createdAt" : new Date("2024-09-25T09:55:05.349Z"),
                                "__v" : 0,
                                "criteriaId" : new ObjectId("66f3dd81953231bda151086d")
                            }, 
                            {
                                "_id" : new ObjectId("66f3ddf9953231bda1510892"),
                                "externalId" : "SUR_TEST_005_25_9_2024_15_0720240801165325",
                                "question" : [ 
                                    "What type of device is available at home?", 
                                    ""
                                ],
                                "tip" : "",
                                "hint" : "",
                                "responseType" : "date",
                                "value" : "",
                                "isCompleted" : false,
                                "showRemarks" : false,
                                "remarks" : "",
                                "visibleIf" : "",
                                "options" : [],
                                "sliderOptions" : [],
                                "children" : [],
                                "questionGroup" : [ 
                                    "A1"
                                ],
                                "questionType" : "auto",
                                "modeOfCollection" : "onfield",
                                "usedForScoring" : "",
                                "file" : {
                                    "required" : true,
                                    "type" : [ 
                                        "image/jpeg", 
                                        "docx", 
                                        "pdf", 
                                        "ppt"
                                    ],
                                    "minCount" : 0,
                                    "maxCount" : 10,
                                    "caption" : "FALSE"
                                },
                                "fileName" : [],
                                "validation" : {
                                    "required" : true,
                                    "max" : "",
                                    "min" : ""
                                },
                                "accessibility" : "No",
                                "canBeNotApplicable" : "false",
                                "instanceQuestions" : [],
                                "isAGeneralQuestion" : false,
                                "dateFormat" : "DD-MM-YYYY",
                                "autoCapture" : false,
                                "rubricLevel" : "",
                                "sectionHeader" : "",
                                "allowAudioRecording" : false,
                                "page" : "p2",
                                "questionNumber" : "4",
                                "weightage" : 1,
                                "prefillFromEntityProfile" : false,
                                "entityFieldName" : "",
                                "isEditable" : true,
                                "showQuestionInPreview" : false,
                                "deleted" : false,
                                "updatedAt" : new Date("2024-09-25T09:55:05.366Z"),
                                "createdAt" : new Date("2024-09-25T09:55:05.366Z"),
                                "__v" : 0,
                                "criteriaId" : new ObjectId("66f3dd81953231bda151086d")
                            }, 
                            {
                                "_id" : new ObjectId("66f3ddf9953231bda1510898"),
                                "externalId" : "SUR_TEST_006_25_9_2024_15_0720240801165325",
                                "question" : [ 
                                    "Does the child have a quiet place to study?", 
                                    ""
                                ],
                                "tip" : "",
                                "hint" : "",
                                "responseType" : "matrix",
                                "value" : "",
                                "isCompleted" : false,
                                "showRemarks" : false,
                                "remarks" : "",
                                "visibleIf" : "",
                                "options" : [],
                                "sliderOptions" : [],
                                "children" : [],
                                "questionGroup" : [ 
                                    "A1"
                                ],
                                "questionType" : "auto",
                                "modeOfCollection" : "onfield",
                                "usedForScoring" : "",
                                "file" : {
                                    "required" : true,
                                    "type" : [ 
                                        "image/jpeg", 
                                        "docx", 
                                        "pdf", 
                                        "ppt"
                                    ],
                                    "minCount" : 0,
                                    "maxCount" : 10,
                                    "caption" : "FALSE"
                                },
                                "fileName" : [],
                                "validation" : {
                                    "required" : true
                                },
                                "accessibility" : "No",
                                "instanceIdentifier" : "Student",
                                "canBeNotApplicable" : "false",
                                "instanceQuestions" : [],
                                "isAGeneralQuestion" : false,
                                "autoCapture" : false,
                                "rubricLevel" : "",
                                "sectionHeader" : "",
                                "allowAudioRecording" : false,
                                "page" : "p3",
                                "questionNumber" : "5",
                                "weightage" : 1,
                                "prefillFromEntityProfile" : false,
                                "entityFieldName" : "",
                                "isEditable" : true,
                                "showQuestionInPreview" : false,
                                "deleted" : false,
                                "updatedAt" : new Date("2024-09-25T09:55:05.383Z"),
                                "createdAt" : new Date("2024-09-25T09:55:05.383Z"),
                                "__v" : 0,
                                "criteriaId" : new ObjectId("66f3dd81953231bda151086d")
                            }, 
                            {
                                "_id" : new ObjectId("66f3ddf9953231bda151089e"),
                                "externalId" : "SUR_TEST_007_25_9_2024_15_0720240801165325",
                                "question" : [ 
                                    "Were you able to enroll your child in courses on Diksha?", 
                                    ""
                                ],
                                "tip" : "",
                                "hint" : "",
                                "responseType" : "multiselect",
                                "value" : "",
                                "isCompleted" : false,
                                "showRemarks" : false,
                                "remarks" : "",
                                "visibleIf" : "",
                                "options" : [ 
                                    {
                                        "value" : "R1",
                                        "label" : "Not able to use the app"
                                    }, 
                                    {
                                        "value" : "R2",
                                        "label" : "Not aware of classrooms on DIKSHA"
                                    }, 
                                    {
                                        "value" : "R3",
                                        "label" : "Not aware of the enrolment process in the classroom"
                                    }, 
                                    {
                                        "value" : "R4",
                                        "label" : "Not aware of enrolment process in the courses"
                                    }, 
                                    {
                                        "value" : "R5",
                                        "label" : "Don’t find the courses useful"
                                    }, 
                                    {
                                        "value" : "R6",
                                        "label" : "Others"
                                    }
                                ],
                                "sliderOptions" : [],
                                "children" : [],
                                "questionGroup" : [ 
                                    "A1"
                                ],
                                "questionType" : "auto",
                                "modeOfCollection" : "onfield",
                                "usedForScoring" : "",
                                "file" : {
                                    "required" : true,
                                    "type" : [ 
                                        "image/jpeg", 
                                        "docx", 
                                        "pdf", 
                                        "ppt"
                                    ],
                                    "minCount" : 0,
                                    "maxCount" : 10,
                                    "caption" : "FALSE"
                                },
                                "fileName" : [],
                                "validation" : {
                                    "required" : true
                                },
                                "accessibility" : "No",
                                "canBeNotApplicable" : "false",
                                "instanceQuestions" : [],
                                "isAGeneralQuestion" : false,
                                "autoCapture" : false,
                                "rubricLevel" : "",
                                "sectionHeader" : "",
                                "allowAudioRecording" : false,
                                "page" : "p4",
                                "questionNumber" : "5.1",
                                "weightage" : 1,
                                "prefillFromEntityProfile" : false,
                                "entityFieldName" : "",
                                "isEditable" : true,
                                "showQuestionInPreview" : false,
                                "deleted" : false,
                                "updatedAt" : new Date("2024-09-25T09:55:05.402Z"),
                                "createdAt" : new Date("2024-09-25T09:55:05.402Z"),
                                "__v" : 0,
                                "criteriaId" : new ObjectId("66f3dd81953231bda151086d")
                            }, 
                            {
                                "_id" : new ObjectId("66f3ddf9953231bda15108a5"),
                                "externalId" : "SUR_TEST_008_25_9_2024_15_0720240801165325",
                                "question" : [ 
                                    "What are the challenges that you are facing in enrolment?", 
                                    ""
                                ],
                                "tip" : "",
                                "hint" : "",
                                "responseType" : "slider",
                                "value" : "",
                                "isCompleted" : false,
                                "showRemarks" : false,
                                "remarks" : "",
                                "visibleIf" : "",
                                "options" : [],
                                "sliderOptions" : [],
                                "children" : [],
                                "questionGroup" : [ 
                                    "A1"
                                ],
                                "questionType" : "auto",
                                "modeOfCollection" : "onfield",
                                "usedForScoring" : "",
                                "file" : {
                                    "required" : true,
                                    "type" : [ 
                                        "image/jpeg", 
                                        "docx", 
                                        "pdf", 
                                        "ppt"
                                    ],
                                    "minCount" : 0,
                                    "maxCount" : 10,
                                    "caption" : "FALSE"
                                },
                                "fileName" : [],
                                "validation" : {
                                    "required" : true,
                                    "max" : "5",
                                    "min" : "1"
                                },
                                "accessibility" : "No",
                                "canBeNotApplicable" : "false",
                                "instanceQuestions" : [],
                                "isAGeneralQuestion" : false,
                                "autoCapture" : false,
                                "rubricLevel" : "",
                                "sectionHeader" : "",
                                "allowAudioRecording" : false,
                                "page" : "p5",
                                "questionNumber" : "5.2",
                                "weightage" : 1,
                                "prefillFromEntityProfile" : false,
                                "entityFieldName" : "",
                                "isEditable" : true,
                                "showQuestionInPreview" : false,
                                "deleted" : false,
                                "updatedAt" : new Date("2024-09-25T09:55:05.420Z"),
                                "createdAt" : new Date("2024-09-25T09:55:05.420Z"),
                                "__v" : 0,
                                "criteriaId" : new ObjectId("66f3dd81953231bda151086d")
                            }
                        ]
                    }
                ]
            }
        ],
        "externalId" : "a383af8d-7e4e-4c3b-a79d-ccf2bd14de58-SURVEY-TEMPLATE-SF",
        "flag" : null,
        "frameworkCriteriaId" : null,
        "keywords" : [ 
            "Keyword 1", 
            "Keyword 2"
        ],
        "language" : [ 
            "English"
        ],
        "name" : "Survey and Feedback",
        "owner" : "2",
        "remarks" : null,
        "resourceType" : [],
        "rubric" : null,
        "score" : null,
        "showRemarks" : null,
        "timesUsed" : null,
        "updatedAt" : new Date("2024-09-25T09:55:05.432Z"),
        "weightage" : null
    },
    {
        "_id" : new ObjectId("66f3de0c953231bda15108c2"),
        "__v" : 0,
        "concepts" : [],
        "createdAt" : new Date("2024-09-25T09:55:24.774Z"),
        "createdFor" : [],
        "criteriaType" : "manual",
        "deleted" : false,
        "description" : "Survey and Feedback",
        "evidences" : [ 
            {
                "code" : "SF",
                "sections" : [ 
                    {
                        "code" : "SQ",
                        "questions" : [ 
                            {
                                "_id" : new ObjectId("66f3de0c953231bda15108b0"),
                                "externalId" : "SUR_TEST_001_25_9_2024_15_0720240801165325-1727258124744",
                                "question" : [ 
                                    "Enter your First question no", 
                                    ""
                                ],
                                "tip" : "",
                                "hint" : "",
                                "responseType" : "text",
                                "value" : "",
                                "isCompleted" : false,
                                "showRemarks" : true,
                                "remarks" : "",
                                "visibleIf" : "",
                                "options" : [],
                                "sliderOptions" : [],
                                "children" : [ 
                                    new ObjectId("66f3de0c953231bda15108b2")
                                ],
                                "questionGroup" : [ 
                                    "A1"
                                ],
                                "questionType" : "auto",
                                "modeOfCollection" : "onfield",
                                "usedForScoring" : "",
                                "fileName" : [],
                                "validation" : {
                                    "required" : true
                                },
                                "accessibility" : "No",
                                "canBeNotApplicable" : "false",
                                "instanceQuestions" : [ 
                                    new ObjectId("66f3de0c953231bda15108b6"), 
                                    new ObjectId("66f3de0c953231bda15108b7")
                                ],
                                "isAGeneralQuestion" : false,
                                "autoCapture" : false,
                                "rubricLevel" : "",
                                "sectionHeader" : "",
                                "allowAudioRecording" : false,
                                "page" : "p1",
                                "questionNumber" : "1",
                                "weightage" : 1,
                                "prefillFromEntityProfile" : false,
                                "entityFieldName" : "",
                                "isEditable" : true,
                                "showQuestionInPreview" : false,
                                "createdFromQuestionId" : new ObjectId("66f3ddf9953231bda1510879"),
                                "updatedAt" : new Date("2024-09-25T09:55:24.750Z"),
                                "createdAt" : new Date("2024-09-25T09:55:05.277Z"),
                                "deleted" : false,
                                "__v" : 0,
                                "criteriaId" : new ObjectId("66f3de0c953231bda15108c2")
                            }, 
                            {
                                "_id" : new ObjectId("66f3de0c953231bda15108b1"),
                                "externalId" : "SUR_TEST_002_25_9_2024_15_0720240801165325-1727258124745",
                                "question" : [ 
                                    "Enter your First question no", 
                                    ""
                                ],
                                "tip" : "",
                                "hint" : "",
                                "responseType" : "radio",
                                "value" : "",
                                "isCompleted" : false,
                                "showRemarks" : false,
                                "remarks" : "",
                                "visibleIf" : "",
                                "options" : [ 
                                    {
                                        "value" : "R1",
                                        "label" : "Yes"
                                    }, 
                                    {
                                        "value" : "R2",
                                        "label" : "No"
                                    }
                                ],
                                "sliderOptions" : [],
                                "children" : [],
                                "questionGroup" : [ 
                                    "A1"
                                ],
                                "questionType" : "auto",
                                "modeOfCollection" : "onfield",
                                "usedForScoring" : "",
                                "file" : {
                                    "required" : true,
                                    "type" : [ 
                                        "image/jpeg", 
                                        "docx", 
                                        "pdf", 
                                        "ppt"
                                    ],
                                    "minCount" : 0,
                                    "maxCount" : 10,
                                    "caption" : "FALSE"
                                },
                                "fileName" : [],
                                "validation" : {
                                    "required" : true
                                },
                                "accessibility" : "No",
                                "canBeNotApplicable" : "false",
                                "instanceQuestions" : [],
                                "isAGeneralQuestion" : false,
                                "autoCapture" : false,
                                "rubricLevel" : "",
                                "sectionHeader" : "",
                                "allowAudioRecording" : false,
                                "page" : "p1",
                                "questionNumber" : "2",
                                "weightage" : 1,
                                "prefillFromEntityProfile" : false,
                                "entityFieldName" : "",
                                "isEditable" : true,
                                "showQuestionInPreview" : false,
                                "createdFromQuestionId" : new ObjectId("66f3ddf9953231bda151087f"),
                                "updatedAt" : new Date("2024-09-25T09:55:24.750Z"),
                                "createdAt" : new Date("2024-09-25T09:55:05.318Z"),
                                "deleted" : false,
                                "__v" : 0,
                                "criteriaId" : new ObjectId("66f3de0c953231bda15108c2")
                            }, 
                            {
                                "_id" : new ObjectId("66f3de0c953231bda15108b2"),
                                "externalId" : "SUR_TEST_003_25_9_2024_15_0720240801165325-1727258124745",
                                "question" : [ 
                                    "Are you planning to come back?", 
                                    ""
                                ],
                                "tip" : "",
                                "hint" : "",
                                "responseType" : "multiselect",
                                "value" : "",
                                "isCompleted" : false,
                                "showRemarks" : false,
                                "remarks" : "",
                                "visibleIf" : [ 
                                    {
                                        "operator" : "===",
                                        "value" : [ 
                                            "R2"
                                        ],
                                        "_id" : new ObjectId("66f3de0c953231bda15108b0")
                                    }
                                ],
                                "options" : [ 
                                    {
                                        "value" : "R1",
                                        "label" : "Simple mobile phone without internet/data pack"
                                    }, 
                                    {
                                        "value" : "R2",
                                        "label" : "Smart phone with internet/data pack"
                                    }, 
                                    {
                                        "value" : "R3",
                                        "label" : "Smart phone without internet/data pack"
                                    }, 
                                    {
                                        "value" : "R4",
                                        "label" : "TV"
                                    }, 
                                    {
                                        "value" : "R5",
                                        "label" : "Radio"
                                    }
                                ],
                                "sliderOptions" : [],
                                "children" : [],
                                "questionGroup" : [ 
                                    "A1"
                                ],
                                "questionType" : "auto",
                                "modeOfCollection" : "onfield",
                                "usedForScoring" : "",
                                "file" : {
                                    "required" : true,
                                    "type" : [ 
                                        "image/jpeg", 
                                        "docx", 
                                        "pdf", 
                                        "ppt"
                                    ],
                                    "minCount" : 0,
                                    "maxCount" : 10,
                                    "caption" : "FALSE"
                                },
                                "fileName" : [],
                                "validation" : {
                                    "required" : true
                                },
                                "accessibility" : "No",
                                "canBeNotApplicable" : "false",
                                "instanceQuestions" : [],
                                "isAGeneralQuestion" : false,
                                "autoCapture" : false,
                                "rubricLevel" : "",
                                "sectionHeader" : "",
                                "allowAudioRecording" : false,
                                "page" : "p1",
                                "questionNumber" : "2.1",
                                "weightage" : 1,
                                "prefillFromEntityProfile" : false,
                                "entityFieldName" : "",
                                "isEditable" : true,
                                "showQuestionInPreview" : false,
                                "createdFromQuestionId" : new ObjectId("66f3ddf9953231bda1510885"),
                                "updatedAt" : new Date("2024-09-25T09:55:24.750Z"),
                                "createdAt" : new Date("2024-09-25T09:55:05.332Z"),
                                "deleted" : false,
                                "__v" : 0,
                                "criteriaId" : new ObjectId("66f3de0c953231bda15108c2")
                            }, 
                            {
                                "_id" : new ObjectId("66f3de0c953231bda15108b3"),
                                "externalId" : "SUR_TEST_004_25_9_2024_15_0720240801165325-1727258124746",
                                "question" : [ 
                                    "How many devices are there in home/", 
                                    ""
                                ],
                                "tip" : "",
                                "hint" : "",
                                "responseType" : "number",
                                "value" : "",
                                "isCompleted" : false,
                                "showRemarks" : false,
                                "remarks" : "",
                                "visibleIf" : "",
                                "options" : [],
                                "sliderOptions" : [],
                                "children" : [],
                                "questionGroup" : [ 
                                    "A1"
                                ],
                                "questionType" : "auto",
                                "modeOfCollection" : "onfield",
                                "usedForScoring" : "",
                                "file" : {
                                    "required" : true,
                                    "type" : [ 
                                        "image/jpeg", 
                                        "docx", 
                                        "pdf", 
                                        "ppt"
                                    ],
                                    "minCount" : 0,
                                    "maxCount" : 10,
                                    "caption" : "FALSE"
                                },
                                "fileName" : [],
                                "validation" : {
                                    "required" : true,
                                    "IsNumber" : "true"
                                },
                                "accessibility" : "No",
                                "canBeNotApplicable" : "false",
                                "instanceQuestions" : [],
                                "isAGeneralQuestion" : false,
                                "autoCapture" : false,
                                "rubricLevel" : "",
                                "sectionHeader" : "",
                                "allowAudioRecording" : false,
                                "page" : "p1",
                                "questionNumber" : "3",
                                "weightage" : 1,
                                "prefillFromEntityProfile" : false,
                                "entityFieldName" : "",
                                "isEditable" : true,
                                "showQuestionInPreview" : false,
                                "createdFromQuestionId" : new ObjectId("66f3ddf9953231bda151088c"),
                                "updatedAt" : new Date("2024-09-25T09:55:24.750Z"),
                                "createdAt" : new Date("2024-09-25T09:55:05.349Z"),
                                "deleted" : false,
                                "__v" : 0,
                                "criteriaId" : new ObjectId("66f3de0c953231bda15108c2")
                            }, 
                            {
                                "_id" : new ObjectId("66f3de0c953231bda15108b4"),
                                "externalId" : "SUR_TEST_005_25_9_2024_15_0720240801165325-1727258124746",
                                "question" : [ 
                                    "What type of device is available at home?", 
                                    ""
                                ],
                                "tip" : "",
                                "hint" : "",
                                "responseType" : "date",
                                "value" : "",
                                "isCompleted" : false,
                                "showRemarks" : false,
                                "remarks" : "",
                                "visibleIf" : "",
                                "options" : [],
                                "sliderOptions" : [],
                                "children" : [],
                                "questionGroup" : [ 
                                    "A1"
                                ],
                                "questionType" : "auto",
                                "modeOfCollection" : "onfield",
                                "usedForScoring" : "",
                                "file" : {
                                    "required" : true,
                                    "type" : [ 
                                        "image/jpeg", 
                                        "docx", 
                                        "pdf", 
                                        "ppt"
                                    ],
                                    "minCount" : 0,
                                    "maxCount" : 10,
                                    "caption" : "FALSE"
                                },
                                "fileName" : [],
                                "validation" : {
                                    "required" : true,
                                    "max" : "",
                                    "min" : ""
                                },
                                "accessibility" : "No",
                                "canBeNotApplicable" : "false",
                                "instanceQuestions" : [],
                                "isAGeneralQuestion" : false,
                                "dateFormat" : "DD-MM-YYYY",
                                "autoCapture" : false,
                                "rubricLevel" : "",
                                "sectionHeader" : "",
                                "allowAudioRecording" : false,
                                "page" : "p2",
                                "questionNumber" : "4",
                                "weightage" : 1,
                                "prefillFromEntityProfile" : false,
                                "entityFieldName" : "",
                                "isEditable" : true,
                                "showQuestionInPreview" : false,
                                "createdFromQuestionId" : new ObjectId("66f3ddf9953231bda1510892"),
                                "updatedAt" : new Date("2024-09-25T09:55:24.750Z"),
                                "createdAt" : new Date("2024-09-25T09:55:05.366Z"),
                                "deleted" : false,
                                "__v" : 0,
                                "criteriaId" : new ObjectId("66f3de0c953231bda15108c2")
                            }, 
                            {
                                "_id" : new ObjectId("66f3de0c953231bda15108b5"),
                                "externalId" : "SUR_TEST_006_25_9_2024_15_0720240801165325-1727258124746",
                                "question" : [ 
                                    "Does the child have a quiet place to study?", 
                                    ""
                                ],
                                "tip" : "",
                                "hint" : "",
                                "responseType" : "matrix",
                                "value" : "",
                                "isCompleted" : false,
                                "showRemarks" : false,
                                "remarks" : "",
                                "visibleIf" : "",
                                "options" : [],
                                "sliderOptions" : [],
                                "children" : [],
                                "questionGroup" : [ 
                                    "A1"
                                ],
                                "questionType" : "auto",
                                "modeOfCollection" : "onfield",
                                "usedForScoring" : "",
                                "file" : {
                                    "required" : true,
                                    "type" : [ 
                                        "image/jpeg", 
                                        "docx", 
                                        "pdf", 
                                        "ppt"
                                    ],
                                    "minCount" : 0,
                                    "maxCount" : 10,
                                    "caption" : "FALSE"
                                },
                                "fileName" : [],
                                "validation" : {
                                    "required" : true
                                },
                                "accessibility" : "No",
                                "instanceIdentifier" : "Student",
                                "canBeNotApplicable" : "false",
                                "instanceQuestions" : [],
                                "isAGeneralQuestion" : false,
                                "autoCapture" : false,
                                "rubricLevel" : "",
                                "sectionHeader" : "",
                                "allowAudioRecording" : false,
                                "page" : "p3",
                                "questionNumber" : "5",
                                "weightage" : 1,
                                "prefillFromEntityProfile" : false,
                                "entityFieldName" : "",
                                "isEditable" : true,
                                "showQuestionInPreview" : false,
                                "createdFromQuestionId" : new ObjectId("66f3ddf9953231bda1510898"),
                                "updatedAt" : new Date("2024-09-25T09:55:24.750Z"),
                                "createdAt" : new Date("2024-09-25T09:55:05.383Z"),
                                "deleted" : false,
                                "__v" : 0,
                                "criteriaId" : new ObjectId("66f3de0c953231bda15108c2")
                            }, 
                            {
                                "_id" : new ObjectId("66f3de0c953231bda15108b6"),
                                "externalId" : "SUR_TEST_007_25_9_2024_15_0720240801165325-1727258124747",
                                "question" : [ 
                                    "Were you able to enroll your child in courses on Diksha?", 
                                    ""
                                ],
                                "tip" : "",
                                "hint" : "",
                                "responseType" : "multiselect",
                                "value" : "",
                                "isCompleted" : false,
                                "showRemarks" : false,
                                "remarks" : "",
                                "visibleIf" : "",
                                "options" : [ 
                                    {
                                        "value" : "R1",
                                        "label" : "Not able to use the app"
                                    }, 
                                    {
                                        "value" : "R2",
                                        "label" : "Not aware of classrooms on DIKSHA"
                                    }, 
                                    {
                                        "value" : "R3",
                                        "label" : "Not aware of the enrolment process in the classroom"
                                    }, 
                                    {
                                        "value" : "R4",
                                        "label" : "Not aware of enrolment process in the courses"
                                    }, 
                                    {
                                        "value" : "R5",
                                        "label" : "Don’t find the courses useful"
                                    }, 
                                    {
                                        "value" : "R6",
                                        "label" : "Others"
                                    }
                                ],
                                "sliderOptions" : [],
                                "children" : [],
                                "questionGroup" : [ 
                                    "A1"
                                ],
                                "questionType" : "auto",
                                "modeOfCollection" : "onfield",
                                "usedForScoring" : "",
                                "file" : {
                                    "required" : true,
                                    "type" : [ 
                                        "image/jpeg", 
                                        "docx", 
                                        "pdf", 
                                        "ppt"
                                    ],
                                    "minCount" : 0,
                                    "maxCount" : 10,
                                    "caption" : "FALSE"
                                },
                                "fileName" : [],
                                "validation" : {
                                    "required" : true
                                },
                                "accessibility" : "No",
                                "canBeNotApplicable" : "false",
                                "instanceQuestions" : [],
                                "isAGeneralQuestion" : false,
                                "autoCapture" : false,
                                "rubricLevel" : "",
                                "sectionHeader" : "",
                                "allowAudioRecording" : false,
                                "page" : "p4",
                                "questionNumber" : "5.1",
                                "weightage" : 1,
                                "prefillFromEntityProfile" : false,
                                "entityFieldName" : "",
                                "isEditable" : true,
                                "showQuestionInPreview" : false,
                                "createdFromQuestionId" : new ObjectId("66f3ddf9953231bda151089e"),
                                "updatedAt" : new Date("2024-09-25T09:55:24.750Z"),
                                "createdAt" : new Date("2024-09-25T09:55:05.402Z"),
                                "deleted" : false,
                                "__v" : 0,
                                "criteriaId" : new ObjectId("66f3de0c953231bda15108c2")
                            }, 
                            {
                                "_id" : new ObjectId("66f3de0c953231bda15108b7"),
                                "externalId" : "SUR_TEST_008_25_9_2024_15_0720240801165325-1727258124748",
                                "question" : [ 
                                    "What are the challenges that you are facing in enrolment?", 
                                    ""
                                ],
                                "tip" : "",
                                "hint" : "",
                                "responseType" : "slider",
                                "value" : "",
                                "isCompleted" : false,
                                "showRemarks" : false,
                                "remarks" : "",
                                "visibleIf" : "",
                                "options" : [],
                                "sliderOptions" : [],
                                "children" : [],
                                "questionGroup" : [ 
                                    "A1"
                                ],
                                "questionType" : "auto",
                                "modeOfCollection" : "onfield",
                                "usedForScoring" : "",
                                "file" : {
                                    "required" : true,
                                    "type" : [ 
                                        "image/jpeg", 
                                        "docx", 
                                        "pdf", 
                                        "ppt"
                                    ],
                                    "minCount" : 0,
                                    "maxCount" : 10,
                                    "caption" : "FALSE"
                                },
                                "fileName" : [],
                                "validation" : {
                                    "required" : true,
                                    "max" : "5",
                                    "min" : "1"
                                },
                                "accessibility" : "No",
                                "canBeNotApplicable" : "false",
                                "instanceQuestions" : [],
                                "isAGeneralQuestion" : false,
                                "autoCapture" : false,
                                "rubricLevel" : "",
                                "sectionHeader" : "",
                                "allowAudioRecording" : false,
                                "page" : "p5",
                                "questionNumber" : "5.2",
                                "weightage" : 1,
                                "prefillFromEntityProfile" : false,
                                "entityFieldName" : "",
                                "isEditable" : true,
                                "showQuestionInPreview" : false,
                                "createdFromQuestionId" : new ObjectId("66f3ddf9953231bda15108a5"),
                                "updatedAt" : new Date("2024-09-25T09:55:24.750Z"),
                                "createdAt" : new Date("2024-09-25T09:55:05.420Z"),
                                "deleted" : false,
                                "__v" : 0,
                                "criteriaId" : new ObjectId("66f3de0c953231bda15108c2")
                            }
                        ]
                    }
                ]
            }
        ],
        "externalId" : "a383af8d-7e4e-4c3b-a79d-ccf2bd14de58-1727258124738-SF",
        "flag" : null,
        "frameworkCriteriaId" : null,
        "keywords" : [ 
            "Keyword 1", 
            "Keyword 2"
        ],
        "language" : [ 
            "English"
        ],
        "name" : "Survey and Feedback",
        "owner" : "2",
        "remarks" : null,
        "resourceType" : [],
        "rubric" : null,
        "score" : null,
        "showRemarks" : null,
        "timesUsed" : null,
        "updatedAt" : new Date("2024-09-25T09:55:24.774Z"),
        "weightage" : null
    }]

let questionsData = [
{
    "_id" :new ObjectId("66f3ddf9953231bda1510879"),
    "externalId" : "SUR_TEST_001_25_9_2024_15_0720240801165325",
    "question" : [ 
        "Enter your First question no", 
        ""
    ],
    "tip" : "",
    "hint" : "",
    "responseType" : "text",
    "value" : "",
    "isCompleted" : false,
    "showRemarks" : true,
    "remarks" : "",
    "visibleIf" : "",
    "options" : [],
    "sliderOptions" : [],
    "children" : [ 
       new ObjectId("66f3ddf9953231bda1510885")
    ],
    "questionGroup" : [ 
        "A1"
    ],
    "questionType" : "auto",
    "modeOfCollection" : "onfield",
    "usedForScoring" : "",
    "fileName" : [],
    "validation" : {
        "required" : true
    },
    "accessibility" : "No",
    "canBeNotApplicable" : "false",
    "instanceQuestions" : [ 
       new ObjectId("66f3ddf9953231bda151089e"), 
       new ObjectId("66f3ddf9953231bda15108a5")
    ],
    "isAGeneralQuestion" : false,
    "autoCapture" : false,
    "rubricLevel" : "",
    "sectionHeader" : "",
    "allowAudioRecording" : false,
    "page" : "p1",
    "questionNumber" : "1",
    "weightage" : 1,
    "prefillFromEntityProfile" : false,
    "entityFieldName" : "",
    "isEditable" : true,
    "showQuestionInPreview" : false,
    "deleted" : false,
    "updatedAt" : new Date("2024-09-25T09:55:05.422Z"),
    "createdAt" : new Date("2024-09-25T09:55:05.277Z"),
    "__v" : 0
},
{
    "_id" :new ObjectId("66f3ddf9953231bda151087f"),
    "externalId" : "SUR_TEST_002_25_9_2024_15_0720240801165325",
    "question" : [ 
        "Enter your First question no", 
        ""
    ],
    "tip" : "",
    "hint" : "",
    "responseType" : "radio",
    "value" : "",
    "isCompleted" : false,
    "showRemarks" : false,
    "remarks" : "",
    "visibleIf" : "",
    "options" : [ 
        {
            "value" : "R1",
            "label" : "Yes"
        }, 
        {
            "value" : "R2",
            "label" : "No"
        }
    ],
    "sliderOptions" : [],
    "children" : [],
    "questionGroup" : [ 
        "A1"
    ],
    "questionType" : "auto",
    "modeOfCollection" : "onfield",
    "usedForScoring" : "",
    "file" : {
        "required" : true,
        "type" : [ 
            "image/jpeg", 
            "docx", 
            "pdf", 
            "ppt"
        ],
        "minCount" : 0,
        "maxCount" : 10,
        "caption" : "FALSE"
    },
    "fileName" : [],
    "validation" : {
        "required" : true
    },
    "accessibility" : "No",
    "canBeNotApplicable" : "false",
    "instanceQuestions" : [],
    "isAGeneralQuestion" : false,
    "autoCapture" : false,
    "rubricLevel" : "",
    "sectionHeader" : "",
    "allowAudioRecording" : false,
    "page" : "p1",
    "questionNumber" : "2",
    "weightage" : 1,
    "prefillFromEntityProfile" : false,
    "entityFieldName" : "",
    "isEditable" : true,
    "showQuestionInPreview" : false,
    "deleted" : false,
    "updatedAt" : new Date("2024-09-25T09:55:05.318Z"),
    "createdAt" : new Date("2024-09-25T09:55:05.318Z"),
    "__v" : 0
},
{
    "_id" :new ObjectId("66f3ddf9953231bda1510885"),
    "externalId" : "SUR_TEST_003_25_9_2024_15_0720240801165325",
    "question" : [ 
        "Are you planning to come back?", 
        ""
    ],
    "tip" : "",
    "hint" : "",
    "responseType" : "multiselect",
    "value" : "",
    "isCompleted" : false,
    "showRemarks" : false,
    "remarks" : "",
    "visibleIf" : [ 
        {
            "operator" : "===",
            "value" : [ 
                "R2"
            ],
            "_id" :new ObjectId("66f3ddf9953231bda1510879")
        }
    ],
    "options" : [ 
        {
            "value" : "R1",
            "label" : "Simple mobile phone without internet/data pack"
        }, 
        {
            "value" : "R2",
            "label" : "Smart phone with internet/data pack"
        }, 
        {
            "value" : "R3",
            "label" : "Smart phone without internet/data pack"
        }, 
        {
            "value" : "R4",
            "label" : "TV"
        }, 
        {
            "value" : "R5",
            "label" : "Radio"
        }
    ],
    "sliderOptions" : [],
    "children" : [],
    "questionGroup" : [ 
        "A1"
    ],
    "questionType" : "auto",
    "modeOfCollection" : "onfield",
    "usedForScoring" : "",
    "file" : {
        "required" : true,
        "type" : [ 
            "image/jpeg", 
            "docx", 
            "pdf", 
            "ppt"
        ],
        "minCount" : 0,
        "maxCount" : 10,
        "caption" : "FALSE"
    },
    "fileName" : [],
    "validation" : {
        "required" : true
    },
    "accessibility" : "No",
    "canBeNotApplicable" : "false",
    "instanceQuestions" : [],
    "isAGeneralQuestion" : false,
    "autoCapture" : false,
    "rubricLevel" : "",
    "sectionHeader" : "",
    "allowAudioRecording" : false,
    "page" : "p1",
    "questionNumber" : "2.1",
    "weightage" : 1,
    "prefillFromEntityProfile" : false,
    "entityFieldName" : "",
    "isEditable" : true,
    "showQuestionInPreview" : false,
    "deleted" : false,
    "updatedAt" : new Date("2024-09-25T09:55:05.332Z"),
    "createdAt" : new Date("2024-09-25T09:55:05.332Z"),
    "__v" : 0
},
{
    "_id" :new ObjectId("66f3ddf9953231bda151088c"),
    "externalId" : "SUR_TEST_004_25_9_2024_15_0720240801165325",
    "question" : [ 
        "How many devices are there in home/", 
        ""
    ],
    "tip" : "",
    "hint" : "",
    "responseType" : "number",
    "value" : "",
    "isCompleted" : false,
    "showRemarks" : false,
    "remarks" : "",
    "visibleIf" : "",
    "options" : [],
    "sliderOptions" : [],
    "children" : [],
    "questionGroup" : [ 
        "A1"
    ],
    "questionType" : "auto",
    "modeOfCollection" : "onfield",
    "usedForScoring" : "",
    "file" : {
        "required" : true,
        "type" : [ 
            "image/jpeg", 
            "docx", 
            "pdf", 
            "ppt"
        ],
        "minCount" : 0,
        "maxCount" : 10,
        "caption" : "FALSE"
    },
    "fileName" : [],
    "validation" : {
        "required" : true,
        "IsNumber" : "true"
    },
    "accessibility" : "No",
    "canBeNotApplicable" : "false",
    "instanceQuestions" : [],
    "isAGeneralQuestion" : false,
    "autoCapture" : false,
    "rubricLevel" : "",
    "sectionHeader" : "",
    "allowAudioRecording" : false,
    "page" : "p1",
    "questionNumber" : "3",
    "weightage" : 1,
    "prefillFromEntityProfile" : false,
    "entityFieldName" : "",
    "isEditable" : true,
    "showQuestionInPreview" : false,
    "deleted" : false,
    "updatedAt" : new Date("2024-09-25T09:55:05.349Z"),
    "createdAt" : new Date("2024-09-25T09:55:05.349Z"),
    "__v" : 0
},
{
    "_id" :new ObjectId("66f3ddf9953231bda1510892"),
    "externalId" : "SUR_TEST_005_25_9_2024_15_0720240801165325",
    "question" : [ 
        "What type of device is available at home?", 
        ""
    ],
    "tip" : "",
    "hint" : "",
    "responseType" : "date",
    "value" : "",
    "isCompleted" : false,
    "showRemarks" : false,
    "remarks" : "",
    "visibleIf" : "",
    "options" : [],
    "sliderOptions" : [],
    "children" : [],
    "questionGroup" : [ 
        "A1"
    ],
    "questionType" : "auto",
    "modeOfCollection" : "onfield",
    "usedForScoring" : "",
    "file" : {
        "required" : true,
        "type" : [ 
            "image/jpeg", 
            "docx", 
            "pdf", 
            "ppt"
        ],
        "minCount" : 0,
        "maxCount" : 10,
        "caption" : "FALSE"
    },
    "fileName" : [],
    "validation" : {
        "required" : true,
        "max" : "",
        "min" : ""
    },
    "accessibility" : "No",
    "canBeNotApplicable" : "false",
    "instanceQuestions" : [],
    "isAGeneralQuestion" : false,
    "dateFormat" : "DD-MM-YYYY",
    "autoCapture" : false,
    "rubricLevel" : "",
    "sectionHeader" : "",
    "allowAudioRecording" : false,
    "page" : "p2",
    "questionNumber" : "4",
    "weightage" : 1,
    "prefillFromEntityProfile" : false,
    "entityFieldName" : "",
    "isEditable" : true,
    "showQuestionInPreview" : false,
    "deleted" : false,
    "updatedAt" : new Date("2024-09-25T09:55:05.366Z"),
    "createdAt" : new Date("2024-09-25T09:55:05.366Z"),
    "__v" : 0
},
{
    "_id" :new ObjectId("66f3ddf9953231bda1510898"),
    "externalId" : "SUR_TEST_006_25_9_2024_15_0720240801165325",
    "question" : [ 
        "Does the child have a quiet place to study?", 
        ""
    ],
    "tip" : "",
    "hint" : "",
    "responseType" : "matrix",
    "value" : "",
    "isCompleted" : false,
    "showRemarks" : false,
    "remarks" : "",
    "visibleIf" : "",
    "options" : [],
    "sliderOptions" : [],
    "children" : [],
    "questionGroup" : [ 
        "A1"
    ],
    "questionType" : "auto",
    "modeOfCollection" : "onfield",
    "usedForScoring" : "",
    "file" : {
        "required" : true,
        "type" : [ 
            "image/jpeg", 
            "docx", 
            "pdf", 
            "ppt"
        ],
        "minCount" : 0,
        "maxCount" : 10,
        "caption" : "FALSE"
    },
    "fileName" : [],
    "validation" : {
        "required" : true
    },
    "accessibility" : "No",
    "instanceIdentifier" : "Student",
    "canBeNotApplicable" : "false",
    "instanceQuestions" : [],
    "isAGeneralQuestion" : false,
    "autoCapture" : false,
    "rubricLevel" : "",
    "sectionHeader" : "",
    "allowAudioRecording" : false,
    "page" : "p3",
    "questionNumber" : "5",
    "weightage" : 1,
    "prefillFromEntityProfile" : false,
    "entityFieldName" : "",
    "isEditable" : true,
    "showQuestionInPreview" : false,
    "deleted" : false,
    "updatedAt" : new Date("2024-09-25T09:55:05.383Z"),
    "createdAt" : new Date("2024-09-25T09:55:05.383Z"),
    "__v" : 0
},
{
    "_id" :new ObjectId("66f3ddf9953231bda151089e"),
    "externalId" : "SUR_TEST_007_25_9_2024_15_0720240801165325",
    "question" : [ 
        "Were you able to enroll your child in courses on Diksha?", 
        ""
    ],
    "tip" : "",
    "hint" : "",
    "responseType" : "multiselect",
    "value" : "",
    "isCompleted" : false,
    "showRemarks" : false,
    "remarks" : "",
    "visibleIf" : "",
    "options" : [ 
        {
            "value" : "R1",
            "label" : "Not able to use the app"
        }, 
        {
            "value" : "R2",
            "label" : "Not aware of classrooms on DIKSHA"
        }, 
        {
            "value" : "R3",
            "label" : "Not aware of the enrolment process in the classroom"
        }, 
        {
            "value" : "R4",
            "label" : "Not aware of enrolment process in the courses"
        }, 
        {
            "value" : "R5",
            "label" : "Don’t find the courses useful"
        }, 
        {
            "value" : "R6",
            "label" : "Others"
        }
    ],
    "sliderOptions" : [],
    "children" : [],
    "questionGroup" : [ 
        "A1"
    ],
    "questionType" : "auto",
    "modeOfCollection" : "onfield",
    "usedForScoring" : "",
    "file" : {
        "required" : true,
        "type" : [ 
            "image/jpeg", 
            "docx", 
            "pdf", 
            "ppt"
        ],
        "minCount" : 0,
        "maxCount" : 10,
        "caption" : "FALSE"
    },
    "fileName" : [],
    "validation" : {
        "required" : true
    },
    "accessibility" : "No",
    "canBeNotApplicable" : "false",
    "instanceQuestions" : [],
    "isAGeneralQuestion" : false,
    "autoCapture" : false,
    "rubricLevel" : "",
    "sectionHeader" : "",
    "allowAudioRecording" : false,
    "page" : "p4",
    "questionNumber" : "5.1",
    "weightage" : 1,
    "prefillFromEntityProfile" : false,
    "entityFieldName" : "",
    "isEditable" : true,
    "showQuestionInPreview" : false,
    "deleted" : false,
    "updatedAt" : new Date("2024-09-25T09:55:05.402Z"),
    "createdAt" : new Date("2024-09-25T09:55:05.402Z"),
    "__v" : 0
},
{
    "_id" :new ObjectId("66f3ddf9953231bda15108a5"),
    "externalId" : "SUR_TEST_008_25_9_2024_15_0720240801165325",
    "question" : [ 
        "What are the challenges that you are facing in enrolment?", 
        ""
    ],
    "tip" : "",
    "hint" : "",
    "responseType" : "slider",
    "value" : "",
    "isCompleted" : false,
    "showRemarks" : false,
    "remarks" : "",
    "visibleIf" : "",
    "options" : [],
    "sliderOptions" : [],
    "children" : [],
    "questionGroup" : [ 
        "A1"
    ],
    "questionType" : "auto",
    "modeOfCollection" : "onfield",
    "usedForScoring" : "",
    "file" : {
        "required" : true,
        "type" : [ 
            "image/jpeg", 
            "docx", 
            "pdf", 
            "ppt"
        ],
        "minCount" : 0,
        "maxCount" : 10,
        "caption" : "FALSE"
    },
    "fileName" : [],
    "validation" : {
        "required" : true,
        "max" : "5",
        "min" : "1"
    },
    "accessibility" : "No",
    "canBeNotApplicable" : "false",
    "instanceQuestions" : [],
    "isAGeneralQuestion" : false,
    "autoCapture" : false,
    "rubricLevel" : "",
    "sectionHeader" : "",
    "allowAudioRecording" : false,
    "page" : "p5",
    "questionNumber" : "5.2",
    "weightage" : 1,
    "prefillFromEntityProfile" : false,
    "entityFieldName" : "",
    "isEditable" : true,
    "showQuestionInPreview" : false,
    "deleted" : false,
    "updatedAt" : new Date("2024-09-25T09:55:05.420Z"),
    "createdAt" : new Date("2024-09-25T09:55:05.420Z"),
    "__v" : 0
},
{
    "_id" :new ObjectId("66f3de0c953231bda15108b0"),
    "externalId" : "SUR_TEST_001_25_9_2024_15_0720240801165325-1727258124744",
    "question" : [ 
        "Enter your First question no", 
        ""
    ],
    "tip" : "",
    "hint" : "",
    "responseType" : "text",
    "value" : "",
    "isCompleted" : false,
    "showRemarks" : true,
    "remarks" : "",
    "visibleIf" : "",
    "options" : [],
    "sliderOptions" : [],
    "children" : [ 
       new ObjectId("66f3de0c953231bda15108b2")
    ],
    "questionGroup" : [ 
        "A1"
    ],
    "questionType" : "auto",
    "modeOfCollection" : "onfield",
    "usedForScoring" : "",
    "fileName" : [],
    "validation" : {
        "required" : true
    },
    "accessibility" : "No",
    "canBeNotApplicable" : "false",
    "instanceQuestions" : [ 
       new ObjectId("66f3de0c953231bda15108b6"), 
       new ObjectId("66f3de0c953231bda15108b7")
    ],
    "isAGeneralQuestion" : false,
    "autoCapture" : false,
    "rubricLevel" : "",
    "sectionHeader" : "",
    "allowAudioRecording" : false,
    "page" : "p1",
    "questionNumber" : "1",
    "weightage" : 1,
    "prefillFromEntityProfile" : false,
    "entityFieldName" : "",
    "isEditable" : true,
    "showQuestionInPreview" : false,
    "createdFromQuestionId" :new ObjectId("66f3ddf9953231bda1510879"),
    "updatedAt" : new Date("2024-09-25T09:55:24.750Z"),
    "createdAt" : new Date("2024-09-25T09:55:05.277Z"),
    "deleted" : false,
    "__v" : 0
},
{
    "_id" :new ObjectId("66f3de0c953231bda15108b4"),
    "externalId" : "SUR_TEST_005_25_9_2024_15_0720240801165325-1727258124746",
    "question" : [ 
        "What type of device is available at home?", 
        ""
    ],
    "tip" : "",
    "hint" : "",
    "responseType" : "date",
    "value" : "",
    "isCompleted" : false,
    "showRemarks" : false,
    "remarks" : "",
    "visibleIf" : "",
    "options" : [],
    "sliderOptions" : [],
    "children" : [],
    "questionGroup" : [ 
        "A1"
    ],
    "questionType" : "auto",
    "modeOfCollection" : "onfield",
    "usedForScoring" : "",
    "file" : {
        "required" : true,
        "type" : [ 
            "image/jpeg", 
            "docx", 
            "pdf", 
            "ppt"
        ],
        "minCount" : 0,
        "maxCount" : 10,
        "caption" : "FALSE"
    },
    "fileName" : [],
    "validation" : {
        "required" : true,
        "max" : "",
        "min" : ""
    },
    "accessibility" : "No",
    "canBeNotApplicable" : "false",
    "instanceQuestions" : [],
    "isAGeneralQuestion" : false,
    "dateFormat" : "DD-MM-YYYY",
    "autoCapture" : false,
    "rubricLevel" : "",
    "sectionHeader" : "",
    "allowAudioRecording" : false,
    "page" : "p2",
    "questionNumber" : "4",
    "weightage" : 1,
    "prefillFromEntityProfile" : false,
    "entityFieldName" : "",
    "isEditable" : true,
    "showQuestionInPreview" : false,
    "createdFromQuestionId" :new ObjectId("66f3ddf9953231bda1510892"),
    "updatedAt" : new Date("2024-09-25T09:55:24.750Z"),
    "createdAt" : new Date("2024-09-25T09:55:05.366Z"),
    "deleted" : false,
    "__v" : 0
},
{
    "_id" :new ObjectId("66f3de0c953231bda15108b3"),
    "externalId" : "SUR_TEST_004_25_9_2024_15_0720240801165325-1727258124746",
    "question" : [ 
        "How many devices are there in home/", 
        ""
    ],
    "tip" : "",
    "hint" : "",
    "responseType" : "number",
    "value" : "",
    "isCompleted" : false,
    "showRemarks" : false,
    "remarks" : "",
    "visibleIf" : "",
    "options" : [],
    "sliderOptions" : [],
    "children" : [],
    "questionGroup" : [ 
        "A1"
    ],
    "questionType" : "auto",
    "modeOfCollection" : "onfield",
    "usedForScoring" : "",
    "file" : {
        "required" : true,
        "type" : [ 
            "image/jpeg", 
            "docx", 
            "pdf", 
            "ppt"
        ],
        "minCount" : 0,
        "maxCount" : 10,
        "caption" : "FALSE"
    },
    "fileName" : [],
    "validation" : {
        "required" : true,
        "IsNumber" : "true"
    },
    "accessibility" : "No",
    "canBeNotApplicable" : "false",
    "instanceQuestions" : [],
    "isAGeneralQuestion" : false,
    "autoCapture" : false,
    "rubricLevel" : "",
    "sectionHeader" : "",
    "allowAudioRecording" : false,
    "page" : "p1",
    "questionNumber" : "3",
    "weightage" : 1,
    "prefillFromEntityProfile" : false,
    "entityFieldName" : "",
    "isEditable" : true,
    "showQuestionInPreview" : false,
    "createdFromQuestionId" :new ObjectId("66f3ddf9953231bda151088c"),
    "updatedAt" : new Date("2024-09-25T09:55:24.750Z"),
    "createdAt" : new Date("2024-09-25T09:55:05.349Z"),
    "deleted" : false,
    "__v" : 0
},
{
    "_id" :new ObjectId("66f3de0c953231bda15108b2"),
    "externalId" : "SUR_TEST_003_25_9_2024_15_0720240801165325-1727258124745",
    "question" : [ 
        "Are you planning to come back?", 
        ""
    ],
    "tip" : "",
    "hint" : "",
    "responseType" : "multiselect",
    "value" : "",
    "isCompleted" : false,
    "showRemarks" : false,
    "remarks" : "",
    "visibleIf" : [ 
        {
            "operator" : "===",
            "value" : [ 
                "R2"
            ],
            "_id" :new ObjectId("66f3de0c953231bda15108b0")
        }
    ],
    "options" : [ 
        {
            "value" : "R1",
            "label" : "Simple mobile phone without internet/data pack"
        }, 
        {
            "value" : "R2",
            "label" : "Smart phone with internet/data pack"
        }, 
        {
            "value" : "R3",
            "label" : "Smart phone without internet/data pack"
        }, 
        {
            "value" : "R4",
            "label" : "TV"
        }, 
        {
            "value" : "R5",
            "label" : "Radio"
        }
    ],
    "sliderOptions" : [],
    "children" : [],
    "questionGroup" : [ 
        "A1"
    ],
    "questionType" : "auto",
    "modeOfCollection" : "onfield",
    "usedForScoring" : "",
    "file" : {
        "required" : true,
        "type" : [ 
            "image/jpeg", 
            "docx", 
            "pdf", 
            "ppt"
        ],
        "minCount" : 0,
        "maxCount" : 10,
        "caption" : "FALSE"
    },
    "fileName" : [],
    "validation" : {
        "required" : true
    },
    "accessibility" : "No",
    "canBeNotApplicable" : "false",
    "instanceQuestions" : [],
    "isAGeneralQuestion" : false,
    "autoCapture" : false,
    "rubricLevel" : "",
    "sectionHeader" : "",
    "allowAudioRecording" : false,
    "page" : "p1",
    "questionNumber" : "2.1",
    "weightage" : 1,
    "prefillFromEntityProfile" : false,
    "entityFieldName" : "",
    "isEditable" : true,
    "showQuestionInPreview" : false,
    "createdFromQuestionId" :new ObjectId("66f3ddf9953231bda1510885"),
    "updatedAt" : new Date("2024-09-25T09:55:24.750Z"),
    "createdAt" : new Date("2024-09-25T09:55:05.332Z"),
    "deleted" : false,
    "__v" : 0
},
{
    "_id" :new ObjectId("66f3de0c953231bda15108b1"),
    "externalId" : "SUR_TEST_002_25_9_2024_15_0720240801165325-1727258124745",
    "question" : [ 
        "Enter your First question no", 
        ""
    ],
    "tip" : "",
    "hint" : "",
    "responseType" : "radio",
    "value" : "",
    "isCompleted" : false,
    "showRemarks" : false,
    "remarks" : "",
    "visibleIf" : "",
    "options" : [ 
        {
            "value" : "R1",
            "label" : "Yes"
        }, 
        {
            "value" : "R2",
            "label" : "No"
        }
    ],
    "sliderOptions" : [],
    "children" : [],
    "questionGroup" : [ 
        "A1"
    ],
    "questionType" : "auto",
    "modeOfCollection" : "onfield",
    "usedForScoring" : "",
    "file" : {
        "required" : true,
        "type" : [ 
            "image/jpeg", 
            "docx", 
            "pdf", 
            "ppt"
        ],
        "minCount" : 0,
        "maxCount" : 10,
        "caption" : "FALSE"
    },
    "fileName" : [],
    "validation" : {
        "required" : true
    },
    "accessibility" : "No",
    "canBeNotApplicable" : "false",
    "instanceQuestions" : [],
    "isAGeneralQuestion" : false,
    "autoCapture" : false,
    "rubricLevel" : "",
    "sectionHeader" : "",
    "allowAudioRecording" : false,
    "page" : "p1",
    "questionNumber" : "2",
    "weightage" : 1,
    "prefillFromEntityProfile" : false,
    "entityFieldName" : "",
    "isEditable" : true,
    "showQuestionInPreview" : false,
    "createdFromQuestionId" :new ObjectId("66f3ddf9953231bda151087f"),
    "updatedAt" : new Date("2024-09-25T09:55:24.750Z"),
    "createdAt" : new Date("2024-09-25T09:55:05.318Z"),
    "deleted" : false,
    "__v" : 0
},
{
    "_id" :new ObjectId("66f3de0c953231bda15108b5"),
    "externalId" : "SUR_TEST_006_25_9_2024_15_0720240801165325-1727258124746",
    "question" : [ 
        "Does the child have a quiet place to study?", 
        ""
    ],
    "tip" : "",
    "hint" : "",
    "responseType" : "matrix",
    "value" : "",
    "isCompleted" : false,
    "showRemarks" : false,
    "remarks" : "",
    "visibleIf" : "",
    "options" : [],
    "sliderOptions" : [],
    "children" : [],
    "questionGroup" : [ 
        "A1"
    ],
    "questionType" : "auto",
    "modeOfCollection" : "onfield",
    "usedForScoring" : "",
    "file" : {
        "required" : true,
        "type" : [ 
            "image/jpeg", 
            "docx", 
            "pdf", 
            "ppt"
        ],
        "minCount" : 0,
        "maxCount" : 10,
        "caption" : "FALSE"
    },
    "fileName" : [],
    "validation" : {
        "required" : true
    },
    "accessibility" : "No",
    "instanceIdentifier" : "Student",
    "canBeNotApplicable" : "false",
    "instanceQuestions" : [],
    "isAGeneralQuestion" : false,
    "autoCapture" : false,
    "rubricLevel" : "",
    "sectionHeader" : "",
    "allowAudioRecording" : false,
    "page" : "p3",
    "questionNumber" : "5",
    "weightage" : 1,
    "prefillFromEntityProfile" : false,
    "entityFieldName" : "",
    "isEditable" : true,
    "showQuestionInPreview" : false,
    "createdFromQuestionId" :new ObjectId("66f3ddf9953231bda1510898"),
    "updatedAt" : new Date("2024-09-25T09:55:24.750Z"),
    "createdAt" : new Date("2024-09-25T09:55:05.383Z"),
    "deleted" : false,
    "__v" : 0
}
,
{
    "_id" :new ObjectId("66f3de0c953231bda15108b6"),
    "externalId" : "SUR_TEST_007_25_9_2024_15_0720240801165325-1727258124747",
    "question" : [ 
        "Were you able to enroll your child in courses on Diksha?", 
        ""
    ],
    "tip" : "",
    "hint" : "",
    "responseType" : "multiselect",
    "value" : "",
    "isCompleted" : false,
    "showRemarks" : false,
    "remarks" : "",
    "visibleIf" : "",
    "options" : [ 
        {
            "value" : "R1",
            "label" : "Not able to use the app"
        }, 
        {
            "value" : "R2",
            "label" : "Not aware of classrooms on DIKSHA"
        }, 
        {
            "value" : "R3",
            "label" : "Not aware of the enrolment process in the classroom"
        }, 
        {
            "value" : "R4",
            "label" : "Not aware of enrolment process in the courses"
        }, 
        {
            "value" : "R5",
            "label" : "Don’t find the courses useful"
        }, 
        {
            "value" : "R6",
            "label" : "Others"
        }
    ],
    "sliderOptions" : [],
    "children" : [],
    "questionGroup" : [ 
        "A1"
    ],
    "questionType" : "auto",
    "modeOfCollection" : "onfield",
    "usedForScoring" : "",
    "file" : {
        "required" : true,
        "type" : [ 
            "image/jpeg", 
            "docx", 
            "pdf", 
            "ppt"
        ],
        "minCount" : 0,
        "maxCount" : 10,
        "caption" : "FALSE"
    },
    "fileName" : [],
    "validation" : {
        "required" : true
    },
    "accessibility" : "No",
    "canBeNotApplicable" : "false",
    "instanceQuestions" : [],
    "isAGeneralQuestion" : false,
    "autoCapture" : false,
    "rubricLevel" : "",
    "sectionHeader" : "",
    "allowAudioRecording" : false,
    "page" : "p4",
    "questionNumber" : "5.1",
    "weightage" : 1,
    "prefillFromEntityProfile" : false,
    "entityFieldName" : "",
    "isEditable" : true,
    "showQuestionInPreview" : false,
    "createdFromQuestionId" :new ObjectId("66f3ddf9953231bda151089e"),
    "updatedAt" : new Date("2024-09-25T09:55:24.750Z"),
    "createdAt" : new Date("2024-09-25T09:55:05.402Z"),
    "deleted" : false,
    "__v" : 0
},
{
    "_id" :new ObjectId("66f3de0c953231bda15108b7"),
    "externalId" : "SUR_TEST_008_25_9_2024_15_0720240801165325-1727258124748",
    "question" : [ 
        "What are the challenges that you are facing in enrolment?", 
        ""
    ],
    "tip" : "",
    "hint" : "",
    "responseType" : "slider",
    "value" : "",
    "isCompleted" : false,
    "showRemarks" : false,
    "remarks" : "",
    "visibleIf" : "",
    "options" : [],
    "sliderOptions" : [],
    "children" : [],
    "questionGroup" : [ 
        "A1"
    ],
    "questionType" : "auto",
    "modeOfCollection" : "onfield",
    "usedForScoring" : "",
    "file" : {
        "required" : true,
        "type" : [ 
            "image/jpeg", 
            "docx", 
            "pdf", 
            "ppt"
        ],
        "minCount" : 0,
        "maxCount" : 10,
        "caption" : "FALSE"
    },
    "fileName" : [],
    "validation" : {
        "required" : true,
        "max" : "5",
        "min" : "1"
    },
    "accessibility" : "No",
    "canBeNotApplicable" : "false",
    "instanceQuestions" : [],
    "isAGeneralQuestion" : false,
    "autoCapture" : false,
    "rubricLevel" : "",
    "sectionHeader" : "",
    "allowAudioRecording" : false,
    "page" : "p5",
    "questionNumber" : "5.2",
    "weightage" : 1,
    "prefillFromEntityProfile" : false,
    "entityFieldName" : "",
    "isEditable" : true,
    "showQuestionInPreview" : false,
    "createdFromQuestionId" :new ObjectId("66f3ddf9953231bda15108a5"),
    "updatedAt" : new Date("2024-09-25T09:55:24.750Z"),
    "createdAt" : new Date("2024-09-25T09:55:05.420Z"),
    "deleted" : false,
    "__v" : 0
}
]

module.exports = {
    programData,
    solutionData,
    surveysData,
    criteriaData,
    questionsData,
    criteriaQuestionsData
}