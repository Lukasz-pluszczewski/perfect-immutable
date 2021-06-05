export const set: (target: any, argPath: string | number | object, value?: any, setFunction?: boolean) => any;
export const splice: (arr: any, start: number, deleteCount: number, ...items: any) => any;
export const push: (arr: any, ...newEntries: any) => any;
export const pop: (arr: any) => any;
export const shift: (arr: any) => any;
export const unshift: (arr: any, ...newEntries: any) => any;
export const sort: (arr: any, compareFunction: Function) => any;
export const reverse: (arr: any) => any;
export const immutableDelete: (source: any, index: string | number) => any;
export const filter: (source: any, predicate: Function) => any;
export const fp: {
    set: (path: any, value: any, setFunction: any) => (target: any) => any;
    splice: (start: any, deleteCount: any, ...items: any[]) => (arr: any) => any;
    push: (...newEntries: any[]) => (arr: any) => any;
    pop: any;
    shift: any;
    unshift: (...newEntries: any[]) => (arr: any) => any;
    sort: any;
    reverse: any;
    immutableDelete: any;
    filter: any;
    placeholder: any;
};
declare namespace _default {
    export { set };
    export { splice };
    export { push };
    export { pop };
    export { shift };
    export { unshift };
    export { sort };
    export { reverse };
    export { immutableDelete };
    export { filter };
    export { fp };
}
export default _default;
