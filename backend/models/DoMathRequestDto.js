export class DoMathRequest{
    operand1;
    operand2;
    operation;

    constructor(data){
        this.operand1 = data.operand1
        this.operand2 = data.operand2
        this.operation = data.operation
    }
}
