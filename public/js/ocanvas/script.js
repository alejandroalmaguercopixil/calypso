	$(document).ready(function(){
		//crea el canvas
		var c = document.querySelector("#canvas"),
			ctx = c.getContext("2d");
		c.addEventListener("touchmove", function (e) { e.preventDefault(); }, false);
		//objeto padre
		var canvas = oCanvas.create({
			canvas: "#canvas",
			
		});

		
		//listado de nodes creados
		var nodes=[];

		//listado de edges creados
		var edges=[];


		//objeto que controla el estatus al momento de crear los edges
		var creatingEdge={
			status: 0,
			source: -1,
			target: -1,

		};

	/***********************************************************************/
	

	
	/**
	* Añade un nodo al canvas.
	* returns: el nodo añadido.
	*/
	 window.addNode2 = function () {

	 	creatingEdge.status=0;
	 	creatingEdge.source=-1;
	 	creatingEdge.target=-1;
		var rectangle = canvas.display.rectangle({
			x: 10,
			y: 10,
			width: 116,
			height: 76,
			fill: "#999",
			shadow :"0 0 1px #000",
			strokeColor :"#000",
			strokeWidth :1,
			zIndex:"back",
		});
		var dragOptions = { changeZindex: true,
			start: function(){
				resetColors();
				//getProperties();
			},
			move: function () {
					var sourceEdges = getEdgesSourceId(this.id),
						targetEdges = getEdgesTargetId(this.id);
					for (var i = 0; i < sourceEdges.length; i++) {
						coord =drawEdge(this, (getElementById(sourceEdges[i].target)).element);											
						coord.id =sourceEdges[i].id;						
						canvas.children[getElementById(sourceEdges[i].id).position]=coord;					
					}			
					for (var i = 0; i < targetEdges.length; i++) {
						coord =drawEdge((getElementById(targetEdges[i].source)).element, this);											
						coord.id =targetEdges[i].id;						
						canvas.children[getElementById(targetEdges[i].id).position]=coord;					
					}		
			},		
		}

		
		var text = canvas.display.text({
			x: 50,
			y: 10,
			origin: { x: "center", y: "top" },
			font: "bold 12px sans-serif",
			text: "<sin nombre>",
			fill: "#000"
		});

		rectangle.addChild(text);

		rectangle.dragAndDrop(dragOptions);
		rectangle.bind("click",clickNode);
		canvas.addChild(rectangle);	

		nodes.push({
			id:rectangle.id,
			name: "<sin nombre>",
			works:[],
		});

		selectElement(rectangle);
		return rectangle;
	}

	/**
	* Actualiza un nodo al canvas.
	* returns: el nodo actualizado.
	*/
	 window.saveNode = function () {
	 	
	 	//check values 
	 	var idCurrentElement = $("#idCurrentElement").val();
	 	var nameCurrentElement = $("#nameCurrentElement").val();
	 	
	 	if (isNaN(idCurrentElement)||idCurrentElement==""){
	 		alert("No se ha seleccionado un nodo");

	 	}
	 	else 
	 	if (nameCurrentElement==""){
	 		alert("No se llenado el nombre del nodo");
	 	}
	 	else {
	 		var currentElement = getElementById(idCurrentElement);
	 		var currentNode = getNodeById(idCurrentElement);


	 		currentElement.element.children[0].text =wordWrap(nameCurrentElement,20);
	 		currentNode.name = nameCurrentElement;
	 	}
	 	console.log(nodes);
	 	
	 	canvas.redraw();//redibuja todo
	 }

	/**
	* Empieza a añadir un edge cambia el status a 1
	* 0: aun no se va a añadir
	* 1: se tiene que seleccionar el nodo source
	* 2: se tiene que añadir el nodo target ( no puede ser igual al source)
	*/
	window.addEdge2 = function () {
	
		creatingEdge.source=-1;
		creatingEdge.target=-1;
		creatingEdge.status=1;
		//console.log(creatingEdge);
	}	

	/**
	* Seleciona un elemento y lo pondrá en la consola de propiedades.
	*/
	function selectElement(param){
		$("#idCurrentElement").val(param.id);

		if (param.type=="rectangle"){
			$("#nameCurrentElement").val(param.children[0].text);
			
		}

		
	}

	/**
	* Se agrega un work 
	*/
	window.addWork2 =function () {
		var idCurrentElement = $("#idCurrentElement").val();
	 	
	 	
	 	if (isNaN(idCurrentElement)||idCurrentElement==""){
	 		alert("No se ha seleccionado un nodo");

	 	}
	 	
	 	else {
	 		
	 		var currentNode = getNodeById(idCurrentElement);
	 		
	 		currentNode.works.push( { 
	 								id:0,
	 							    name:"<sin nombre>",
	 							    idType:0,
	 							    vars:[],
	 								});
	 	}
		
	}	

	/**
	* Lo que pasa cuando le das click a un nodo.
	*/
	function clickNode(){
		resetColors();		
		selectElement(this);
		this.strokeColor="#F00";
		//Funcion para el edge
		if (creatingEdge.status==1){ //selecciona un nodo source y lo pone en status 2
			creatingEdge.source=this.id;
			creatingEdge.status=2;
		}else if (creatingEdge.status==2){//si debe seleccionar un nodo target
			if (creatingEdge.source!=this.id){// y no es igual al fuente
				resetColors(); //deselecciona el nodo 
				creatingEdge.target=this.id;				
				var coord =drawEdge(getElementById(creatingEdge.source).element,
										 getElementById(creatingEdge.target).element)
				coord.stroke="2px #F00";//selecciona el edge 
				//lo añade
				canvas.addChild(coord);
				edges.push({
					id:canvas.children[canvas.children.length-1].id,
					source:creatingEdge.source,
					target:creatingEdge.target,	
					triggers: [],				
				});
				creatingEdge.status=0;
			}
		}
		
		canvas.redraw();//redibuja todo
	}

	/**
	* Lo que pasa cuando le das click a un edge.
	*/
	function clickEdge(){
		resetColors();
		selectElement(this);		
		this.stroke="2px #F00";
		canvas.redraw();
	}

	/*******************************************************************/


	
	/***********************************************
	funciones de ultileria
	esto deberá ir en otro archivo
	************************************************/
	function resetColors(){
		for (i=0; i<canvas.children.length;i++){
			if (canvas.children[i].shapeType=="rectangular"){
				canvas.children[i].strokeColor="#000";
			}else {
				canvas.children[i].stroke="2px #000";
			}
					
		}
		canvas.redraw();
	}


	/**	
	* Obtiene las coordernadas para dibujar un edge desde s a t
	* s : node source
	* t : node target
	*/
	function drawEdge(s, t){
		var result=null;
		var snx = s.x + s.width/2;
		var sny = s.y;
		//este
		var sex = s.x + s.width;
		var sey = s.y + s.height/2;
		
		//oeste
		var sox = s.x;
		var soy = s.y + s.height/2;

		//sur
		var ssx =  s.x + s.width/2;
		var ssy = s.y + s.height;

		//target
		//norte
		var tnx = t.x + t.width/2;
		var tny = t.y;
		//este
		var tex = t.x + t.width;
		var tey = t.y + t.height/2;
		
		//oeste
		var tox = t.x;
		var toy = t.y + t.height/2;

		//sur
		var tsx =  t.x + t.width/2;
		var tsy = t.y + t.height;
		
		var lsx, lsy,ltx,lty;
		
		//compara si la parte de arriba de la fuente esta por debajo del sur target
		if (sny>tsy){
			ltx=tsx;
			lty=tsy;			
			if (sox>tex){	//sur con oeste			
				lsx= sox;
				lsy= soy;
			} else if(sox<=tex && sex>=tox){ //sur con norte centro
				lsx= snx;
				lsy= sny;
			} else { //sur con este
				lsx= sex;
				lsy= sey;
			}
		}else if (ssy<tny){ //compara si la parte de abajo de la fuente esta arriba del target
			ltx=tnx;
			lty=tny;
			
			if (sox>tex){//sur con oeste
				
				lsx= sox;
				lsy= soy;
			} else if(sox<=tex && sex>=tox){//sur con sur centro
				lsx= ssx;
				lsy= ssy;
			} else {//sur con este
				lsx= sex;
				lsy= sey;
			}
		}else {//el centro de los nodos
			if (sox>tex){ //este con oeste
				ltx=tex;
				lty=tey;
				lsx= sox;
				lsy= soy;
			}else if(sex<tox){//oeste con este
				ltx=tox;
				lty=toy;
				lsx= sex;
				lsy= sey;
			}else {// centros 
				ltx=t.x+t.width/2;
				lty=t.y+t.height/2;
				lsx= s.x+s.width/2;
				lsy= s.y+s.height/2;
			}
		}


		var line = canvas.display.line({
			start: { x:lsx, y: lsy },
			end: { x: ltx, y: lty },
			stroke: "2px #000",
			cap: "square",
			zIndex: 1,

		});

		

		//this.strokeColor="#F00";
		//line.bind("click",selectElement);
		var rx =(line.x-line.start.x);
		var ry =(line.y-line.start.y);
		var tograde = 180/Math.PI;
		var rotation =  Math.atan2(ry,rx)*tograde;
		
		var triangle = canvas.display.polygon({
			x: (line.end.x-line.start.x)*.8/2,
			y: (line.end.y-line.start.y)*.8/2,
			sides: 3,
			radius: 10,
			rotation: rotation,
			fill: "#0aa",
			zIndex: 100,
		});

		line.bind("click",clickEdge);
		line.addChild(triangle);
		result = line;
	
			
		return result;
	}
	
	/**	
	* Obtiene el elemento del canvas con un determinado Id .
	* param: id del elemento
	*/

	function getElementById(param){
		var result ={position:0, element:null};		
		for (i=0;i<canvas.children.length;i++){		
			if (param == canvas.children[i].id){
				result = {
					position:i,
					element:canvas.children[i],
				};
				break;
			}
		}		
		return result;
	}


	/**	
	* Obtiene el elemento del canvas con un determinado Id .
	* param: id del elemento
	*/

	function getNodeById(param){
		var result =null;		
		for (i=0;i<nodes.length;i++){		
			if (param == nodes[i].id){
				result = nodes[i];
				break;
			}
		}		
		return result;
	}

	/**
	* Obtiene todos los ids de los edges que salen de un nodo.
	* param:id del nodo.
	* returns: arreglo con nodos.
	**/
	function getEdgesSourceId(param){
		var result  = [];
		for(i=0;i<edges.length;i++){
			if (edges[i].source==param){
				result.push(edges[i]);
			}
		}

		return result;
		
	}


	/**
	* Obtiene todos los ids de los edges que entran a un nodo.
	* param: id del nodo.
	* returns: arreglo con nodos.
	**/
	function getEdgesTargetId(param){
		var result  = [];
		for(i=0;i<edges.length;i++){
			if (edges[i].target==param){
				result.push(edges[i]);
			}
		}

		return result;
	}


	function wordWrap(text,width){
	    var re = new RegExp("(.{" + (width) + "})", "g");
	    console.log(re);
	    console.log(text.replace(re,"$1\n"));
	    return text.replace(re,"$1\n");
	}

});

