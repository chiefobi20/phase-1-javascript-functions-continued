function saturdayFun(activity = 'roller-skate'){
    return `This Saturday, I want to ${activity}!`
}

function mondayWork(work = 'go to the office'){
    return `This Monday, I will ${work}.`
}


function wrapAdjective(wrapped){
    return function(innerFn){
        return `You are ${wrapped}${innerFn}${wrapped}!`
    }
}
console.log(wrapAdjective('||'))