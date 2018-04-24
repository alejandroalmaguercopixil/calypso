@extends('adminlte::layouts.app')

@section('htmlheader_title')
  {{ trans('adminlte_lang::message.home') }}
@endsection

@section('pagescripts')

 <script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
 <script>
  $( function() {
    $( "#sortable" ).sortable({
      revert: true
    });
    
  } );
  </script>

@endsection


@section('main-content')

     
       
      <div id="sortable">
        <div class="">Item 1</div>
        <div class="ui-state-default">Item 2</div>
        <div class="ui-state-default">Item 3</div>
        <div class="ui-state-default">Item 4</div>
        <div class="ui-state-default">Item 5</div>
      </div>
@endsection  