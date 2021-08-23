console.log("Working!")
let trans = document.getElementById("trans")

trans.addEventListener("click", function () {
    let enterVal = document.getElementById("enterTxt").value
    //console.log(enterVal)
    //let desp = 
    //let shownVal = document.getElementById("dispTrans").innerHTML =`Translation: ${enterVal}`
    //let serURL = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json"
    let serURL = "https://api.funtranslations.com/translate/minion.json"
    function constructURL() {
        return serURL + "?" + "text=" + enterVal
    }
    console.log(constructURL())
    fetch(constructURL())
    .then(((res)=>res.json()))
    .then(json => {
        var translatedText = json.contents.translated
        document.getElementById("dispTrans").innerHTML = translatedText
        console.log(json)})
    .catch(err => console.log("Error Occured",err))

})


// fetch("https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/autosuggest/v1.0/IN/INR/en-IN/?query=chennai",{
//     "method": "GET",
//     "headers": {
//         "x-rapidapi-key": "bc3b3e67b0mshfd91f8ebabb9a2bp156b2ajsn2862db98eb22",
// 		"x-rapidapi-host": "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com"
//     }
// })
// .then(res => res.json())
// .then(data => console.log(data))