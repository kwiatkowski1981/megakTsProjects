import {Restaurant} from "./restaurant";
import {RestaurantEventName, RestaurantTableCountChangeCallback} from "./types/table-events";

const megaRestaurant = new Restaurant();
let tablesCount: number = 25;

megaRestaurant
    .once(RestaurantEventName.Open,  restaurantStateChange => console.log(restaurantStateChange))
    .once(RestaurantEventName.Close, restaurantStateChange => console.log(restaurantStateChange))
    .on(RestaurantEventName.TableCountChange, ((message, change) => {
        tablesCount += change;
        console.log(`${message} Dostepnych stolikow: ${tablesCount}`);
    })as RestaurantTableCountChangeCallback);

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