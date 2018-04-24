@extends('adminlte::layouts.app')

@section('htmlheader_title')
	{{ trans('adminlte_lang::message.home') }}
@endsection

@section('pagescripts')
 <link href="{{ asset('/css/graphi/style.css') }}" rel="stylesheet" type="text/css" />
  <link href="{{ asset('/css/graphi/thumbnail-gallery.css') }}" rel="stylesheet" type="text/css" />
   

  <script src="{{ asset('/js/ocanvas/ocanvas-2.9.1.min.js')}}" type="text/javascript"></script>
  <script src="{{ asset('/js/ocanvas/script.js')}}" type="text/javascript"></script>
  <script src="{{ asset('/js/graphi/script.js')}}" type="text/javascript"></script>
  <script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>

@endsection



@section('main-content')
  
  <div class="container-fluid" id="mainContentWrapper"> 
      
    <div class="row">
        
      <div class="col-4 col-sm-4 sortable" id="leftmenuseccion">
        <!--Sección Menú Principal-->
        @include('adminlte::graphi.uppermenu')  
        <!-- /Sección Menú Principal-->
        <!--Sección Variables-->
        @include('adminlte::graphi.variablesseccion')  
        <!-- /Sección Variables-->
        
        <!-- Sección Nodos-->
        @include('adminlte::graphi.nodesseccion')  
        <!-- /Sección Nodos-->

        <!-- Sección Edge -->
        @include('adminlte::graphi.edgesseccion')
        <!-- /Sección Edge -->               

       
      </div> <!--left seccion--> 
     @include('adminlte::graphi.canvasseccion')


    </div> <!--Row contentWrapper-->
    
  </div><!--mainContentWrapper-->
   
@endsection
