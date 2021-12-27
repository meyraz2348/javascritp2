// local reviews data
const reviews = [
  {
    id: 1,
    name: "susan smith",
    job: "web developer",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
    text:
      "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: "anna johnson",
    job: "web designer",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
    text:
      "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
  },
  {
    id: 3,
    name: "peter jones",
    job: "intern",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
    text:
      "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
  },
  {
    id: 4,
    name: "bill anderson",
    job: "the boss",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
    text:
      "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
  },
];
const data_Element = document.querySelector('.data');
const image = document.getElementById('person-img');
const author = document.getElementById('author');
const job = document.getElementById('job');
const info = document.getElementById('info');
const previous_button = document.querySelector('.prev-btn');
const next_button = document.querySelector('.next-btn');
const surprise_button = document.querySelector('.random-btn');
let counter =0; 
display_Counter  = (counter) => {
  for (val of reviews){
      image.src= reviews[counter].img;
      author.textContent = reviews[counter].name;
      job.textContent =reviews[counter].job;
      info.textContent = reviews[counter].text;
      break;
    }
}
const anyButton_click = document.querySelectorAll('.allbuttons');
anyButton_click.forEach(function (btn) {
  btn.addEventListener('click', function (e) {
    const click_event = e.currentTarget;
    if(click_event.classList.contains('prev-btn')){
      counter--;
      display_Counter(counter);
    if(counter < 0 || counter > 3){
      counter = 3;
      display_Counter(counter);
    }
  }
  else if (click_event.classList.contains('next-btn')) {
       counter++;
       display_Counter(counter);
  if(counter>3 || counter < 0){
    counter = 0;
    display_Counter(counter);
  }
  }
    else {
      let random_Number = 1;
  poo :
  while(random_Number !=0){
    random_Number = Math.random()*7;
    random_Number = Math.floor(random_Number);
    if(random_Number>3 || random_Number <0) 
      continue poo;
    break;
  }
  display_Counter(random_Number);
}
  }
  );
}
)
