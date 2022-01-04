function area(n) {
  return Math.PI * n * n;
}
function circ(n){
  return 2*Math.PI*n;
}
function squ(n){
  return Math.pow(n,2);
}
function cub(n){
  return Math.pow(n,3);
}
function lo(n){
  return Math.log(n)/Math.log(10);
}
function lan(n){
  return Math.log(n);
}
function Gcd(x,y){
  if(y == 0){
    return x;
  }
   return Gcd(y,x%y);
}
function fact(n){
  if(n == 1 || n == 0){
    return n;
  }
  return n*fact(n-1);
}
function temp1(n){
  return (n*(9/5))+32;
}
function temp2(n){
  return (n-32)*(5/9);
}
function degree1(n){
  return n*(Math.PI/180);
}
function degree2(n){
  return n*(180/Math.PI);
}

function fib(n,arr){
  if(n == 0){
    return 0;
  }
  else if(n==1){
    return 1;
  }
  else if(arr[n]!= 0.0){
    return arr[n];
  }
  else {
    let num = fib(n-1,arr) + fib(n-2,arr);
    arr[n]=num;
    return num;
  }
}
function fib1(n){
  let arr=new Array(n+1).fill(0);
  return fib(n,arr);
}
function han(n,pos1,pos2,pos3){
  if(n==1){
    return "\nMove disc "+n+" from "+pos1+" to "+pos3;
  }
  else{
     
    return han(n-1,pos1,pos3,pos2)+"\n"+"Move disc "+n+" from "+pos1+" to "+pos2 +"\n"+ han(n-1,pos3,pos2,pos1);
  }
}

function deleteText(id,text){
var response = UrlFetchApp.fetch(url + "/deleteMessage?chat_id="+id+"&message_id="+ text);
Logger.log(response.getContentText());

}

function sendText(id,text,keyBoard){
  var data = {
    method:"post",
    payload:{
      method:"sendMessage",
      chat_id:String(id),
      text: text,
      parse_mode:"HTML",
      reply_markup:JSON.stringify(keyBoard)
    }
  };

UrlFetchApp.fetch(url + "/", data);

}
function sendPhotowithcaption(id,photo,caption,keyBoard){
  var data = {
    method:"post",
    payload:{
      method:"sendPhoto",
      chat_id:String(id),
      photo: photo,
      caption: caption,
      parse_mode:"HTML",
      reply_markup:JSON.stringify(keyBoard)
    }
  };

UrlFetchApp.fetch(url + "/", data);


}
function sendAudiowithcaption(id,audio,caption){
  var data = {
    method:"post",
    payload:{
      method:"sendAudio",
      chat_id:String(id),
      audio: audio,
      caption: caption,
      parse_mode:"HTML"
    }
  };

UrlFetchApp.fetch(url + "/", data);
}
function sendVideo(id,audio){
    var data = {
    method:"post",
    payload:{
      method:"sendVideo",
      chat_id:String(id),
      video: audio
    }
  };

UrlFetchApp.fetch(url + "/", data);
}
function answerInlineQuery(id,result,butonname){
    var data = {
    method:"post",
    payload:{
      method:"answerInlineQuery",
      inline_query_id:String(id),
      results: JSON.stringify( result),
      cache_time: 0,
      //is_personal:true,
      next_offset:'',
      switch_pm_text:butonname,
      switch_pm_parameter:'man'
    }
  };

UrlFetchApp.fetch(url + "/", data);
}
function answerCallbackQuery(id,text){
     var data = {
    method:"post",
    payload:{
      method:"answerCallbackQuery",
      callback_query_id  :String(id),
      text: text,
      show_alert: true
    }
  };

UrlFetchApp.fetch(url + "/", data);
}
function editMessageMedia(id,m_id,in_id,media,keyBoard){
    var data = {
    method:"post",
    payload:{
      method:"editMessageMedia",
      chat_id  :String(id),
      message_id:m_id,
      inline_message_id:in_id,
      media: JSON.stringify(media),
      reply_markup:JSON.stringify(keyBoard)
    }
  };

UrlFetchApp.fetch(url + "/", data);
}

function editText(id,m_id,text,keyBoard){
     var data = {
    method:"post",
    payload:{
      method:"editMessageText",
      chat_id  :String(id),
      message_id:m_id,
      text: text,
      parse_mode:"HTML",
      reply_markup:JSON.stringify(keyBoard)
    }
  };

UrlFetchApp.fetch(url + "/", data);

}
function sendAnimation(id,anim,cap,keyBoard){
   var data = {
    method:"post",
    payload:{
      method:"sendAnimation",
      chat_id  :String(id),
      animation:anim,
      caption:cap,
      parse_mode:"HTML",
      reply_markup:JSON.stringify(keyBoard)
    }
  };

UrlFetchApp.fetch(url + "/", data);
}

function deletereplykeyboard(id,text,keyboard){
var data = {
    method:"post",
    payload:{
      method:"sendMessage",
      chat_id:String(id),
      text: text,
      parse_mode:"HTML",
      reply_markup:JSON.stringify({"remove_keyboard" : true })
    }
};
UrlFetchApp.fetch(url + "/", data);
}

function forceReply(id,text){
  var data = {
    method:"post",
    payload:{
      method:"sendMessage",
      chat_id:String(id),
      text: text,
      parse_mode:"HTML",
      reply_markup:JSON.stringify({"force_reply" : true })
    }
};
UrlFetchApp.fetch(url + "/", data);
}

function replyPhoto(id,photo,caption){
   var data = {
    method:"post",
    payload:{
      method:"sendPhoto",
      chat_id:String(id),
      photo: photo,
      caption: caption,
      parse_mode:"HTML",
      reply_markup:JSON.stringify({"force_reply" : true })
    }
  };

UrlFetchApp.fetch(url + "/", data);
}
