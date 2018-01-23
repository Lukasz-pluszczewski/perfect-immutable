declare module 'perfect-immutable' {
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

    export const splice: ImmutableSplice;
    export const pop: ImmutablePop;
    export const push: ImmutablePush;
    export const immutableDelete: ImmutableDelete;
    export const shift: ImmutableShift;
    export const unshift: ImmutableUnshift;
    export const sort: ImmutableSort;
    export const reverse: ImmutableReverse;
}
