function topRatedRestaurant(restaurants) 
{
    if (Array.isArray(restaurants) === false || restaurants.length === 0)
    {
        return "Invalid";
    }
let e = restaurants[0];
// ei jayga w diya na korle o hobe loop modhe eiabe niche dekh 
//for (let i = 0 ; i < restaurants.length ; i = i + 1 ) eivabe korle o hobe age de. na korel hobe 
let w = restaurants.length;
for (let i = 0 ; i < w; i++)
{
    if (restaurants[i].rating > e.rating)
    {
        e = restaurants[i];
    }
}
return e.name.toUpperCase();

}