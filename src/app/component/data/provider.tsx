// // TODO - Rename file to 'cache-provider.js'
// import ls from "util/local-storage";
// import {
//     AUTH_TOKEN_KEY,
//     CANDIDATES_KEY,
//     SERVICES_KEY,
//     STAGES_CANDIDATES_KEY,
//     USER_KEY
// } from "util/storage-keys";
//
// const provider = {
//     token: () => {
//         return ls.getItem(AUTH_TOKEN_KEY) || "";
//     },
//
//     user: ls.getJson(USER_KEY) || {},
//
//     stageCandidatesMap: ls.getJson(STAGES_CANDIDATES_KEY) || {},
//
//     candidatesMap: ls.getJson(CANDIDATES_KEY) || {},
//
//
//
//     getStageCandidates: function (stage_key:any) {
//         return this.stageCandidatesMap[stage_key] || [];
//     },
//
//     getCandidateById: function (id:any) {
//         const candidate = this.candidatesMap[id] || null;
//         if (candidate) {
//             return candidate;
//         }
//
//         const keys = Object.keys(this.stageCandidatesMap);
//         for (let key of keys) {
//             const candidates = this.stageCandidatesMap[key];
//             for (let candidate of candidates) {
//                 if (candidate["id"] === id) {
//                     return candidate;
//                 }
//             }
//         }
//         return null;
//     },
//
//     getMAXServices: function () {
//         return ls.getJson(SERVICES_KEY) || [];
//     }
// };
//
// export default provider;
