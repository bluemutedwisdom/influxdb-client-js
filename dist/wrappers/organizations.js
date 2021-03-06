"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var api_1 = require("../api");
var default_1 = (function () {
    function default_1(basePath, baseOptions) {
        this.service = new api_1.OrganizationsApi({ basePath: basePath, baseOptions: baseOptions });
        this.serviceOptions = baseOptions;
    }
    default_1.prototype.get = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.service.orgsOrgIDGet(id, undefined, this.serviceOptions)];
                    case 1:
                        data = (_a.sent()).data;
                        return [2, data];
                }
            });
        });
    };
    default_1.prototype.getAll = function () {
        return __awaiter(this, void 0, void 0, function () {
            var orgs;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.service.orgsGet(undefined, undefined, undefined, this.serviceOptions)];
                    case 1:
                        orgs = (_a.sent()).data.orgs;
                        return [2, orgs || []];
                }
            });
        });
    };
    default_1.prototype.create = function (org) {
        return __awaiter(this, void 0, void 0, function () {
            var data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.service.orgsPost(org, undefined, this.serviceOptions)];
                    case 1:
                        data = (_a.sent()).data;
                        return [2, data];
                }
            });
        });
    };
    default_1.prototype.delete = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.service.orgsOrgIDDelete(id, undefined, this.serviceOptions)];
                    case 1:
                        data = (_a.sent()).data;
                        return [2, data];
                }
            });
        });
    };
    default_1.prototype.update = function (id, org) {
        return __awaiter(this, void 0, void 0, function () {
            var original, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.get(id)];
                    case 1:
                        original = _a.sent();
                        return [4, this.service.orgsOrgIDPatch(id, __assign({}, original, org), undefined, this.serviceOptions)];
                    case 2:
                        data = (_a.sent()).data;
                        return [2, data];
                }
            });
        });
    };
    default_1.prototype.members = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var users;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.service.orgsOrgIDMembersGet(id, undefined, this.serviceOptions)];
                    case 1:
                        users = (_a.sent()).data.users;
                        return [2, users || []];
                }
            });
        });
    };
    default_1.prototype.owners = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var users;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.service.orgsOrgIDOwnersGet(id, undefined, this.serviceOptions)];
                    case 1:
                        users = (_a.sent()).data.users;
                        return [2, users || []];
                }
            });
        });
    };
    default_1.prototype.createOwner = function (id, user) {
        return __awaiter(this, void 0, void 0, function () {
            var data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.service.orgsOrgIDOwnersPost(id, user, undefined, this.serviceOptions)];
                    case 1:
                        data = (_a.sent()).data;
                        return [2, data];
                }
            });
        });
    };
    default_1.prototype.addMember = function (id, user) {
        return __awaiter(this, void 0, void 0, function () {
            var data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.service.orgsOrgIDMembersPost(id, user, undefined, this.serviceOptions)];
                    case 1:
                        data = (_a.sent()).data;
                        return [2, data];
                }
            });
        });
    };
    default_1.prototype.removeMember = function (orgID, userID) {
        return __awaiter(this, void 0, void 0, function () {
            var data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.service.orgsOrgIDMembersUserIDDelete(userID, orgID, undefined, this.serviceOptions)];
                    case 1:
                        data = (_a.sent()).data;
                        return [2, data];
                }
            });
        });
    };
    return default_1;
}());
exports.default = default_1;
