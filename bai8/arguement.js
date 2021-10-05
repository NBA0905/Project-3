// function noti(){
//     console.log("Hellooo")
// }

// noti()

// function add(a,b){
//     console.log(a+b)
// }

// add(5,6)

function int(){
    for(var arg of arguments)
    console.log(arg)
}

int(1,2,3)

function pow(a,n){
    var pow = 1
    while(n--){
        pow *= a
    }
}

pow(2,3)