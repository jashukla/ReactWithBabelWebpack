class DataApi{

    constructor(rawdata){
        this.rawdata = rawdata;
    }

    mapToObject(arr){
        return arr.reduce((acc,curr)=>{
            acc[curr.id] = curr;
            return acc;
        },{});
    }

    getArticles(){
        return this.mapToObject(this.rawdata.articles);
    }
    getAuthors(){
        return this.mapToObject(this.rawdata.authors);
    }
}

export default DataApi;