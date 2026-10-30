/** Norway market price matching (2026-10-30). Keys are CJ product ids (pid).
 * PRICE_OVERRIDE: regular NOK price aligned to the Norwegian market, never below the profit floor.
 * HIDDEN: profit floor is above the Norwegian market price -> product is hidden (not deleted). */
export const PRICE_OVERRIDE: Record<string, number> = {"1379993362186244096": 599, "7D8D52F7-6815-4FCC-AE7B-18BD84060A29": 409};
export const HIDDEN = new Set<string>(["11963239-AD02-494F-AB19-6467BAE276E5"]);
