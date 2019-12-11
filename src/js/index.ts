import axios, {
    AxiosResponse,
    AxiosError
} from "../../node_modules/axios/index";

let uri: string = "http://localhost:50182/api/hoteltemps";


let OurTempOutput: HTMLHeadElement = <HTMLHeadElement>document.getElementById("OurTempOutput");
let historik: HTMLDivElement = <HTMLDivElement>document.getElementById("historik");

interface ITemperature
{
    hotelID: number;
    datoTid: Date;
    temperature: number;
}
axios.get(uri+"/recent")
    .then(function (response: AxiosResponse): void {
        let result: string;
        result = response.data((temp: ITemperature) => {
            temp.temperature;
        });
        result += "°";
        OurTempOutput.innerHTML = result;
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

