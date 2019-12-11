import axios, {
    AxiosResponse,
    AxiosError
} from "../../node_modules/axios/index";

let uri: string = "http://localhost:50182/api/hoteltemps";


let OurTempOutput: HTMLHeadElement = <HTMLHeadElement>document.getElementById("OurTempOutput");
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