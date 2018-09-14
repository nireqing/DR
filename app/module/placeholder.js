define(function(){
  function Placeholder(){}
  Placeholder.prototype.init = function(id,val,style){
    $(id).focus(function(){
      $(this).val("");
      $(this).removeClass(style);
    });
    $(id).blur(function(){
      $(this).val();
      
        if($(id).val()==val){
          $(this).removeClass(style);
        }
        if($(id).val()==""){
          $(this).val(val);
          $(this).addClass(style);
        }
        
      });
  }
  return new Placeholder();
})