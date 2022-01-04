const token = "2046102946:AAHUbr0v1i7QNTdCX78j-uXyEdGExnrYEHY";
const url = "https://api.telegram.org/bot" + token;
const webappurl = "https://script.google.com/macros/s/AKfycbx6gPD9LoJi_N6B-lD2sdJ-mUy6i_FkB7zDGwEw7KrUe9wGlmOK1uZgYjHzZagbDo5A/exec";
const ssid = "1Bnf7dhkyk4cPP2_VXI1PVAWQ6Mc_A1GBzLMSBG3IWpA";

function getme() {
  let response = UrlFetchApp.fetch(url + "/getME");
  Logger.log(response.getContentText());
}

function setWebhook() {
  let response = UrlFetchApp.fetch(url + "/setWebhook?url=" + webappurl);
  Logger.log(response.getContentText());
}

function deleteWebhook() {
  let response = UrlFetchApp.fetch(url + "/deleteWebhook");
  Logger.log(response.getContentText());
}

function doPost(e) {

  let contents = JSON.parse(e.postData.contents);
  let mysheet = SpreadsheetApp.openById(ssid).getSheetByName("Sheet1");
  let secsheet = mysheet.getRange('A1:Z1000').getCell(1, 3);

  if (contents.callback_query) {
    const data = contents.callback_query.data;
    const id = contents.callback_query.from.id;
    const m_id = contents.callback_query.message.message_id;


    if (data == "to_cal") {
      try { editText(id, m_id,"<b>Please choose any butten you would like to operate.</b>", to_calc); }
      catch (err) { sendText(id, err) }
    }
    else if (data == "to_con") {
      try { editText(id, m_id,"<b>Please choose any butten you would like to operate.</b>", to_conv); }
      catch (err) { sendText(id, err) }
    }
    else if (data == "back") {
      try { editText(id, m_id, "<b>Please select one of the buttons u see below to proceed.</b>", main); }
      catch (err) { sendText(id, err) }
    }
    else if (data == "area1") {
      forceReply(id,"<i>Please insert the value of radius in meter :</i> ")
      secsheet.setValue('area');
    }
    else if (data == "area2") {
      forceReply(id,"<i>Please insert the value of radius in meter : </i>");
      secsheet.setValue("circ");
    }
    else if (data == "xn1") {
       forceReply(id,"<i>Please insert the value to be squared : </i>");
      secsheet.setValue("squ");
    }
    else if (data == "xn2") {
       forceReply(id,"<i>Please insert the value you want to get its cube : </i>");
      secsheet.setValue("cub");
    }
    else if (data == "log") {
       forceReply(id,"<i>Please insert the value of you want to get its log : </i>");
      secsheet.setValue("log");
    }
    else if (data == "ln") {
       forceReply(id,"<i>Please insert the value of you want to get its ln: </i>");
      secsheet.setValue("ln");
    }
    else if (data == "divisor") {
       forceReply(id,"<i>Please insert the values, that you want get their GCD(note: use comma to separet the numbers): </i>");
      secsheet.setValue("gcd");
    }
    else if (data == "factor") {
       forceReply(id, "<i>Please insert the value that you want to get its factorial : </i>");
      secsheet.setValue("facto");
    }
    else if (data == "temp1") {
       forceReply(id,"<i>Please insert the value of celsius : </i>");
      secsheet.setValue("temp1");
    }
    else if (data == "temp2") {
       forceReply(id,"<i>Please insert the value of fahrenheit : </i>");
      secsheet.setValue("temp2");
    }
    else if (data == "degree1") {
       forceReply(id,"<i>Please insert the value of the degree : </i>");
      secsheet.setValue("degree1");
    }
    else if (data == "degree2") {
       forceReply(id,"<i>Please insert the value of that radian : </i>");
      secsheet.setValue("degree2");
    }
    else if (data == "fib") {
       forceReply(id,"<i>Please insert the index of the fibonacci number you want to get : </i>");
      secsheet.setValue("fib");
    }
    else if (data == "han") {
       forceReply(id,"<i>Please insert the number of disk : </i>");
      secsheet.setValue("han");
    }
  }

  else {
    let id = contents.message.from.id;
    let first_name = contents.message.from.first_name;
    var text = contents.message.text;


    try {
      let first_name = contents.message.from.first_name;
      if (text == "/start") {
        sendText(id, "Hi " + first_name + "<b>,welcome to <i>Simple_Math</i> bot, I hope u will enjoy it!.Please select one of the buttons u see below to proceed.<i>(NB: Pleas use '/start' to get new keyboard, other inputes are undefined.)</i></b> ", main);
      }
      else if (secsheet.getValue() == 'area') {
        let to_num = Number(text);
        sendText(id, "<b>The Area of Circle with radius " + to_num + " m is : </b> " + area(to_num) + "m^2", to_calc);
        secsheet.clear();
      }
      else if (secsheet.getValue() == 'circ') {
        let to_num = Number(text);
        sendText(id, "<b>The Circumference of the Circle with radius " + to_num + " m is : </b> " + circ(to_num) + "m", to_calc);
        secsheet.clear();
      }
      else if (secsheet.getValue() == 'squ') {
        let to_num = Number(text);
        sendText(id, "<b>The Square of " + to_num + " is : </b> " + squ(to_num), to_calc);
        secsheet.clear();
      }
      else if (secsheet.getValue() == 'cub') {
        let to_num = Number(text);
        sendText(id, "<b>The Cube of " + to_num + " is : </b> " + cub(to_num), to_calc);
        secsheet.clear();
      }
      else if (secsheet.getValue() == 'log') {
        let to_num = Number(text);
        sendText(id, "<b>The log of " + to_num + " is : </b> " + lo(to_num), to_calc);
        secsheet.clear();
      }
      else if (secsheet.getValue() == 'ln') {
        let to_num = Number(text);
        sendText(id, "<b>The ln of " + to_num + " is : </b> " + lan(to_num), to_calc);
        secsheet.clear();
      }
      else if (secsheet.getValue() == 'gcd') {
        let temp = text.split(",");
        let to_num1 = Number(temp[0]);
        let to_num2 = Number(temp[1]);
        sendText(id, "<b>The GCD of " + to_num1 + " and " + to_num2 + " is : </b> " + Gcd(to_num1, to_num2), to_calc);
        secsheet.clear();
      }
      else if (secsheet.getValue() == 'facto') {
        let to_num = Number(text);
        sendText(id, "<b>The Factorial of " + to_num + " is : </b> " + fact(to_num), to_calc);
        secsheet.clear();
      }
      else if (secsheet.getValue() == 'temp1') {
        let to_num = Number(text);
        sendText(id, "<b>The Fahrenheit value of " + to_num + " ℃ is : </b> " + temp1(to_num) + "℉", to_conv);
        secsheet.clear();
      }
      else if (secsheet.getValue() == 'temp2') {
        let to_num = Number(text);
        sendText(id, "<b>The Celsius value of " + to_num + " ℉ is : </b> " + temp2(to_num) + "℃", to_conv);
        secsheet.clear();
      }
      else if (secsheet.getValue() == 'degree1') {
        let to_num = Number(text);
        sendText(id, "<b>The Radian value of " + to_num + "° is : </b> " + degree1(to_num) + "rad", to_conv);
        secsheet.clear();
      }
      else if (secsheet.getValue() == 'degree2') {
        let to_num = Number(text);
        sendText(id, "<b>The Degree value of " + to_num + " rad is : </b> " + degree2(to_num) + "°", to_conv);
        secsheet.clear();
      }
      else if (secsheet.getValue() == 'fib') {
        let to_num = Number(text);
        sendText(id, "<b>The Fibonacci number of index " + to_num + " is : </b> " + fib1(to_num) , to_calc);
        secsheet.clear();
      }
      else if (secsheet.getValue() == 'han') {
        let to_num = Number(text);
        sendText(id, "<b>The moves are: </b> \n"  + han(to_num,'pos1','pos2','pos3'), to_calc);
        secsheet.clear();
      }
    } catch (err) { sendText(id, err) }
  }
}