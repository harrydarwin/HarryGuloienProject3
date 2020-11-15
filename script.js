const hipApp = {};

//Create data structure to hold all possible outcomes
hipApp.answers = {
    
   userClothing: {
        oldBandTee: `A little bit grunge and in-touch with music that came out before you were alive. You dont listen to Megadeath when your riding the bus alone but if someone asks about the Megadeath T-shirt you bought at "F As In Frank", you'll tell them you used to run that shit in when you were "younger".`,
        vintage: `In touch with "real fashion", your jeans are not accessories to show off you're "assets", but rather to suggest your an old soul because while you were born in {$userAge}, you should have been born in the 70's and you don't mind smelling like the inside of your grandmothers vaccuum cleaner.`,
        diy: `Probably aspiring to look like Zooey Deschanel but appearing somewhere between that and homeless, you will find beauty in another hipsters garbage - literally. Dumpster diving, thrift shop hunting, grandmas old clothes pilfering to find those special items that are nice but not nice enough that you can't cut, mame, pierce and colour them. You take pride in your ability to turn nothing into something even though the fact your wears are homemade often shows.`,
        formal: `Someone who may not classify themselves as a hipster. Just a person who likes to look clean and presentable - whats wrong with that? It's also not like you only wear collard shirts, you like to switch it up - tomorrow you may rock a more casual button down over a t-shirt or even some pastel shorts. Perhaps a turtle neck for a touch of sophistication while not being overly formal. You prefer glasses to contact lenses but don't appreciate people calling you Steve Jobs when you do wear that snug turtleneck.`,
        redFlannel: `A follower of fashion, you feel original in your choice of garments but as you stand there in your flannel and your rolled up beanie you realise that everone else at the Mumford & Sons concert is also wearing tight jeans on top of their vans. If you're able to grow a full beard, or better yet, a moustache; you probably will. This may be the first time you've considered that in your efforts to be different, you have become exactly the same.`
   },
    userPassion: {
        photography: `Have you ever bought an XLR camera or are you more of a polaroid person? Have you read extensivel about Camera Obscura (No not the hipster band), or are you blind to the fact that modern day photography tech does all the work for you. It is unlikely you've ever taken a class or even read up on lighting and yet you are a pro self taught pro. Dont get me wrong there are worse hobbies for a hipster to take up then feeding the ego of nude influencers and hanging out with OnlyFans girls with the pretense of being a photographer, unless of course you are the type to take "ironic" pictures of yourself taking a picture.`,
        food: `"You must come to Chantecler, they've the freshest oysters in the City", words that are less than foreign to you. The foodie hipster with a refined palate and an undying taste for showing your friends new spots around the city. You probably love 416 Snack Bar (fair, who doesn't), and use terms like "farm to table", and invest in putting the most ridiculous culinary creations in to your body. Things infused with beer, or just infused for that matter. You also enjoy ferments or preserves - anything in a old timey jar that tastes like vinigar and herbs.`,
        beer: `Many of your sumer days have been spent in Trinity Bellwoods Park drinking Jelly Kings and Whitsharks (I know you know what I am talking about). You will go out of your way to find the newest brewery to tell your friends about and the stinkier the brew the better. You have likely forgone lagers and pilsners for their much louder friends; IPA, porters and stouts. Despite your having no consistancy to what you like, you do tend to steer towards fancy cans with silly names that contain obscure ingredients. Perhaps a milkshake stout on a fall day or a crispy cool double white IPA with a book on a warm day - Or my personal favourite, a Blood of Cthulu, a 9.5% ABV Imperial Stout with raspberries, cranberries, and tart cherries - ingredients anyone born before 1980 would say doesn't belong in beer but rather in a thanksgiving pie.`,
        music: `I will bet that you say you "know" people that you have never met or maybe just in passing because somehow that raises your level of worth. The record player you bought from Urban Outfitter has become the focal point of a corner of your appartment along with the obscure records you bought because, "they just sound the best and no other medium can provide that level of authenticity". You probably frequent niche concerts at dirty hidden venues and used to go to The Weekend's shows before he made it big. You might even play music for abundantly small crowds in dirty venues yourself but the reality is: the band you played with in highschool was the best you'll ever sound, and the other members all went to university and moved on... why haven't you?`,
        literature: `You would prefer to live, laugh, jump off a bridge then to s=hear that book referenced again or worse - see those words written in a frame in someone condo. "Who's condo is this anyway?" you'd think to yourself while skimming their bookshelf (or lack of one), and finding not one copy of 'Perks of Being a Wallflower' or even 'A Clockwork Orange', which you find way better than the movie. To you, most literature that begins as a novel and end as film si doing just that - ending - the book gives so much more detail and much of the story is lost along the way to the screen that we can barely call it a loosely based framework. Oh! The disservice!`
    },
    userMusic: {
        manuChao: `You're the type who loves coachella and whos drugs of choice are likely psychadelic. you might even subscribe to crystals, astrology or some other made up shit to justify being an asshole. You probably listen to animal collective (beyond the choice you made in our quiz) and you probably try your hardest to live a "drama free life", but are willing to write people off for eating meat or particiapting in the global economy. Do you refer to establishment as "The Man"?`,
        florence: `Even though you may not identify as a hipster, your attempt at any other identity has failed you. You are not the strongly opinionated type but you know what you are not (or you thought you did) and while your music taste if terrible you are possably the closest of the bunch to escaping the hipster label - you've actually fallen here by complete mistake.`,
        migos: `Probably a lover of 90's hip-hop and believe that there isn't much good music comming out these days but you are willing to settle for what we in the industry call "hot trash" - of course refering to music with excellent production value but extremely poor content. But I dont need to tell you that because you are a rap afficionado. I wonder how quickly you can quote a Daddy Cane line?`,
        brightEyes: `While you probably had an emo phase (when that was a thing), you've since grown out of it, however, you still have deeper emotions than your average hipster, or anyone for that matter. Heart break and failure hurt you just a little bit more and you're not afraidn to let people know about it on social media. Probably like Elliot Smith (RIP) and talk about the 27 club while pondering existential questions both alone and with your peers.`,
        tameImpala: `You may be caught saying things like, "I knew them before they were cool", forgetting that things that ARE "cool", can simply not be - this is the contradictory dichotomy of the hipster. You are the type to attempt a nonchalant approach to being cool yourself - a piece of advice - don't push the envolope too far otherwise you risk confrontation with that exact same contradiction.`,
        neither: "You could possibly be the worst type of hipster. The hipster who doesn't believe they are a hipster, because you aren't; you're an artist. In fact, hipsters are beneath you, so is pretty much everyone else for that matter. You are an elitest and you don't follow trends, if anything worth your while does come up, you will hear about it from your friends." 
    },
    pumpedKicks: {
        true: `We'll admit that pumped up kicks is a catchy song but to like it would be to cross the line into real hipsterdome. The fact that you do means it's too late for you, read over the above profile again and get used to it. If it wasn't accurate when you started reading it, it is now, and you might aswell bring a Dave Eggers novel to Ossington and sip an old fashioned or a craft beer through your waxed moustache.`,
        false: `There is hope for you yet! You have not crossed into a level of hipsterdome from which you cannot return. If it is your wish you may take steps to revert your transformation before its too late. Perhaps try drinking some Budweiser this weekend or play a round of golf (NOT SPIKE BALL!), and for the love of god don't get on a slack-line or grow out your moustache. `
    }

}

// Create app inittialize function to store all other functions 
hipApp.init = () => {


    hipApp.eventListeners();
}

// Scroll function I used on a previous project to move from submit button to user profile 
hipApp.scrolly = () => {
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#userProfile").offset().top
    }, 2000);
}

//Find the current year and use it to find user born year
hipApp.yearFind = (userOld) => {
    const d = new Date();
    const curYear = d.getFullYear();
    const userYear = curYear - userOld;
    return userYear;
}

//Create event listener function to hold the submit button and gather all user info
hipApp.eventListeners = () => {
    //Ego checker - display small text 
    $('.ego').on('click', function () {
        $('.egoText').animate({
            opacity: 1,
            fontSize: "2rem",
            left: '-240px'
        }, 1500);
    });

    //Add a double click "Easter Egg" for fun!
    $('.ego').on('dblclick', function () {
        $('.egoText').empty().append(`Thats a lot of EGO there partner!`).animate({
            opacity: 1,
            fontSize: "2rem",
            left: '-240px'
        }, 1500);
    });

    $('form').on('submit', function (e) {
        e.preventDefault();
        $('.profilePlace').empty();
        
        //use function to check age and run display function if appropriate
        hipApp.ageAppropriate();
        
        //add fun loading effect on submit
        $('button[type=submit]').text(`LOADING...`);
        $('.heads img').addClass('rotate');
        $('footer .buttonA').removeClass('hideMe');

        $('footer .buttonA').on('click', function () {
            $('button[type=submit]').text(`What type of hipster am I?`);
            $('.heads img').removeClass('rotate');
        });
    
        //run scroll function to show user their answer
        hipApp.scrolly();
        
    });
}

hipApp.ageAppropriate = () => {
    //store user name and age
    const userName = $('#userName').val();
    const userAge = $('#userAge').val();
    //padd user age into yearFind function to find their born year (store this)
    const bornYear = hipApp.yearFind(userAge);  

    //Some simple conditionals for error control on the user age parameter
    if (userAge > 50) {

        const tooOld = `
                <li>
                    <h4>Tough Pills To Swallow, ${userName}</h4>
                    <p>
                        Being born in ${bornYear}, you are unlikely too old to be a hipster...and if you consider yourself one - it might be time to take a look at yourself and ask..."Which were the decisions I made over the course of my life that lead me to be exactly where I am today?" and "Am I happy?". 
                    </p>
                    <p>
                        This application was not made to tell you how to live your life, but since we are here, we are just offering a moment of reflection - we'll leave the living to you!
                    </p>
                </li>
                `;

        $('.profilePlace').append(tooOld);
    }
    else if (userAge < 18) {

        const tooYoung = `
                <li>
                    <h4>Tough Pills To Swallow, ${userName}</h4>
                    <p>
                        We're sorry you've taken the time to fill out our profiling questions only to be informed that being born in ${bornYear} means you are too young to yet be considered for Hipsterdom. You can't even smoke or drink. Now, not all hipsters smoke and/or drink but they are at least old enough to make that choice on there own (The coolest ones dont do either).
                    </p>
                    <p>
                        But, you need not worry of such things! You should be playing outside and trying to kiss other young people, learning which sports you like and what it is you're good at. Explore your world! With great Hipsterdom comes great responsability, and it's not all fun. You'll have to pay rent and work for your food. Go play tag, or kick the can, the days of easy livin' are numbered.
                    </p>
                </li>
                `;

        $('.profilePlace').append(tooYoung);
    }
    else {
        //Display user profile with display function
        hipApp.displayProfile();
    }
}


//create function to create user profile and display on page
hipApp.displayProfile = () => {

    const clothingChoice = $('input[name=userClothing]:checked').val();
    const passionChoice = $('input[name=userPassion]:checked').val();
    const musicChoice = $('input[name=userMusic]:checked').val();
    const kicksChoice = $('input[name=pumpedKicks]:checked').val();

    const clothingProfile = hipApp.answers.userClothing[clothingChoice];
    const passionProfile = hipApp.answers.userPassion[passionChoice];
    const musicProfile = hipApp.answers.userMusic[musicChoice];
    const kicksProfile = hipApp.answers.pumpedKicks[kicksChoice];

    const finalProfile = `
                        <h4>You Are...</h4>
                    <li>
                        ${clothingProfile}
                    </li>
                    <li>
                        ${passionProfile}
                    </li>
                    <li>
                        ${musicProfile}
                    </li>
                    <li>
                        ${kicksProfile}
                    </li>
                    `;

    $('.profilePlace').append(finalProfile);
    $('.profileSection').addClass('padIt');
}




//Document ready and app init!
  $(document).ready(function() {
      hipApp.init();
  });