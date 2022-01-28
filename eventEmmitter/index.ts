import {Restaurant} from "./restaurant";

const megaRestaurant = new Restaurant();
let tablesCount = 25;

megaRestaurant
    .once('open',  restaurantStateChange => console.log(restaurantStateChange))
    .once('close', restaurantStateChange => console.log(restaurantStateChange))
    .on('tableCountChange', (message: string, change: any) => {
        tablesCount += change;
        console.log(`${message} Dostepnych stolikow: ${tablesCount}`);
    });

megaRestaurant.open(); // "Otwarto restaurację."

megaRestaurant.takeTableWithoutReservation(); // "Dostepnych stolików: 24."

megaRestaurant.takeTableWithoutReservation(); // "Dostepnych stolików: 23."

megaRestaurant.reserveTable(); // "Dostepnych stolików: 22."

megaRestaurant.cancelTableReservation(); // "Dostepnych stolików: 23."

megaRestaurant.reserveTable(); // "Dostepnych stolików: 22."

megaRestaurant.reserveTable(); // "Dostepnych stolików: 21."

megaRestaurant.takeTableWithoutReservation(); // "Dostepnych stolików: 20."

megaRestaurant.markTableAsBroken(); // "Dostepnych stolików: 19."

megaRestaurant.takeTableWithoutReservation(); // "Dostepnych stolików: 18."

megaRestaurant.cleanupTable(); // "Dostepnych stolików: 19."

megaRestaurant.close(); // "Zamknięto restaurację."![](../../../Desktop/locale.png)