import axios, {
    AxiosResponse,
    AxiosError
} from "../../node_modules/axios/index";

let uri: string = "http://localhost:50182/api/hoteltemps";


let OurTempOutput: HTMLDivElement = <HTMLDivElement>document.getElementById("OurTempOutput");
let historik: HTMLDivElement = <HTMLDivElement>document.getElementById("historik");

interface ITemperature
{
    hotelID: number;
    datoTid: Date;
    temperature: number;
}

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
                result += "<tr><td>" + temp.datoTid + "</td><td>" + temp.temperature + "</td></tr>";
            });
            result += "</table>";
        historik.innerHTML = result;
        
    })
    .catch(function (error: AxiosError): void {
        historik.innerHTML = "hej" + error.message;
    });

