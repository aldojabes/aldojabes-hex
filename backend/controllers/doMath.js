import { DoMathRequest } from "../models/DoMathRequestDto.js";

function computeResults(operand1,operand2,operation){
    operand1 = parseInt(operand1);
    operand2 = parseInt(operand2)

    if(operation == '+'){
        return operand1+operand2
    }
    if(operation == '-'){
        return operand1-operand2
    }
    if(operation == '*'){
        return operand1*operand2
    }
    if(operation == '/'){
        return operand1/operand2
    }
    console.log("test")
    return "Invalid inputs";

}


export const MathController = async(req,res)=>{
    try{
        var request = new DoMathRequest(req.body);
        var result = computeResults(request.operand1,request.operand2,request.operation);

        res.json({
            calcResponse: result
        })
    }catch(error){
        res.json({
            message: error.message
        })
    }
}