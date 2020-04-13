var i=0;

var arr=["https://pluspng.com/img-png/instagram-png-instagram-png-logo-1455.png",
    "https://purepng.com/public/uploads/large/tik-tok-logo-6fh.png",
    "https://cdn3.iconfinder.com/data/icons/social-media-logos-flat-colorful/2048/5337_-_Snapchat-512.png",
    "https://pngimg.com/uploads/pinterest/pinterest_PNG63.png",
    "https://i.pinimg.com/originals/ba/8f/3f/ba8f3f5c0a9a72b7bec20ec6dd2d11d8.png",
    "https://www.freepnglogos.com/uploads/spotify-logo-png/image-gallery-spotify-logo-21.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Flipboard_logo.svg/512px-Flipboard_logo.svg.png",
    "https://pngimg.com/uploads/facebook_logos/facebook_logos_PNG19759.png",
    "https://pngimg.com/uploads/twitter/twitter_PNG3.png",
    "https://purepng.com/public/uploads/medium/purepng.com-circled-telegram-logologosiconsflat-designcircled-logoscircled-iconsiconflatminimalistlogo-design-311519936355fllvh.png"
        ]

var answers={0:"instagram",
            2:"tiktok",
            3:"snapchat",
            4:"pinterest",
            5:"starmate",
            6:"spotify",
            7:"flipboard",
            8:"facebook",
            9:"twitter",
            10:"telegram"
        }   
score=0;

function fun(){
    
        if(i>=arr.length)
            i=0;

        document.getElementById("root").src=arr[i]; 
                        
            

    var x=document.getElementById("ans").value;
    
        if(x==answers[i]){
            score++;      
            
        }
        i++;

}


function display(){
    
    
    location.href="end.html?s="+score;
    
}
