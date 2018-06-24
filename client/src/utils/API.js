import axios from "axios";

export default {
    searchForArticles: function(query) {
        let queryURL = query.topic;
        let begin_date;
        let end_date;
        if(parseInt(query.startYear, 10) && parseInt(query.endYear, 10)){
            begin_date = `${query.startYear}0101`
            end_date= `${query.endYear}0101`
            return (axios.get(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${queryURL}&begin_date=${begin_date}&end_date=${end_date}&api-key=b9f91d369ff59547cd47b931d8cbc56b:0:74623931`))
        }
        else if (parseInt(query.startYear, 10)){
            begin_date = `${query.startYear}0101`
            return (axios.get(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${queryURL}&begin_date=${begin_date}&api-key=b9f91d369ff59547cd47b931d8cbc56b:0:74623931`))
        }
        else if (parseInt(query.endYear, 10)){
            end_date= `${query.endYear}0101`
            return (axios.get(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${queryURL}&end_date=${end_date}&api-key=b9f91d369ff59547cd47b931d8cbc56b:0:74623931`))
        }
        else {
            return (axios.get(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${queryURL}&api-key=b9f91d369ff59547cd47b931d8cbc56b:0:74623931`))
        }
        console.log(queryURL);
        // if(begin_date && end_date){
        //     return (axios.get(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${queryURL}&begin_date=${begin_date}&end_date=${end_date}&api-key=b9f91d369ff59547cd47b931d8cbc56b:0:74623931`))
        // }
        // else if(begin_date){
        //     return (axios.get(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${queryURL}&begin_date=${begin_date}&api-key=b9f91d369ff59547cd47b931d8cbc56b:0:74623931`))
        // }
        // else if(end_date){
        //     return (axios.get(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${queryURL}&end_date=${end_date}&api-key=b9f91d369ff59547cd47b931d8cbc56b:0:74623931`))
        // }
        
        // {params: {
        //     q: searchTerm, 
        //     begin_date: beginDate,
        //     end_date: endDate
        // }})
    },

    fetchDBArticles: function() {
        return axios.get("/api/fetchDBArticles");
      }

    
}