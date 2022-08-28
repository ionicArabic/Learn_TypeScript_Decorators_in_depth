const world = 'Hellow world';

export function hello(who: string = world): string {
  return `Hello ${who}! `;
}

//npx tsc -w  
