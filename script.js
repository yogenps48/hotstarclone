let movies=[
    {
    name:"Doctor Strange in the Multiverse of Madness",
    des:
    "<b>Superhero</b> 2022<br>When the Multiverse is unlocked, Doctor Strange must enlist help from old and new allies in order to confront a surprising adversary.",
    image:"https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/9947/1279947-h-d5d3ff34dad1"
    },
    {
    name:"Kahin Kisi Roz",
    des:
    "<b>StarPlus . Hindi . Drama</b><br>Shaina falls in love with kunal, a windower, and soon they get married, Chaos ensues when Shaina deals with her mother-in -law, who's determined to trouble her.",
    image:"https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/2148/1292148-h-5e176b2f50e9"
    },
    {
    name:"Anandibaa Aur Emily",
    des:
    "<b>StarPlus . Hindi . Comedy</b><br>Anandibaa's worst nightmare comes true when her son marries Emily, a foreigner. Fun-filled chaos ensues as Emily tries to live up to the notion of perfect bahu.",
    image:"https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/9663/1289663-h-67067c569050"
    },
    {
    name:"Saath Nibhaana Saathiya 2",
    des:
    "<b>StarPlus . Hindi . Family</b><br>A few years after Anant's death, Gehna has completely turned her life around. In this new journey, will she finally find her perfect partner?",
    image:"https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/7966/1247966-h-5e9cb2759db4"
    },
    {
    name:"9 Hours",
    des:
    "<b>Hotstar Specials . Crime</b><br>Three prisoners, three reams, three banks and nine hours to pull of three impossible heists and return to jail. Can they do it?",
    image:"https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/3190/1263190-h-0bfaeb08a06e"
    }            
];
const carousel=document.querySelector(".carousel");
let slides=[];
for(let i=0;i<movies.length;i++){
    slides[i]=document.createElement('div');
    let sliderContent=document.createElement('div');
    let h1=document.createElement('h1');
    let p=document.createElement('p');
    let image=document.createElement('img');

    //assigning class
    
    sliderContent.className="slider-content";
    h1.className="movie-title";
    p.className="movie-des";
    slides[i].className="slider";


    //giving values
    image.src=movies[i].image;
    p.innerHTML=movies[i].des;
    h1.appendChild(document.createTextNode(movies[i].name));

    //attaching
    sliderContent.appendChild(h1);
    sliderContent.appendChild(p);
    slides[i].appendChild(sliderContent);
    slides[i].appendChild(image);
    carousel.appendChild(slides[i]);
}
let j=0;
if(movies.length<4){
    for(let i=movies.length;i<4;i++){
        if(j>=movies.length){
            j=0;
        }
        slides[i]=document.createElement('div');
    let sliderContent=document.createElement('div');
    let h1=document.createElement('h1');
    let p=document.createElement('p');
    let image=document.createElement('img');

    //assigning class
    
    sliderContent.className="slider-content";
    h1.className="movie-title";
    p.className="movie-des";
    slides[i].className="slider";


    //giving values
    image.src=movies[j].image;
    p.innerHTML=movies[j].des;
    h1.appendChild(document.createTextNode(movies[j].name));

    //attaching
    sliderContent.appendChild(h1);
    sliderContent.appendChild(p);
    slides[i].appendChild(sliderContent);
    slides[i].appendChild(image);
    carousel.appendChild(slides[i]);
        j++;
    }
}
let length=movies.length;
if(length<4){
    length=4;
}

let index=(i)=>{
    while(i<0){
        i+=length;
    }
    while(i>=length){
        i-=length;
    }
    return i;
}
for(let i=0;i<4;i++){
    slides[index(i-1)].className=`slider slide${i+1}`;
    slides[index(i-1)].style.display="block";
}
for(let i=3;i<movies.length;i++){
    slides[i].style.display="block";
}
//card slilder variables
let cardContainers=[...document.querySelectorAll('.card-container')];
let preBtns=document.querySelectorAll('.pre-btn');
let nxtBtns=document.querySelectorAll('.nxt-btn');
//main slide
let slideIndex=0;
let createSlide=()=>{
    if(slideIndex>=length){
        slideIndex=0;
    }
    slides[index(slideIndex+2)].display="block";
    for(let i=0;i<4;i++){
        slides[index(slideIndex+i-1)].className=`slider slide${i}`;
    }
    slides[index(slideIndex+3)].className=`slider slide4`;
    slideIndex++;
}

preBtns[0].addEventListener('click',()=>{
    slideIndex-=2;
    if(slideIndex<0){
        slideIndex+=length;
    }
    slides[index(slideIndex+2)].display="block";
    for(let i=0;i<4;i++){
        slides[index(slideIndex+i-1)].className=`slider slide${i}`;
    }
    slides[index(slideIndex+3)].className=`slider slide4`;
    slideIndex++;
});
nxtBtns[0].addEventListener('click',()=>{
    createSlide();
});

setInterval(createSlide,5000);
let cardContainersData=[];
cardContainersData[0]=[
    {
        image:"https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/8690/1078690-v-0cb0fd8d0f22",
        name:"Jungle Cruise",
        des:"2 hr 7 min, Action, Adventure, Fantasy, Family, Romance, Hindi, Tamil, Telugu, 2021<br> A rollicking theill-ride down the Amazon..."
    },
    {
        image:"https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/1518/1161518-v-8d86a7ed8500",
        name:"Moon Knight",
        des:"Superhero, Action, Marvel Mild-mannered Steven Grant has dissociative identity disorder and..."
    },
    {
        image:"https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/4831/674831-v",
        name:"The Jungle Book",
        des:"1 hr 45 min, Adventure, Musical, Fantasy, Kids, English, Hindi, Tamil, Telugu, 2016<br>When a tiger named Shere Khan..."
    },
    {
        image:"https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/8723/1078723-v-a1a04c7474f9",
        name:"Shang Chi and the legend of...",
        des:"2 hr 12 min, Superhwro, Action, Adveture, Fantasy, English, Malyalam, Hindi, Tamil, Kannada, Telugu, 2021"
    },
    {
        image:"https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/7519/1097519-v-7235f9a4b235",
        name:"Eternals",
        des:"2 hr 35 min, Siperhero, Action, Adventure, Fantasy, Eglish, Hindi, Tamil, Kannada, Telugu, 2021<br>The saga of Eternals..."
    },
    {
        image:"https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/9948/1279948-v-cc9471178e40",
        name:"Doctor Strange in the multiver...",
        des:"2 hr 6 min, Superhero, Action, Fantasy, English, Malyalam, Hindi, Tamil, Kannada, Telugu, 2022<br>When the Multiverse is unlocked,..."
    },
    {
        image:"https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_1_5x/sources/r1/cms/prod/1684/1011684-v-374e17c7e183",
        name:"Loki",
        des:"Superhero, Science Fiction, Action, Fantasy, Marvel"
    },
    {
        image:"https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/4926/674926-v",
        name:"Ratatouille",
        des:"1 hr 51 min, Animation, Fantasy, Kids, English, Hindi, Tamil, Telugu, 2007"
    },
    {
        image:"https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/3022/1083022-v-90c34f714f7a",
        name:"Hawkeye",
        des:"Superhero, Action,Advecture, Fantasy, Marvel"
    },
    {
        image:"https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/5162/875162-v",
        name:"Avengers: Endgame",
        des:"3 hr 1 min, Superhero, Action, English, Hindi, Tamil, Telugu,2019"
    },
    {
        image:"https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/2353/1282353-v-ba90d44ce003",
        name:"Spider-Man: Homecoming",
        des:"2hr 13min, Superhero, Action, Fantasy, English, 2017"
    },
    {
        image:"https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/9317/1269317-v-c851767a526b",
        name:"Ms. Mrvel",
        des:"Siperhero, Fantasy, Action, Marvel"
    },
    {
        image:"https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/5242/875242-v",
        name:"The lion king",
        des:"1 hr 58 min, Fantasy, Adventure, Musical, English, Hindi, Tamil, Telugu, 2019"
    },
    {
        image:"https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/6370/936370-v",
        name:"The Falcon and the Winter...",
        des:"Superhero, Action, Science, Fiction, Fantasy, Marvel"
    },
    {
        image:"https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/4158/1254158-v-8293462a94f2",
        name:"Obi-Wan Kenobi",
        des:"Action, Adventure, Fantasy, Science, Fiction, Star Wars"
    },
    {
        image:"https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/5236/875236-v",
        name:"Pirates of the Caribbean - Sala...",
        des:"2 hr 9 min, Action, Adventure, English, Hindi, Tamil, Telugu, 2017"
    },
    
];
cardContainersData[1]=[
    {
        image:"https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/2353/1282353-v-ba90d44ce003",
        name:"Spider-Man: Homecoming",
        des:"2hr 13min, Superhero, Action, Fantasy, English, 2017"
    },
    {
        image:"https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/1518/1161518-v-8d86a7ed8500",
        name:"Moon Knight",
        des:"Superhero, Action, Marvel Mild-mannered Steven Grant has dissociative identity disorder and..."
    },
    {
        image:"https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/4831/674831-v",
        name:"The Jungle Book",
        des:"1 hr 45 min, Adventure, Musical, Fantasy, Kids, English, Hindi, Tamil, Telugu, 2016<br>When a tiger named Shere Khan..."
    },
    {
        image:"https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/8723/1078723-v-a1a04c7474f9",
        name:"Shang Chi and the legend of...",
        des:"2 hr 12 min, Superhwro, Action, Adveture, Fantasy, English, Malyalam, Hindi, Tamil, Kannada, Telugu, 2021"
    },
    {
        image:"https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/7519/1097519-v-7235f9a4b235",
        name:"Eternals",
        des:"2 hr 35 min, Siperhero, Action, Adventure, Fantasy, Eglish, Hindi, Tamil, Kannada, Telugu, 2021<br>The saga of Eternals..."
    },
    {
        image:"https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/9948/1279948-v-cc9471178e40",
        name:"Doctor Strange in the multiver...",
        des:"2 hr 6 min, Superhero, Action, Fantasy, English, Malyalam, Hindi, Tamil, Kannada, Telugu, 2022<br>When the Multiverse is unlocked,..."
    },
    {
        image:"https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_1_5x/sources/r1/cms/prod/1684/1011684-v-374e17c7e183",
        name:"Loki",
        des:"Superhero, Science Fiction, Action, Fantasy, Marvel"
    },
    {
        image:"https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/4926/674926-v",
        name:"Ratatouille",
        des:"1 hr 51 min, Animation, Fantasy, Kids, English, Hindi, Tamil, Telugu, 2007"
    },
    {
        image:"https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/3022/1083022-v-90c34f714f7a",
        name:"Hawkeye",
        des:"Superhero, Action,Advecture, Fantasy, Marvel"
    },
    {
        image:"https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/5162/875162-v",
        name:"Avengers: Endgame",
        des:"3 hr 1 min, Superhero, Action, English, Hindi, Tamil, Telugu,2019"
    },
    {
        image:"https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/2353/1282353-v-ba90d44ce003",
        name:"Spider-Man: Homecoming",
        des:"2hr 13min, Superhero, Action, Fantasy, English, 2017"
    },
    {
        image:"https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/9317/1269317-v-c851767a526b",
        name:"Ms. Mrvel",
        des:"Siperhero, Fantasy, Action, Marvel"
    },
    {
        image:"https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/5242/875242-v",
        name:"The lion king",
        des:"1 hr 58 min, Fantasy, Adventure, Musical, English, Hindi, Tamil, Telugu, 2019"
    },
    {
        image:"https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/6370/936370-v",
        name:"The Falcon and the Winter...",
        des:"Superhero, Action, Science, Fiction, Fantasy, Marvel"
    },
    {
        image:"https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/4158/1254158-v-8293462a94f2",
        name:"Obi-Wan Kenobi",
        des:"Action, Adventure, Fantasy, Science, Fiction, Star Wars"
    },
    {
        image:"https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/5236/875236-v",
        name:"Pirates of the Caribbean - Sala...",
        des:"2 hr 9 min, Action, Adventure, English, Hindi, Tamil, Telugu, 2017"
    },
];
cardContainers.forEach((item,i)=>{
    let containerDimensions=item.getBoundingClientRect();
    let containerWidth=containerDimensions.width;

    nxtBtns[i+1].addEventListener('click',()=>{
        item.scrollLeft+=containerWidth;
    });
    preBtns[i+1].addEventListener('click',()=>{
        item.scrollLeft-=containerWidth;
    });
    for(let j=0;j<cardContainersData[i].length;j++){
        const card=document.createElement('div');
        const img=document.createElement('img');
        const cardBody=document.createElement('div');
        const name=document.createElement('h2');
        const des=document.createElement('h6');
        const btn=document.createElement('button');

        //assigning classes
        card.className="card";
        img.className="card-img";
        cardBody.className="card-body";
        name.className="name";
        des.className="des";
        btn.className="watchlist-btn";

        //linking elements
        cardBody.appendChild(name);
        cardBody.appendChild(des);
        cardBody.appendChild(btn);
        card.appendChild(img);
        card.appendChild(cardBody);
        item.appendChild(card);

        //assigning values
        name.innerHTML=cardContainersData[i][j].name;
        des.innerHTML=cardContainersData[i][j].des;
        btn.innerHTML="add to watchlist";
        img.src=cardContainersData[i][j].image;


    }
});