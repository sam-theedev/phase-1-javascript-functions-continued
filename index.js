function saturdayFun(activity="roller-skate"){
  return `This Saturday, I want to ${activity}!`
  }
       saturdayFun();

function mondayWork(activity="go to the office"){
  return `This Monday, I want to ${activity}`
}

function wrapAdjective(style){
  return function(string = 'special'){
    return `You are ${style} ${string} ${special}`
  }
}
