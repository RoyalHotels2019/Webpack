import axios, {
    AxiosResponse,
    AxiosError
} from "../../node_modules/axios/index";

let uri: string = "http://localhost:50182/api/hoteltemps";

let thing: HTMLDivElement = <HTMLDivElement>document.getElementById("content");

interface ITemperature
{
    HotelID: number;
    DatoTid: Date;
    Temperature: number;
}

axios.get(uri)
    .then(function (response: AxiosResponse): void {
        thing.innerHTML = JSON.stringify(response.data);
    })
    .catch(function (error: AxiosError): void {
        thing.innerHTML = "hej" + error.message;
    });