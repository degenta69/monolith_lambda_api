import { addUserHandler, deleteUserHandler, updateUserHandler, decryptHandler, encryptHandler  } from "handlers";
import { routeEnums } from "models/enums";

/**
 * @module route_container
 * @description
 * Provides a centralized and immutable mapping 
 * between API routes and their corresponding handler functions.
 * This structure ensures clear, maintainable, and efficient routing within the application.
 * Each handler function is associated with a specific route defined in `routeEnums`,
 * facilitating the handling of all api operations.
 */
const route_container = Object.freeze({
  [routeEnums["/test/user/add"]]: addUserHandler,
  [routeEnums["/test/user/delete"]]: deleteUserHandler,
  [routeEnums["/test/user/update"]]: updateUserHandler,
  [routeEnums["/test/decrypt"]]: decryptHandler,
  [routeEnums["/test/encrypt"]]: encryptHandler,
})

export default route_container