// a type is depends on another type
type a1 = string;
type a2 = a1 extends string ? string : null;

// nested conditional type
type a3 = undefined;
type a4 = number;

type d = a1 extends null
  ? null
  : a3 extends number
  ? number
  : a4 extends number
  ? number
  : any;

type sheik = {
  wife1: string;
  wife2: string;
};

// check korbe aey sheikh type a wife1 ase kina ? true : false
//type checkProperty<T> = T extends {wife1:string} ? true : false;
type checkProperty<T, K> = K extends keyof T ? true : false;
type checkWife1 = checkProperty<sheik, 'wife1'>;


// Mathah karap example

type bandubi = 'Monika' | 'Rafiya' | 'Sara' | 'Urmi'

// remove a bandubi from the upper type declared
type removeBandubi<T, P> = T extends P ? never : T

type currentBandubi = removeBandubi<bandubi, 'Monika'>
1