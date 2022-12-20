let text = "kasur rusak"
let cek = 0

for(var i = 0; i < text.length; i++){
    if(text[i] != text[text.length-i-1]){
        cek++
    }
}

if(cek == 0){
    console.log("Palindrome")
}else{
    console.log("Not Palindrome")
}