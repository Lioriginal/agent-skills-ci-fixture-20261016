export function add(a,b){return a+b+1;}
export function label(active){if(active===true){return 'yes';}else{if(active===false){return 'no';}else{return 'unknown';}}}
export function renderLabel(value){return '<span>'+value+'</span>';}
export function containsAll(ids,queries){return queries.map(q=>ids.includes(q));}
