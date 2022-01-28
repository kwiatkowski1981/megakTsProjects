import {EventEmitter} from "events";
import {RestaurantEvent, RestaurantEventName, RestaurantTableCountChangeEvent} from "./types/table-events";

export class Restaurant extends EventEmitter {

    // Otwarcie restauracji.

    private changeTableCount(description: string, incDec: number) {
        (this.emit as RestaurantTableCountChangeEvent)(RestaurantEventName.TableCountChange, description, incDec);
    }

    open() {
        (this.emit as RestaurantEvent)(RestaurantEventName.Open, 'Opening of the restaurant.');
    }

    // Zamknięcie restauracji
    close() {
        (this.emit as RestaurantEvent)(RestaurantEventName.Close, 'Closing of the restaurant.', 'Zamknięcie restauracji.');
    }

    // Stolik został zarezerowany na teraz.
    // Traktuj to jako po prostu 1 stolik mniej.
    reserveTable() {
        this.changeTableCount( 'A table has been reserved for now.', -1);
    }

    // Odwołano rezerwację na stolik.
    // Traktuj to jako po prostu 1 stolik więcej.
    cancelTableReservation() {
        this.changeTableCount( 'Reservation for a table canceled.', +1);
    }

    // Ktoś wziął stolik bez rezerwacji.
    takeTableWithoutReservation() {
        this.changeTableCount( 'Someone took a table without reservation.', -1);
    }

    // Stolik się popsuł, odpadła noga :/

    markTableAsBroken() {
        this.changeTableCount( 'The table broke, the leg fell off :/', -1);
    }

    // Ktoś skończył jeść, czyścimy stolik i wraca do użytku.

    cleanupTable() {
        this.changeTableCount( 'Someone has finished eating, we clean the table and it\'s back to use.', +1);
    }
}
