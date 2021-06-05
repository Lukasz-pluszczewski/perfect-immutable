export function set(path: any, value: any, setFunction: any): (target: any) => any;
export function splice(start: any, deleteCount: any, ...items: any[]): (arr: any) => any;
export function push(...newEntries: any[]): (arr: any) => any;
export const pop: any;
export const shift: any;
export function unshift(...newEntries: any[]): (arr: any) => any;
export const sort: any;
export const reverse: any;
export const immutableDelete: any;
export const filter: any;
export const placeholder: any;
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
    export { placeholder };
}
export default _default;
