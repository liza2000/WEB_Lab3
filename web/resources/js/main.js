$(document).ready(function(){
    var list_of_X = Array();
    var list_of_Y = Array();
    var x;
    var y;
    var R = null;
   var warningY = document.getElementById("warningY");
    var warningX = document.getElementById("warningX");
    var inputY=document.getElementById("enterY");
    document.getElementById("x").value=null;
    document.getElementById("formR").value=null;
    document.getElementById("canvaForm:canvaR").value=R;
    inputY.value="";

    //Graph
    var paint_canvas = document.getElementById("plot");
    var context = paint_canvas.getContext("2d");

    //Ox
    context.moveTo(30, 150);
    context.lineTo(270, 150);
    context.lineTo(260, 140);
    context.moveTo(270, 150);
    context.lineTo(260, 160);

    //Oy
    context.moveTo(150, 30);
    context.lineTo(140, 40);
    context.moveTo(150, 30);
    context.lineTo(160, 40);
    context.moveTo(150, 30);
    context.lineTo(150, 270);
    context.moveTo(30, 150);
    context.closePath();
    context.stroke();

    context.beginPath();
    context.moveTo(147.5,50);
    context.lineTo(152.5,50);
    context.moveTo(147.5,70);
    context.lineTo(152.5,70);
    context.moveTo(147.5,90);
    context.lineTo(152.5,90);
    context.moveTo(147.5,110);
    context.lineTo(152.5,110);
    context.moveTo(147.5,130);
    context.lineTo(152.5,130);
    context.moveTo(147.5,170);
    context.lineTo(152.5,170);
    context.moveTo(147.5,190);
    context.lineTo(152.5,190);
    context.moveTo(147.5,210);
    context.lineTo(152.5,210);
    context.moveTo(147.5,230);
    context.lineTo(152.5,230);
    context.moveTo(147.5,250);
    context.lineTo(152.5,250);

    context.moveTo(50,147.5);
    context.lineTo(50,152.5);
    context.moveTo(70,147.5);
    context.lineTo(70,152.5);
    context.moveTo(90,147.5);
    context.lineTo(90,152.5);
    context.moveTo(110,147.5);
    context.lineTo(110,152.5);
    context.moveTo(130,147.5);
    context.lineTo(130,152.5);
    context.moveTo(170,147.5);
    context.lineTo(170,152.5);
    context.moveTo(190,147.5);
    context.lineTo(190,152.5);
    context.moveTo(210,147.5);
    context.lineTo(210,152.5);
    context.moveTo(230,147.5);
    context.lineTo(230,152.5);
    context.moveTo(250,147.5);
    context.lineTo(250,152.5);

    context.closePath();

    context.stroke();





    var link_5 =  document.getElementById("x-5");
    var link_4 =  document.getElementById("x-4");
    var link_3 =  document.getElementById("x-3");
    var link_2 =  document.getElementById("x-2");
    var link_1 =  document.getElementById("x-1");
    var link0 =  document.getElementById("x0");
    var link1 =  document.getElementById("x1");
    var link2 =  document.getElementById("x2");
    var link3 =  document.getElementById("x3");
    link_5.addEventListener("click",function (ev) {document.getElementById("x").value=-5; clearAll(-5);chngX()},false);
    link_4.addEventListener("click",function (ev) {document.getElementById("x").value=-4; clearAll(-4);chngX()},false);
    link_3.addEventListener("click",function (ev) {document.getElementById("x").value=-3;clearAll(-3);chngX()},false);
    link_2.addEventListener("click",function (ev) {document.getElementById("x").value=-2;clearAll(-2); chngX()},false);
    link_1.addEventListener("click",function (ev) {document.getElementById("x").value=-1;clearAll(-1); chngX()},false);
    link0.addEventListener("click",function (ev) {document.getElementById("x").value=0;clearAll(0); chngX()},false);
    link1.addEventListener("click",function (ev) {document.getElementById("x").value=1;clearAll(1); chngX()},false);
    link2.addEventListener("click",function (ev) {document.getElementById("x").value=2;clearAll(2);chngX()},false);
    link3.addEventListener("click",function (ev) {document.getElementById("x").value=3;clearAll(3); chngX()},false);
    function clearAll(i) {
        link_5.style.color='black';
        link_4.style.color='black';
        link_3.style.color='black';
        link_2.style.color='black';
        link_1.style.color='black';
        link0.style.color='black';
        link1.style.color='black';
        link2.style.color='black';
        link3.style.color='black';
        switch (i) {
            case -5: link_5.style.color='red';break;
            case -4: link_4.style.color='red';break;
            case -3: link_3.style.color='red';break;
            case -2: link_2.style.color='red';break;
            case -1:  link_1.style.color='red';break;
            case 0:   link0.style.color='red';break;
            case 1: link1.style.color='red';break;
            case 2:   link2.style.color='red';break;
            case 3:   link3.style.color='red';break;
        }
        document.getElementById("warningX").innerText=''

    }

    document.getElementById("check").addEventListener("click",function (ev) { if (isOk()) ok() },false);

    function isOk(){

      warningX.innerText='';
        if (document.getElementById("x").value==='')warningX.innerText='X не выбран';
        if (inputY.value==='') warningY.innerText='Y не введен';
     return   document.getElementById("formR").value!==''&&
             document.getElementById("x").value!==''&&
            inputY.value!==''&&
            /^-?\d+([.,]\d+)?$/.test(inputY.value)&&
            inputY.value!=='-0'&&
            inputY.value<5&&inputY.value>-3;

    }

    inputY.addEventListener("keyup",function (ev) {
        if (this.value==='') warningY.innerText='Y не введен'; else

            if (!/^-?\d+([.,]\d+)?$/.test(this.value)||this.value==='-0') warningY.innerText="Y некорректен"; else

             if (this.value>=5||this.value<=-3) warningY.innerText='Y не входит в диапазон (-3,5)'; else  warningY.innerText='';

        if (this.value==='00'||this.value==='-0') this.value=0;
        if (this.value[0]==='0'){this.value='0';  warningY.innerText='';}

    });


    document.getElementById("canvaForm:canvaslider").addEventListener("keydown",function (ev) {
        changeCanva(ev);
        if (R!=='')
            paint_canvas.addEventListener("click", drawPoint, false);},false) ;

    document.getElementById("canvaForm:canvaslider").addEventListener("mousedown",function (ev) {

        document.addEventListener("mousemove",changeCanva,false);
        document.addEventListener("mouseup",function (ev1) {  changeCanva(ev);
            if (R!=='') paint_canvas.addEventListener("click", drawPoint, false);
            document.removeEventListener("mousemove",changeCanva,false);
        });

    },false);




     function changeCanva(e) {
        R = document.getElementById("canvaForm:canvaR").value;

        drawCanva(R);
        list_of_X.forEach(function(item, i, arr) {
            drawDefinedPoint(item, list_of_Y[i]);
        });
      }


    function drawPoint(e) {

         if (R==null) return;

            getCursorPosition(e);

            list_of_X.push(x);
            list_of_Y.push(y);
            drawDefinedPoint(x, y);
            document.getElementById("canvaForm:canvaX").value = x;
            document.getElementById("canvaForm:canvaY").value = y;
            canvaReady();
    }

    function drawDefinedPoint(xx, yy) {
        context.beginPath();
        context.arc(xx, yy, 2, 0,2*Math.PI);
        xx -= 150;
        yy -= 150;
        xx = xx/20;
        yy = yy/-20;
        context.fillStyle = 'red';
        if (checkArea(xx, yy, R)) context.fillStyle = 'white';
        context.fill();
        context.closePath();
        x = xx;
        y = yy;
    }

    function checkArea(x, y, r){

        if (x>0) return x<=r/2 && y<=0 && Math.abs(y)<=r;

        if (y>=0)  return x*x+y*y<r*r;

        return 2*Math.abs(x)+Math.abs(y)<=r
    }

    function getCursorPosition(e) {
        if (e.pageX != undefined && e.pageY != undefined) {
            x = e.pageX;
            y = e.pageY;
        }
        else {
            x = e.clientX + document.body.scrollLeft +
                document.documentElement.scrollLeft;
            y = e.clientY + document.body.scrollTop +
                document.documentElement.scrollTop;
        }
        x -= document.getElementById("leftSide").offsetLeft+4 ;
        y -= document.getElementById("leftSide").offsetTop+3 ;
    }


    function drawCanva(r) {
        paint_canvas.width+=0;
        context.beginPath();
        context.arc(150, 150, 20*r, Math.PI, 3*Math.PI/2);
        context.lineTo(150, 150);
        context.closePath();
        context.rect(150, 150, 10*r, 20*r);
        context.fillStyle = '#265196';
        context.fill();
        context.beginPath();
        context.moveTo(150, 150);
        context.lineTo(150, 150+20*r);
        context.lineTo(150-10*r, 150);
        context.lineTo(150, 150);
        context.closePath();
        context.fillStyle = '#265196';
        context.fill();
        context.beginPath();

        //Ox
        context.moveTo(30, 150);
        context.lineTo(270, 150);
        context.lineTo(260, 140);
        context.moveTo(270, 150);
        context.lineTo(260, 160);

        //Oy
        context.moveTo(150, 30);
        context.lineTo(140, 40);
        context.moveTo(150, 30);
        context.lineTo(160, 40);
        context.moveTo(150, 30);
        context.lineTo(150, 270);
        context.moveTo(30, 150);
        context.closePath();
        context.stroke();



        context.beginPath();
        context.moveTo(147.5,50);
        context.lineTo(152.5,50);
        context.moveTo(147.5,70);
        context.lineTo(152.5,70);
        context.moveTo(147.5,90);
        context.lineTo(152.5,90);
        context.moveTo(147.5,110);
        context.lineTo(152.5,110);
        context.moveTo(147.5,130);
        context.lineTo(152.5,130);
        context.moveTo(147.5,170);
        context.lineTo(152.5,170);
        context.moveTo(147.5,190);
        context.lineTo(152.5,190);
        context.moveTo(147.5,210);
        context.lineTo(152.5,210);
        context.moveTo(147.5,230);
        context.lineTo(152.5,230);
        context.moveTo(147.5,250);
        context.lineTo(152.5,250);

        context.moveTo(50,147.5);
        context.lineTo(50,152.5);
        context.moveTo(70,147.5);
        context.lineTo(70,152.5);
        context.moveTo(90,147.5);
        context.lineTo(90,152.5);
        context.moveTo(110,147.5);
        context.lineTo(110,152.5);
        context.moveTo(130,147.5);
        context.lineTo(130,152.5);
        context.moveTo(170,147.5);
        context.lineTo(170,152.5);
        context.moveTo(190,147.5);
        context.lineTo(190,152.5);
        context.moveTo(210,147.5);
        context.lineTo(210,152.5);
        context.moveTo(230,147.5);
        context.lineTo(230,152.5);
        context.moveTo(250,147.5);
        context.lineTo(250,152.5);
        context.closePath();

        context.stroke();



    }

});