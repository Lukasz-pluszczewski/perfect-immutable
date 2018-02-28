declare module 'perfect-immutable' {
    type ImmutableSetReturnFromPathString<V> = {
        [x: string]: V
    };
    type ImmutableSetReturnFromPathObject<P> = {
        [K in keyof P]: P[K];
    }
    interface ImmutableSetTransformFunction<T> {
        (item: T): T
    }

    interface ImmutableSet {
        <T>(target: T[], path: number, value: T, setFunction?: boolean): T[]
        <T>(target: T[], path: number, value: ImmutableSetTransformFunction<T>, setFunction?: boolean): T[]

        <T, V>(target: T, path: string, value: V, setFunction?: boolean): T & ImmutableSetReturnFromPathString<V>
        <T, V>(target: T, path: string, value: ImmutableSetTransformFunction<T, V>, setFunction?: boolean): T & ImmutableSetReturnFromPathString<V>

        <T, P>(target: T, path: P, value?: any, setFunction?: boolean): T & ImmutableSetReturnFromPathObject<P>
    }
    interface ImmutableSplice {
        <T>(arr: T[], start: number, deleteCount: number, ...items: T[]): T[];
    }
    interface ImmutablePush {
        <T>(arr: T[], newEntries: T[]): T[];
    }
    interface ImmutablePop {
        <T>(arr: T[]): T[];
    }
    interface ImmutableShift {
        <T>(arr: T[]): T[];
    }
    interface ImmutableUnshift {
        <T>(arr: T[]): T[];
    }
    interface ImmutableSort {
        <T>(arr: T[], compareFunction?: (a: T, b: T) => number): T[]
    }
    interface ImmutableReverse {
        <T>(arr: T[]): T[];
    }
    interface ImmutableDelete {
        <T>(arr: T[], index: number): T[];
        <T>(obj: T, key: keyof T): Partial<T>;
    }

    export const set: ImmutableSet;
    export const splice: ImmutableSplice;
    export const pop: ImmutablePop;
    export const push: ImmutablePush;
    export const immutableDelete: ImmutableDelete;
    export const shift: ImmutableShift;
    export const unshift: ImmutableUnshift;
    export const sort: ImmutableSort;
    export const reverse: ImmutableReverse;
}
