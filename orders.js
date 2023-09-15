//orders e' l'array di ordini sul sito X
//id e' l'identificativo dell'ordine
//userName e' il nome dell'acquirente
//price e' l'ammontare speso dall'utente per quell'ordine
//lastOrder e' l'ultimo ordine eseguito sul sito X

const orders = [
    {
      id: "0",
      userName: "Jhon",
      price: "44"
    },
    {
      id: "1",
      userName: "Michael",
      price: "25"
    },
    {
      id: "2",
      userName: "Sam",
      price: "31"
    },
    {
      id: "3",
      userName: "Will",
      price: "67"
    },
    {
      id: "4",
      userName: "Jhon",
      price: "45"
    },
    {
      id: "5",
      userName: "Michael",
      price: "52"
    },
    {
      id: "6",
      userName: "Jhon",
      price: "15"
    },
    {
      id: "7",
      userName: "Michael",
      price: "22"
    },
    {
      id: "8",
      userName: "Luke",
      price: "35"
    },
    {
      id: "9",
      userName: "Will",
      price: "82"
    }
  ];
  
  const lastOrder = {
    id: "10",
    userName: "Mike",
    price: "23"
  };
  
  // 1. Stampare in console gli ordini in ordine di prezzo crescente  
  let editOrders1 = [...orders];
  //js considera comunque i prezzi dei number perché effettua type cohercition
  //se la callback interna da risultato negativo di invertono gli elementi
  const sortedOrdersByPrice = editOrders1.sort( (a, b) => a.price - b.price);
  console.log("Ordini in ordine crescente in base al prezzo")
  sortedOrdersByPrice.forEach( (item) => console.log(item))


  // 2. Stampare in console solo gli ordini di Jhon
  const jhonOrders = orders.filter( item => item.userName === 'Jhon');
  console.log("Ordini di Jhon")
  jhonOrders.forEach( (item) => console.log(item))
  

  // 3. Stampare in console l'id dell'ordine con prezzo piu' alto
  const maxPrice = sortedOrdersByPrice[sortedOrdersByPrice.length - 1].price;
  const idHighestPrice = orders.find( order => order.price === maxPrice).id;
  console.log("Id ordine col prezzo più alto: "+ idHighestPrice); 
  

  // 4. Stampare in console l'id dell'ordine con prezzo piu' basso
  const minPrice = sortedOrdersByPrice[0].price;
  const idLowestPrice = orders.find ( order => order.price === minPrice).id;
  console.log("Id ordine col prezzo più basso: "+idLowestPrice);
  
  
  // 5. Stampare in console l'intero array con ogni id incrementato di 1
  //con il -1 sfruttando la type cohercition trasformo order.id in number così da poter sommare 1 (2-1)
  const newOrderArray = orders.map( order => { return ({ ...order, id: order.id - 1 + 2})});
  for ( const order of newOrderArray.values() ) {
    console.log(order);
  }
  
  
  // 6. Inserire lastOrder all'inizio dell'array e stampare orders in console
  //orders = [lastOrder, ...orders]; non posso farlo perchè orders è const
  const newEditArray1 = [...orders];
  newEditArray1.unshift(lastOrder)
  console.log("new orders array 1");
  for ( const order of newEditArray1.values() ) {
    console.log(order);
  }

  
  // 7. Inserire lastOrder alla fine dell'array e stampare orders in console
  const newEditArray2 = [...orders];
  newEditArray2.push(lastOrder);   
  console.log("new orders array 2");
  for ( const order of newEditArray2.values() ) {
    console.log(order);
  }
  
  // 8. Stampare in console l'array con gli elementi invertiti (ultimo -> primo, penultimo -> secondo [...] primo -> ultimo)
const reverseorders = orders.reverse();
console.log("orders array reversed: ")
for ( const order of reverseorders.values() ) {
    console.log(order);
  }


 