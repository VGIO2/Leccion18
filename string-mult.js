function stringMultiplicar(n) 
{
    var salida = "";
    var resultado;
    
    for (var i=1; i<=10; i++)
        {
           resultado=i*n;
           salida +=n+ "x" + i + "=" + resultado ;
           if((i+1)<=10){
               salida+="/";
           }
            
        }
    return salida;
    
}