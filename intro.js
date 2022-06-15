const puppeteer=require("puppeteer");
let page;
// console.log("before");
const browseropenPromise=puppeteer.launch({headless:false});
browseropenPromise
    .then(function(browser){
    //console.log("browser opened");
    //currently opened tabs
    const pagesArrPromise=browser.pages();
    return pagesArrPromise;
    }).then(function(browserPages){
    page=browserPages[0];
    let gotoPromise=page.goto("https://www.google.com/");
    return gotoPromise;
    }).then(function(){
        //waiting for the element to appear on the page
        let elementWaitPromise=page.waitForSelector("input[type='text']",{visible:true});
        return elementWaitPromise;
    }).then(function (){
    console.log("reached google home page");
    //type any element on the page-->selector
    let keysWillBeSendPromise=page.type("input[type='text']","pepcoding");
    return keysWillBeSendPromise
    }).then(function (){
        //page.keyboard to type special characters
        let enterWillBePressed=page.keyboard.press("Enter");
        return enterWillBePressed;
    }).then(function(){
        let elementWaitPromise=page.waitForSelector("h3.LC20lb.MBeuO.DKV0Md",{visible:true});
        return elementWaitPromise;
    }).then(function(){
        //mouse
        let keysWillBeSendPromise=page.click("h3.LC20lb.MBeuO.DKV0Md");
        return keysWillBeSendPromise;
    })
    .catch(function (err){
        console.log(err);
    })
// console.log("After");