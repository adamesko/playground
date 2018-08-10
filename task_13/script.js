alert('Witam na stronce');
var deliciousVegetables = ['Kalafior', 'Batat', 'Marcheweczka', 'Ziemniak', 'Cebula'];
var przepisy = {
  spaghetti: [{
      nazwa: 'makaron',
      ilosc: '400',
      jednostka: 'gramów'
    },
    {
      nazwa: 'pomidory',
      ilosc: '1',
      jednostka: 'puszka'
    },
    {
      nazwa: 'olej',
      ilosc: '2',
      jednostka: 'łyżki'
    },
    {
      nazwa: 'bazylia',
      ilosc: '4',
      jednostka: 'listki'
    }
  ],
  pizza: [{
      nazwa: 'mąka',
      ilosc: '2',
      jednostka: 'szklanki'
    },
    {
      nazwa: 'pomidory',
      ilosc: '1',
      jednostka: 'puszka'
    },
    {
      nazwa: 'oliwa z oliwek',
      ilosc: '3',
      jednostka: 'łyżki'
    },
    {
      nazwa: 'mozzarella',
      ilosc: '1',
      jednostka: 'kostka'
    }
  ]
};

function showIngredientsFor(przepis){
  console.log("---- " + przepis + " - składniki ----");
  for(var i = 0; i < przepisy[przepis].length; i++){
    console.log(przepisy[przepis][i].nazwa + ": " + przepisy[przepis][i].ilosc + " " + przepisy[przepis][i].jednostka);
  }
};
function showDishes(){
  for (var i = 0; i < Object.keys(przepisy).length; i++){
    showIngredientsFor(Object.keys(przepisy)[i]);
  }
};

function showIngredientsEach(przepis){
  console.log("---- " + przepis + " - składniki ----");
  przepisy[przepis].forEach(function(value){
    console.log(value.nazwa + ": " + value.ilosc + " " + value.jednostka);
  });
};
przepisy.pizza.forEach(function(value){
  console.log(value);
})
