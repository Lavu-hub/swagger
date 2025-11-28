function facto(n)
{
let f=1,i=1;
for(i=1;i<=n;i++)
{
    f=f*i;
}
return f;
}
module.exports={facto};