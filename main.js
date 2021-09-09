

$(document).ready(function(){
    const galleryContainer = $("#gallery-container");
    
    $(galleryImages).map(function(index){
        const image = galleryImages[index];
        
        if(index % 3 == 0){
            galleryContainer.append('<div class="row"></div>');
        }

        $('#gallery-container div:last-child')
            .append('<div class="col"><img src="./images/'+image+'" /></div>');


    });
});


/* function doSomething(thing){
    console.log(thing);
}

function myFunction(func){
    func('lough');
}

myFunction(doSomething); */