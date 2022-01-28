
export enum RestaurantEventName {
    TableCountChange = 'tableCountChange',
    Open = 'open',
    Close = 'close',
}

export type RestaurantEvent = (eventName: string, ...args: any[]) => boolean;
export type RestaurantTableCountChangeEvent =
    (eventName: RestaurantEventName.TableCountChange, description: string, incDec: number) => boolean;
export type RestaurantTableCountChangeCallback = (description: string, incDec: number) => void;
