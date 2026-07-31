function calculateAiCost(tokensUsed)
{
if (typeof tokensUsed !== "number" || tokensUsed < 0)
{
    return "Invalid";
}

if (tokensUsed <= 500)
{
    return 0;
}
let w = tokensUsed - 500 ;
let q = Math.floor(w/100);

return q * 5 ;
}
