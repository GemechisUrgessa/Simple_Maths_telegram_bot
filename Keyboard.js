function myFunction() {
  
}
const identifier = {
  "inline_keyboard":
  [
     [{
      "text":"✅ R",
      "callback_data":"rich"
    },{
        "text":"✅ E",
      "callback_data":"engage"
    },{
      "text":"✅ R",
      "callback_data":"reciev"
    }],
   [{
      "text":"💫Refresh",
      "callback_data":"refresh"
    },{
      "text":"🗂 All Data",
      "callback_data":"all_data"
    }]
] 
};
const main={
  "inline_keyboard":
  [
    [{
      "text":"➕➗Calculate",
      'callback_data':'to_cal'
    },{
      "text":"🛄Unit Conversion",
      'callback_data':'to_con'
    }] 
  ]
};
const to_calc={
  "inline_keyboard":
  [
    [{
      "text":"🧿Area",
      'callback_data':'area1'
    },{
      "text":"📿Circumference",
      'callback_data':'area2'
    }],
    [{
      "text":"✖️X^2",
      'callback_data':'xn1'
    },{
      "text":"✖️X^3",
      'callback_data':'xn2'
    }],
    [{
      "text":"🈂️logx",
      'callback_data':'log'
    },{
      "text":"🈂️lnx",
      'callback_data':'ln'
    }],
    [{
      "text":"🎯GCD(x,y)",
      'callback_data':'divisor'
    },{
      "text":"🎲Factorial of x",
      'callback_data':'factor'
    }],
    [{
      "text":"🔅🔆Fibonacci",
      'callback_data':'fib'
    },{
      "text":"🗯🀄️Tower of hanoi",
      'callback_data':'han'
    }],
    [{
      "text":"🔙💫Back",
      'callback_data':'back'
    }]
  ]
};
const to_conv = {
  "inline_keyboard":
  [
  [{
    "text":"✅Convert ℃ to ℉ ",
    "callback_data":"temp1"
  },{
    "text":"🈂️Convert ℉ to ℃ ",
    "callback_data":"temp2"
  }],
  [{
    "text":"✳️Convert ° to rad",
    "callback_data":"degree1"
  },{
    "text":"🎗Convert rad to ° ",
    "callback_data":"degree2"
  }],
  [{
    "text":"🔙💫Back",
    "callback_data":"back"
  }]
  ]
};
const close = {  
"keyboard": [
[{ text: "❌💬 CLOSE CHAT AND BACK"}]
],
"one_time_keyboard" : true,
"resize_keyboard" : true,

}
const phoneshare = {  
"keyboard": [
[{ text: "📡 Share Contact From Telegram", request_contact: true }]
],
"one_time_keyboard" : true,
"resize_keyboard" : true
};
