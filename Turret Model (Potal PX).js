 /*
  *
  * @Name - Turret (POTAL PX)
  *
  *
  * @author ptkim10
  * @e-mail ptkim10@naver.com
  *
  *
  */

function turret(renderer) {

var body = renderer.getModel().getPart("body");
body.clear();

body.setTextureOffset(16, 0);

for(var b1=0;b1<6;b1++)
{
for(var b3=0;b3<12;b3++)
{
body.addBox(b1,-7,b3, 1, 24, 1);
}}

for(var b4=0;b4<4;b4++)
{
for(var b6=0;b6<8;b6++)
{
body.addBox(4+b4, 2-7, 2+b6,1, 20, 1);
}}

for(var b7=0;b7<4;b7++)
{
for(var b9=0;b9<8;b9++)
{
body.addBox(-2+b7, 2-7, 2+b9, 1, 20, 1); //몸통
}}

for(var c2=0;c2<5;c2+=0.2) //뒷무릎
{
body.addBox(2.5, 18.5+c2*0.7 -7, 15+c2, 1, 1, 1);
body.addBox(1.5, 18.5+c2*0.7 -7, 15+c2, 1, 1, 1);
}

for(var c2=0;c2<4;c2+=0.2) //앞무릎
{
body.addBox(-2.5, 25+c2*0.3 -7, 3-c2, 2, 1, 1);
body.addBox(6.5, 25+c2*0.3 -7, 3-c2, 2, 1, 1);
}


body.setTextureOffset(48,16);

for(var c3=0;c3<10;c3++) //뒷다리 하
{
body.addBox(2, 21+c3-7, 17, 1, 1, 1);
}

for(var c=0;c<100;c++) //뒷다리 상
{
sin=-Math.sin(c/180*Math.PI);
cos=Math.cos(c/180*Math.PI);
tan=Math.tan(c/180*Math.PI);
body.addBox(2,-2*sin+20 -7,12+5*cos,1,1,1);
}

for(var c=0;c<130;c++)
{
sin=-Math.sin(c/180*Math.PI);
cos=Math.cos(c/180*Math.PI);
tan=Math.tan(c/180*Math.PI);
body.addBox(0.5+3*sin,-5*sin+22 -7,6+5*cos,1,1,1);
body.addBox(4.5-3*sin,-5*sin+22 -7,6+5*cos,1,1,1); //앞다리 상
}

for(var c4=0;c4<6;c4++) //앞다리 하
{
body.addBox(-2, 26+c4-7, 1, 1, 1, 1);
body.addBox(7, 26+c4-7, 1, 1, 1, 1);
}

body.setTextureOffset(0,8);
body.addBox(2.5, 14-7, -0.5, 1, 1, 1);
body.addBox(2, 14-7+0.5, -0.5, 1, 1, 1);
body.addBox(3, 14-7+0.5, -0.5, 1, 1, 1);
body.addBox(2, 14-7-0.5, -0.5, 1, 1, 1);
body.addBox(3, 14-7-0.5, -0.5, 1, 1, 1);

body.addBox(2.5, 13-7, -0.5, 1, 1, 1);
body.addBox(2.5, 15-7, -0.5, 1, 1, 1);
body.addBox(1.5, 14-7, -0.5, 1, 1, 1);
body.addBox(3.5, 14-7, -0.5, 1, 1, 1);

var head = renderer.getModel().getPart("head");
head.clear();
var leftArm = renderer.getModel().getPart("leftArm");
leftArm.clear();
var rightArm = renderer.getModel().getPart("rightArm");
rightArm.clear();
var leftLeg = renderer.getModel().getPart("leftLeg");
leftLeg.clear();
var rightLeg = renderer.getModel().getPart("rightLeg");
rightLeg.clear();
}
