import express from "express";
import fs from "fs"
import moment from "moment"

const app = express()
const repositoryCatraca = [];
const arquivo = [];
let i = 0;

while(i < 10){
    const user = {
    name: "Jhon Doe",
    age: 22,
    height: `${Math.floor(Math.random() * 210) + 100} cm`,
    weight: [
        Math.floor(Math.random() * (120 - 70) + 70), 
        Math.floor(Math.random() * (120 - 70) + 70), 
        Math.floor(Math.random() * (120 - 70) + 70), 
        Math.floor(Math.random() * (120 - 70) + 70), 
        Math.floor(Math.random() * (120 - 70) + 70)
    ],
    bodyTemp: [
        Math.floor(Math.random() * (39 - 35.5) + 35.5), 
        Math.floor(Math.random() * (39 - 35.5) + 35.5), 
        Math.floor(Math.random() * (39 - 35.5) + 35.5), 
        Math.floor(Math.random() * (39 - 35.5) + 35.5), 
        Math.floor(Math.random() * (39 - 35.5) + 35.5)
    ],
    }
    repositoryCatraca.push(user)
    i++
}

for(let i = 0; i<repositoryCatraca.length; i++){
    let name =  repositoryCatraca[i].name;
    let age =  repositoryCatraca[i].age;
    let height =  repositoryCatraca[i].height;
    let weightMedia = 0
    let bodyTempMedia = 0

    for(let j = 0; j < repositoryCatraca[i].weight.length; j++){
         weightMedia = repositoryCatraca[i].weight[j] + weightMedia
    }
    for(let j = 0; j < repositoryCatraca[i].bodyTemp.length; j++){
         bodyTempMedia = repositoryCatraca[i].bodyTemp[j] + bodyTempMedia
    }

    weightMedia = weightMedia/repositoryCatraca[i].weight.length
    bodyTempMedia = bodyTempMedia/repositoryCatraca[i].bodyTemp.length

    const obj = {name, age, height, weightMedia, bodyTempMedia}
    arquivo.push(obj)
}

const dir = "./data/"
const filename = `Catraca_${moment()}`
const filePath = `${dir}_${filename}`;



if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir);
}

fs.writeFile(filePath, JSON.stringify(arquivo),(err) => {
  if (err) {
    console.error(err)
    return
  }
  console.log('Arquivo gravado com sucesso!');
})

export {app}