Centering Elements
1. Check if height/width =100%;
2. How 100% width, 100% height works:
-the PARENT has to have position:absolute or flex;
Centering contents of div 1/4 (apply to ABSOLUTE child), check if height/width =100%;
position: absolute;
top: 50%;
left: 50%;
transform: translateY(-50%);
transform: translateX(-50%);
Centering contents of div 2/4(apply to RELATIVE child)
child: relative;
display:block;
text-align:center;

Centering contents of div 3/4 (apply RELATIVE children, set parent to FLEXIBLE)
display: flex; (kolejnosc tez moze miec znaczenie)
align-items: center; /* align vertical */
justify-content: center; /* align horizontal */

Centering contents of div 4/4  (apply RELATIVE children, set parent to FLEXIBLE)
parent: 
display:flex; (kolejnosc tez moze miec znaczenie)
position: absolute/relative;
child:
margin:auto;

OR
.example-text-align
	.container
text-align: center;
	.box
display: inline-block;

.example-margin-auto
	.box
margin-left: auto;
margin-right: auto; 
.example-ABSOLUTE-positioning
	.container
position: relative;
	.box
position: absolute;
left:50%;
top:50%;
+transform(translate(-50%,-50%));

How 100% width, 100% height works:
-the PARENT has to have position:absolute or flex;
