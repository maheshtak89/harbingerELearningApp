// {
// "data" : 
//     {
//     "lesson_url": "lessons",
//     "skills_url":"skills",
//     "skillById": "skillById"
//     }
// }

const properties = {
    api: {
        apiUrl: "http://localhost:4040/api/",
        method:{
            getMethod : "GET",
            postMethod: "POST",
            updateMethod: "PUT",
            deleteMethod: "DELETE"
        },
        endUrl:{
            lesson_url: "lessons",
            skills_url:"skills",
            skillById: "skillById"
        }
    }
};

export default properties;