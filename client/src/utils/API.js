import axios from "axios";

// export default {
//     searchForArticles: function({query}) {
//         let searchTerm = query.topic.trim();
//         let beginDate;
//         let endDate;
//         if(parseInt(query.startYear, 10)){
//             beginDate = query.startYear.trim();
//             beginDate = `beginDate${"0101"}`;
//         }
//         if(parseInt(query.endYear, 10)){
//             endDate = query.endYear.trim();
//             endDate = `endDate${"0101"}`;
//         }
//         console.log(searchTerm);
//         console.log(searchTerm, beginDate, endDate);
//         return axios.get("/api/nytarticles")
//         // {params: {
//         //     q: searchTerm, 
//         //     begin_date: beginDate,
//         //     end_date: endDate
//         // }})
//     }
// }