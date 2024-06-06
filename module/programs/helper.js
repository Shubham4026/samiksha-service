/**
 * name : programs/helper.js
 * author : Akash
 * created-date : 20-Jan-2019
 * Description : Programs helper functionality
 */

// Dependencies
const entitiesHelper = require(MODULES_BASE_PATH + '/entities/helper');
const timeZoneDifference = process.env.TIMEZONE_DIFFRENECE_BETWEEN_LOCAL_TIME_AND_UTC;
const validateEntity = process.env.VALIDATE_ENTITIES;
const userService = require(ROOT_PATH + "/generics/services/users");
const userRolesHelper = require(MODULES_BASE_PATH + "/userRoles/helper");
const programUsersHelper = require(MODULES_BASE_PATH + "/programUsers/helper");

/**
 * ProgramsHelper
 * @class
 */
module.exports = class ProgramsHelper {
  /**
   * Programs Document.
   * @method
   * @name programDocuments
   * @param {Array} [filterQuery = "all"] - solution ids.
   * @param {Array} [fieldsArray = "all"] - projected fields.
   * @param {Array} [skipFields = "none"] - field not to include.
   * @param {Number} pageNo - page no.
   * @param {Number} pageSize - page size.
   * @returns {Array} List of programs.
   */

  static programDocuments(filterQuery = 'all', fieldsArray = 'all', skipFields = 'none', pageNo = '', pageSize = '') {
    return new Promise(async (resolve, reject) => {
      try {
        let queryObject = filterQuery != 'all' ? filterQuery : {};

        let projection = {};
        let pagination = {};
        if (fieldsArray != 'all') {
          fieldsArray.forEach((field) => {
            projection[field] = 1;
          });
        }

        if (skipFields !== 'none') {
          skipFields.forEach((field) => {
            projection[field] = 0;
          });
        }
        if (pageNo !== '' && pageSize !== '') {
          pagination = {
            skip: pageSize * (pageNo - 1),
            limit: pageSize,
          };
        }

        let programData = await database.models.programs.find(queryObject, projection, pagination).lean();

        return resolve(programData);
      } catch (error) {
        return reject(error);
      }
    });
  }
  /**
   * List program
   * @method
   * @name list
   * @param {Number} pageNo - page no.
   * @param {Number} pageSize - page size.
   * @param {String} searchText - text to search.
   *  @param {Object} filter - filter.
   *  @param {Array} projection - projection.
   * @returns {Object} - Programs list.
   */

  // static list(filterQuery = 'all', fields = 'all', skipFields = 'none') {
  //   return new Promise(async (resolve, reject) => {
  //     try {
  //       let filteredData = {};

  //       if (filterQuery !== 'all') {
  //         filteredData = filterQuery;
  //       }

  //       let projection = {};

  //       if (fields != 'all') {
  //         fields.forEach((element) => {
  //           projection[element] = 1;
  //         });
  //       }

  //       if (skipFields != 'none') {
  //         skipFields.forEach((element) => {
  //           projection[element] = 0;
  //         });
  //       }

  //       const programs = await database.models.programs.find(filteredData, projection).lean();

  //       return resolve(programs);
  //     } catch (error) {
  //       return reject(error);
  //     }
  //   });
  // }

  static list(pageNo = '', pageSize = '', searchText, filter = {}, projection) {
    return new Promise(async (resolve, reject) => {
      try {
        let programDocument = [];

        let matchQuery = { status: messageConstants.common.ACTIVE_STATUS };

        if (Object.keys(filter).length > 0) {
          matchQuery = _.merge(matchQuery, filter);
        }

        if (searchText !== '') {
          matchQuery['$or'] = [];
          matchQuery['$or'].push(
            {
              externalId: new RegExp(searchText, 'i'),
            },
            {
              name: new RegExp(searchText, 'i'),
            },
            {
              description: new RegExp(searchText, 'i'),
            },
          );
        }

        let sortQuery = {
          $sort: { createdAt: -1 },
        };

        let projection1 = {};

        if (projection && projection.length > 0) {
          projection.forEach((projectedData) => {
            if (projectedData === messageConstants.common.OBEJECT_TYPE) {
              projection1[projectedData] = messageConstants.common.PROGRAM.toLowerCase();
            } else {
              projection1[projectedData] = 1;
            }
          });
        } else {
          projection1 = {
            description: 1,
            externalId: 1,
            isAPrivateProgram: 1,
          };
        }

        let facetQuery = {};
        facetQuery['$facet'] = {};

        facetQuery['$facet']['totalCount'] = [{ $count: 'count' }];

        if (pageSize === '' && pageNo === '') {
          facetQuery['$facet']['data'] = [{ $skip: 0 }];
        } else {
          facetQuery['$facet']['data'] = [{ $skip: pageSize * (pageNo - 1) }, { $limit: pageSize }];

        }

        let projection2 = {};
        projection2['$project'] = {
          data: 1,
          count: {
            $arrayElemAt: ['$totalCount.count', 0],
          },
        };
        programDocument.push({ $match: matchQuery }, sortQuery, { $project: projection1 }, facetQuery, projection2);

        let programDocuments = await database.models.programs.aggregate(programDocument);
        return resolve({
          success: true,
          message: messageConstants.apiResponses.PROGRAM_LIST,
          data: programDocuments[0],
        });
      } catch (error) {
        return resolve({
          success: false,
          message: error.message,
          data: [],
        });
      }
    });
  }

  /**
   * List of programs.
   * @method
   * @name programDocument
   * @param {Array} [programIds = "all"] - list of programIds.
   * @param {Array} [fields = "all"] -projected data
   * @param {Array} [pageIndex = "all"] - all page index.
   * @param {Array} [pageSize = "all"] - page limit.
   * @returns {JSON} - program document list.
   */

  static programDocument(programIds = 'all', fields = 'all', pageIndex = 'all', pageSize = 'all') {
    return new Promise(async (resolve, reject) => {
      try {
        let queryObject = {};

        if (programIds != 'all') {
          queryObject = {
            _id: {
              $in: programIds,
            },
          };
        }

        let projectionObject = {};

        if (fields != 'all') {
          fields.forEach((element) => {
            projectionObject[element] = 1;
          });
        }

        let pageIndexValue = 0;
        let limitingValue = 0;

        if (pageIndex != 'all' && pageSize !== 'all') {
          pageIndexValue = (pageIndex - 1) * pageSize;
          limitingValue = pageSize;
        }

        let programDocuments = await database.models.programs
          .find(queryObject, projectionObject)
          .skip(pageIndexValue)
          .limit(limitingValue)
          .lean();

        return resolve(programDocuments);
      } catch (error) {
        return reject(error);
      }
    });
  }

  /**
   * Create program
   * @method
   * @name create
   * @param {Array} data
   * @returns {JSON} - create program.
   */

  static create(data, checkDate = false,token) {
    return new Promise(async (resolve, reject) => {
      try {
        let programData = {
          externalId: data.externalId,
          name: data.name,
          description: data.description,
          owner: data.userId,
          createdBy: data.userId,
          updatedBy: data.userId,
          isDeleted: false,
          status: 'active',
          resourceType: ['Program'],
          language: ['English'],
          keywords: ['keywords 1', 'keywords 2'],
          concepts: [],
          createdFor: data.createdFor,
          rootOrganisations: data.rootOrganisations,
          imageCompression: {
            quality: 10,
          },
          components: [],
          isAPrivateProgram: data.isAPrivateProgram ? data.isAPrivateProgram : false,
        };

        if (checkDate) {
          if (data.hasOwnProperty('endDate')) {
            data.endDate = gen.utils.getEndDate(data.endDate, timeZoneDifference);
          }
          if (data.hasOwnProperty('startDate')) {
            data.startDate = gen.utils.getStartDate(data.startDate, timeZoneDifference);
          }
        }

        _.assign(programData, {
          ...data,
        });
        programData = _.omit(programData, ['scope', 'userId']);
        let program = await database.models.programs.create(programData);

        if (!program._id) {
          throw {
            message: messageConstants.apiResponses.PROGRAM_NOT_CREATED,
          };
        }
        if (data.scope) {
          let programScopeUpdated = await this.setScope(
            program._id,
            data.scope,
            token
          );

          if (!programScopeUpdated.success) {
            throw {
              message: messageConstants.apiResponses.SCOPE_NOT_UPDATED_IN_PROGRAM,
            };
          }
        }

        return resolve(program);
      } catch (error) {
        return reject(error);
      }
    });
  }

   /**
   * Update program
   * @method
   * @name update
   * @param {String} programId - program id.
   * @param {Array} data
   * @param {String} userId
   * @param {Boolean} checkDate this is true for when its called via API calls
   * @returns {JSON} - update program.
   */

  static update(programId, data, userId, checkDate = false,token) {
    return new Promise(async (resolve, reject) => {
      try {
        data.updatedBy = userId;
        data.updatedAt = new Date();
        //convert components to objectedIds
        if (data.components && data.components.length > 0) {
          data.components = data.components.map((component) =>
            gen.utils.convertStringToObjectId(component)
          );
        }

        if (checkDate) {
          if (data.hasOwnProperty("endDate")) {
            data.endDate = gen.utils.getEndDate(
              data.endDate,
              timeZoneDifference
            );
          }
          if (data.hasOwnProperty("startDate")) {
            data.startDate = gen.utils.getStartDate(
              data.startDate,
              timeZoneDifference
            );
          }
        }
        let program = await database.models.programs.findOneAndUpdate(
          {
            _id: programId,
          },
          { $set: _.omit(data, ["scope"]) },
          { new: true }
        );

        if (!program) {
          throw {
            message: messageConstants.apiResponses.PROGRAM_NOT_UPDATED,
          };
        }

        if (data.scope) {
          let programScopeUpdated = await this.setScope(programId, data.scope,token);

          if (!programScopeUpdated.success) {
            throw {
              message: messageConstants.apiResponses.SCOPE_NOT_UPDATED_IN_PROGRAM,
            };
          }
        }

        return resolve({
          success: true,
          message: messageConstants.apiResponses.PROGRAMS_UPDATED,
          data: {
            _id: programId,
          },
        });
      } catch (error) {
        return resolve({
          success: false,
          message: error.message,
          data: {},
        });
      }
    });
  }

  
 /**
   * Add roles in program.
   * @method
   * @name addRolesInScope
   * @param {String} programId - Program Id.
   * @param {Array} roles - roles data.
   * @returns {JSON} - Added roles data.
   */

 static addRolesInScope(programId, roles) {
  return new Promise(async (resolve, reject) => {
    try {
      let programData = await this.programDocuments(
        {
          _id: programId,
          scope: { $exists: true },
          isAPrivateProgram: false,
        },
        ["_id"]
      );

      if (!(programData.length > 0)) {
        return resolve({
          status: httpStatusCode.bad_request.status,
          message: messageConstants.apiResponses.PROGRAM_NOT_FOUND,
        });
      }

      let updateQuery = {};

      if (Array.isArray(roles) && roles.length > 0) {
        let userRoles = await userRolesHelper.roleDocuments(
          {
            code: { $in: roles },
          },
          ["_id", "code"]
        );

        if (!(userRoles.length > 0)) {
          return resolve({
            status: httpStatusCode.bad_request.status,
            message: messageConstants.apiResponses.INVALID_ROLE_CODE,
          });
        }

        await database.models.programs
          .findOneAndUpdate(
            {
              _id: programId,
            },
            {
              $pull: { "scope.roles": { code: messageConstants.common.ALL_ROLES } },
            },
            { new: true }
          )
          .lean();

        updateQuery["$addToSet"] = {
          "scope.roles": { $each: userRoles },
        };
      } else {
        if (roles === messageConstants.common.ALL_ROLES) {
          updateQuery["$set"] = {
            "scope.roles": [{ code: messageConstants.common.ALL_ROLES }],
          };
        }
      }

      let updateProgram = await database.models.programs
        .findOneAndUpdate(
          {
            _id: programId,
          },
          updateQuery,
          { new: true }
        )
        .lean();

      if (!updateProgram || !updateProgram._id) {
        throw {
          message: messageConstants.apiResponses.PROGRAM_NOT_UPDATED,
        };
      }

      return resolve({
        message: messageConstants.apiResponses.ROLES_ADDED_IN_PROGRAM,
        success: true,
      });
    } catch (error) {
      return resolve({
        success: false,
        status: error.status
          ? error.status
          : httpStatusCode["internal_server_error"].status,
        message: error.message,
      });
    }
  });
}


  /**
   * Add entities in program.
   * @method
   * @name addEntitiesInScope
   * @param {String} programId - Program Id.
   * @param {Array} entities - entities data.
   * @returns {JSON} - Added entities data.
   */

  static addEntitiesInScope(programId, entities,userToken) {
    return new Promise(async (resolve, reject) => {
      try {
        let programData = await this.programDocuments(
          {
            _id: programId,
            scope: { $exists: true },
            isAPrivateProgram: false,
          },
          ["_id", "scope.entityType"]
        );

        if (!(programData.length > 0)) {
          throw {
            message: messageConstants.apiResponses.PROGRAM_NOT_FOUND,
          };
        }

        let entityIds = [];
        let bodyData = {};
        let locationData = gen.utils.filterLocationIdandCode(entities);

        if (locationData.ids.length > 0) {
          bodyData = {
            "registryDetails.code": {$in:locationData.ids},
            entityType: programData[0].scope.entityType,
          };
          let entityData = await userService.locationSearch(bodyData,userToken);
          if (entityData.success) {
            entityData.data.forEach((entity) => {
              // entityIds.push(entity._id);
              entityIds.push(entity.registryDetails.locationId);
              
            });
          }
        }

        if (locationData.codes.length > 0) {
          let filterData = {
            "registryDetails.code": locationData.codes,
            entityType: programData[0].scope.entityType,
          };
          let entityDetails = await userService.locationSearch(filterData);

          if (entityDetails.success) {
            entityDetails.data.forEach((entity) => {
              entityIds.push(entity.externalId);
            });
          }
        }

        if (!(entityIds.length > 0)) {
          throw {
            message: messageConstants.apiResponses.ENTITIES_NOT_FOUND,
          };
        }

        let updateProgram = await database.models.programs
          .findOneAndUpdate(
            {
              _id: programId,
            },
            {
              $addToSet: { "scope.entities": { $each: entityIds } },
            },
            { new: true }
          )
          .lean();

        if (!updateProgram || !updateProgram._id) {
          throw {
            message: messageConstants.apiResponses.PROGRAM_NOT_UPDATED,
          };
        }

        return resolve({
          message: messageConstants.apiResponses.ENTITIES_ADDED_IN_PROGRAM,
          success: true,
        });
      } catch (error) {
        return resolve({
          success: false,
          status: error.status
            ? error.status
            : httpStatusCode["internal_server_error"].status,
          message: error.message,
        });
      }
    });
  }

  /**
   * remove roles in program.
   * @method
   * @name removeRolesInScope
   * @param {String} programId - Program Id.
   * @param {Array} roles - roles data.
   * @returns {JSON} - Added roles data.
   */

  static removeRolesInScope(programId, roles) {
    return new Promise(async (resolve, reject) => {
      try {
        let programData = await this.programDocuments(
          {
            _id: programId,
            scope: { $exists: true },
            isAPrivateProgram: false,
          },
          ["_id"]
        );

        if (!(programData.length > 0)) {
          return resolve({
            status: httpStatusCode.bad_request.status,
            message: messageConstants.apiResponses.PROGRAM_NOT_FOUND,
          });
        }

        let userRoles = await userRolesHelper.roleDocuments(
          {
            code: { $in: roles },
          },
          ["_id", "code"]
        );

        if (!(userRoles.length > 0)) {
          return resolve({
            status: httpStatusCode.bad_request.status,
            message: messageConstants.apiResponses.INVALID_ROLE_CODE,
          });
        }

        let updateProgram = await database.models.programs
          .findOneAndUpdate(
            {
              _id: programId,
            },
            {
              $pull: { "scope.roles": { $in: userRoles } },
            },
            { new: true }
          )
          .lean();

        if (!updateProgram || !updateProgram._id) {
          throw {
            message: messageConstants.apiResponses.PROGRAM_NOT_UPDATED,
          };
        }

        return resolve({
          message: messageConstants.apiResponses.ROLES_REMOVED_IN_PROGRAM,
          success: true,
        });
      } catch (error) {
        return resolve({
          success: false,
          status: error.status
            ? error.status
            : httpStatusCode["internal_server_error"].status,
          message: error.message,
        });
      }
    });
  }
  
  /**
   * remove entities in program scope.
   * @method
   * @name removeEntitiesInScope
   * @param {String} programId - Program Id.
   * @param {Array} entities - entities.
   * @returns {JSON} - Removed entities data.
   */

  static removeEntitiesInScope(programId, entities) {
    return new Promise(async (resolve, reject) => {
      try {
        let programData = await this.programDocuments(
          {
            _id: programId,
            scope: { $exists: true },
            isAPrivateProgram: false,
          },
          ["_id", "scope.entities"]
        );

        if (!(programData.length > 0)) {
          throw {
            message: messageConstants.apiResponses.PROGRAM_NOT_FOUND,
          };
        }
        let entitiesData = [];
        entitiesData = programData[0].scope.entities;

        if (!(entitiesData.length > 0)) {
          throw {
            message: messageConstants.apiResponses.ENTITIES_NOT_FOUND,
          };
        }

        let updateProgram = await database.models.programs
          .findOneAndUpdate(
            {
              _id: programId,
            },
            {
              $pull: { "scope.entities": { $in: entities } },
            },
            { new: true }
          )
          .lean();

        if (!updateProgram || !updateProgram._id) {
          throw {
            message: messageConstants.apiResponses.PROGRAM_NOT_UPDATED,
          };
        }

        return resolve({
          message: messageConstants.apiResponses.ENTITIES_REMOVED_IN_PROGRAM,
          success: true,
        });
      } catch (error) {
        return resolve({
          success: false,
          status: error.status
            ? error.status
            : httpStatusCode["internal_server_error"].status,
          message: error.message,
        });
      }
    });
  }

   /**
   * Program details.
   * @method
   * @name details
   * @param {String} programId - Program Id.
   * @returns {Object} - Details of the program.
   */

   static details(programId) {
    return new Promise(async (resolve, reject) => {
      try {
        let programData = await this.programDocuments({
          _id: programId,
        });

        if (!(programData.length > 0)) {
          return resolve({
            status: httpStatusCode.bad_request.status,
            message: messageConstants.apiResponses.PROGRAM_NOT_FOUND,
          });
        }

        return resolve({
          message: messageConstants.apiResponses.PROGRAMS_FETCHED,
          success: true,
          data: programData[0],
        });
      } catch (error) {
        return resolve({
          success: false,
          status: error.status
            ? error.status
            : httpStatusCode["internal_server_error"].status,
          message: error.message,
        });
      }
    });
  }

   

  /**
   * Program join.
   * @method
   * @name join
   * @param {String} programId - Program Id.
   * @param {Object} data - body data (can include isResourse flag && userRoleInformation).
   * @param {String} userId - Logged in user id.
   * @param {String} userToken - User token.
   * @param {String} [appName = ""] - App Name.
   * @param {String} [appVersion = ""] - App Version.
   * @param {Boolean} callConsetAPIOnBehalfOfUser - required to call consent api or not
   * @returns {Object} - Details of the program join.
   */

  static join(
    programId,
    data,
    userId,
    userToken,
    appName = "",
    appVersion = "",
    callConsetAPIOnBehalfOfUser = false
  ) {
    return new Promise(async (resolve, reject) => {
      try {
        let pushProgramUsersDetailsToKafka = false;
        //Using programId fetch program details. Also checking the program status in the query.
        let programData = await this.programDocuments(
          {
            _id: programId,
            status: messageConstants.common.ACTIVE_STATUS,
            isDeleted: false,
          },
          ["name", "externalId", "requestForPIIConsent", "rootOrganisations"]
        );

        if (!(programData.length > 0)) {
          throw {
            status: httpStatusCode.bad_request.status,
            message: messageConstants.apiResponses.PROGRAM_NOT_FOUND,
          };
        }
        let programUsersData = {};
        let update = {};

        // check if user already joined for program or not
        const programUsersDetails =
          await programUsersHelper.programUsersDocuments(
            {
              userId: userId,
              programId: programId,
            },
            ["_id", "consentShared"]
          );
        // if user not joined for program. we have add more key values to programUsersData
        if (!(programUsersDetails.length > 0)) {
          // Fetch user profile information by calling sunbird's user read api.
          // !Important check specific fields of userProfile.
          let userProfile = await userService.profile(userToken, userId);
          if (
            !userProfile.success ||
            !userProfile.data  
            // !userProfile.data.profileUserTypes ||
            // !(userProfile.data.profileUserTypes.length > 0) ||
            // !userProfile.data.userLocations ||
            // !(userProfile.data.userLocprofileUserTypesations.length > 0)
          ) {
            throw {
              status: httpStatusCode.bad_request.status,
              message: messageConstants.apiResponses.PROGRAM_JOIN_FAILED,
            };
          }
          programUsersData = {
            programId: programId,
            userRoleInformation: data.userRoleInformation,
            userId: userId,
            userProfile: userProfile.data,
            resourcesStarted: false,
          };
          if (appName != "") {
            programUsersData["appInformation.appName"] = appName;
          }
          if (appVersion != "") {
            programUsersData["appInformation.appVersion"] = appVersion;
          }

          //For internal calls add consent using sunbird api
          if (
            callConsetAPIOnBehalfOfUser &&
            programData[0].hasOwnProperty("requestForPIIConsent") &&
            programData[0].requestForPIIConsent === true
          ) {
            if (
              !programData[0].rootOrganisations ||
              !(programData[0].rootOrganisations.length > 0)
            ) {
              throw {
                message: messageConstants.apiResponses.PROGRAM_JOIN_FAILED,
                status: httpStatusCode.bad_request.status,
              };
            }
            let userConsentRequestBody = {
              request: {
                consent: {
                  status: messageConstants.common.REVOKED,
                  userId: userProfile.data.id,
                  consumerId: programData[0].rootOrganisations[0],
                  objectId: programId,
                  objectType: messageConstants.common.PROGRAM,
                },
              },
            };
            let consentResponse = await userService.setUserConsent(
              userToken,
              userConsentRequestBody
            );

            if (!consentResponse.success) {
              throw {
                message: messageConstants.apiResponses.PROGRAM_JOIN_FAILED,
                status: httpStatusCode.bad_request.status,
              };
            }
          }
        }

        // if requestForPIIConsent Is false and user not joined program till now then set pushProgramUsersDetailsToKafka = true;
        // if requestForPIIConsent == true and data.consentShared value is true which means user interacted with the consent popup set pushProgramUsersDetailsToKafka = true;
        // if programUsersDetails[0].consentShared === true which means the data is already pushed to Kafka once
        if (
          (programData[0].hasOwnProperty("requestForPIIConsent") &&
            programData[0].requestForPIIConsent === false &&
            !(programUsersDetails.length > 0)) ||
          (programData[0].hasOwnProperty("requestForPIIConsent") &&
            programData[0].requestForPIIConsent === true &&
            data.hasOwnProperty("consentShared") &&
            data.consentShared == true &&
            ((programUsersDetails.length > 0 &&
              programUsersDetails[0].consentShared === false) ||
              !(programUsersDetails.length > 0)))
        ) {
          pushProgramUsersDetailsToKafka = true;
        }

        //create or update query
        const query = {
          programId: programId,
          userId: userId,
        };
        //if a resource is started
        if (data.isResource) {
          programUsersData.resourcesStarted = true;
        }
        //if user interacted with the consent-popup
        if (data.hasOwnProperty("consentShared")) {
          programUsersData.consentShared = data.consentShared;
        }
        update["$set"] = programUsersData;

        // add record to programUsers collection
        let joinProgram = await programUsersHelper.update(query, update, {
          new: true,
          upsert: true,
        });

        if (!joinProgram._id) {
          throw {
            message: messageConstants.apiResponses.PROGRAM_JOIN_FAILED,
            status: httpStatusCode.bad_request.status,
          };
        }

        let joinProgramDetails = joinProgram.toObject();

        // if (pushProgramUsersDetailsToKafka) {
        //   joinProgramDetails.programName = programData[0].name;
        //   joinProgramDetails.programExternalId = programData[0].externalId;
        //   joinProgramDetails.requestForPIIConsent =
        //     programData[0].requestForPIIConsent;
        //   //  push programUsers details to kafka
        //   await kafkaProducersHelper.pushProgramUsersToKafka(
        //     joinProgramDetails
        //   );
        // }

        return resolve({
          message: messageConstants.apiResponses.JOINED_PROGRAM,
          success: true,
          data: {
            _id: joinProgram._id,
          },
        });
      } catch (error) {
        return resolve({
          success: false,
          status: error.status
            ? error.status
            : httpStatusCode["internal_server_error"].status,
          message: error.message,
        });
      }
    });
  }
   /**
   * set scope in program
   * @method
   * @name setScope
   * @param {String} programId - program id.
   * @param {Object} scopeData - scope data.
   * @param {String} scopeData.entityType - entity type
   * @param {Array} scopeData.entities - entities in scope
   * @param {Array} scopeData.roles - roles in scope
   * @returns {JSON} - Set scope data.
   */

   static setScope(programId, scopeData,token) {
    return new Promise(async (resolve, reject) => {
      try {
        let programData = await this.programDocuments({ _id: programId }, [
          "_id",
        ]);

        if (!(programData.length > 0)) {
          return resolve({
            status: httpStatusCode.bad_request.status,
            message: messageConstants.apiResponses.PROGRAM_NOT_FOUND,
          });
        }

        let scope = {};
        if (validateEntity !== messageConstants.common.OFF) {
          if (scopeData.entityType) {
            // Get entity details of type {scopeData.entityType}
            let bodyData = {
              entityType: scopeData.entityType,
            };
            let entityTypeData = await userService.locationSearch(bodyData,token);

            if (!entityTypeData.success) {
              return resolve({
                status: httpStatusCode.bad_request.status,
                message: messageConstants.apiResponses.ENTITY_TYPES_NOT_FOUND,
              });
            }

            scope["entityType"] = entityTypeData.data[0].entityType;
          }

          if (scopeData.entities && scopeData.entities.length > 0) {
            //call learners api for search
            let entityIds = [];
            let bodyData = {};
            let locationData = gen.utils.filterLocationIdandCode(
              scopeData.entities
            );

            //locationIds contain id of location data.
            if (locationData.ids.length > 0) {
              bodyData = {
                // id: locationData.ids,
                "registryDetails.code":{$in:locationData.ids},
                 entityType: scopeData.entityType,
              };
              let entityData = await userService.locationSearch(bodyData,token);
              if (entityData.success) {
                entityData.data.forEach((entity) => {
                  // entityIds.push(entity._id);
                  entityIds.push(entity.registryDetails.locationId)
                });
              }
            }

            if (locationData.codes.length > 0) {
              let filterData = {
                // code: locationData.codes,
                "registryDetails.code":locationData.codes,
                entityType: scopeData.entityType,
              };
              let entityDetails = await userService.locationSearch(filterData,token);

              if (entityDetails.success) {
                let entitiesData = entityDetails.data;
                entitiesData.forEach((entity) => {
                  // entityIds.push(entity._id);
                  entityIds.push(entity.registryDetails.locationId)

                });
              }
            }

            if (!(entityIds.length > 0)) {
              throw {
                message: messageConstants.apiResponses.ENTITIES_NOT_FOUND,
              };
            }
            scope["entities"] = entityIds;
          }

          if (scopeData.roles) {
            if (Array.isArray(scopeData.roles) && scopeData.roles.length > 0) {
              let userRoles = await userRolesHelper.roleDocuments(
                {
                  code: { $in: scopeData.roles },
                },
                ["_id", "code"]
              );

              if (!(userRoles.length > 0)) {
                return resolve({
                  status: httpStatusCode.bad_request.status,
                  message: messageConstants.apiResponses.INVALID_ROLE_CODE,
                });
              }

              scope["roles"] = userRoles;
            } else {
              if (scopeData.roles === messageConstants.common.ALL_ROLES) {
                scope["roles"] = [
                  {
                    code: messageConstants.common.ALL_ROLES,
                  },
                ];
              }
            }
          }
        } else {
          scope = scopeData;
        }
        let updateProgram = await database.models.programs
          .findOneAndUpdate(
            {
              _id: programId,
            },
            { $set: { scope: scope } },
            { new: true }
          )
          .lean();

        if (!updateProgram._id) {
          throw {
            status: messageConstants.apiResponses.PROGRAM_SCOPE_NOT_ADDED,
          };
        }

        return resolve({
          success: true,
          message: messageConstants.apiResponses.PROGRAM_UPDATED_SUCCESSFULLY,
          data: updateProgram,
        });
      } catch (error) {
        return reject(error);
      }
    });
  }

  /**
   * List of user created programs
   * @method
   * @name userPrivatePrograms
   * @param {String} userId
   * @returns {JSON} - List of programs that user created on app.
   */

  static userPrivatePrograms(userId) {
    return new Promise(async (resolve, reject) => {
      try {
        let programsData = await this.list(
          '',
          '',
          '',
          {
            createdBy: userId,
            isAPrivateProgram: true,
          },
          ['name', 'externalId', 'description', '_id'],
        );

        if (!programsData.length > 0) {
          return resolve({
            message: messageConstants.apiResponses.PROGRAM_NOT_FOUND,
            result: [],
          });
        }

        return resolve(programsData);
      } catch (error) {
        return reject(error);
      }
    });
  }

  /**
   * Update program document.
   * @method
   * @name updateProgramDocument
   * @param {Object} query - query to find document
   * @param {Object} updateObject - fields to update
   * @returns {String} - message.
   */

  static updateProgramDocument(query = {}, updateObject = {}) {
    return new Promise(async (resolve, reject) => {
      try {
        if (Object.keys(query).length == 0) {
          throw new Error(messageConstants.apiResponses.UPDATE_QUERY_REQUIRED);
        }

        if (Object.keys(updateObject).length == 0) {
          throw new Error(messageConstants.apiResponses.UPDATE_OBJECT_REQUIRED);
        }

        let updateResponse = await database.models.programs.updateOne(query, updateObject);

        if (updateResponse.nModified == 0) {
          throw new Error(messageConstants.apiResponses.FAILED_TO_UPDATE);
        }

        return resolve({
          success: true,
          message: messageConstants.apiResponses.UPDATED_DOCUMENT_SUCCESSFULLY,
          data: true,
        });
      } catch (error) {
        return resolve({
          success: false,
          message: error.message,
          data: false,
        });
      }
    });
  }

  /**
   * List programs by ids.
   * @method
   * @name listByIds
   * @param {Array} programIds - Program ids.
   * @returns {Array} List of Programs.
   */

  static listByIds(programIds) {
    return new Promise(async (resolve, reject) => {
      try {
        let programsData;

        if (Array.isArray(programIds) && programIds.length > 0) {
          programsData = await this.list(
            '',
            '',
            '',
            {
              _id: { $in: programIds },
            },
            'all',
            ['components', 'imageCompression', 'updatedAt', 'createdAt', 'startDate', 'endDate', 'updatedBy'],
          );

          if (!programsData.length > 0) {
            throw {
              status: httpStatusCode['bad_request'].status,
              message: messageConstants.apiResponses.PROGRAM_NOT_FOUND,
            };
          }
        }

        return resolve({
          success: true,
          message: messageConstants.apiResponses.PROGRAM_LIST,
          data: programsData,
        });
      } catch (error) {
        return resolve({
          status: error.status ? error.status : httpStatusCode['internal_server_error'].status,
          success: false,
          message: error.message,
          data: false,
        });
      }
    });
  }

  /**
   * Remove solutions from program.
   * @method
   * @name removeSolutions
   * @param {Array} programId - Program id.
   * @param {Array} solutionIds - Program id.
   * @returns {Array} Update program.
   */

  static removeSolutions(programId, solutionIds) {
    return new Promise(async (resolve, reject) => {
      try {
        let programsData = await this.list('', '', '', { _id: programId }, ['_id']);

        if (!programsData.length > 0) {
          throw {
            status: httpStatusCode['bad_request'].status,
            message: messageConstants.apiResponses.PROGRAM_NOT_FOUND,
          };
        }

        let updateSolutionIds = solutionIds.map((solutionId) => ObjectId(solutionId));

        let updateSolution = await database.models.programs.findOneAndUpdate(
          {
            _id: programId,
          },
          {
            $pull: {
              components: { $in: updateSolutionIds },
            },
          },
        );

        return resolve({
          success: true,
          message: messageConstants.apiResponses.PROGRAM_UPDATED_SUCCESSFULLY,
          data: updateSolution,
        });
      } catch (error) {
        return resolve({
          status: error.status ? error.status : httpStatusCode['internal_server_error'].status,
          success: false,
          message: error.message,
          data: false,
        });
      }
    });
  }

  /**
   * Search programs.
   * @method
   * @name search
   * @param {Object} filteredData - Search programs from filtered data.
   * @param {Number} pageSize - page limit.
   * @param {Number} pageNo - No of the page.
   * @param {Object} projection - Projected data.
   * @returns {Array} List of program document.
   */

  static search(filteredData, pageSize, pageNo, projection, search = '') {
    return new Promise(async (resolve, reject) => {
      try {
        let programDocument = [];

        let projection1 = {};

        if (projection) {
          projection1['$project'] = projection;
        } else {
          projection1['$project'] = {
            name: 1,
            description: 1,
            keywords: 1,
            externalId: 1,
            components: 1,
          };
        }

        if (search !== '') {
          filteredData['$match']['$or'] = [];
          filteredData['$match']['$or'].push(
            {
              name: new RegExp(search, 'i'),
            },
            {
              description: new RegExp(search, 'i'),
            },
          );
        }

        let facetQuery = {};
        facetQuery['$facet'] = {};

        facetQuery['$facet']['totalCount'] = [{ $count: 'count' }];

        facetQuery['$facet']['data'] = [{ $skip: pageSize * (pageNo - 1) }, { $limit: pageSize }];

        let projection2 = {};
        projection2['$project'] = {
          data: 1,
          count: {
            $arrayElemAt: ['$totalCount.count', 0],
          },
        };

        programDocument.push(filteredData, projection1, facetQuery, projection2);

        let programDocuments = await database.models.programs.aggregate(programDocument);

        return resolve(programDocuments);
      } catch (error) {
        return reject(error);
      }
    });
  }
};
