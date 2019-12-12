import axios, {
    AxiosResponse,
    AxiosError
} from "../../node_modules/axios/index";

let uri: string = "http://localhost:50182/api/hoteltemps";
let treuri: string ="http://api.openweathermap.org/data/2.5/weather?q=Roskilde%20Kommune,DK&APPID=16d519bf2dbe0d141edfdaca3b1d0d01";


let OurTempOutput: HTMLDivElement = <HTMLDivElement>document.getElementById("OurTempOutput");
let treTempOutput: HTMLDivElement = <HTMLDivElement>document.getElementById("3rd")
let historik: HTMLDivElement = <HTMLDivElement>document.getElementById("historik");

let knap7element: HTMLButtonElement = <HTMLButtonElement>document.getElementById("knap7");
knap7element.addEventListener("click", knap7click);

let knap14element: HTMLButtonElement = <HTMLButtonElement>document.getElementById("knap14");
knap14element.addEventListener("click", knap14click);

let knap30element:HTMLButtonElement = <HTMLButtonElement>document.getElementById("knap30");
knap30element.addEventListener("click", knap30click);

let knap60element:HTMLButtonElement = <HTMLButtonElement>document.getElementById("knap60");
knap60element.addEventListener("click", knap60click);



interface ITemperature
{
    hotelID: number;
    datoTid: Date;
    temperature: number;
}
interface IOpenweather
{
    main: IMain;
}
interface IMain
{
    temp: number
}


//{
//    "coord": { "lon": 145.77, "lat": -16.92 },
//    "weather": [{ "id": 802, "main": "Clouds", "description": "scattered clouds", "icon": "03n" }],
//    "base": "stations",
//    "main": { "temp": 300.15, "pressure": 1007, "humidity": 74, "temp_min": 300.15, "temp_max": 300.15 },
//    "visibility": 10000,
//    "wind": { "speed": 3.6, "deg": 160 },
//    "clouds": { "all": 40 },
//    "dt": 1485790200,
//    "sys":
//    {
//            "type": 1, "id": 8166,
//            "message": 0.2064,
//            "country": "AU",
//            "sunrise": 1485720272,
//            "sunset": 1485766550
//    },
//    "id": 2172797,
//    "name": "Cairns",
//     "cod": 200
//}




axios.get<IOpenweather>(treuri)
    .then(function (response: AxiosResponse<IOpenweather>): void {
        let temperature: number = response.data.main.temp - 273.15;
        let temp: string = temperature.toFixed(2);
        treTempOutput.innerHTML = " " + temp + "° c";
    })
    .catch(function (error: AxiosError): void {
        treTempOutput.innerHTML = error.message;
    });


axios.get<ITemperature>(uri+"/recent")
    .then(function (response: AxiosResponse<ITemperature>): void {
        //let resultTwo: string = '<h1 style="text-align: center;">';
        //response.data((temp: ITemperature) => {
        //    resultTwo += temp.temperature;
        //});
        //resultTwo +='';
        //resultTwo += '</h1>'
        //OurTempOutput.innerHTML = resultTwo;
        OurTempOutput.innerHTML=response.data.temperature.toString()+"° c";
    })
    .catch(function (error: AxiosError): void {
        OurTempOutput.innerHTML = error.message;
    });

axios.get(uri)
    .then(function (response: AxiosResponse): void {
        
        let result: string = "<table>";
        result += "<th>Temperatur</th><th>Dato</th>";
        response.data.forEach((temp: ITemperature) => {
            result += "<tr><td>" + temp.temperature + "°c" + "</td><td>" + temp.datoTid + "</td></tr>";
            });
            result += "</table>";
        historik.innerHTML = result;
        
    })
    .catch(function (error: AxiosError): void {
        historik.innerHTML = "hej: " + error.message;
    });

function knap7click(): void{
    window.alert("knap 7 Ikke implementeret endnu");
}

function knap14click(): void{
    window.alert("knap 14 Ikke implementeret endnu")
}

function knap30click(): void{
    window.alert("knap 30 ikke implementeret endnu")
}

function knap60click(): void{
    window.alert("knap 60 ikke implementeret endnu")
}

function toDateString(date: Date): string {
    let result: string;
    result = date.getDate + "/" + date.getMonth + "/" + date.getFullYear;
    return result;
}
