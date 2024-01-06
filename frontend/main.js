window.addEventListener('DOMContentLoaded', (event) =>{
    getVisitCount();
})
const functionApiUrl = 'https://shafiresume.azurewebsites.net/api/GetResumeCounter?code=2EDfC-9abhVuyMhWT0_cBc4FjetDY98tWjz0-K2LH7uQAzFuIhtlEQ==';
const localFuntionApi = 'http://localhost:7071/api/GetResumeCounter';

const getVisitCount = () => {
    let count = 30;
    fetch(functionApiUrl).then(response => {
        return response.json()
    } ).then(response =>{
         console.log("Website called the function API.");
         count = response.count;
         document.getElementById("counter").innerText = count;
    }).catch(function(error){
        console.log(error);
    });
    return count;

}