const code = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""), code_length = code.length;
var codeUnits=[1],codeUnits1=[1],codeUnits2=[1,code_length];
for(var i=1;i<99;i++){
  codeUnits[i] = Math.pow(code_length, i)+codeUnits[i-1];
  codeUnits1[i] = codeUnits[i]+1;
  codeUnits2[i+1] = Math.pow(code_length,i+1);
}
function encodeId(input){
  var output="",out_length=0,buffer = [];
  for(var i=0;input>=i;out_length++) i=codeUnits[out_length+1]-1;
  for(var i=out_length,j=0,sum=0,input1=input-(codeUnits[out_length-1]-1);i>0;i--,j++){
    if(input1<code_length){
      buffer[j] = Math.floor(input1/codeUnits1[i-1]);
    } else {
      buffer[j] = Math.floor(input1/codeUnits2[i-1]);
      input1-= buffer[j]*codeUnits2[i-1];
    }
  }
  for(var i=0;i<buffer.length;i++) output+=code[buffer[i]];
return output;
}
function decodeId(input){
  var output=codeUnits[input.length-1]-1;
  for(var i=input.length,j=0;i>0;i--,j++){
    output+=(code.indexOf(input[j]))*codeUnits2[i-1];
  }
return output;
}
