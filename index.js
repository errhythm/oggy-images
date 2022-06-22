"use strict";

var _puppeteerSocialImage = _interopRequireDefault(require("puppeteer-social-image"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const express = require('express'),
      app = express(),
      puppeteer = require('puppeteer');

app.get("/", async (request, response) => {
  const image = await (0, _puppeteerSocialImage.default)({
    template: "basic",
    templateParams: {
      imageUrl: "https://images.unsplash.com/photo-1557958114-3d2440207108?w=1950&q=80",
      title: `${request.query.title}`
    },
    type: "png",
    size: "facebook"
  });
  response.set('Content-Type', 'image/png');
  response.send(image);
});

app.get("/article", async (request, response) => {
  const image = await (0, _puppeteerSocialImage.default)({
    template: "article",
    templateParams: {
      imageUrl: "https://source.unsplash.com/gGX1fJkmw3k",
      title: `${request.query.title}`,
      eyebrow: `${request.query.eyebrow}`,
      subtitle: `${request.query.subtitle}`
    },
    type: "png",
    size: "facebook"
  });
  response.set('Content-Type', 'image/png');
  response.send(image);
});

app.get("/sansuyu", async (request, response) => {
  const image = await (0, _puppeteerSocialImage.default)({
    templateBody: '<!DOCTYPE html><head><title>index</title><link rel="icon" type="image/x-icon" href="./assets/favicon.ico"/><meta charset="utf-8"/><meta name="viewport" content="width=device-width, initial-scale=1"/><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Vidaloka&display=swap" rel="stylesheet"><link href="https://fonts.googleapis.com/css2?family=Asap&display=swap" rel="stylesheet"><link rel="stylesheet" href="./style.css"></head><body><div class="main"><div class="container"><div class="side-1"><div class="logo"><img src="https://i.ibb.co/vw3PqJY/Logo-Full.png" alt=""></div><div class="code"><p>CODE</p><h2>{{code}}</h2></div><div class="color"><p>AVAILABLE COLORS:</p><h4>{{colors}}</h4></div><div class="price"><p>PRICE</p><h2>{{price}}</h2><h2>BDT</h2></div><div class="advance"><h2>ADVANCE {{advance}}%</h2></div><div class="fb"><div class="icon"><img src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg" alt=""></div><div class="fb-p"><p>Sansuyu.bd</p></div></div><br><div class="insta"><div class="icon"><img src="https://upload.wikimedia.org/wikipedia/commons/e/e7/Instagram_logo_2016.svg" alt=""></div><div class="insta-p"><p>Sansuyu.bd</p></div></div></div><div class="side-2"><img src="{{image}}" alt="" style="object-position: {{position}}%;"></div></div></div></body></html>',
    templateStyles: `*{margin:0;padding:0;box-sizing:border-box}body{font-family:Asap,sans-serif}.main{width:100%}.container{display:flex;width:1080px;height:1080px;margin:0 auto}.side-1{width:310px;height:1080px;background:#f5f5f5}.logo img{width:310px;height:240px;object-fit:cover}.code{width:310px;height:110px;text-align:center;letter-spacing:5px}.code p{font-size:18px;margin-bottom:5px}.code h2{font-family:Vidaloka,serif;font-size:46px}.color{width:310px;height:230px;text-align:center;letter-spacing:5px}.color p{font-size:18px;margin-bottom:5px}.color h4{font-family:Vidaloka,serif;font-size:20px}.price{width:310px;height:200px;text-align:center;letter-spacing:5px}.price p{font-size:21px;margin-bottom:5px}.price h2{font-family:Vidaloka,serif;font-size:46px}.advance{width:310px;height:150px;text-align:center;letter-spacing:5px}.advance p{font-size:21px;margin-bottom:12px}.advance h2{font-family:Vidaloka,serif;font-size:30px}.fb{display:flex;justify-content:center}.insta{display:flex;justify-content:center}.icon img{width:30px;height:30px;object-fit:cover}.fb-p{margin-left:15px}.fb-p p{text-align:center;letter-spacing:5px;margin-top:5px;font-size:20px}.insta-p{margin-left:15px}.insta-p p{text-align:center;letter-spacing:5px;margin-top:5px;font-size:20px}.side-2{width:100%;height:100%}.side-2 img{width:100%;height:100%;object-fit:cover}`,
    templateParams: {
      image: `${request.query.image}`,
      price: `${request.query.price}`,
      code: `${request.query.code}`,
      advance: `${request.query.advance}`,
      position: `${request.query.position}`,
      colors: `${request.query.colors}`
  },
    type: "png",
    size: "ig-square"
  });
  response.set('Content-Type', 'image/png');
  response.send(image);
});

var listener = app.listen(3000, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});