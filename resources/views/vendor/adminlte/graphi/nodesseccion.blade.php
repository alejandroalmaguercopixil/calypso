<div class="row" id="nodesWrapper">
  <div class="col-12 col-sm-12" id="nodes">
    <div class="row" id="node1">
      <div class="col-12 col-sm-12" id="">
        <div class="row bg-ultradark"><!--encabezado de nodo-->
          <div class="col-sm-1 p-2 flex-column">
            <img src="./img/graphi/rownode.png">
          </div>
          <div class="col-sm-2 text-center p-2 flex-column">
            Node
          </div>
          <div class="col-sm-7 text-center input-margin-node flex-column">
            <input type="text" id="nameCurrentElement" class="form-control" placeholder="Name">
          </div>
          <div class="col-sm-1 text-center p-2 flex-column">
            <img src="./img/graphi/deletebutton.png">
          </div>
          <div class="col-sm-1 text-center p-2 flex-column">
            <img id="hehw" src="./img/graphi/menubutton.png" >
          </div>
        </div> <!-- /encabezado de nodo -->
        <div class="row" id="rowNodeId">
          <div class="col-12 col-sm-12">
            
            <div class="row hide-content2">
              <div class="col-12 col-sm-12">
                <div class="row row-borders">
                  <div class="col-sm-2 text-center p-2 bold-text margin-column flex-column">
                    ID
                  </div>
                  <div class="col-sm-10 input-margin2 input-margin">
                    <input type="text" id="idCurrentElement" class="form-control" placeholder="id" disabled="disabled">
                  </div>
                </div>
               <!-- botones de node -->
                <div class="row row-borders">
                  <div class="col-sm-6 text-center p-2">
                    <button class="button button2"><img src="./img/graphi/save.png" title="Save Node" onclick="saveNode()"></button>
                  </div>
                   <div class="col-sm-6 text-center p-2">
                    <button class="button button2"><img src="./img/graphi/addwork.png"></button>
                  </div>
                </div>
                <!-- /botones -->
              </div> 
            </div>
          </div>  
        </div>
        @include('adminlte::graphi.worksseccion') 
      </div>  
    </div> <!--/node1-->
  </div>             
</div>