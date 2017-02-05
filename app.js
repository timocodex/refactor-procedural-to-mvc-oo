let model = {
    getRandomNumber : function(k,die){
      var value = Math.floor((Math.random()*6)+1)
      $(die).text(value)
    }
}

let controller ={
    addDice: function(){
      console.log('WAT')
      $('.dice').append('<div class="die">0</div>')
    },
    getEachDice : function(){
      $('.die').each(model.getRandomNumber)
    }
}

let view = {
  addnRoll: function(){
    $('#roller button.add').on('click',controller.addDice)
    $('roller button.roll').on('click',controller.getEachDice)
  }
}


$(document).ready(view.addnRoll)
