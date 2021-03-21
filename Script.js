var req = new XMLHttpRequest()
req.open('GET', 'https://restcountries.eu/rest/v2/all', true)
req.send()
req.onload = function(){
    var data = JSON.parse(req.response)
    console.log("COUNTRY_NAME          TEMP")
    for(var i=0;i<data.length;i++){
        var name = data[i].name
        var lat = data[i].latlng[0]
        var lng = data[i].latlng[1]
        result(name,lat,lng)
        
    }
}


var result = function(n,lat,lan){
var temp = new XMLHttpRequest()

temp.open('GET',"http://api.openweathermap.org/data/2.5/weather?lat="+`${lat}`+"&lon="+`${lan}`+"&appid=63ee49652ab41420b5f1e0601c6afb82", true)
temp.send()
temp.onload = function(){
    var dat = JSON.parse(temp.response)
    console.log(n + "  :  " +dat.main.temp)
    
}

}


