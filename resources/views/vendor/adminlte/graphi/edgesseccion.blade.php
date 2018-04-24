<div class="row min-margin" id="edgeWrapper">
  <div class="col-12 col-sm-12" id="edges">
    <div class="row" id="edge1">
      <div class="col-12 col-sm-12">

        <!-- Encabezado de edge -->
        <div class="row bg-ultradark">
          <div class="col-sm-1 p-2 flex-column">
            <img src="./img/graphi/rowedge.png">
          </div>
          <div class="col-sm-2 text-center p-2 flex-column">
            Edge
          </div>
          <div class="col-sm-7 text-center input-margin-node">
            <input type="text" id="name" class="form-control" placeholder="Name">
          </div>
          <div class="col-sm-1 text-center p-2 flex-column">
            <img src="./img/graphi/deletebutton.png">
          </div>
          <div class="col-sm-1 text-center p-2 flex-column">
            <img id="hehw4" src="./img/graphi/menubutton.png">
          </div>
        </div>
        <!-- /Encabezado de edge -->
        
        <!-- Contenido de edge -->
        <div class="row hide-content">
          <div class="col-12 col-sm-12">
            <div class="row" id="ip4">
              <div class="col-12 col-sm-12">
                <div class="row row-borders">
                  <div class="col-sm-2 text-center p-2 bold-text margin-column flex-column">
                    From
                  </div>
                  <div class="col-sm-10 input-margin2 input-margin">
                    <input type="text" id="name" class="form-control" placeholder=" ">
                  </div>
                </div>
                <div class="row row-borders">
                  <div class="col-sm-2 text-center p-2 bold-text margin-column flex-column">
                    To
                  </div>
                  <div class="col-sm-10 input-margin2 input-margin">
                    <input type="text" id="name" class="form-control" placeholder=" ">
                  </div>
                </div>
                <div class="row row-borders">
                  <div class="col-sm-2 text-center p-2 bold-text margin-column flex-column">
                    Pos X
                  </div>
                  <div class="col-sm-10 input-margin2 input-margin">
                    <input type="text" id="name" class="form-control" placeholder=" ">
                  </div>
                </div>
                <div class="row row-borders">
                  <div class="col-sm-2 text-center p-2 bold-text margin-column flex-column">
                    Pos Y
                  </div>
                  <div class="col-sm-10 input-margin2 input-margin">
                    <input type="text" id="name" class="form-control" placeholder=" ">
                  </div>
                </div>
              </div>
            </div>    
          </div>
        </div>
        <!-- /Contenido de edge -->

        @include('adminlte::graphi.triggerseccion')
      </div>
    </div>      
  </div>  
</div>