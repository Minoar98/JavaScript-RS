 const Actress = {
    name:"Rashmika Mandarin",
    age: 28,
    ispresent:true,
    lastMoviesNum: 10,
    totalMoviesNum : function(){
        return this.lastMoviesNum + 50;
    }
 }
 console.log (Actress.totalMoviesNum())
 console.log(Actress);