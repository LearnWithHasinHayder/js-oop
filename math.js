function MathX(){}

MathX.prototype.add = function(a, b){
    return a + b;
}

MathX.prototype.subtract = function(a, b){
    return a - b;
}

const m = new MathX();
const result = m.add(12,4);
console.log(result);
// const result = MathX.add(12,4);

const r = (new MathX()).add(12,4);
console.log(r);