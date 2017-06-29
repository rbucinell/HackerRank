
//[2017-05-24] Challenge #316 [Intermediate] Sydney tourist shopping cart
//https://www.reddit.com/r/dailyprogrammer/comments/6d29om/20170524_challenge_316_intermediate_sydney/

Tours = {
    OH : { Id: "OH", Name: "Opera house Tour", Price: 300.00 },
    BC : { Id: "BC", Name: "Sydney Bridge Climb", Price: 110.00},
    SK : { Id: "SK", Name: "Sydney Sky Tower", Price: 30.00},
}; 

function TourFactory( key ) 
{
    return { Id: Tours[key].Id, Name: Tours[key].Name, Price: Tours[key].Price } ;
}

function Order( tourCodes )
{
    this.tours = [];
    for( var i = 0 ; i < tourCodes.length; i++)
    {
        this.tours.push( TourFactory(tourCodes[i]) );
    }
}
Order.prototype.displayTotal = function()
{
    var str = "";
    for( var i = 0; i < this.tours.length; i ++ )
    {
        str += this.tours[i].Id;
        str += "[" + this.tours[i].Price + "]";
        if( i+1 !== this.tours.length )
             str += ", ";
    }
    str += " = " + this.total();
    return str;
}

Order.prototype.total = function()
{
    var total = 0.0;
    this.tours.forEach( function(e ){ total+= e.Price; });
    return total;
}

Order.prototype.applyPromotion = function( promo )
{
    this.tours = promo( this.tours );
}

function OH_Promotion( tourList )
{    
    oh_count = 0;
    for( var i = 0; i < tourList.length; i++ )
    {
        if( tourList[i].Id === Tours.OH.Id)
        {
            oh_count++;
            if( oh_count % 3 == 0 && oh_count > 0)
                tourList[i].Price = 0;
        }
    }
    return tourList;
}

function SK_Promotion( tourList )
{
    var oh_count =  0;
    tourList.forEach(function(e){ if( e.Id === Tours.OH.Id) oh_count++; });

    for( var i = 0; i < tourList.length; i++ )
    {
        if( tourList[i].Id === Tours.SK.Id && oh_count > 0 )
        {
            oh_count--;
            tourList[i].Price = 0;
        }
    }
    return tourList;
}

function BC_Promotion( tourList )
{
    var bc_count = 0;
    tourList.forEach(function(e){ if( e.Id === Tours.BC.Id) bc_count++; });

    if( bc_count >= 4 )
        for( var i = 0; i < tourList.length; i++ )
            if( tourList[i].Id === Tours.BC.Id )
                tourList[i].Price -= 20.00;
    return tourList;
}

function ProcessOrder( input )
{
    var order = new Order( input.split(" ") );
    order.applyPromotion( OH_Promotion );
    order.applyPromotion( SK_Promotion );
    order.applyPromotion( BC_Promotion );
    console.log( order.displayTotal() );
}

console.log( "Items\t\t\t\t\t\t\tTotal")
ProcessOrder("OH OH OH BC SK");
ProcessOrder("OH BC BC SK SK");
ProcessOrder("BC BC BC BC BC BC OH OH");
ProcessOrder("SK SK BC");

ProcessOrder("OH OH OH SK SK SK");