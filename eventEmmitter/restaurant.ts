import {EventEmitter} from "events";

export class Restaurant extends EventEmitter {

    // Otwarcie restauracji.

    open() {
        this.emit('open', 'Opening of the restaurant.');
    }

    // Zamknięcie restauracji
    close() {
        this.emit('close', 'Closing of the restaurant.', 'Zamknięcie restauracji.');
    }

    // Stolik został zarezerowany na teraz.
    // Traktuj to jako po prostu 1 stolik mniej.
    reserveTable() {
        this.emit('tableCountChange', 'A table has been reserved for now.', -1);
    }

    // Odwołano rezerwację na stolik.
    // Traktuj to jako po prostu 1 stolik więcej.
    cancelTableReservation() {
        this.emit('tableCountChange', 'Reservation for a table canceled.', +1);
    }

    // Ktoś wziął stolik bez rezerwacji.
    takeTableWithoutReservation() {
        this.emit('tableCountChange', 'Someone took a table without reservation.', -1);
    }

    // Stolik się popsuł, odpadła noga :/

    markTableAsBroken() {
        this.emit('tableCountChange', 'The table broke, the leg fell off :/', -1);
    }

    // Ktoś skończył jeść, czyścimy stolik i wraca do użytku.

    cleanupTable() {
        this.emit('tableCountChange', 'Someone has finished eating, we clean the table and it\'s back to use.', +1);
    }
}
