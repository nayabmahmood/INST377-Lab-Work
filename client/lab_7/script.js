async function mainEvent() { // the async keyword means we can make API requests
    const form = document.querySelector('.main_form');
    form.addEventListener('submit', async (submitEvent) => { // async has to be declared all the way to get an await
      submitEvent.preventDefault(); // This prevents your page from refreshing!
      console.log('form submission'); // this is substituting for a "breakpoint"
      const results = await fetch('/api/foodServicesPG'); // This accesses some data from our API
      const arrayFromJson = await results.json(); // This changes it into data we can use - an object
      console.table(arrayFromJson.data); // this is called "dot notation"
      // arrayFromJson.data - we're accessing a key called 'data' on the returned object
      // it contains all 1,000 records we need
    });
  }
  
  // this actually runs first! It's calling the function above
  document.addEventListener('DOMContentLoaded', async () => mainEvent()); // the async keyword means we can make API requests
    submit.style.display - 'none';
    const results = await fetch('/api/foodServicesPG');  
    const arrayFromJson = await results.json(); 
        console.log(arrayFromJson);

if (arrayFromJson.data.length > 0 ) {
    submit.style.display = 'block';
    let currentArray = [];
    resizeTo.addEventListener('input' , async (event)=>  {
        console.log(event.target.value);
            if (currentArray.length < 1) {
                console.log('empty');
                return;

            }
    const selectResto = arrayFromJson.data.filter(item) => {
        const lowerName = item.name.toLowerCase();
        const lowerValue = event.target.value.toLowerCase();
        return lowerName.includes(lowerValue);
    });
    console.log(selectResto);
    creatHtmList(selectResto);
});

form.addEventListener('submit', async (submitEvent) => { // async has to be declared all the way to get an await
    submitEvent.preventDefault(); // This prevents your page from refreshing!
    console.log('form submission'); // this is substituting for a "breakpoint"
    
} // this actually runs first! It's calling the function above
document.addEventListener('DOMContentLoaded', async () => mainEvent()); // the async keyword means we can make API requests
