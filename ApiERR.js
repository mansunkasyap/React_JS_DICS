class ApiERR extends Error{
   constructor( statusCode, Msg="this is API Error"){
    super(Msg)
    this.statusCode = statusCode;
    this.Msg = Msg;
    // this.stack= stack;  
    }
}
export default ApiERR;