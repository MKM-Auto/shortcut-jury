/* Finite, identical drivers; each road cost is evaluated after a unilateral move. */
(function(root){
 function costs(f){const [a,b,c]=f; return [a+c+45,b+c+45,a+b+2*c];}
 function solve(n,open){
  if(!Number.isInteger(n)||n<10||n>100)throw new RangeError('Choose 10–100 integer drivers');
  const routes=open?3:2;
  for(let a=0;a<=n;a++)for(let b=0;b<=n-a;b++){
   const c=n-a-b;if(!open&&c)continue;
   const flow=[a,b,c], times=costs(flow);
   let stable=true;
   for(let i=0;i<routes;i++)if(flow[i])for(let j=0;j<routes;j++)if(i!==j){
    const moved=flow.slice();moved[i]--;moved[j]++;
    if(costs(moved)[j]<times[i])stable=false;
   }
   if(stable)return {flow,times,average:flow.reduce((s,x,i)=>s+x*times[i],0)/n};
  }
  throw new Error('No equilibrium found');
 }
 const api={costs,solve};root.ShortcutJury=api;
 if(typeof module!=='undefined')module.exports=api;
})(globalThis);
