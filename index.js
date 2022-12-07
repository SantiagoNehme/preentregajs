function CalcularPromedio(){
    var v1 = document.getElementById("n1").value;
    var v2 = document.getElementById("n2").value;
    var v3 = document.getElementById("n3").value;
    var pro = (parseFloat(v1)+parseFloat(v2)+parseFloat(v3))/3;
    document.getElementById("promedio").innerHTML = pro;
}