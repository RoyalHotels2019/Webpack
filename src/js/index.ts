import axios, {
    AxiosResponse,
    AxiosError
} from "../../node_modules/axios/index";

let uri: string = "http://localhost:50182/api/hoteltemps";


let thing: HTMLDivElement = <HTMLDivElement>document.getElementById("content");
let historik: HTMLDivElement = <HTMLDivElement>document.getElementById("historik");

interface ITemperature
{
    hotelID: number;
    datoTid: Date;
    temperature: number;
}

axios.get(uri)
    .then(function (response: AxiosResponse): void {
        thing.innerHTML = JSON.stringify(response.data);
        let result: string = "<table>";
            response.data.forEach((temp: ITemperature) => {
                result += "<tr><td>" + temp.datoTid + "</td><td>" + temp.temperature + "</td></tr>";
            });
            result += "</table>";
            historik.innerHTML = result;
    })

    .catch(function (error: AxiosError): void {
        thing.innerHTML = "hej" + error.message;
    });

