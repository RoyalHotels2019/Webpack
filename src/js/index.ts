import axios, {
    AxiosResponse,
    AxiosError
} from "../../node_modules/axios/index";

let uri: string = "http://localhost:50182/api/hoteltemps";
let treuri: string ="http://vejr.eu/api.php?location=Roskilde&degree=C";


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

interface Ivejreu
{
    LocationName: string;
    CurrentData: CurrentData;
}

interface CurrentData
{
    temperature: number;
    skyText: string;
    humidity: number;
    windText: string;
}

axios.get<Ivejreu>(treuri)
    .then(function (response: AxiosResponse<Ivejreu>): void {
        treTempOutput.innerHTML=response.data.CurrentData.temperature.toString()+"°";
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
        OurTempOutput.innerHTML=response.data.temperature.toString()+"°";
    })
    .catch(function (error: AxiosError): void {
        OurTempOutput.innerHTML = error.message;
    });

axios.get(uri)
    .then(function (response: AxiosResponse): void {
        
        let result: string = "<table>";
            response.data.forEach((temp: ITemperature) => {
                result += "<tr><td>" + temp.temperature + "</td><td>" + temp.datoTid + "</td></tr>";
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